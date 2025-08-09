document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const estimateBtn = document.getElementById("estimateBtn");
  const estimateBox = document.getElementById("estimate");
  const bookBtn = document.getElementById("bookBtn");

  // Per-kilometre rates for each vehicle type (for demo purposes)
  const perKmRates = {
    micro: 12,
    mini: 14,
    prime: 18,
    suv: 22,
    auto: 10,
  };

  estimateBtn.addEventListener("click", () => {
    const pickup = document.getElementById("pickup").value.trim();
    const drop = document.getElementById("drop").value.trim();
    const vehicle = document.getElementById("vehicle").value;
    const time = document.getElementById("time").value;

    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations.");
      return;
    }

    // Fake distance for demo purposes: random between 3 – 15 km
    const distance = Math.floor(Math.random() * 13) + 3;
    const fare = distance * perKmRates[vehicle] + 30; // base charge ₹30

    estimateBox.textContent = `Estimated fare for approximately ${distance} km: ₹${fare}`;
    estimateBox.classList.remove("hidden");
    bookBtn.classList.remove("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your ride has been booked! You will receive driver details shortly.");
    form.reset();
    estimateBox.classList.add("hidden");
    bookBtn.classList.add("hidden");
  });
});