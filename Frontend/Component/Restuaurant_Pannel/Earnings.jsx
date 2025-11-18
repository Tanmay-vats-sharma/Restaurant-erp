import React, { useState } from 'react';

// Feather-like inline icons (accept className)
const BaseIcon = ({ className = "w-5 h-5", children, ...rest }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);
const FiDollarSign = (p) => (
  <BaseIcon {...p}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 7a5 5 0 0 0-10 0c0 5 10 3 10 8a5 5 0 0 1-10 0" />
  </BaseIcon>
);
const FiTrendingUp = (p) => (
  <BaseIcon {...p}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </BaseIcon>
);
const FiShoppingCart = (p) => (
  <BaseIcon {...p}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </BaseIcon>
);
const FiUsers = (p) => (
  <BaseIcon {...p}>
    <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
    <circle cx="12" cy="7" r="4" />
  </BaseIcon>
);
const FiClock = (p) => (
  <BaseIcon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </BaseIcon>
);
const FiPieChart = (p) => (
  <BaseIcon {...p}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </BaseIcon>
);
const FiBarChart2 = (p) => (
  <BaseIcon {...p}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </BaseIcon>
);
const FiCalendar = (p) => (
  <BaseIcon {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </BaseIcon>
);
const FiDownload = (p) => (
  <BaseIcon {...p}>
    <path d="M12 3v12" />
    <polyline points="7 10 12 15 17 10" />
    <path d="M5 21h14" />
  </BaseIcon>
);
const FiStar = (p) => (
  <BaseIcon {...p}>
    <polygon points="12 2 15.1 8.5 22 9.3 17 14.1 18.2 21 12 17.7 5.8 21 7 14.1 2 9.3 8.9 8.5 12 2" />
  </BaseIcon>
);
const FiCreditCard = (p) => (
  <BaseIcon {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="2" y1="9" x2="22" y2="9" />
  </BaseIcon>
);
const FiCoffee = (p) => (
  <BaseIcon {...p}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </BaseIcon>
);
const FiShoppingBag = (p) => (
  <BaseIcon {...p}>
    <path d="M6 7h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z" />
    <path d="M9 7a3 3 0 0 0 6 0" />
  </BaseIcon>
);
const FiArrowUp = (p) => (
  <BaseIcon {...p}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </BaseIcon>
);
const FiArrowDown = (p) => (
  <BaseIcon {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </BaseIcon>
);

const EarningsDashboard = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample data - in real app, this would come from API
  const earningsData = {
    today: {
      revenue: 1245.67,
      orders: 28,
      customers: 24,
      averageOrder: 44.49
    },
    weekly: {
      revenue: 8745.32,
      orders: 196,
      customers: 168,
      averageOrder: 44.62
    },
    monthly: {
      revenue: 32456.89,
      orders: 712,
      customers: 645,
      averageOrder: 45.58
    }
  };

  const revenueData = [
    { day: 'Mon', revenue: 4200, orders: 92 },
    { day: 'Tue', revenue: 3800, orders: 85 },
    { day: 'Wed', revenue: 5100, orders: 112 },
    { day: 'Thu', revenue: 4800, orders: 105 },
    { day: 'Fri', revenue: 6200, orders: 138 },
    { day: 'Sat', revenue: 7500, orders: 165 },
    { day: 'Sun', revenue: 6800, orders: 152 }
  ];

  const categoryPerformance = [
    { name: 'Main Course', revenue: 15600, percentage: 48, trend: 'up' },
    { name: 'Appetizers', revenue: 6800, percentage: 21, trend: 'up' },
    { name: 'Beverages', revenue: 4500, percentage: 14, trend: 'down' },
    { name: 'Desserts', revenue: 3200, percentage: 10, trend: 'up' },
    { name: 'Sides', revenue: 2356, percentage: 7, trend: 'stable' }
  ];

  const topPerformingItems = [
    { name: 'Margherita Pizza', revenue: 2450, orders: 56, trend: 'up' },
    { name: 'Grilled Chicken', revenue: 1890, orders: 42, trend: 'up' },
    { name: 'Caesar Salad', revenue: 1670, orders: 38, trend: 'down' },
    { name: 'Chocolate Lava', revenue: 1450, orders: 32, trend: 'up' },
    { name: 'Garlic Bread', revenue: 1230, orders: 45, trend: 'stable' }
  ];

  const paymentMethods = [
    { method: 'Credit Card', amount: 18400, percentage: 56.7, icon: <FiCreditCard /> },
    { method: 'Digital Wallet', amount: 8700, percentage: 26.8, icon: <FiShoppingBag /> },
    { method: 'Cash', amount: 4356, percentage: 13.4, icon: <FiDollarSign /> },
    { method: 'Bank Transfer', amount: 1000, percentage: 3.1, icon: <FiTrendingUp /> }
  ];

  const hourlySales = [
    { hour: '10 AM', sales: 1200 },
    { hour: '12 PM', sales: 4500 },
    { hour: '2 PM', sales: 2800 },
    { hour: '4 PM', sales: 1800 },
    { hour: '6 PM', sales: 6200 },
    { hour: '8 PM', sales: 7800 },
    { hour: '10 PM', sales: 3200 }
  ];

  const currentData = earningsData[timeRange];

  const MetricCard = ({ title, value, change, icon, trend, subtitle }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          {icon}
        </div>
        <span className={`flex items-center gap-1 text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
        }`}>
          {trend === 'up' ? <FiArrowUp className="w-4 h-4" /> : 
           trend === 'down' ? <FiArrowDown className="w-4 h-4" /> : null}
          {change}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
      {subtitle && <p className="text-gray-400 text-xs mt-1">{subtitle}</p>}
    </div>
  );

  const RevenueChart = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FiTrendingUp className="w-5 h-5 text-green-600" />
          Revenue Overview
        </h3>
        <select 
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {revenueData.map((day, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 w-16">{day.day}</span>
            <div className="flex-1 mx-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-3 transition-all duration-300"
                style={{ width: `${(day.revenue / 8000) * 100}%` }}
              ></div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-800">${day.revenue}</div>
              <div className="text-xs text-gray-500">{day.orders} orders</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CategoryPerformanceChart = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
        <FiPieChart className="w-5 h-5 text-purple-600" />
        Category Performance
      </h3>
      
      <div className="space-y-4">
        {categoryPerformance.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <div className="text-right w-20">
                <div className="font-semibold text-gray-800">${category.revenue}</div>
                <div className="text-xs text-gray-500">{category.percentage}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const HourlySalesChart = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
        <FiClock className="w-5 h-5 text-orange-600" />
        Hourly Sales Pattern
      </h3>
      
      <div className="flex items-end justify-between h-40 gap-2">
        {hourlySales.map((hour, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg w-full transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
              style={{ height: `${(hour.sales / 8000) * 100}%` }}
            ></div>
            <span className="text-xs text-gray-600 mt-2">{hour.hour}</span>
            <span className="text-xs font-medium text-gray-800">${hour.sales}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const QuickStats = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
        <FiBarChart2 className="w-5 h-5 text-green-600" />
        Quick Stats
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">Peak Hour</div>
            <div className="font-semibold text-gray-800">6:00 PM - 8:00 PM</div>
          </div>
          <FiClock className="w-5 h-5 text-blue-600" />
        </div>
        
        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">Best Category</div>
            <div className="font-semibold text-gray-800">Main Course</div>
          </div>
          <FiStar className="w-5 h-5 text-green-600" />
        </div>
        
        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">Top Item</div>
            <div className="font-semibold text-gray-800">Margherita Pizza</div>
          </div>
          <FiCoffee className="w-5 h-5 text-purple-600" />
        </div>
        
        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">Customer Growth</div>
            <div className="font-semibold text-gray-800">+12.5%</div>
          </div>
          <FiTrendingUp className="w-5 h-5 text-orange-600" />
        </div>
      </div>
    </div>
  );

  const TopPerformingItemsList = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FiStar className="w-5 h-5 text-yellow-600" />
          Top Performing Items
        </h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {topPerformingItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${
                item.trend === 'up' ? 'bg-green-500' : 
                item.trend === 'down' ? 'bg-red-500' : 'bg-gray-400'
              }`}></div>
              <div>
                <div className="font-medium text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-500">{item.orders} orders</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-800">${item.revenue}</div>
              <div className={`text-xs ${
                item.trend === 'up' ? 'text-green-600' : 
                item.trend === 'down' ? 'text-red-600' : 'text-gray-500'
              }`}>
                {item.trend === 'up' ? '+12%' : item.trend === 'down' ? '-5%' : '0%'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PaymentMethodsBreakdown = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-6">
        <FiCreditCard className="w-5 h-5 text-indigo-600" />
        Payment Methods
      </h3>
      
      <div className="space-y-4">
        {paymentMethods.map((method, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                {method.icon}
              </div>
              <div>
                <div className="font-medium text-gray-800">{method.method}</div>
                <div className="text-sm text-gray-500">{method.percentage}%</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-800">${method.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FiDollarSign className="w-6 h-6 text-green-600" />
                </div>
                Earnings & Analytics
              </h1>
              <p className="text-gray-600 mt-2">Track your restaurant's financial performance</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <FiCalendar className="w-4 h-4" />
                {new Date().toLocaleDateString()}
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <FiDownload className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Total Revenue" 
              value={`$${currentData.revenue.toLocaleString()}`}
              change="+12.5%"
              icon={<FiDollarSign className="w-6 h-6 text-blue-600" />}
              trend="up"
              subtitle={`${timeRange} revenue`}
            />
            <MetricCard 
              title="Total Orders" 
              value={currentData.orders}
              change="+8.2%"
              icon={<FiShoppingCart className="w-6 h-6 text-green-600" />}
              trend="up"
              subtitle={`${timeRange} orders`}
            />
            <MetricCard 
              title="Customers Served" 
              value={currentData.customers}
              change="+15.3%"
              icon={<FiUsers className="w-6 h-6 text-purple-600" />}
              trend="up"
              subtitle={`Unique ${timeRange} customers`}
            />
            <MetricCard 
              title="Avg Order Value" 
              value={`$${currentData.averageOrder}`}
              change="+5.3%"
              icon={<FiTrendingUp className="w-6 h-6 text-orange-600" />}
              trend="up"
              subtitle="Average per order"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <RevenueChart />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CategoryPerformanceChart />
              <HourlySalesChart />
            </div>
          </div>

          {/* Right Column - Insights */}
          <div className="space-y-6">
            <QuickStats />
            <TopPerformingItemsList />
            <PaymentMethodsBreakdown />
          </div>
        </div>

        {/* Additional Analytics Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-4">Revenue Forecast</h4>
            <div className="text-2xl font-bold text-green-600">+15.2%</div>
            <p className="text-gray-600 text-sm">Expected growth next month</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-4">Customer Retention</h4>
            <div className="text-2xl font-bold text-blue-600">72.4%</div>
            <p className="text-gray-600 text-sm">Returning customers rate</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-4">Inventory Turnover</h4>
            <div className="text-2xl font-bold text-purple-600">8.2x</div>
            <p className="text-gray-600 text-sm">Times inventory sold & replaced</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsDashboard;