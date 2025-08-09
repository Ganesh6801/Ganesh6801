import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Star, Car, Users } from 'lucide-react'
import LocationInput from '../components/LocationInput'
import RideCard from '../components/RideCard'

const BookingPage = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [selectedRide, setSelectedRide] = useState<string | null>(null)
  const [bookingStep, setBookingStep] = useState<'location' | 'ride-selection' | 'confirmation'>('location')

  const rideOptions = [
    {
      id: 'mini',
      type: 'Ola Mini',
      price: 120,
      time: '3 mins',
      capacity: 4,
      rating: 4.8,
      image: '/mini-car.png'
    },
    {
      id: 'prime',
      type: 'Ola Prime',
      price: 180,
      time: '5 mins',
      capacity: 4,
      rating: 4.9,
      image: '/prime-car.png'
    },
    {
      id: 'auto',
      type: 'Ola Auto',
      price: 80,
      time: '2 mins',
      capacity: 3,
      rating: 4.7,
      image: '/auto.png'
    },
    {
      id: 'bike',
      type: 'Ola Bike',
      price: 60,
      time: '1 min',
      capacity: 1,
      rating: 4.6,
      image: '/bike.png'
    }
  ]

  const handleLocationSubmit = () => {
    if (pickup && destination) {
      setBookingStep('ride-selection')
    }
  }

  const handleRideSelection = (rideId: string) => {
    setSelectedRide(rideId)
    setBookingStep('confirmation')
  }

  const handleBookRide = () => {
    // Simulate booking process
    alert('Ride booked successfully! Your driver will arrive shortly.')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Ride</h1>
        <p className="text-gray-600">Where would you like to go?</p>
      </motion.div>

      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center space-x-2 ${bookingStep !== 'location' ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              bookingStep !== 'location' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <span className="hidden sm:block">Location</span>
          </div>
          
          <div className={`w-8 h-1 rounded ${bookingStep === 'ride-selection' || bookingStep === 'confirmation' ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
          
          <div className={`flex items-center space-x-2 ${bookingStep === 'ride-selection' || bookingStep === 'confirmation' ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              bookingStep === 'ride-selection' || bookingStep === 'confirmation' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <span className="hidden sm:block">Select Ride</span>
          </div>
          
          <div className={`w-8 h-1 rounded ${bookingStep === 'confirmation' ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
          
          <div className={`flex items-center space-x-2 ${bookingStep === 'confirmation' ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              bookingStep === 'confirmation' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
            <span className="hidden sm:block">Confirm</span>
          </div>
        </div>
      </motion.div>

      {/* Location Selection */}
      {bookingStep === 'location' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card"
        >
          <div className="space-y-6">
            <LocationInput
              label="Pickup Location"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={setPickup}
              icon={<MapPin size={20} className="text-green-500" />}
            />
            
            <LocationInput
              label="Destination"
              placeholder="Where to?"
              value={destination}
              onChange={setDestination}
              icon={<Navigation size={20} className="text-red-500" />}
            />
            
            <button
              onClick={handleLocationSubmit}
              disabled={!pickup || !destination}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}

      {/* Ride Selection */}
      {bookingStep === 'ride-selection' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="card">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">{pickup}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-600">{destination}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Choose your ride</h2>
            {rideOptions.map((ride) => (
              <RideCard
                key={ride.id}
                type={ride.type}
                price={ride.price}
                time={ride.time}
                capacity={ride.capacity}
                rating={ride.rating}
                image={ride.image}
                onClick={() => handleRideSelection(ride.id)}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Confirmation */}
      {bookingStep === 'confirmation' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Ride</h2>
            <p className="text-gray-600">Review your trip details</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">From:</span>
              <span className="font-medium">{pickup}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">To:</span>
              <span className="font-medium">{destination}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Ride Type:</span>
              <span className="font-medium">
                {rideOptions.find(r => r.id === selectedRide)?.type}
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">Estimated Fare:</span>
              <span className="text-2xl font-bold text-primary-600">
                ₹{rideOptions.find(r => r.id === selectedRide)?.price}
              </span>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={handleBookRide}
              className="btn-primary w-full"
            >
              Confirm & Book Ride
            </button>
            <button
              onClick={() => setBookingStep('ride-selection')}
              className="btn-secondary w-full"
            >
              Back to Ride Selection
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default BookingPage