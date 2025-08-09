import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { Box } from '@mui/material';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons
const pickupIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const dropIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapView = ({ pickupLocation, dropLocation, currentStep }) => {
  const mapRef = useRef();
  
  // Default coordinates (Bangalore)
  const defaultCenter = [12.9716, 77.5946];
  
  // Mock coordinates for demonstration
  const pickupCoords = pickupLocation ? [12.9716, 77.5946] : null;
  const dropCoords = dropLocation ? [12.9348, 77.6245] : null;
  
  // Sample route coordinates
  const routeCoordinates = pickupCoords && dropCoords ? [
    pickupCoords,
    [12.9500, 77.6000],
    [12.9400, 77.6100],
    dropCoords
  ] : [];

  useEffect(() => {
    if (mapRef.current && pickupCoords && dropCoords) {
      // Fit map to show both markers
      const group = new L.featureGroup([
        L.marker(pickupCoords),
        L.marker(dropCoords)
      ]);
      mapRef.current.fitBounds(group.getBounds().pad(0.1));
    }
  }, [pickupLocation, dropLocation]);

  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {pickupCoords && (
          <Marker position={pickupCoords} icon={pickupIcon}>
            <Popup>
              <strong>Pickup Location</strong><br />
              {pickupLocation}
            </Popup>
          </Marker>
        )}
        
        {dropCoords && (
          <Marker position={dropCoords} icon={dropIcon}>
            <Popup>
              <strong>Drop Location</strong><br />
              {dropLocation}
            </Popup>
          </Marker>
        )}
        
        {routeCoordinates.length > 0 && (
          <Polyline
            positions={routeCoordinates}
            color="#FFD700"
            weight={4}
            opacity={0.8}
          />
        )}
      </MapContainer>
      
      {/* Floating elements for better UX */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1000,
          display: { xs: 'none', md: 'block' },
        }}
      >
        {/* You can add additional map controls here */}
      </Box>
    </Box>
  );
};

export default MapView;