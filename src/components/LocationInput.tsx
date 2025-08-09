import React, { useState } from 'react'
import { MapPin, Search } from 'lucide-react'

interface Location {
  address: string
  coordinates: { lat: number; lng: number }
}

interface LocationInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (location: Location) => void
}

const LocationInput: React.FC<LocationInputProps> = ({
  label,
  placeholder,
  value,
  onChange
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Mock location suggestions
  const mockSuggestions = [
    'Mumbai Central Station, Mumbai',
    'Bandra Kurla Complex, Mumbai',
    'Andheri Station, Mumbai',
    'Juhu Beach, Mumbai',
    'Gateway of India, Mumbai',
    'Marine Drive, Mumbai',
    'Colaba Causeway, Mumbai',
    'Worli Sea Face, Mumbai'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    
    if (newValue.length > 2) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(newValue.toLowerCase())
      )
      setSuggestions(filtered.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setSuggestions([])
    
    // Mock coordinates for the selected location
    const mockCoordinates = {
      lat: Math.random() * 180 - 90,
      lng: Math.random() * 360 - 180
    }
    
    onChange({
      address: suggestion,
      coordinates: mockCoordinates
    })
  }

  const handleInputBlur = () => {
    // Small delay to allow clicking on suggestions
    setTimeout(() => setSuggestions([]), 200)
  }

  return (
    <div className="relative mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          className="input-field pl-10 pr-10"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                <span className="text-sm text-gray-700">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LocationInput