"use client"
import { Link } from "react-router-dom"

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            StudentCare
          </Link>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm sm:text-base text-teal-400 border border-teal-400/50 rounded-full hover:bg-teal-400/10 transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-full hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute top-40 right-10 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-float">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                Connecting Students with
                <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Healthcare Professionals
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-slate-300 leading-relaxed px-4">
              Access quality medical care tailored for students. Book appointments, get prescriptions, and receive
              support - all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/signup"
                    className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/login"
                    className="w-full sm:w-auto border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-400/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                StudentCare?
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  icon: "🏥",
                  title: "Student-Focused Care",
                  description: "Healthcare professionals who understand student needs and schedules.",
                  gradient: "from-teal-500/10 to-cyan-500/10",
                  border: "border-teal-500/20",
                },
                {
                  icon: "⏱️",
                  title: "Flexible Appointments",
                  description: "Book online at times that work with your class schedule.",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  border: "border-purple-500/20",
                },
                {
                  icon: "💰",
                  title: "Affordable Options",
                  description: "Discounted rates and insurance support for students.",
                  gradient: "from-cyan-500/10 to-blue-500/10",
                  border: "border-cyan-500/20",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`glass p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${feature.border} bg-gradient-to-br ${feature.gradient}`}
                >
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 text-center">{feature.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white text-center">{feature.title}</h3>
                  <p className="text-slate-300 text-center leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  step: "1",
                  title: "Create Your Profile",
                  description: "Sign up and tell us about your healthcare needs and preferences.",
                },
                {
                  step: "2",
                  title: "Find a Provider",
                  description: "Browse professionals specializing in student health and wellness.",
                },
                {
                  step: "3",
                  title: "Book & Connect",
                  description: "Schedule an in-person or virtual appointment that fits your schedule.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-teal-500 to-purple-600 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed max-w-sm mx-auto">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              What Students Say
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  quote:
                    "StudentCare helped me find a therapist who specializes in academic stress. The process was so easy and affordable!",
                  name: "Jamie L.",
                  school: "University of Michigan",
                  initials: "JL",
                  gradient: "from-teal-400 to-purple-500",
                },
                {
                  quote:
                    "As an international student, I was nervous about finding healthcare. StudentCare connected me with a doctor who speaks my language!",
                  name: "Rahul P.",
                  school: "NYU",
                  initials: "RP",
                  gradient: "from-purple-500 to-cyan-400",
                },
              ].map((testimonial, index) => (
                <div key={index} className="glass p-6 sm:p-8 rounded-2xl border border-slate-700/50">
                  <p className="text-slate-300 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${testimonial.gradient} mr-4 flex items-center justify-center text-white font-bold text-lg sm:text-xl`}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-slate-400">{testimonial.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-slate-300 leading-relaxed">
              Join thousands of students who are getting the care they need through StudentCare.
            </p>
            {!isLoggedIn ? (
              <Link
                to="/signup"
                className="inline-block bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Sign Up Now - It's Free
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className="inline-block bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:from-teal-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Book Your First Appointment
              </Link>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                StudentCare
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Connecting students with healthcare professionals since 2023.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-lg text-white">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {["Primary Care", "Mental Health", "Nutrition", "Specialty Care"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-lg text-white">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {["About Us", "Careers", "Press", "Blog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-lg text-white">Contact</h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-400">
                <li>hello@studentcare.com</li>
                <li>(555) 123-4567</li>
                <li>
                  123 Campus Drive
                  <br />
                  University Town, ST 12345
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-slate-400">
            <p>© 2023 StudentCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
