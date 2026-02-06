/* Basic state */
const state = {
  activeField: "pickup", // which input is being set via map clicks
  pickup: null, // { lat, lng, label }
  drop: null,   // { lat, lng, label }
  selectedRide: null, // 'economy' | 'sedan' | 'xl'
};

/* Fare model */
const ridePricing = {
  economy: { name: "Economy", base: 35, perKm: 12, perMin: 1.5 },
  sedan: { name: "Sedan", base: 45, perKm: 16, perMin: 2 },
  xl: { name: "XL", base: 60, perKm: 22, perMin: 2.5 },
};

/* DOM */
const pickupInput = document.getElementById("pickupInput");
const dropInput = document.getElementById("dropInput");
const pickupSuggest = document.getElementById("pickupSuggest");
const dropSuggest = document.getElementById("dropSuggest");
const passengersSelect = document.getElementById("passengers");
const distanceDisplay = document.getElementById("distanceDisplay");
const timeDisplay = document.getElementById("timeDisplay");
const confirmBtn = document.getElementById("confirmBtn");
const rideNowBtn = document.getElementById("rideNowBtn");
const scheduleBtn = document.getElementById("scheduleBtn");
const scheduleTime = document.getElementById("scheduleTime");
const themeToggle = document.getElementById("themeToggle");

const fareLabels = {
  economy: document.getElementById("fare-economy"),
  sedan: document.getElementById("fare-sedan"),
  xl: document.getElementById("fare-xl"),
};

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const okRide = document.getElementById("okRide");
const cancelRide = document.getElementById("cancelRide");
const summaryPickup = document.getElementById("summaryPickup");
const summaryDrop = document.getElementById("summaryDrop");
const summaryRide = document.getElementById("summaryRide");
const summaryFare = document.getElementById("summaryFare");
const driverEta = document.getElementById("driverEta");

/* Map setup */
let map, pickupMarker, dropMarker;

document.addEventListener("DOMContentLoaded", () => {
  map = L.map("map", { zoomControl: true }).setView([12.9716, 77.5946], 12); // Bengaluru default

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  map.on("click", (e) => {
    setPointFromMapClick(e.latlng.lat, e.latlng.lng);
  });

  // Inputs focus toggles active field
  pickupInput.addEventListener("focus", () => state.activeField = "pickup");
  dropInput.addEventListener("focus", () => state.activeField = "drop");

  // Autocomplete typing
  setupAutocomplete(pickupInput, pickupSuggest, (place) => setPickup(place));
  setupAutocomplete(dropInput, dropSuggest, (place) => setDrop(place));

  // Current location
  document.getElementById("useMyLocation").addEventListener("click", useMyLocation);

  // Ride selection
  document.querySelectorAll(".ride-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".ride-option").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedRide = btn.dataset.type;
      syncUI();
    });
  });

  // Confirm booking
  confirmBtn.addEventListener("click", confirmBooking);
  closeModal.addEventListener("click", hideModal);
  okRide.addEventListener("click", hideModal);
  cancelRide.addEventListener("click", () => { hideModal(); alert("Ride cancelled."); });

  // Ride now vs schedule
  rideNowBtn.addEventListener("click", () => toggleSchedule(false));
  scheduleBtn.addEventListener("click", () => toggleSchedule(true));

  themeToggle.addEventListener("click", toggleTheme);

  // Initial UI
  updateFareLabels();
  syncUI();
});

function toggleTheme() {
  document.documentElement.classList.toggle("light");
}

function toggleSchedule(isSchedule) {
  rideNowBtn.classList.toggle("active", !isSchedule);
  scheduleBtn.classList.toggle("active", isSchedule);
  scheduleTime.classList.toggle("hidden", !isSchedule);
}

function setPointFromMapClick(lat, lng) {
  const label = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  const place = { lat, lng, label };
  if (state.activeField === "pickup") setPickup(place); else setDrop(place);
}

function setPickup(place) {
  state.pickup = place;
  pickupInput.value = place.label;
  if (!pickupMarker) {
    pickupMarker = L.marker([place.lat, place.lng], { icon: iconPickup() }).addTo(map);
  } else {
    pickupMarker.setLatLng([place.lat, place.lng]);
  }
  fitBoundsIfBoth();
  syncUI();
}

function setDrop(place) {
  state.drop = place;
  dropInput.value = place.label;
  if (!dropMarker) {
    dropMarker = L.marker([place.lat, place.lng], { icon: iconDrop() }).addTo(map);
  } else {
    dropMarker.setLatLng([place.lat, place.lng]);
  }
  fitBoundsIfBoth();
  syncUI();
}

function fitBoundsIfBoth() {
  if (state.pickup && state.drop) {
    const bounds = L.latLngBounds(
      [state.pickup.lat, state.pickup.lng],
      [state.drop.lat, state.drop.lng]
    );
    map.fitBounds(bounds, { padding: [40, 40] });
  } else if (state.pickup) {
    map.setView([state.pickup.lat, state.pickup.lng], 14);
  } else if (state.drop) {
    map.setView([state.drop.lat, state.drop.lng], 14);
  }
}

function iconPickup() {
  return L.divIcon({
    className: "", html: `<div style="transform: translate(-50%, -100%);"><i class='fa-solid fa-circle-dot' style='color:#38bdf8;font-size:22px;'></i></div>`
  });
}
function iconDrop() {
  return L.divIcon({
    className: "", html: `<div style="transform: translate(-50%, -100%);"><i class='fa-solid fa-location-dot' style='color:#f43f5e;font-size:22px;'></i></div>`
  });
}

/* Autocomplete via Nominatim */
function setupAutocomplete(inputEl, suggestEl, onSelect) {
  let debounceTimer;
  inputEl.addEventListener("input", () => {
    const q = inputEl.value.trim();
    if (debounceTimer) clearTimeout(debounceTimer);
    if (!q) { clearSuggest(suggestEl); return; }
    debounceTimer = setTimeout(async () => {
      const items = await geocode(q);
      renderSuggestions(suggestEl, items, onSelect);
    }, 250);
  });
}

function clearSuggest(suggestEl) {
  suggestEl.innerHTML = "";
}

function renderSuggestions(suggestEl, items, onSelect) {
  if (!items || items.length === 0) { suggestEl.innerHTML = ""; return; }
  const list = document.createElement("div");
  list.className = "list";
  items.slice(0, 6).forEach((it) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = it.display_name;
    div.addEventListener("click", () => {
      onSelect({ lat: Number(it.lat), lng: Number(it.lon), label: it.display_name });
      suggestEl.innerHTML = "";
    });
    list.appendChild(div);
  });
  suggestEl.innerHTML = "";
  suggestEl.appendChild(list);
}

async function geocode(query) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
    const res = await fetch(url, { headers: { "Accept-Language": "en" } });
    if (!res.ok) throw new Error("Geocoding failed");
    return await res.json();
  } catch (e) {
    console.warn(e);
    return [];
  }
}

/* Current location */
function useMyLocation() {
  if (!navigator.geolocation) { alert("Geolocation not supported"); return; }
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    setPickup({ lat: latitude, lng: longitude, label: "Current location" });
  }, (err) => {
    console.warn(err);
    alert("Unable to get current location");
  }, { enableHighAccuracy: true, timeout: 8000 });
}

/* Distance + fare */
function computeDistanceKm(a, b) {
  const toRad = (x) => x * Math.PI / 180;
  const R = 6371; // km
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const sinDLat = Math.sin(dLat/2);
  const sinDLon = Math.sin(dLon/2);
  const h = sinDLat*sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon*sinDLon;
  const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1-h));
  return R * c;
}

function estimateTimeMinutes(distanceKm) {
  const avgSpeedKmph = 26; // urban average
  return Math.max(4, Math.round((distanceKm / avgSpeedKmph) * 60));
}

function estimateFare(distanceKm, minutes, rideType) {
  const p = ridePricing[rideType];
  if (!p) return 0;
  const fare = p.base + p.perKm * distanceKm + p.perMin * minutes;
  // Apply minimal fare policy per type
  const minFare = Math.max(p.base + 10, 55);
  return Math.max(minFare, Math.round(fare));
}

function updateFareLabels() {
  const { pickup, drop } = state;
  if (!pickup || !drop) {
    fareLabels.economy.textContent = "-";
    fareLabels.sedan.textContent = "-";
    fareLabels.xl.textContent = "-";
    distanceDisplay.textContent = "-";
    timeDisplay.textContent = "-";
    return;
  }
  const distKm = computeDistanceKm(pickup, drop);
  const mins = estimateTimeMinutes(distKm);
  distanceDisplay.textContent = `${distKm.toFixed(1)} km`;
  timeDisplay.textContent = `${mins} min`;
  fareLabels.economy.textContent = `₹ ${estimateFare(distKm, mins, 'economy')}`;
  fareLabels.sedan.textContent = `₹ ${estimateFare(distKm, mins, 'sedan')}`;
  fareLabels.xl.textContent = `₹ ${estimateFare(distKm, mins, 'xl')}`;
}

function syncUI() {
  const bothSet = Boolean(state.pickup && state.drop);
  updateFareLabels();
  confirmBtn.disabled = !(bothSet && state.selectedRide);
}

/* Booking modal */
function confirmBooking() {
  if (!state.selectedRide || !state.pickup || !state.drop) return;
  const { pickup, drop, selectedRide } = state;
  const distKm = computeDistanceKm(pickup, drop);
  const mins = estimateTimeMinutes(distKm);
  const fare = estimateFare(distKm, mins, selectedRide);

  summaryPickup.textContent = pickup.label;
  summaryDrop.textContent = drop.label;
  summaryRide.textContent = ridePricing[selectedRide].name;
  summaryFare.textContent = `₹ ${fare}`;
  driverEta.textContent = `${Math.max(3, Math.round(Math.random()*5 + 3))} min`;
  showModal();
}

function showModal() {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}
function hideModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}