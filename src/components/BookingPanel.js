import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Divider,
  Chip,
} from '@mui/material';
import {
  LocationOn,
  MyLocation,
  SwapVert,
  Schedule,
  Person,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const BookingPanel = ({ onSubmit }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [rideFor, setRideFor] = useState('myself');
  const [rideTime, setRideTime] = useState('now');

  const handleSubmit = () => {
    if (pickupLocation.trim() && dropLocation.trim()) {
      onSubmit(pickupLocation.trim(), dropLocation.trim());
    }
  };

  const handleSwapLocations = () => {
    const temp = pickupLocation;
    setPickupLocation(dropLocation);
    setDropLocation(temp);
  };

  const quickPickupOptions = [
    'Current Location',
    'Home',
    'Office',
    'Airport',
  ];

  const quickDropOptions = [
    'Airport',
    'Railway Station',
    'Mall',
    'Hospital',
  ];

  return (
    <Card 
      sx={{ 
        height: '100%',
        borderRadius: { xs: '16px 16px 0 0', md: '0' },
        boxShadow: { xs: '0 -4px 20px rgba(0,0,0,0.1)', md: '0 2px 12px rgba(0,0,0,0.08)' },
      }}
    >
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Book Your Ride
        </Typography>

        {/* Ride For Selection */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Booking for
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              icon={<Person />}
              label="Myself"
              onClick={() => setRideFor('myself')}
              color={rideFor === 'myself' ? 'primary' : 'default'}
              variant={rideFor === 'myself' ? 'filled' : 'outlined'}
            />
            <Chip
              label="Someone Else"
              onClick={() => setRideFor('other')}
              color={rideFor === 'other' ? 'primary' : 'default'}
              variant={rideFor === 'other' ? 'filled' : 'outlined'}
            />
          </Box>
        </Box>

        {/* Location Inputs */}
        <Box sx={{ position: 'relative', mb: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TextField
              fullWidth
              placeholder="Pickup location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <LocationOn sx={{ color: '#4CAF50', mr: 1 }} />
                ),
                endAdornment: (
                  <IconButton size="small">
                    <MyLocation sx={{ fontSize: 20 }} />
                  </IconButton>
                ),
              }}
              sx={{ mb: 1 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TextField
              fullWidth
              placeholder="Where to?"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <LocationOn sx={{ color: '#f44336', mr: 1 }} />
                ),
              }}
            />
          </motion.div>

          {/* Swap Button */}
          <IconButton
            onClick={handleSwapLocations}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 1,
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
            size="small"
          >
            <SwapVert />
          </IconButton>
        </Box>

        {/* Quick Options */}
        {!pickupLocation && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Quick pickup
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {quickPickupOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  size="small"
                  onClick={() => setPickupLocation(option)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Box>
        )}

        {!dropLocation && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Quick destinations
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {quickDropOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  size="small"
                  onClick={() => setDropLocation(option)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Ride Time Selection */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            When do you need the ride?
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              icon={<Schedule />}
              label="Now"
              onClick={() => setRideTime('now')}
              color={rideTime === 'now' ? 'primary' : 'default'}
              variant={rideTime === 'now' ? 'filled' : 'outlined'}
            />
            <Chip
              label="Schedule Later"
              onClick={() => setRideTime('later')}
              color={rideTime === 'later' ? 'primary' : 'default'}
              variant={rideTime === 'later' ? 'filled' : 'outlined'}
            />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box sx={{ mt: 'auto' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={!pickupLocation.trim() || !dropLocation.trim()}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #FFD700 30%, #FFC107 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FFC107 30%, #FF9800 90%)',
                },
              }}
            >
              Find Rides
            </Button>
          </motion.div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookingPanel;