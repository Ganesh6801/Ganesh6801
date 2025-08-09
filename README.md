# 🚗 Ola Ride Booking Application

A modern, responsive web application for ride booking inspired by Ola. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Ride Booking Flow**: Complete booking process with location selection and ride options
- **User Dashboard**: Personalized home page with stats and quick actions
- **Ride History**: Track past rides with detailed information
- **User Profile**: Manage account settings, saved places, and payment methods
- **Mobile-First Design**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and transitions using Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ola-ride-booking-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Application Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── RideCard.tsx     # Ride option cards
│   └── LocationInput.tsx # Location input with autocomplete
├── pages/              # Application pages
│   ├── HomePage.tsx     # Dashboard with stats and quick actions
│   ├── BookingPage.tsx  # Main booking flow
│   ├── RideHistory.tsx  # Past rides and trip history
│   └── ProfilePage.tsx  # User profile and settings
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Color Scheme**: Primary blue theme with complementary colors
- **Typography**: Inter font family for modern readability
- **Components**: Consistent card-based design with shadows and hover effects
- **Animations**: Smooth page transitions and micro-interactions
- **Responsive**: Mobile-first approach with breakpoint-specific layouts

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    900: '#0c4a6e',
  }
}
```

### Components
All components are built with Tailwind CSS classes and can be easily customized by modifying the className props.

## 📄 Pages Overview

### Home Page
- Welcome message with user stats
- Quick action cards for common tasks
- Recent activity feed
- Safety features showcase

### Booking Page
- Multi-step booking process
- Location input with autocomplete
- Ride type selection with pricing
- Booking confirmation

### Ride History
- List of past rides with details
- Ride statistics and analytics
- Action buttons for each ride

### Profile Page
- User information and avatar
- Saved places management
- Settings and preferences
- Payment methods

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from Ola's mobile application
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Note**: This is a demo application for educational purposes. It does not include actual ride booking functionality or real-time data.
