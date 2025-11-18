import React from 'react';

const StatsCards = ({ darkMode }) => {
  const stats = [
    {
      title: "Today's Revenue",
      value: "₹24,850",
      change: "+18%",
      trend: "up",
      icon: "currency",
      color: "green",
      description: "From 124 orders"
    },
    {
      title: "Active Orders",
      value: "12",
      change: "+3",
      trend: "up",
      icon: "orders",
      color: "blue",
      description: "8 preparing, 4 pending"
    },
    {
      title: "Table Occupancy",
      value: "68%",
      change: "+12%",
      trend: "up",
      icon: "tables",
      color: "purple",
      description: "24/35 tables occupied"
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      icon: "rating",
      color: "yellow",
      description: "From 89 reviews"
    }
  ];

  const getColorClasses = (color, darkMode) => {
    const colors = {
      green: darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-600',
      blue: darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600',
      purple: darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-50 text-purple-600',
      yellow: darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-50 text-yellow-600'
    };
    return colors[color] || colors.green;
  };

  const getIcon = (iconName) => {
    const icons = {
      currency: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      orders: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      tables: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      rating: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    };
    return icons[iconName] || icons.currency;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className={`rounded-2xl p-6 shadow-sm border ${
          darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'
        } transition-all duration-300 hover:shadow-md`}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.title}
              </p>
              <p className={`text-2xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
              <p className={`text-xs font-medium mt-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from yesterday
              </p>
              <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {stat.description}
              </p>
            </div>
            <div className={`p-4 rounded-2xl ${getColorClasses(stat.color, darkMode)}`}>
              {getIcon(stat.icon)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;