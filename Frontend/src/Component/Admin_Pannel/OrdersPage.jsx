import React, { useState } from "react";

// Professional SVG Icons
const OrdersIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="2" />
    <path d="M9 14h.01" />
    <path d="M9 17h.01" />
    <path d="M12 16l1 1 3-3" />
  </svg>
);

const ClockIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const TruckIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const XCircleIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const FilterIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const SearchIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const DownloadIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const EyeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Enhanced orders data with more details
  const orders = [
    {
      id: "ORD-001",
      restaurant: "City Grill",
      customer: "John Doe",
      customerPhone: "+91 98765 43210",
      total: 450,
      items: 3,
      status: "Preparing",
      orderTime: "2024-01-15T14:30:00",
      estimatedDelivery: "2024-01-15T15:15:00",
      type: "Delivery",
      itemsList: [
        { name: "Grilled Chicken", quantity: 1, price: 250 },
        { name: "Garlic Bread", quantity: 2, price: 100 },
      ],
      address: "123 Main St, Apartment 4B"
    },
    {
      id: "ORD-002",
      restaurant: "SpiceHouse",
      customer: "Sarah Smith",
      customerPhone: "+91 98765 43211",
      total: 220,
      items: 1,
      status: "Delivered",
      orderTime: "2024-01-15T13:45:00",
      deliveredTime: "2024-01-15T14:20:00",
      type: "Pickup",
      itemsList: [
        { name: "Butter Chicken", quantity: 1, price: 220 },
      ]
    },
    {
      id: "ORD-003",
      restaurant: "La Patisserie",
      customer: "Mike Johnson",
      customerPhone: "+91 98765 43212",
      total: 890,
      items: 5,
      status: "On the Way",
      orderTime: "2024-01-15T14:15:00",
      estimatedDelivery: "2024-01-15T15:00:00",
      type: "Delivery",
      itemsList: [
        { name: "Chocolate Cake", quantity: 1, price: 400 },
        { name: "Croissants", quantity: 4, price: 490 },
      ],
      address: "456 Oak Ave, Floor 2"
    },
    {
      id: "ORD-004",
      restaurant: "City Grill",
      customer: "Emma Wilson",
      customerPhone: "+91 98765 43213",
      total: 320,
      items: 2,
      status: "Pending",
      orderTime: "2024-01-15T14:50:00",
      type: "Dine-in",
      itemsList: [
        { name: "Caesar Salad", quantity: 1, price: 180 },
        { name: "Lemonade", quantity: 1, price: 140 },
      ],
      table: "Table 5"
    },
    {
      id: "ORD-005",
      restaurant: "SpiceHouse",
      customer: "Robert Brown",
      customerPhone: "+91 98765 43214",
      total: 670,
      items: 4,
      status: "Cancelled",
      orderTime: "2024-01-15T13:30:00",
      type: "Delivery",
      itemsList: [
        { name: "Biryani", quantity: 2, price: 500 },
        { name: "Naan", quantity: 2, price: 170 },
      ],
      address: "789 Pine Rd"
    }
  ];

  const stats = [
    { label: "Total Orders", value: "1,247", change: "+12%", trend: "up", color: "from-blue-500 to-cyan-500" },
    { label: "Pending", value: "23", change: "-5%", trend: "down", color: "from-yellow-500 to-amber-500" },
    { label: "Delivered", value: "1,189", change: "+8%", trend: "up", color: "from-green-500 to-emerald-500" },
    { label: "Revenue", value: "₹89.2K", change: "+15%", trend: "up", color: "from-purple-500 to-pink-500" }
  ];

  const statusFilters = ["All", "Pending", "Preparing", "On the Way", "Delivered", "Cancelled"];
  const restaurantFilters = ["All", "City Grill", "SpiceHouse", "La Patisserie"];
  const typeFilters = ["All", "Delivery", "Pickup", "Dine-in"];

  // Filter orders based on selected filters and search
  const filteredOrders = orders.filter(order => {
    const matchesStatus = selectedStatus === "All" || order.status === selectedStatus;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending": return <ClockIcon className="w-4 h-4" />;
      case "Preparing": return <ClockIcon className="w-4 h-4" />;
      case "On the Way": return <TruckIcon className="w-4 h-4" />;
      case "Delivered": return <CheckCircleIcon className="w-4 h-4" />;
      case "Cancelled": return <XCircleIcon className="w-4 h-4" />;
      default: return <ClockIcon className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Preparing": return "bg-blue-100 text-blue-800 border-blue-200";
      case "On the Way": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Delivered": return "bg-green-100 text-green-800 border-green-200";
      case "Cancelled": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Delivery": return "text-blue-600 bg-blue-50";
      case "Pickup": return "text-green-600 bg-green-50";
      case "Dine-in": return "text-purple-600 bg-purple-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <OrdersIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
          </div>
          <p className="text-gray-600">Monitor and manage all restaurant orders in real-time</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  <TrendingUpIcon className={`w-4 h-4 ${stat.trend === "down" ? "transform rotate-180" : ""}`} />
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders, customers, or restaurants..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3 flex-wrap">
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statusFilters.map(filter => (
                    <option key={filter} value={filter}>{filter}</option>
                  ))}
                </select>

                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {restaurantFilters.map(filter => (
                    <option key={filter} value={filter}>{filter}</option>
                  ))}
                </select>

                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {typeFilters.map(filter => (
                    <option key={filter} value={filter}>{filter}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <FilterIcon className="w-4 h-4" />
                More Filters
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <DownloadIcon className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <span className="text-sm text-gray-500">
                Showing {filteredOrders.length} of {orders.length} orders
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                onClick={() => setSelectedOrder(order)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{order.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)} flex items-center gap-1`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(order.type)}`}>
                          {order.type}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Customer</p>
                        <p className="font-medium text-gray-900">{order.customer}</p>
                        <p className="text-sm text-gray-500">{order.customerPhone}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600">Restaurant</p>
                        <p className="font-medium text-gray-900">{order.restaurant}</p>
                        {order.table && (
                          <p className="text-sm text-gray-500">{order.table}</p>
                        )}
                        {order.address && (
                          <p className="text-sm text-gray-500 truncate">{order.address}</p>
                        )}
                      </div>

                      <div>
                        <p className="text-sm text-gray-600">Order Details</p>
                        <p className="font-medium text-gray-900">{order.items} items • ₹{order.total}</p>
                        <p className="text-sm text-gray-500">
                          {formatTime(order.orderTime)}
                          {order.estimatedDelivery && ` • Est. ${formatTime(order.estimatedDelivery)}`}
                        </p>
                      </div>
                    </div>

                    {/* Order Items Preview */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {order.itemsList.slice(0, 3).map((item, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {item.quantity}x {item.name}
                        </span>
                      ))}
                      {order.itemsList.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{order.itemsList.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">Active Today</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">₹24.5K</div>
            <div className="text-sm text-gray-600">Today's Revenue</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">38min</div>
            <div className="text-sm text-gray-600">Avg. Prep Time</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-orange-600">94%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Order Details</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Order Header */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Order ID</p>
                  <p className="font-semibold text-gray-900">{selectedOrder.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedOrder.status)} flex items-center gap-2 w-fit`}>
                    {getStatusIcon(selectedOrder.status)}
                    {selectedOrder.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Type</p>
                  <p className="font-semibold text-gray-900">{selectedOrder.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Time</p>
                  <p className="font-semibold text-gray-900">{formatTime(selectedOrder.orderTime)}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Customer Information</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900">{selectedOrder.customer}</p>
                  <p className="text-gray-600">{selectedOrder.customerPhone}</p>
                  {selectedOrder.address && (
                    <p className="text-gray-600 mt-1">{selectedOrder.address}</p>
                  )}
                  {selectedOrder.table && (
                    <p className="text-gray-600 mt-1">{selectedOrder.table}</p>
                  )}
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Order Items</h4>
                <div className="space-y-3">
                  {selectedOrder.itemsList.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
                  <span>Total Amount</span>
                  <span>₹{selectedOrder.total}</span>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <div className="flex gap-3">
                <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Update Status
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                  Contact Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}