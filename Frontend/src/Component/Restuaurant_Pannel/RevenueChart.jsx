import React from 'react';

const RevenueChart = ({ darkMode }) => {
  const data = [
    { day: 'Mon', revenue: 30000, orders: 45 },
    { day: 'Tue', revenue: 45000, orders: 52 },
    { day: 'Wed', revenue: 35000, orders: 48 },
    { day: 'Thu', revenue: 50000, orders: 61 },
    { day: 'Fri', revenue: 40000, orders: 55 },
    { day: 'Sat', revenue: 60000, orders: 72 },
    { day: 'Sun', revenue: 55000, orders: 68 }
  ];

  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <div className={`rounded-2xl p-6 shadow-sm border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Revenue Overview</h3>
        <select className={`text-sm rounded-lg border ${
          darkMode 
            ? 'bg-gray-700 border-gray-600 text-white' 
            : 'bg-white border-gray-300 text-gray-900'
        } px-3 py-1`}>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-end justify-between h-32">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 flex-1">
              <div className="flex flex-col items-center justify-end h-24 w-full">
                <div 
                  className="w-3/4 bg-linear-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                  title={`₹${item.revenue.toLocaleString()}`}
                ></div>
              </div>
              <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.day}
              </span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Revenue</p>
            <p className="text-lg font-semibold">₹2,95,000</p>
            <p className="text-sm text-green-600">+18% from last week</p>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Average Order</p>
            <p className="text-lg font-semibold">₹1,250</p>
            <p className="text-sm text-green-600">+5% from last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;