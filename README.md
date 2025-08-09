# Ola Ride Booking App 🚗

A modern, responsive ride booking application built with React, featuring a beautiful user interface inspired by Ola's design language.

## Features ✨

- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Interactive Map**: Real-time map integration with route visualization
- **Multiple Ride Types**: Auto, Mini, Prime, and Prime+ options
- **Driver Information**: Detailed driver profiles with ratings and vehicle info
- **Real-time Booking**: Live booking status with progress indicators
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Safety Features**: GPS tracking, emergency SOS, and driver verification

## Tech Stack 🛠️

- **React 18** - Frontend framework
- **Material-UI (MUI)** - Component library and styling
- **Leaflet** - Interactive maps
- **Framer Motion** - Smooth animations
- **React Leaflet** - React components for Leaflet maps

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ola-ride-booking
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure 📁

```
src/
├── components/
│   ├── Header.js              # App header with branding
│   ├── MapView.js             # Interactive map component
│   ├── BookingPanel.js        # Initial booking form
│   ├── RideSelection.js       # Vehicle type selection
│   └── BookingConfirmation.js # Final booking confirmation
├── styles/
│   └── index.css              # Global styles
├── App.js                     # Main app component
└── index.js                   # App entry point
```

## Features Overview 📱

### 1. Booking Interface
- **Location Input**: Pickup and drop location selection
- **Quick Options**: Predefined location shortcuts
- **Ride Scheduling**: Book now or schedule for later
- **Booking Type**: Book for yourself or someone else

### 2. Ride Selection
- **Multiple Options**: Auto, Mini, Prime, and Prime+ vehicles
- **Real-time Pricing**: Dynamic pricing with discounts
- **Driver Ratings**: Star ratings and ride counts
- **ETA Information**: Estimated arrival times
- **Popular Rides**: Highlighted recommended options

### 3. Booking Confirmation
- **Driver Details**: Photo, name, rating, and vehicle info
- **Contact Options**: Call and message functionality
- **Trip Details**: Complete pickup and drop information
- **Fare Breakdown**: Transparent pricing details
- **Safety Features**: Security and tracking options
- **Real-time Updates**: Live booking status

### 4. Map Integration
- **Interactive Map**: Powered by Leaflet/OpenStreetMap
- **Route Visualization**: Pickup to drop route display
- **Custom Markers**: Green pickup and red drop markers
- **Auto-fit Bounds**: Automatically adjusts map view

## Customization 🎨

### Theme Colors
The app uses Ola's signature yellow (`#FFD700`) as the primary color. You can customize colors in `App.js`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Ola yellow
      dark: '#FFC107',
    },
    secondary: {
      main: '#2E7D32', // Green for confirmations
    },
  },
});
```

### Adding New Ride Types
To add new vehicle types, modify the `rideOptions` array in `RideSelection.js`:

```javascript
const rideOptions = [
  {
    id: 'new_ride',
    name: 'New Ride Type',
    icon: <YourIcon />,
    price: '₹XXX',
    // ... other properties
  },
];
```

## Mobile Responsiveness 📱

The app is fully responsive and optimized for mobile devices:
- **Bottom Sheet UI**: Mobile-friendly panel positioning
- **Touch Interactions**: Optimized for touch gestures
- **Responsive Typography**: Scales appropriately across devices
- **Adaptive Layouts**: Desktop sidebar becomes mobile bottom sheet

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing 🤝

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments 🙏

- Design inspired by Ola's mobile application
- Icons from Material-UI Icons
- Maps powered by OpenStreetMap
- Animations by Framer Motion

---

**Note**: This is a demo application for educational purposes. It includes mock data and simulated booking functionality.
