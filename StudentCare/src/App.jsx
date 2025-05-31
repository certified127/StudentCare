"use client"
// src/App.jsx
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

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
