# 🚗 Ola Ride Booking Application

A modern, responsive web application for ride booking inspired by Ola. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Location Input**: Smart location search with autocomplete suggestions
- **Ride Options**: Multiple vehicle types (Auto, Mini, Prime, Bike) with pricing
- **Interactive Map**: Visual representation of pickup and destination points
- **Real-time Booking**: Simulated booking process with loading states
- **Trip Summary**: Detailed breakdown of fare and trip information
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ola-ride-booking-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📱 How to Use

1. **Enter Pickup Location**: Type your pickup address in the first input field
2. **Enter Destination**: Type your destination in the second input field
3. **Choose Ride Type**: Select from available options (Auto, Mini, Prime, Bike)
4. **Review Trip**: Check the trip summary and pricing
5. **Book Ride**: Click "Book Now" to confirm your booking

## 🎨 UI Components

### Header
- Ola branding and logo
- Navigation menu (Ride, Drive, More)
- User actions (Location, Notifications, Profile)

### Location Input
- Smart autocomplete with location suggestions
- Map pin icons for visual clarity
- Search functionality

### Ride Options
- Multiple vehicle types with pricing
- Capacity and arrival time information
- Visual selection indicators

### Interactive Map
- Mock map with pickup and destination markers
- Route visualization
- Driver location (when ride is selected)
- Map controls (zoom in/out)

### Booking Summary
- Trip details and pricing breakdown
- Payment method selection
- Safety information
- Booking confirmation

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface

### Smooth Animations
- Page transitions using Framer Motion
- Loading states and micro-interactions
- Hover effects and visual feedback

### User Experience
- Intuitive navigation flow
- Clear visual hierarchy
- Accessible design patterns
- Error handling and validation

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── RideBooking.tsx      # Main booking interface
│   ├── LocationInput.tsx    # Location search component
│   ├── RideOptions.tsx      # Vehicle selection
│   ├── RideMap.tsx          # Interactive map
│   └── BookingSummary.tsx   # Trip summary and booking
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The application uses a custom color palette defined in `tailwind.config.js`:
- Primary colors (blue shades)
- Secondary colors (gray shades)
- Custom component colors

### Styling
- Custom CSS classes in `src/index.css`
- Component-specific styles in `src/App.css`
- Tailwind utility classes throughout components

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Inspired by Ola's ride booking interface
- Built with modern web technologies
- Designed for optimal user experience

---

**Note**: This is a demo application for educational purposes. It simulates the booking process but doesn't include actual payment processing or real-time driver tracking.
