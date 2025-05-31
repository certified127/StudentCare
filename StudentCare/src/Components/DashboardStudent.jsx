import { useState, useEffect } from 'react';
import { 
  FaUserMd, 
  FaPlusCircle, 
  FaCommentMedical, 
  FaCalendarAlt, 
  FaPills, 
  FaBars, 
  FaTimes,
  FaHome,
  FaUserCircle,
  FaBell,
  FaCog} from 'react-icons/fa';

const DashboardStudent= () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('Doctors Directory');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { name: 'Doctors Directory', icon: <FaUserMd className="text-lg" /> },
    { name: 'Emergency', icon: <FaPlusCircle className="text-lg" /> },
    { name: 'Care Chat AI', icon: <FaCommentMedical className="text-lg" /> },
    { name: 'Appointments Booking', icon: <FaCalendarAlt className="text-lg" /> },
    { name: 'Medications Reminder', icon: <FaPills className="text-lg" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Doctors Directory':
        return <div className="p-4">Doctors Directory Content</div>;
      case 'Emergency':
        return <div className="p-4">Emergency Contacts and Information</div>;
      case 'Care Chat AI':
        return <div className="p-4">AI Chat Interface</div>;
      case 'Appointments Booking':
        return <div className="p-4">Appointment Scheduling System</div>;
      case 'Medications Reminder':
        return <div className="p-4">Medication Tracking and Alerts</div>;
      default:
        return <div className="p-4">Welcome to the Dashboard</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Backdrop (mobile only) */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-blue-800 text-white ${sidebarOpen ? 'w-64' : 'w-0'} 
        fixed md:relative z-30 h-full transition-all duration-300 ease-in-out`}
      >
        {sidebarOpen && (
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-blue-700">
              <h1 className="text-xl font-bold">Care Dashboard</h1>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-white focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="py-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => setActiveTab(item.name)}
                      className={`flex items-center w-full px-6 py-3 text-left transition-colors duration-200 
                        ${activeTab === item.name ? 'bg-blue-700' : 'hover:bg-blue-600'}`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-blue-700">
              <div className="flex items-center space-x-4">
                <FaUserCircle className="text-2xl" />
                <div>
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-blue-200">Patient</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden ${sidebarOpen && !isMobile ? 'ml-64' : ''}`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              {!sidebarOpen && (
                <button
                  onClick={toggleSidebar}
                  className="mr-4 text-gray-600 focus:outline-none"
                >
                  <FaBars />
                </button>
              )}
              <h2 className="text-xl font-semibold text-gray-800">{activeTab}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 relative">
                <FaBell />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <button className="text-gray-600">
                <FaCog />
              </button>
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-xl text-gray-600" />
                <span className="hidden md:inline">User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardStudent;
