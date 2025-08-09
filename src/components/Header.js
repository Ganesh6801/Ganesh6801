import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from '@mui/material';
import { Menu as MenuIcon, LocationOn } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        color: 'black',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              color: '#FFD700',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            Ola
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
            <LocationOn sx={{ color: '#666', fontSize: 20 }} />
            <Typography variant="body2" color="text.secondary">
              Current Location
            </Typography>
          </Box>
          <Avatar 
            sx={{ 
              width: 36, 
              height: 36, 
              bgcolor: '#FFD700',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            U
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;