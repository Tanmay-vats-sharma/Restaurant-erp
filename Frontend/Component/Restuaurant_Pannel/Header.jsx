import React from 'react';

const Header = ({ setSidebarOpen, currentPage }) => {
  const pageTitles = {
    dashboard: 'Dashboard Overview',
    orders: 'Orders Management',
    menu: 'Menu Management',
    earnings: 'Earnings & Reports',
    settings: 'Settings'
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <span className="text-xl">🍔</span>
          </button>
          <h1 className="ml-2 text-xl font-semibold text-gray-800">
            {pageTitles[currentPage]}
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <span className="text-xl">🔔</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;