import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
  Divider,
  Chip,
  LinearProgress,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  ArrowBack,
  Phone,
  Message,
  Star,
  LocationOn,
  AccessTime,
  DirectionsCar,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const BookingConfirmation = ({ pickup, drop, selectedRide, onConfirm, onBack }) => {
  const [bookingStatus, setBookingStatus] = useState('searching'); // searching, found, confirmed
  const [progress, setProgress] = useState(0);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Mock driver data
  const driverData = {
    name: 'Rajesh Kumar',
    rating: 4.8,
    totalRides: 1247,
    carModel: 'Maruti Swift Dzire',
    carNumber: 'KA 01 AB 1234',
    phone: '+91 98765 43210',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    eta: '3 mins',
    distance: '0.8 km away',
  };

  useEffect(() => {
    let interval;
    
    if (bookingStatus === 'searching') {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setBookingStatus('found');
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
    
    return () => clearInterval(interval);
  }, [bookingStatus]);

  const handleConfirmBooking = () => {
    setBookingStatus('confirmed');
    setShowSuccessDialog(true);
    onConfirm({
      ride: selectedRide,
      driver: driverData,
      pickup,
      drop,
      bookingId: `OLA${Date.now()}`,
    });
  };

  const handleCloseSuccess = () => {
    setShowSuccessDialog(false);
  };

  if (bookingStatus === 'searching') {
    return (
      <Card sx={{ height: '100%', borderRadius: { xs: '16px 16px 0 0', md: '0' } }}>
        <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <DirectionsCar sx={{ fontSize: 60, color: selectedRide.color, mb: 2 }} />
          </motion.div>
          
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Finding your {selectedRide.name}...
          </Typography>
          
          <Box sx={{ width: '100%', mb: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: selectedRide.color,
                }
              }} 
            />
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Searching for nearby drivers...
          </Typography>
          
          <Button
            variant="outlined"
            onClick={onBack}
            sx={{ mt: 3 }}
          >
            Cancel Search
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card sx={{ height: '100%', borderRadius: { xs: '16px 16px 0 0', md: '0' } }}>
        <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ p: 3, pb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={onBack}>
              <ArrowBack />
            </IconButton>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Confirm Booking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedRide.name} • {selectedRide.price}
              </Typography>
            </Box>
          </Box>

          {/* Driver Info */}
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ px: 3, mb: 3 }}>
                <Card sx={{ p: 2, bgcolor: '#f8f9fa' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar
                      src={driverData.photo}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {driverData.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <Star sx={{ fontSize: 16, color: '#FFD700' }} />
                        <Typography variant="body2">
                          {driverData.rating} • {driverData.totalRides} rides
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {driverData.carModel} • {driverData.carNumber}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <IconButton 
                        sx={{ bgcolor: selectedRide.color, color: 'white', '&:hover': { bgcolor: selectedRide.color } }}
                        size="small"
                      >
                        <Phone sx={{ fontSize: 20 }} />
                      </IconButton>
                      <IconButton 
                        sx={{ bgcolor: '#e0e0e0', '&:hover': { bgcolor: '#d0d0d0' } }}
                        size="small"
                      >
                        <Message sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTime sx={{ fontSize: 16, color: selectedRide.color }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {driverData.eta}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {driverData.distance}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </motion.div>

            {/* Trip Details */}
            <Box sx={{ px: 3, mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Trip Details
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.5 }}>
                  <LocationOn sx={{ fontSize: 20, color: '#4CAF50' }} />
                  <Box sx={{ width: 2, height: 30, bgcolor: '#e0e0e0', my: 0.5 }} />
                  <LocationOn sx={{ fontSize: 20, color: '#f44336' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      Pickup
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {pickup}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Drop
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {drop}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Fare Details */}
            <Box sx={{ px: 3, mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Fare Details
              </Typography>
              
              <Card sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Base Fare</Typography>
                  <Typography variant="body2">₹40</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Distance Fare</Typography>
                  <Typography variant="body2">₹35</Typography>
                </Box>
                {selectedRide.savings && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="success.main">Discount</Typography>
                    <Typography variant="body2" color="success.main">-₹10</Typography>
                  </Box>
                )}
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Total</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: selectedRide.color }}>
                    {selectedRide.price}
                  </Typography>
                </Box>
              </Card>
            </Box>

            {/* Safety Features */}
            <Box sx={{ px: 3, mb: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="GPS Tracking" size="small" color="primary" variant="outlined" />
                <Chip label="Emergency SOS" size="small" color="primary" variant="outlined" />
                <Chip label="Driver Verified" size="small" color="success" variant="outlined" />
              </Box>
            </Box>
          </Box>

          <Divider />

          {/* Footer */}
          <Box sx={{ p: 3 }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleConfirmBooking}
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: `linear-gradient(45deg, ${selectedRide.color} 30%, ${selectedRide.color}CC 90%)`,
                }}
              >
                Confirm Booking
              </Button>
            </motion.div>
          </Box>
        </CardContent>
      </Card>

      {/* Success Dialog */}
      <Dialog
        open={showSuccessDialog}
        onClose={handleCloseSuccess}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent sx={{ textAlign: 'center', py: 4 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <CheckCircle sx={{ fontSize: 80, color: '#4CAF50', mb: 2 }} />
          </motion.div>
          
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Booking Confirmed!
          </Typography>
          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Your {selectedRide.name} has been booked successfully. 
            {driverData.name} will arrive in {driverData.eta}.
          </Typography>
          
          <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2, mb: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Booking ID
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              OLA{Date.now().toString().slice(-6)}
            </Typography>
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleCloseSuccess}
            sx={{
              py: 1.5,
              background: `linear-gradient(45deg, ${selectedRide.color} 30%, ${selectedRide.color}CC 90%)`,
            }}
          >
            Track Your Ride
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookingConfirmation;