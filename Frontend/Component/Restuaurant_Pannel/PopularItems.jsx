import React from 'react';

const PopularItems = ({ darkMode }) => {
  const popularItems = [
    {
      name: 'Margherita Pizza',
      category: 'Main Course',
      orders: 45,
      revenue: '₹22,500',
      trend: 'up'
    },
    {
      name: 'Pasta Carbonara',
      category: 'Main Course',
      orders: 38,
      revenue: '₹19,000',
      trend: 'up'
    },
    {
      name: 'Caesar Salad',
      category: 'Appetizer',
      orders: 32,
      revenue: '₹12,800',
      trend: 'down'
    },
    {
      name: 'Chocolate Brownie',
      category: 'Dessert',
      orders: 28,
      revenue: '₹8,400',
      trend: 'up'
    },
    {
      name: 'Mango Smoothie',
      category: 'Beverage',
      orders: 25,
      revenue: '₹6,250',
      trend: 'up'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Main Course': 'bg-blue-100 text-blue-800',
      'Appetizer': 'bg-green-100 text-green-800',
      'Dessert': 'bg-purple-100 text-purple-800',
      'Beverage': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className={`rounded-2xl shadow-sm border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Popular Items</h2>
        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Most ordered items this week
        </p>
      </div>
      <div className="divide-y divide-gray-200">
        {popularItems.map((item, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 transition-colors duration-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.orders} orders
                  </span>
                  <span className="text-sm font-semibold">{item.revenue}</span>
                </div>
              </div>
              <div className={`flex items-center space-x-1 ${
                item.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.trend === 'up' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;