import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RideBooking from './components/RideBooking'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <Routes>
          <Route path="/" element={<RideBooking />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App