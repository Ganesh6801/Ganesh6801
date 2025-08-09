import React from 'react'
import { MapPin, Navigation } from 'lucide-react'

interface Location {
  address: string
  coordinates: { lat: number; lng: number }
}

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

interface RideMapProps {
  pickup: Location | null
  destination: Location | null
  selectedRide: RideOption | null
}

const RideMap: React.FC<RideMapProps> = ({ pickup, destination, selectedRide }) => {
  return (
    <div className="relative h-full">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl overflow-hidden">
        {/* Grid pattern for map effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Road lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-400 opacity-30"></div>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 opacity-30"></div>
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-400 opacity-30"></div>
          <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-gray-400 opacity-30"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-400 opacity-30"></div>
          <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-gray-400 opacity-30"></div>
        </div>

        {/* Pickup Marker */}
        {pickup && (
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium shadow-md whitespace-nowrap">
                Pickup
              </div>
            </div>
          </div>
        )}

        {/* Destination Marker */}
        {destination && (
          <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium shadow-md whitespace-nowrap">
                Destination
              </div>
            </div>
          </div>
        )}

        {/* Route Line */}
        {pickup && destination && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line
              x1="25%"
              y1="25%"
              x2="75%"
              y2="75%"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>
        )}

        {/* Driver Marker (if ride selected) */}
        {selectedRide && (
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium shadow-md whitespace-nowrap">
                Driver
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
          <span className="text-lg">+</span>
        </button>
        <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
          <span className="text-lg">−</span>
        </button>
      </div>

      {/* Map Info */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white rounded-lg shadow-lg p-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Estimated distance:</span>
            <span className="font-semibold">8.5 km</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-600">Estimated time:</span>
            <span className="font-semibold">15-20 min</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RideMap