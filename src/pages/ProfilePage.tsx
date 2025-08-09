import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Settings, 
  Shield, 
  CreditCard, 
  MapPin, 
  Bell, 
  HelpCircle, 
  LogOut,
  Edit,
  Camera,
  Star,
  Car,
  Calendar
} from 'lucide-react'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'settings' | 'payment'>('profile')

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    rating: 4.8,
    totalRides: 47,
    memberSince: '2023',
    avatar: '/avatar.jpg'
  }

  const savedPlaces = [
    { name: 'Home', address: '123 Main Street, Bangalore', type: 'home' },
    { name: 'Office', address: 'Tech Park, Whitefield, Bangalore', type: 'work' },
    { name: 'Airport', address: 'Kempegowda International Airport', type: 'other' },
    { name: 'Mall', address: 'Phoenix MarketCity, Whitefield', type: 'other' }
  ]

  const settingsOptions = [
    { icon: <Bell size={20} />, title: 'Notifications', description: 'Manage your notification preferences' },
    { icon: <Shield size={20} />, title: 'Privacy & Security', description: 'Control your privacy settings' },
    { icon: <HelpCircle size={20} />, title: 'Help & Support', description: 'Get help and contact support' },
    { icon: <LogOut size={20} />, title: 'Logout', description: 'Sign out of your account' }
  ]

  const paymentMethods = [
    { type: 'card', name: 'HDFC Credit Card', number: '**** **** **** 1234', default: true },
    { type: 'upi', name: 'UPI', number: 'john.doe@okicici', default: false },
    { type: 'wallet', name: 'Ola Money', balance: '₹250', default: false }
  ]

  const getPlaceIcon = (type: string) => {
    switch (type) {
      case 'home':
        return '🏠'
      case 'work':
        return '🏢'
      default:
        return '📍'
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </motion.div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card mb-8"
      >
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-primary-600" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
              <Camera size={16} />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{userProfile.name}</h2>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Edit size={16} />
              </button>
            </div>
            <p className="text-gray-600 mb-2">{userProfile.email}</p>
            <p className="text-gray-600 mb-3">{userProfile.phone}</p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{userProfile.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Car className="w-4 h-4 text-primary-600" />
                <span className="text-sm text-gray-600">{userProfile.totalRides} rides</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-primary-600" />
                <span className="text-sm text-gray-600">Member since {userProfile.memberSince}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'profile', label: 'Profile', icon: <User size={16} /> },
              { id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
              { id: 'payment', label: 'Payment', icon: <CreditCard size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Saved Places */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Places</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedPlaces.map((place, index) => (
                  <div key={index} className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{getPlaceIcon(place.type)}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{place.name}</h4>
                        <p className="text-sm text-gray-600">{place.address}</p>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Edit size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ride Statistics */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ride Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">47</div>
                  <div className="text-sm text-gray-600">Total Rides</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹2,450</div>
                  <div className="text-sm text-gray-600">Total Spent</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">4.8</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-4">
            {settingsOptions.map((option, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{option.title}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                  <div className="text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{method.name}</h4>
                          <p className="text-sm text-gray-600">
                            {method.type === 'wallet' ? method.balance : method.number}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {method.default && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Default
                          </span>
                        )}
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Edit size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-primary">
              Add Payment Method
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default ProfilePage