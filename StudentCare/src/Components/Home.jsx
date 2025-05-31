"use client"
import { Link } from "react-router-dom"

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent"
          >
            StudentCare
          </Link>
          <nav>
            <ul className="flex space-x-4">
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="bg-transparent text-teal-400 border-2 border-teal-400 px-6 py-2 rounded-full font-medium hover:bg-teal-900/30 transition-all duration-300"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 px-6 py-2 rounded-full font-medium hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/30"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="text-gray-400 hover:text-teal-400 font-medium transition-colors duration-300"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Connecting Students with
              <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Healthcare Professionals
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Access quality medical care tailored for students. Book appointments, get prescriptions, and receive
              support - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/30 transform hover:scale-105"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/login"
                    className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-900/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/30 transform hover:scale-105"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                StudentCare?
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-teal-500/50">
                <div className="text-6xl mb-6 text-center">🏥</div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Student-Focused Care</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Healthcare professionals who understand student needs and schedules.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-purple-500/50">
                <div className="text-6xl mb-6 text-center">⏱️</div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Flexible Appointments</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Book online at times that work with your class schedule.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50">
                <div className="text-6xl mb-6 text-center">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Affordable Options</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Discounted rates and insurance support for students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Create Your Profile</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sign up and tell us about your healthcare needs and preferences.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Find a Provider</h3>
                <p className="text-gray-300 leading-relaxed">
                  Browse professionals specializing in student health and wellness.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Book & Connect</h3>
                <p className="text-gray-300 leading-relaxed">
                  Schedule an in-person or virtual appointment that fits your schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                  "StudentCare helped me find a therapist who specializes in academic stress. The process was so easy
                  and affordable!"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 mr-4 flex items-center justify-center text-gray-900 font-bold text-xl">
                    JL
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Jamie L.</h4>
                    <p className="text-gray-400">University of Michigan</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                  "As an international student, I was nervous about finding healthcare. StudentCare connected me with a
                  doctor who speaks my language!"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 mr-4 flex items-center justify-center text-gray-900 font-bold text-xl">
                    RP
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Rahul P.</h4>
                    <p className="text-gray-400">NYU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Take Control of Your Health?</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Join thousands of students who are getting the care they need through StudentCare.
            </p>
            {!isLoggedIn ? (
              <Link
                to="/signup"
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/30 transform hover:scale-105 inline-block"
              >
                Sign Up Now - It's Free
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-teal-500 to-purple-600 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/30 transform hover:scale-105 inline-block"
              >
                Book Your First Appointment
              </Link>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                StudentCare
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Connecting students with healthcare professionals since 2023.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Primary Care
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Mental Health
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Nutrition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Specialty Care
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">hello@studentcare.com</li>
                <li className="text-gray-400">(555) 123-4567</li>
                <li className="text-gray-400">
                  123 Campus Drive
                  <br />
                  University Town, ST 12345
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 StudentCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
