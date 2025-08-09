import React from 'react'
import { MapPin, Clock, Users, CreditCard, Shield } from 'lucide-react'

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

interface BookingSummaryProps {
  pickup: Location
  destination: Location
  selectedRide: RideOption
  onBookRide: () => void
  isBooking: boolean
}

const BookingSummary: React.FC<BookingSummaryProps> = ({
  pickup,
  destination,
  selectedRide,
  onBookRide,
  isBooking
}) => {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Trip Summary</h3>
      
      {/* Trip Details */}
      <div className="space-y-4 mb-6">
        {/* Pickup */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <MapPin className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Pickup</p>
            <p className="text-sm text-gray-600 truncate">{pickup.address}</p>
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <MapPin className="w-4 h-4 text-red-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Destination</p>
            <p className="text-sm text-gray-600 truncate">{destination.address}</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 ${selectedRide.color} rounded-full flex items-center justify-center flex-shrink-0`}>
            <span className="text-white text-sm">{selectedRide.icon}</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{selectedRide.name}</p>
            <p className="text-sm text-gray-600">{selectedRide.description}</p>
          </div>
        </div>
      </div>

      {/* Trip Info */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Arrival</p>
              <p className="text-sm font-medium text-gray-900">{selectedRide.time}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Capacity</p>
              <p className="text-sm font-medium text-gray-900">{selectedRide.capacity} person{selectedRide.capacity > 1 ? 's' : ''}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Base fare</span>
            <span className="text-gray-900">₹{selectedRide.price - 10}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Distance charge</span>
            <span className="text-gray-900">₹10</span>
          </div>
          <div className="flex justify-between text-sm font-medium text-lg border-t border-gray-200 pt-2">
            <span>Total</span>
            <span className="text-primary-600">₹{selectedRide.price}</span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="flex items-center space-x-3 mb-6 p-3 bg-blue-50 rounded-lg">
        <CreditCard className="w-5 h-5 text-blue-600" />
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-900">Cash Payment</p>
          <p className="text-xs text-blue-700">Pay directly to your driver</p>
        </div>
      </div>

      {/* Safety Features */}
      <div className="flex items-center space-x-3 mb-6 p-3 bg-green-50 rounded-lg">
        <Shield className="w-5 h-5 text-green-600" />
        <div className="flex-1">
          <p className="text-sm font-medium text-green-900">Safety First</p>
          <p className="text-xs text-green-700">All drivers are verified and insured</p>
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={onBookRide}
        disabled={isBooking}
        className={`w-full btn-primary flex items-center justify-center space-x-2 ${
          isBooking ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {isBooking ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Booking...</span>
          </>
        ) : (
          <span>Book {selectedRide.name} Now</span>
        )}
      </button>

      {/* Terms */}
      <p className="text-xs text-gray-500 text-center mt-4">
        By booking, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  )
}

export default BookingSummary