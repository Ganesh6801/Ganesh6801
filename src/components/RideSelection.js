import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Divider,
  CircularProgress,
} from '@mui/material';
import {
  ArrowBack,
  DirectionsCar,
  Motorcycle,
  LocalTaxi,
  AccessTime,
  Person,
  Star,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const RideSelection = ({ pickup, drop, onRideSelect, onBack }) => {
  const [selectedRide, setSelectedRide] = useState(null);
  const [loading, setLoading] = useState(true);

  const rideOptions = [
    {
      id: 'auto',
      name: 'Ola Auto',
      icon: <Motorcycle sx={{ fontSize: 30 }} />,
      price: '₹45',
      originalPrice: '₹55',
      time: '2 mins',
      capacity: '3 people',
      description: 'Affordable rides on auto-rickshaws',
      color: '#4CAF50',
      savings: '₹10 off',
      rating: 4.2,
    },
    {
      id: 'mini',
      name: 'Ola Mini',
      icon: <DirectionsCar sx={{ fontSize: 30 }} />,
      price: '₹85',
      originalPrice: '₹95',
      time: '3 mins',
      capacity: '4 people',
      description: 'Compact cars for short trips',
      color: '#FF9800',
      savings: '₹10 off',
      rating: 4.5,
    },
    {
      id: 'prime',
      name: 'Ola Prime',
      icon: <LocalTaxi sx={{ fontSize: 30 }} />,
      price: '₹125',
      originalPrice: '₹140',
      time: '4 mins',
      capacity: '4 people',
      description: 'Spacious sedans with experienced drivers',
      color: '#2196F3',
      savings: '₹15 off',
      rating: 4.7,
      popular: true,
    },
    {
      id: 'prime_plus',
      name: 'Ola Prime+',
      icon: <LocalTaxi sx={{ fontSize: 30 }} />,
      price: '₹165',
      originalPrice: '₹185',
      time: '5 mins',
      capacity: '4 people',
      description: 'Premium cars with top-rated drivers',
      color: '#9C27B0',
      savings: '₹20 off',
      rating: 4.8,
    },
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRideSelect = (ride) => {
    setSelectedRide(ride);
  };

  const handleConfirm = () => {
    if (selectedRide) {
      onRideSelect(selectedRide);
    }
  };

  if (loading) {
    return (
      <Card sx={{ height: '100%', borderRadius: { xs: '16px 16px 0 0', md: '0' } }}>
        <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <CircularProgress sx={{ color: '#FFD700', mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 1 }}>Finding rides...</Typography>
          <Typography variant="body2" color="text.secondary">
            Searching for the best options near you
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%', borderRadius: { xs: '16px 16px 0 0', md: '0' } }}>
      <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ p: 3, pb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={onBack}>
            <ArrowBack />
          </IconButton>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Choose a Ride
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pickup} → {drop}
            </Typography>
          </Box>
        </Box>

        {/* Ride Options */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <List sx={{ px: 2 }}>
            {rideOptions.map((ride, index) => (
              <motion.div
                key={ride.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => handleRideSelect(ride)}
                    selected={selectedRide?.id === ride.id}
                    sx={{
                      borderRadius: 2,
                      border: selectedRide?.id === ride.id ? `2px solid ${ride.color}` : '1px solid #e0e0e0',
                      mb: 1,
                      position: 'relative',
                      '&.Mui-selected': {
                        backgroundColor: `${ride.color}08`,
                      },
                    }}
                  >
                    {ride.popular && (
                      <Chip
                        label="Most Popular"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: -8,
                          right: 8,
                          bgcolor: '#FF5722',
                          color: 'white',
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                    
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: ride.color, width: 50, height: 50 }}>
                        {ride.icon}
                      </Avatar>
                    </ListItemAvatar>
                    
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {ride.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Star sx={{ fontSize: 16, color: '#FFD700' }} />
                            <Typography variant="caption" color="text.secondary">
                              {ride.rating}
                            </Typography>
                          </Box>
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {ride.description}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <AccessTime sx={{ fontSize: 16 }} />
                              <Typography variant="caption">{ride.time}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <Person sx={{ fontSize: 16 }} />
                              <Typography variant="caption">{ride.capacity}</Typography>
                            </Box>
                            {ride.savings && (
                              <Chip
                                label={ride.savings}
                                size="small"
                                color="success"
                                sx={{ fontSize: '0.7rem' }}
                              />
                            )}
                          </Box>
                        </Box>
                      }
                    />
                    
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: ride.color }}>
                        {ride.price}
                      </Typography>
                      {ride.originalPrice && (
                        <Typography
                          variant="caption"
                          sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                        >
                          {ride.originalPrice}
                        </Typography>
                      )}
                    </Box>
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>

        <Divider />

        {/* Footer */}
        <Box sx={{ p: 3 }}>
          {selectedRide && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>{selectedRide.name}</strong> • {selectedRide.time} away
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total: <strong>{selectedRide.price}</strong>
                  {selectedRide.originalPrice && (
                    <span style={{ textDecoration: 'line-through', marginLeft: 8 }}>
                      {selectedRide.originalPrice}
                    </span>
                  )}
                </Typography>
              </Box>
            </motion.div>
          )}
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleConfirm}
              disabled={!selectedRide}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                background: selectedRide ? `linear-gradient(45deg, ${selectedRide.color} 30%, ${selectedRide.color}CC 90%)` : undefined,
              }}
            >
              {selectedRide ? `Book ${selectedRide.name}` : 'Select a Ride'}
            </Button>
          </motion.div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RideSelection;