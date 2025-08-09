import { motion } from 'framer-motion'
import { Car, Clock, Star, Users } from 'lucide-react'

interface RideCardProps {
  type: string
  price: number
  time: string
  capacity: number
  rating: number
  image: string
  isSelected?: boolean
  onClick?: () => void
}

const RideCard = ({ 
  type, 
  price, 
  time, 
  capacity, 
  rating, 
  image, 
  isSelected = false,
  onClick 
}: RideCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`card cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'ring-2 ring-primary-500 bg-primary-50' 
          : 'hover:shadow-xl'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
            <Car className="w-8 h-8 text-primary-600" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{type}</h3>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary-600">₹{price}</p>
              <p className="text-sm text-gray-500">estimated</p>
            </div>
          </div>
          
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={14} />
              <span>{capacity} seats</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RideCard