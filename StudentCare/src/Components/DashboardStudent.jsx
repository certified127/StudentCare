"use client"
import { useState, useEffect } from "react"
import {
  FaUserMd,
  FaPlusCircle,
  FaCalendarAlt,
  FaPills,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaBell,
  FaCog,
  FaHistory,
  FaRobot,
} from "react-icons/fa"

const DashboardStudent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("Health History")

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768)
        if (window.innerWidth < 768) {
          setSidebarOpen(false)
        } else {
          setSidebarOpen(true)
        }
      }
    }

    handleResize()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const navItems = [
    { name: "Health History", icon: <FaHistory className="text-lg" /> },
    { name: "Doctors Directory", icon: <FaUserMd className="text-lg" /> },
    { name: "Book Appointments", icon: <FaCalendarAlt className="text-lg" /> },
    { name: "Medications Reminder", icon: <FaPills className="text-lg" /> },
    { name: "Ask Chat AI", icon: <FaRobot className="text-lg" /> },
    { name: "Emergency", icon: <FaPlusCircle className="text-lg" /> },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "Health History":
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Health History</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Recent Visits</h4>
                  <p className="text-blue-600">3 visits this year</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Vaccinations</h4>
                  <p className="text-green-600">Up to date</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Allergies</h4>
                  <p className="text-purple-600">None reported</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Medical Records</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">Annual Checkup</p>
                      <p className="text-sm text-gray-600">Dr. Smith - March 15, 2024</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">Blood Test Results</p>
                      <p className="text-sm text-gray-600">Lab Corp - February 28, 2024</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "Doctors Directory":
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Doctors Directory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((doctor) => (
                  <div
                    key={doctor}
                    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        Dr
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-800">Dr. John Smith</h4>
                        <p className="text-gray-600">General Practitioner</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>📍 Campus Health Center</p>
                      <p>⭐ 4.8/5 (124 reviews)</p>
                      <p>🕒 Available Today</p>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case "Book Appointments":
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Appointments</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Booking</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Doctor</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Dr. John Smith - General Practice</option>
                        <option>Dr. Sarah Johnson - Mental Health</option>
                        <option>Dr. Mike Wilson - Sports Medicine</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3"
                        placeholder="Brief description of your concern..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                      Book Appointment
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Appointments</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-blue-800">Dr. Sarah Johnson</p>
                          <p className="text-sm text-blue-600">Mental Health Consultation</p>
                          <p className="text-sm text-blue-600">Tomorrow, 2:00 PM</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Reschedule</button>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-green-800">Dr. John Smith</p>
                          <p className="text-sm text-green-600">Annual Checkup</p>
                          <p className="text-sm text-green-600">Next Week, Friday 10:00 AM</p>
                        </div>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">Reschedule</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "Medications Reminder":
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Medications Reminder</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Current Medications</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-blue-800">Vitamin D3</p>
                          <p className="text-sm text-blue-600">1000 IU - Once daily</p>
                          <p className="text-sm text-blue-600">Next dose: 8:00 AM</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-purple-800">Multivitamin</p>
                          <p className="text-sm text-purple-600">1 tablet - Once daily</p>
                          <p className="text-sm text-purple-600">Next dose: 8:00 AM</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                    Add New Medication
                  </button>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Today's Schedule</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="font-medium text-green-800">8:00 AM - Vitamin D3</p>
                        <p className="text-sm text-green-600">Taken ✓</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="font-medium text-yellow-800">8:00 AM - Multivitamin</p>
                        <p className="text-sm text-yellow-600">Pending</p>
                      </div>
                      <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">Mark Taken</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "Ask Chat AI":
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-lg p-6 h-[600px] flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ask Chat AI</h3>
              <div className="flex-1 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <FaRobot className="text-white text-sm" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-md">
                      <p className="text-gray-800">Hello! I'm your AI health assistant. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-md">
                      <p>I've been having headaches lately. What could be causing them?</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <FaUserCircle className="text-gray-600" />
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <FaRobot className="text-white text-sm" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-md">
                      <p className="text-gray-800">
                        Headaches can have various causes including stress, dehydration, lack of sleep, or eye strain. I
                        recommend staying hydrated, getting adequate rest, and if symptoms persist, consulting with a
                        healthcare professional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask me anything about your health..."
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Send
                </button>
              </div>
            </div>
          </div>
        )
      case "Emergency":
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Emergency Contacts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-red-800 mb-4">🚨 Emergency Services</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-red-700">Emergency (911)</span>
                      <a
                        href="tel:911"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Call
                      </a>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-red-700">Campus Security</span>
                      <a
                        href="tel:555-0123"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Call
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">🏥 Campus Health</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-blue-700">Health Center</span>
                      <a
                        href="tel:555-0456"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Call
                      </a>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-blue-700">Mental Health Crisis</span>
                      <a
                        href="tel:555-0789"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-yellow-800 mb-4">⚠️ When to Seek Emergency Care</h4>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Severe chest pain or difficulty breathing</li>
                  <li>• Signs of stroke (sudden numbness, confusion, severe headache)</li>
                  <li>• Severe allergic reactions</li>
                  <li>• Thoughts of self-harm or suicide</li>
                  <li>• Severe injuries or bleeding</li>
                </ul>
              </div>
            </div>
          </div>
        )
      default:
        return <div className="p-4">Welcome to the StudentCare Dashboard</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Backdrop (mobile only) */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-blue-800 to-blue-900 text-white ${sidebarOpen ? "w-64" : "w-0"} 
        fixed md:relative z-30 h-full transition-all duration-300 ease-in-out shadow-2xl`}
      >
        {sidebarOpen && (
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-blue-700">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                StudentCare
              </h1>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-white focus:outline-none hover:bg-blue-700 p-2 rounded"
              >
                <FaTimes />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-2 px-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setActiveTab(item.name)}
                      className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 rounded-lg
                        ${
                          activeTab === item.name
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105"
                            : "hover:bg-blue-700 hover:transform hover:scale-105"
                        }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-blue-700">
              <div className="flex items-center space-x-3 p-3 bg-blue-700 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <FaUserCircle className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white">Student User</p>
                  <p className="text-sm text-blue-200">Patient ID: #12345</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden ${sidebarOpen && !isMobile ? "ml-64" : ""}`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-lg z-10 border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              {!sidebarOpen && (
                <button
                  onClick={toggleSidebar}
                  className="mr-4 text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded hover:bg-gray-100"
                >
                  <FaBars />
                </button>
              )}
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {activeTab}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 relative p-2 rounded hover:bg-gray-100">
                <FaBell />
                <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-red-500"></span>
              </button>
              <button className="text-gray-600 hover:text-blue-600 p-2 rounded hover:bg-gray-100">
                <FaCog />
              </button>
              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                <FaUserCircle className="text-xl text-blue-600" />
                <span className="hidden md:inline font-medium text-gray-700">Student User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">{renderContent()}</main>
      </div>
    </div>
  )
}

export default DashboardStudent
