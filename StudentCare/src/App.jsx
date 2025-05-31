// src/App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App