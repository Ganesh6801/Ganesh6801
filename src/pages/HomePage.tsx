import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Clock, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Car,
  Navigation
} from 'lucide-react'

const HomePage = () => {
  const quickActions = [
    {
      title: 'Book a Ride',
      description: 'Get a ride now',
      icon: <Car className="w-6 h-6" />,
      color: 'bg-primary-500',
      link: '/book'
    },
    {
      title: 'Ride History',
      description: 'View past rides',
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-green-500',
      link: '/history'
    },
    {
      title: 'Navigation',
      description: 'Find your way',
      icon: <Navigation className="w-6 h-6" />,
      color: 'bg-purple-500',
      link: '/book'
    }
  ]

  const stats = [
    { label: 'Total Rides', value: '47', icon: <Car className="w-5 h-5" /> },
    { label: 'Rating', value: '4.8', icon: <Star className="w-5 h-5" /> },
    { label: 'Saved Places', value: '12', icon: <MapPin className="w-5 h-5" /> },
    { label: 'Ola Money', value: '₹250', icon: <TrendingUp className="w-5 h-5" /> }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, John! 👋
        </h1>
        <p className="text-gray-600">
          Where would you like to go today?
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card text-center"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg mx-auto mb-3">
              <div className="text-primary-600">
                {stat.icon}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="card hover:shadow-xl transition-all duration-200 group"
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {action.title}
              </h3>
              <p className="text-gray-600">{action.description}</p>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="card">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Car className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Ride completed</p>
                <p className="text-sm text-gray-600">Home → Office • ₹120</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">2 hours ago</p>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">5.0</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Location saved</p>
                <p className="text-sm text-gray-600">Phoenix MarketCity</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Safety Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Safety Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">SOS Button</h3>
                <p className="text-sm text-gray-600">Emergency assistance at your fingertips</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Live Tracking</h3>
                <p className="text-sm text-gray-600">Share your ride with loved ones</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomePage