import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import MapView from './components/MapView';
import BookingPanel from './components/BookingPanel';
import RideSelection from './components/RideSelection';
import BookingConfirmation from './components/BookingConfirmation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Ola's signature yellow
      dark: '#FFC107',
    },
    secondary: {
      main: '#2E7D32', // Green for confirm actions
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

function App() {
  const [currentStep, setCurrentStep] = useState('booking'); // booking, rideSelection, confirmation
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [selectedRide, setSelectedRide] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  const handleLocationSubmit = (pickup, drop) => {
    setPickupLocation(pickup);
    setDropLocation(drop);
    setCurrentStep('rideSelection');
  };

  const handleRideSelect = (ride) => {
    setSelectedRide(ride);
    setCurrentStep('confirmation');
  };

  const handleBookingConfirm = (data) => {
    setBookingData(data);
    // Here you would typically make an API call to book the ride
    console.log('Booking confirmed:', data);
  };

  const handleBack = () => {
    if (currentStep === 'confirmation') {
      setCurrentStep('rideSelection');
    } else if (currentStep === 'rideSelection') {
      setCurrentStep('booking');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ flex: 1, display: 'flex', position: 'relative' }}>
          {/* Map View */}
          <Box sx={{ flex: 1 }}>
            <MapView 
              pickupLocation={pickupLocation}
              dropLocation={dropLocation}
              currentStep={currentStep}
            />
          </Box>
          
          {/* Booking Panel */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: 400 }, 
              position: { xs: 'absolute', md: 'relative' },
              bottom: { xs: 0, md: 'auto' },
              left: { xs: 0, md: 'auto' },
              right: { xs: 0, md: 'auto' },
              zIndex: 1000,
              maxHeight: { xs: '70vh', md: '100%' },
              overflow: 'hidden',
            }}
          >
            {currentStep === 'booking' && (
              <BookingPanel onSubmit={handleLocationSubmit} />
            )}
            {currentStep === 'rideSelection' && (
              <RideSelection 
                pickup={pickupLocation}
                drop={dropLocation}
                onRideSelect={handleRideSelect}
                onBack={handleBack}
              />
            )}
            {currentStep === 'confirmation' && (
              <BookingConfirmation
                pickup={pickupLocation}
                drop={dropLocation}
                selectedRide={selectedRide}
                onConfirm={handleBookingConfirm}
                onBack={handleBack}
              />
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;