import React, { useState, useEffect } from "react";
import LeftSidebar from "./LeftSidebar";

// Professional SVG Icons with better design
export const HomeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const RestaurantIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8" />
    <path d="M12 11v11" />
    <path d="M16 7.5V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v2.5" />
    <path d="M18 22V12.5a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4V22" />
    <rect x="6" y="2" width="12" height="6" rx="1" />
  </svg>
);

export const QrCodeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="3" y="15" width="6" height="6" rx="1" />
    <path d="M15 15h3" />
    <path d="M18 18v3" />
    <path d="M15 21h3" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

export const ClipboardListIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </svg>
);

export const SparklesIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export const TrendingUpIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export const UsersIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate dynamic data loading
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate API call
    const loadStats = setTimeout(() => {
      setStats([
        { 
          label: "Total Restaurants", 
          value: 156, 
          change: "+12%", 
          trend: "up",
          icon: <RestaurantIcon className="w-6 h-6" />,
          color: "from-blue-500 to-cyan-500"
        },
        { 
          label: "Active Plans", 
          value: 124, 
          change: "+8%", 
          trend: "up",
          icon: <SparklesIcon className="w-6 h-6" />,
          color: "from-purple-500 to-pink-500"
        },
        { 
          label: "QR Codes Generated", 
          value: 945, 
          change: "+23%", 
          trend: "up",
          icon: <QrCodeIcon className="w-6 h-6" />,
          color: "from-green-500 to-emerald-500"
        },
        { 
          label: "Today's Orders", 
          value: 342, 
          change: "+5%", 
          trend: "up",
          icon: <ClipboardListIcon className="w-6 h-6" />,
          color: "from-orange-500 to-red-500"
        },
        { 
          label: "Active Users", 
          value: "2.8k", 
          change: "+15%", 
          trend: "up",
          icon: <UsersIcon className="w-6 h-6" />,
          color: "from-indigo-500 to-blue-500"
        },
        { 
          label: "Revenue", 
          value: "$12.4k", 
          change: "+18%", 
          trend: "up",
          icon: <TrendingUpIcon className="w-6 h-6" />,
          color: "from-amber-500 to-yellow-500"
        },
      ]);
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(loadStats);
    };
  }, []);

  const recentActivities = [
    {
      id: 1,
      type: "subscription",
      title: "New Pro Subscription",
      description: "SpiceHouse restaurant subscribed to Pro plan",
      time: "2 minutes ago",
      icon: "🟣",
      status: "completed"
    },
    {
      id: 2,
      type: "qrcode",
      title: "Bulk QR Generated",
      description: "200 QR codes generated for City Grill",
      time: "15 minutes ago",
      icon: "🔵",
      status: "completed"
    },
    {
      id: 3,
      type: "menu",
      title: "Menu Updated",
      description: "La Patisserie updated menu (12 items)",
      time: "1 hour ago",
      icon: "🟢",
      status: "completed"
    },
    {
      id: 4,
      type: "payment",
      title: "Payment Failed",
      description: "Ocean Bistro subscription payment failed",
      time: "2 hours ago",
      icon: "🟠",
      status: "warning"
    }
  ];

  const performanceMetrics = [
    { label: "Conversion Rate", value: "4.2%", change: "+0.3%", color: "text-green-600" },
    { label: "Avg Order Value", value: "$28.40", change: "+$2.10", color: "text-green-600" },
    { label: "Plan Renewals", value: "76%", change: "+4%", color: "text-green-600" },
    { label: "New Menus", value: "34", change: "+8", color: "text-green-600" },
    { label: "User Engagement", value: "68%", change: "-2%", color: "text-red-600" },
    { label: "Support Tickets", value: "12", change: "-3", color: "text-green-600" }
  ];

  const quickActions = [
    { label: "Create Restaurant", icon: "🏪", color: "bg-gradient-to-r from-blue-600 to-blue-500" },
    { label: "Generate Bulk QR", icon: "📱", color: "bg-gradient-to-r from-green-600 to-green-500" },
    { label: "Create Plan", icon: "💎", color: "bg-gradient-to-r from-purple-600 to-purple-500" },
    { label: "View Analytics", icon: "📊", color: "bg-gradient-to-r from-orange-600 to-orange-500" },
    { label: "Manage Users", icon: "👥", color: "bg-gradient-to-r from-indigo-600 to-indigo-500" },
    { label: "System Settings", icon: "⚙️", color: "bg-gradient-to-r from-gray-600 to-gray-500" }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <LeftSidebar className="hidden xl:block w-64 shrink-0" />
      
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-2">
              Welcome back! Here's what's happening with your restaurants today. 
              <span className="text-blue-600 font-medium"> {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
              <div className="text-sm text-gray-500">Current Time</div>
              <div className="font-semibold text-gray-900">{currentTime.toLocaleTimeString()}</div>
            </div>
            <button className="bg-white rounded-lg px-4 py-2 shadow-sm border hover:shadow-md transition-shadow">
              <span className="flex items-center space-x-2">
                <span>🔔</span>
                <span className="text-gray-700">Notifications</span>
              </span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border animate-pulse">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-6 w-6 bg-gray-200 rounded"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          ) : (
            stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="flex items-center space-x-1">
                      <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-gray-500">from yesterday</span>
                    </div>
                  </div>
                  {stat.trend === 'up' ? (
                    <TrendingUpIcon className="w-5 h-5 text-green-500" />
                  ) : (
                    <TrendingUpIcon className="w-5 h-5 text-red-500 transform rotate-180" />
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Charts & Activity */}
          <div className="xl:col-span-2 space-y-8">
            {/* Performance Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Performance Analytics</h2>
                <select className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                    <div className={`text-xs font-medium ${metric.color}`}>{metric.change}</div>
                  </div>
                ))}
              </div>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📈</div>
                  <div className="text-gray-700 font-medium">Interactive Analytics Chart</div>
                  <div className="text-sm text-gray-500">Real-time performance metrics visualization</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">{activity.title}</h3>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-500' : 
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Summary */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`${action.color} text-white rounded-xl p-4 text-center hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <div className="text-sm font-medium">{action.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">System Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">API Response</span>
                  <span className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Operational
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Database</span>
                  <span className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Healthy
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Storage</span>
                  <span className="flex items-center text-yellow-400">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                    78% Used
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-gray-300">99.98%</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Last updated</span>
                  <span className="text-gray-300">Just now</span>
                </div>
              </div>
            </div>

            {/* Tips & Updates */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">💡 Pro Tip</h3>
              <p className="text-blue-100 text-sm">
                Use bulk QR code generation to accelerate restaurant onboarding. You can create up to 500 codes in one batch.
              </p>
              <button className="mt-4 w-full bg-white text-blue-600 rounded-lg py-2 text-sm font-semibold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}