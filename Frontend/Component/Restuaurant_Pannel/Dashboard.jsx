import React, { useState } from 'react';
import StatsCards from './StatsCards';
import RecentOrders from './RecentOrders';
import RevenueChart from './RevenueChart';
import PopularItems from './PopularItems';
import RecentActivity from './RecentActivity';

const Dashboard = ({ darkMode }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className={`rounded-2xl p-6 shadow-lg ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-500 to-purple-500'
      } text-white`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Good Morning, Admin!</h1>
            <p className="opacity-90">Here's what's happening in your restaurant today.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className={`px-6 py-3 rounded-lg font-semibold ${
              darkMode ? 'bg-white text-gray-900' : 'bg-white text-blue-600'
            }`}>
              View Today's Report
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <StatsCards darkMode={darkMode} />
      
      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart darkMode={darkMode} />
        <RecentActivity darkMode={darkMode} />
      </div>

      {/* Recent Orders and Popular Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders darkMode={darkMode} />
        <PopularItems darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Dashboard;