import React from 'react'
import { Users, Clock, Check } from 'lucide-react'

interface RideOption {
  id: string
  name: string
  description: string
  price: number
  time: string
  capacity: number
  icon: string
  color: string
}

interface RideOptionsProps {
  options: RideOption[]
  selectedRide: RideOption | null
  onSelectRide: (ride: RideOption) => void
}

const RideOptions: React.FC<RideOptionsProps> = ({
  options,
  selectedRide,
  onSelectRide
}) => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose your ride</h3>
      
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ride-card-hover ${
              selectedRide?.id === option.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelectRide(option)}
          >
            {/* Selection indicator */}
            {selectedRide?.id === option.id && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            <div className="flex items-center space-x-4">
              {/* Vehicle icon */}
              <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                {option.icon}
              </div>

              {/* Ride details */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900">{option.name}</h4>
                  <span className="font-bold text-lg text-gray-900">₹{option.price}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{option.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{option.capacity} person{option.capacity > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional info */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          💡 Prices are estimates and may vary based on demand and traffic conditions.
        </p>
      </div>
    </div>
  )
}

export default RideOptions