import React, { useState } from 'react'
import LocationInput from './LocationInput'
import RideOptions from './RideOptions'
import RideMap from './RideMap'
import BookingSummary from './BookingSummary'
import { motion } from 'framer-motion'

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

const RideBooking: React.FC = () => {
  const [pickup, setPickup] = useState<Location | null>(null)
  const [destination, setDestination] = useState<Location | null>(null)
  const [selectedRide, setSelectedRide] = useState<RideOption | null>(null)
  const [isBooking, setIsBooking] = useState(false)

  const rideOptions: RideOption[] = [
    {
      id: 'auto',
      name: 'Auto',
      description: 'Affordable rides for short distances',
      price: 45,
      time: '2-3 min',
      capacity: 3,
      icon: '🛺',
      color: 'bg-yellow-500'
    },
    {
      id: 'mini',
      name: 'Mini',
      description: 'Compact cars for city rides',
      price: 65,
      time: '3-5 min',
      capacity: 4,
      icon: '🚗',
      color: 'bg-blue-500'
    },
    {
      id: 'prime',
      name: 'Prime',
      description: 'Premium sedans for comfort',
      price: 95,
      time: '5-7 min',
      capacity: 4,
      icon: '🚙',
      color: 'bg-green-500'
    },
    {
      id: 'bike',
      name: 'Bike',
      description: 'Quick rides for solo travelers',
      price: 35,
      time: '1-2 min',
      capacity: 1,
      icon: '🏍️',
      color: 'bg-red-500'
    }
  ]

  const handleBookRide = () => {
    if (pickup && destination && selectedRide) {
      setIsBooking(true)
      // Simulate booking process
      setTimeout(() => {
        setIsBooking(false)
        alert('Ride booked successfully! Your driver will arrive shortly.')
      }, 2000)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Booking Form */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Ride</h2>
            
            <LocationInput
              label="Pickup Location"
              placeholder="Enter pickup location"
              value={pickup?.address || ''}
              onChange={(location) => setPickup(location)}
            />
            
            <LocationInput
              label="Destination"
              placeholder="Where to?"
              value={destination?.address || ''}
              onChange={(location) => setDestination(location)}
            />
          </motion.div>

          {pickup && destination && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <RideOptions
                options={rideOptions}
                selectedRide={selectedRide}
                onSelectRide={setSelectedRide}
              />
            </motion.div>
          )}

          {selectedRide && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BookingSummary
                pickup={pickup!}
                destination={destination!}
                selectedRide={selectedRide}
                onBookRide={handleBookRide}
                isBooking={isBooking}
              />
            </motion.div>
          )}
        </div>

        {/* Right Panel - Map */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card h-96"
          >
            <RideMap
              pickup={pickup}
              destination={destination}
              selectedRide={selectedRide}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RideBooking