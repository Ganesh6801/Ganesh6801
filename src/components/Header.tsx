import React from 'react'
import { MapPin, Bell, User } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Ola</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Ride
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Drive
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              More
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <MapPin size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header