import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Feather-like inline icons
const Icon = ({ className = "w-5 h-5", children }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);
const FiHome = (p) => <Icon {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Icon>;
const FiShoppingCart = (p) => <Icon {...p}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></Icon>;
const FiCoffee = (p) => <Icon {...p}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></Icon>;
const FiDollarSign = (p) => <Icon {...p}><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7a5 5 0 0 0-10 0c0 5 10 3 10 8a5 5 0 0 1-10 0"/></Icon>;
const FiSettings = (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m5.7-13.7l-4.2 4.2m-4.2 4.2L4.3 18.3M23 12h-6m-6 0H1m18.7-.7l-4.2 4.2m-4.2-4.2L4.3 5.7"/></Icon>;

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <FiHome className="w-5 h-5" />, path: '/restaurant/dashboard' },
    { id: 'orders', name: 'Orders', icon: <FiShoppingCart className="w-5 h-5" />, path: '/restaurant/orders' },
    { id: 'menu', name: 'Menu', icon: <FiCoffee className="w-5 h-5" />, path: '/restaurant/menu' },
    { id: 'earnings', name: 'Earnings', icon: <FiDollarSign className="w-5 h-5" />, path: '/restaurant/earnings' },
    { id: 'settings', name: 'Settings', icon: <FiSettings className="w-5 h-5" />, path: '/restaurant/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-xl transform transition duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">Restaurant Panel</h1>
        </div>
        
        <nav className="mt-8">
          {menuItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;