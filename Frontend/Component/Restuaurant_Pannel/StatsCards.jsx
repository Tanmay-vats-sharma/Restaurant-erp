import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      title: "Today's Orders",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: "📦",
      color: "blue"
    },
    {
      title: "Pending Orders",
      value: "8",
      change: "+5%",
      trend: "up",
      icon: "⏳",
      color: "yellow"
    },
    {
      title: "Completed Orders",
      value: "14",
      change: "+20%",
      trend: "up",
      icon: "✅",
      color: "green"
    },
    {
      title: "Total Earnings",
      value: "₹8,425",
      change: "+15%",
      trend: "up",
      icon: "💰",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      yellow: 'bg-yellow-50 text-yellow-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              <p className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from yesterday
              </p>
            </div>
            <div className={`p-3 rounded-full ${getColorClasses(stat.color)}`}>
              <span className="text-xl">{stat.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;