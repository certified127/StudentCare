"use client"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Automatically redirect to dashboard without any validation
    setIsLoggedIn(true)
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-40 right-10 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-4000"></div>
      </div>

      <div className="max-w-md w-full space-y-6 sm:space-y-8 glass p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            StudentCare
          </Link>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold text-white">Welcome back!</h2>
          <p className="mt-2 text-sm text-slate-400">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-300">
              Sign up here
            </Link>
          </p>
        </div>

        <form className="mt-6 sm:mt-8 space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-slate-600 bg-slate-700/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-slate-600 bg-slate-700/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-slate-600 rounded bg-slate-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-slate-300">
                Remember me
              </label>
            </div>

            <div>
              <a href="#" className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-300">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Sign in
            </button>

            <div className="text-center">
              <p className="text-sm text-slate-400">
                New to StudentCare?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-300"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
