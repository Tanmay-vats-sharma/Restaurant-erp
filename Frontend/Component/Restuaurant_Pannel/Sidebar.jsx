import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/admin/dashboard' },
    { id: 'orders', name: 'Orders', icon: '🧾', path: '/admin/orders' },
    { id: 'menu', name: 'Menu', icon: '🍕', path: '/admin/menu' },
    { id: 'earnings', name: 'Earnings', icon: '💰', path: '/admin/earnings' },
    { id: 'settings', name: 'Settings', icon: '⚙️', path: '/admin/settings' },
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