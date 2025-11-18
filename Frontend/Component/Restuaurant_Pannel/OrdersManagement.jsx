import React, { useState } from 'react';

// Inline feather-like icons (accept className)
const Icon = ({ className = "w-4 h-4", children }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const FiPlus = (p) => (
  <Icon {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Icon>
);

const FiFilter = (p) => (
  <Icon {...p}>
    <path d="M4 6h16" />
    <path d="M6 12h12" />
    <path d="M10 18h8" />
  </Icon>
);

const FiSearch = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </Icon>
);

const FiDownload = (p) => (
  <Icon {...p}>
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M5 21h14" />
  </Icon>
);

const FiRefreshCw = (p) => (
  <Icon {...p}>
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M20.5 9A9 9 0 1 0 6 21" />
  </Icon>
);

const FiShoppingBag = (p) => (
  <Icon {...p}>
    <path d="M6 7h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z" />
    <path d="M9 7a3 3 0 0 0 6 0" />
  </Icon>
);

const FiClock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Icon>
);

const FiCheckCircle = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

const FiXCircle = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6" />
    <path d="M9 9l6 6" />
  </Icon>
);

const FiTruck = (p) => (
  <Icon {...p}>
    <rect x="1" y="3" width="15" height="11" rx="1" />
    <path d="M16 8h4l3 3v3h-7z" />
    <path d="M1 18h15" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="19" cy="18" r="2" />
  </Icon>
);

const OrdersManagement = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    dateRange: 'today',
    search: ''
  });

  const [orders, setOrders] = useState([
    {
      id: '#ORD-001',
      customer: 'John Doe',
      items: 3,
      amount: 45.99,
      status: 'preparing',
      type: 'dine-in',
      table: 'T-05',
      time: '12:30 PM',
      duration: '15 mins'
    },
    {
      id: '#ORD-002',
      customer: 'Sarah Smith',
      items: 2,
      amount: 28.50,
      status: 'pending',
      type: 'takeaway',
      time: '12:45 PM',
      duration: '5 mins'
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      items: 4,
      amount: 67.25,
      status: 'ready',
      type: 'delivery',
      time: '1:15 PM',
      duration: '25 mins'
    },
    {
      id: '#ORD-004',
      customer: 'Emily Brown',
      items: 1,
      amount: 15.75,
      status: 'completed',
      type: 'dine-in',
      table: 'T-02',
      time: '11:45 AM',
      duration: 'Completed'
    }
  ]);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    preparing: 'bg-blue-100 text-blue-800 border-blue-200',
    ready: 'bg-green-100 text-green-800 border-green-200',
    completed: 'bg-gray-100 text-gray-800 border-gray-200',
    cancelled: 'bg-red-100 text-red-800 border-red-200'
  };

  const typeColors = {
    'dine-in': 'bg-purple-100 text-purple-800',
    'takeaway': 'bg-indigo-100 text-indigo-800',
    'delivery': 'bg-pink-100 text-pink-800'
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FiClock className="w-4 h-4" />;
      case 'preparing': return <FiRefreshCw className="w-4 h-4 animate-spin" />;
      case 'ready': return <FiCheckCircle className="w-4 h-4" />;
      case 'completed': return <FiShoppingBag className="w-4 h-4" />;
      case 'cancelled': return <FiXCircle className="w-4 h-4" />;
      default: return <FiClock className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'dine-in': return <FiShoppingBag className="w-4 h-4" />;
      case 'takeaway': return <FiShoppingBag className="w-4 h-4" />;
      case 'delivery': return <FiTruck className="w-4 h-4" />;
      default: return <FiShoppingBag className="w-4 h-4" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    if (filters.status !== 'all' && order.status !== filters.status) return false;
    if (filters.type !== 'all' && order.type !== filters.type) return false;
    if (filters.search && !order.customer.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    completed: orders.filter(o => o.status === 'completed').length
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FiShoppingBag className="w-6 h-6 text-blue-600" />
                </div>
                Orders Management
              </h1>
              <p className="text-gray-600 mt-2">Manage and track all restaurant orders</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                <FiDownload className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                <FiPlus className="w-4 h-4" />
                New Order
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FiShoppingBag className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <FiClock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Preparing</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.preparing}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FiRefreshCw className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <FiCheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FiFilter className="w-5 h-5 text-gray-600" />
              Filter Orders
            </h3>
            
            <div className="relative w-full lg:w-64">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Order Status</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="all">All Types</option>
                <option value="dine-in">Dine-in</option>
                <option value="takeaway">Takeaway</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={filters.dateRange}
                onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="last7days">Last 7 Days</option>
                <option value="thisMonth">This Month</option>
                <option value="lastMonth">Last Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Orders ({filteredOrders.length})
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-gray-900">{order.id}</span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[order.status]}`}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(order.status)}
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </div>
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[order.type]}`}>
                        <div className="flex items-center gap-1">
                          {getTypeIcon(order.type)}
                          {order.type}
                        </div>
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Customer:</span> {order.customer}
                      </div>
                      <div>
                        <span className="font-medium">Items:</span> {order.items} • ${order.amount}
                      </div>
                      <div>
                        <span className="font-medium">Time:</span> {order.time} • {order.duration}
                      </div>
                    </div>

                    {order.table && (
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">
                          <span className="font-medium">Table:</span> {order.table}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                      View Details
                    </button>
                    {order.status === 'pending' && (
                      <button className="px-3 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                        Accept
                      </button>
                    )}
                    {order.status === 'preparing' && (
                      <button className="px-3 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                        Mark Ready
                      </button>
                    )}
                    <button className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <FiShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No orders found</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersManagement;