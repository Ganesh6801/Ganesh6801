import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search, Clock } from 'lucide-react'

interface LocationInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  icon?: React.ReactNode
}

const LocationInput = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  icon = <MapPin size={20} className="text-gray-400" />
}: LocationInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  // Mock recent locations
  const recentLocations = [
    'Home - 123 Main Street',
    'Office - Tech Park, Bangalore',
    'Airport - Kempegowda International',
    'Mall - Phoenix MarketCity'
  ]

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className="input-field pl-10 pr-4"
        />
        
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <Search size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Recent locations dropdown */}
      {isFocused && value.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
        >
          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
            Recent Locations
          </div>
          {recentLocations.map((location, index) => (
            <button
              key={index}
              onClick={() => {
                onChange(location)
                setIsFocused(false)
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3"
            >
              <Clock size={16} className="text-gray-400" />
              <span className="text-gray-700">{location}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default LocationInput