import { motion } from 'framer-motion'
import { Car, MapPin, Clock, Star, Calendar, DollarSign } from 'lucide-react'

const RideHistory = () => {
  const rideHistory = [
    {
      id: 1,
      date: '2024-01-15',
      time: '09:30 AM',
      from: 'Home - 123 Main Street',
      to: 'Office - Tech Park, Bangalore',
      rideType: 'Ola Mini',
      fare: 120,
      rating: 5,
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-01-14',
      time: '06:15 PM',
      from: 'Office - Tech Park, Bangalore',
      to: 'Phoenix MarketCity',
      rideType: 'Ola Prime',
      fare: 180,
      rating: 4,
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-01-13',
      time: '11:45 AM',
      from: 'Phoenix MarketCity',
      to: 'Home - 123 Main Street',
      rideType: 'Ola Auto',
      fare: 80,
      rating: 5,
      status: 'completed'
    },
    {
      id: 4,
      date: '2024-01-12',
      time: '08:20 AM',
      from: 'Home - 123 Main Street',
      to: 'Airport - Kempegowda International',
      rideType: 'Ola Prime',
      fare: 450,
      rating: 5,
      status: 'completed'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      case 'ongoing':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ride History</h1>
        <p className="text-gray-600">Your past trips and rides</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        <div className="card text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3">
            <Car className="w-6 h-6 text-primary-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{rideHistory.length}</p>
          <p className="text-sm text-gray-600">Total Rides</p>
        </div>
        
        <div className="card text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
            <Star className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">4.8</p>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
        
        <div className="card text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            ₹{rideHistory.reduce((sum, ride) => sum + ride.fare, 0)}
          </p>
          <p className="text-sm text-gray-600">Total Spent</p>
        </div>
      </motion.div>

      {/* Ride History List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Rides</h2>
        
        {rideHistory.map((ride, index) => (
          <motion.div
            key={ride.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="card hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{ride.rideType}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar size={14} />
                      <span>{new Date(ride.date).toLocaleDateString()}</span>
                      <Clock size={14} />
                      <span>{ride.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{ride.from}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{ride.to}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="mb-2">
                  <span className="text-2xl font-bold text-primary-600">₹{ride.fare}</span>
                </div>
                <div className="flex items-center justify-end space-x-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{ride.rating}</span>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ride.status)}`}>
                  {ride.status}
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Book Again
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-700">
                  View Details
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-700">
                  Share Trip
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {rideHistory.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Car className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No rides yet</h3>
          <p className="text-gray-600 mb-6">Start your journey by booking your first ride!</p>
          <button className="btn-primary">
            Book Your First Ride
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default RideHistory