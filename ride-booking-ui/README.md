# Ride Booking UI (Ola-like)

A lightweight, self-contained web UI for a ride booking app with:

- Pickup/Drop inputs with autocomplete (OpenStreetMap/Nominatim)
- Interactive map (Leaflet + OSM)
- Ride types with live fare estimates
- Booking confirmation modal

## Quick start

1. Open `index.html` directly in your browser, or serve the folder with a static server.

   - Using Python: `python3 -m http.server 8000` (then open `http://localhost:8000/ride-booking-ui/`)

2. Type pickup and drop locations, select a ride, and confirm.

Notes:
- Geocoding uses the public Nominatim API; results depend on network availability and rate limits.
- This is a demo UI only. No real bookings or payments occur.