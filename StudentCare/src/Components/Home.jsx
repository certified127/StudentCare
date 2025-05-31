// src/components/Home.jsx
import { Link } from 'react-router-dom'

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <header className="bg-white-400 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary text-blue-400">StudentCare</Link>
          <nav>
            <ul className="flex space-x-6">
              {!isLoggedIn ? (
                <>
                  <li><Link to="/login   " className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-primary/90">Login</Link></li>
                  <li><Link to="/signup" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-primary/90">Sign Up</Link></li>
                </>
              ) : (
                <li>
                  <button 
                    onClick={() => setIsLoggedIn(false)}
                    className="text-gray-600 hover:text-primary"
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
        <section className="bg-black bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connecting Students with Healthcare Professionals</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Access quality medical care tailored for students. Book appointments, get prescriptions, and receive support - all in one place.
            </p>
            <div className="space-x-4">
              {!isLoggedIn ? (
                <>
                  <Link to="/signup" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100">
                    Get Started
                  </Link>
                  <Link to="/login" className="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white/10">
                    Login
                  </Link>
                </>
              ) : (
                <Link to="#" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100">
                  Book an Appointment
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose StudentCare?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2">Student-Focused Care</h3>
                <p className="text-gray-600">Healthcare professionals who understand student needs and schedules.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold mb-2">Flexible Appointments</h3>
                <p className="text-gray-600">Book online at times that work with your class schedule.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">Affordable Options</h3>
                <p className="text-gray-600">Discounted rates and insurance support for students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">Sign up and tell us about your healthcare needs.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Find a Provider</h3>
                <p className="text-gray-600">Browse professionals specializing in student health.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Book & Connect</h3>
                <p className="text-gray-600">Schedule an in-person or virtual appointment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">"StudentCare helped me find a therapist who specializes in academic stress. The process was so easy and affordable!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jamie L.</h4>
                    <p className="text-gray-500 text-sm">University of Michigan</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">"As an international student, I was nervous about finding healthcare. StudentCare connected me with a doctor who speaks my language!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Rahul P.</h4>
                    <p className="text-gray-500 text-sm">NYU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who are getting the care they need through StudentCare.
            </p>
            {!isLoggedIn ? (
              <Link to="/signup" className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 inline-block">
                Sign Up Now - It's Free
              </Link>
            ) : (
              <Link to="#" className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 inline-block">
                Book Your First Appointment
              </Link>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">StudentCare</h3>
              <p className="text-gray-400">Connecting students with healthcare professionals since 2023.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Primary Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mental Health</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Nutrition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Specialty Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">hello@studentcare.com</li>
                <li className="text-gray-400">(555) 123-4567</li>
                <li className="text-gray-400">123 Campus Drive<br />University Town, ST 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 StudentCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
