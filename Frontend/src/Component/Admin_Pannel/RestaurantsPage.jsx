import React, { useState } from "react";

// Professional SVG Icons
const RestaurantIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8" />
    <path d="M12 11v11" />
    <path d="M16 7.5V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v2.5" />
    <path d="M18 22V12.5a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4V22" />
    <rect x="6" y="2" width="12" height="6" rx="1" />
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MapPinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CrownIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const QrCodeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="3" y="15" width="6" height="6" rx="1" />
    <path d="M15 15h3" />
    <path d="M18 18v3" />
    <path d="M15 21h3" />
  </svg>
);

const MenuIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const EditIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const MoreVerticalIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const PlusIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const SearchIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const FilterIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([
    {
      id: "r1",
      name: "SpiceHouse",
      owner: "Aman Sharma",
      email: "aman@spicehouse.com",
      phone: "+91 98765 43210",
      city: "Delhi",
      address: "123 Connaught Place, Delhi 110001",
      plan: "Pro",
      monthlyRevenue: 12500,
      qrs: 20,
      menuCount: 32,
      status: "Active",
      joinDate: "2024-01-15",
      rating: 4.5,
      reviews: 128,
      image: "🌶️",
      cuisine: "North Indian",
      openingHours: "11:00 AM - 11:00 PM"
    },
    {
      id: "r2",
      name: "City Grill",
      owner: "Ritu Patel",
      email: "ritu@citygrill.com",
      phone: "+91 98765 43211",
      city: "Mumbai",
      address: "456 Marine Drive, Mumbai 400020",
      plan: "Basic",
      monthlyRevenue: 8900,
      qrs: 200,
      menuCount: 18,
      status: "Active",
      joinDate: "2024-02-10",
      rating: 4.2,
      reviews: 95,
      image: "🍖",
      cuisine: "Barbecue",
      openingHours: "12:00 PM - 12:00 AM"
    },
    {
      id: "r3",
      name: "La Patisserie",
      owner: "Simran Kaur",
      email: "simran@lapatisserie.com",
      phone: "+91 98765 43212",
      city: "Chandigarh",
      address: "789 Sector 17, Chandigarh 160017",
      plan: "Pro",
      monthlyRevenue: 15200,
      qrs: 10,
      menuCount: 24,
      status: "Suspended",
      joinDate: "2024-01-28",
      rating: 4.8,
      reviews: 210,
      image: "🍰",
      cuisine: "French Bakery",
      openingHours: "7:00 AM - 10:00 PM"
    },
    {
      id: "r4",
      name: "Ocean Bistro",
      owner: "Rahul Verma",
      email: "rahul@oceanbistro.com",
      phone: "+91 98765 43213",
      city: "Goa",
      address: "321 Beach Road, Goa 403001",
      plan: "Enterprise",
      monthlyRevenue: 21800,
      qrs: 45,
      menuCount: 38,
      status: "Active",
      joinDate: "2024-03-05",
      rating: 4.6,
      reviews: 156,
      image: "🐟",
      cuisine: "Seafood",
      openingHours: "10:00 AM - 11:00 PM"
    }
  ]);

  const [selected, setSelected] = useState(restaurants[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [planFilter, setPlanFilter] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);

  // Stats
  const stats = [
    { 
      label: "Total Restaurants", 
      value: restaurants.length, 
      change: "+12%", 
      trend: "up",
      icon: <RestaurantIcon className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      label: "Active", 
      value: restaurants.filter(r => r.status === "Active").length, 
      change: "+8%", 
      trend: "up",
      icon: <UsersIcon className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    { 
      label: "Monthly Revenue", 
      value: `₹${restaurants.reduce((sum, r) => sum + r.monthlyRevenue, 0).toLocaleString()}`,
      change: "+15%", 
      trend: "up",
      icon: <TrendingUpIcon className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    },
    { 
      label: "Avg. Rating", 
      value: (restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length).toFixed(1),
      change: "+0.2", 
      trend: "up",
      icon: "⭐",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  // Filter restaurants
  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || restaurant.status === statusFilter;
    const matchesPlan = planFilter === "All" || restaurant.plan === planFilter;
    
    return matchesSearch && matchesStatus && matchesPlan;
  });

  function toggleSuspend(id) {
    setRestaurants(rs =>
      rs.map(r =>
        r.id === id
          ? { ...r, status: r.status === "Active" ? "Suspended" : "Active" }
          : r
      )
    );
  }

  function getPlanColor(plan) {
    switch (plan) {
      case "Basic": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Pro": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Enterprise": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }

  function getStatusColor(status) {
    return status === "Active" 
      ? "bg-green-100 text-green-800 border-green-200" 
      : "bg-red-100 text-red-800 border-red-200";
  }

  return (
    <div className="h-auto bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <RestaurantIcon className="w-6 h-6 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Restaurant Management</h1>
          </div>
          <p className="text-gray-600">Manage all your restaurant partners and their subscriptions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className={`flex items-center gap-1 text-sm font-medium mt-1 ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    <TrendingUpIcon className={`w-4 h-4 ${stat.trend === "down" ? "transform rotate-180" : ""}`} />
                    {stat.change}
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Controls */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search restaurants, owners, or cities..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-3">
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Suspended">Suspended</option>
                    </select>

                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={planFilter}
                      onChange={(e) => setPlanFilter(e.target.value)}
                    >
                      <option value="All">All Plans</option>
                      <option value="Basic">Basic</option>
                      <option value="Pro">Pro</option>
                      <option value="Enterprise">Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <FilterIcon className="w-4 h-4" />
                    More Filters
                  </button>
                  <button 
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Add Restaurant
                  </button>
                </div>
              </div>
            </div>

            {/* Restaurants Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">All Restaurants</h2>
                  <span className="text-sm text-gray-500">
                    Showing {filteredRestaurants.length} of {restaurants.length} restaurants
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Restaurant</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metrics</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredRestaurants.map((restaurant) => (
                      <tr 
                        key={restaurant.id} 
                        className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                          selected?.id === restaurant.id ? 'bg-orange-50' : ''
                        }`}
                        onClick={() => setSelected(restaurant)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{restaurant.image}</div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{restaurant.name}</div>
                              <div className="text-sm text-gray-500">{restaurant.cuisine}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{restaurant.owner}</div>
                          <div className="text-sm text-gray-500">{restaurant.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-900">
                            <MapPinIcon className="w-4 h-4 mr-1 text-gray-400" />
                            {restaurant.city}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPlanColor(restaurant.plan)}`}>
                            {restaurant.plan}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <QrCodeIcon className="w-4 h-4 mr-1 text-blue-500" />
                              <span>{restaurant.qrs}</span>
                            </div>
                            <div className="flex items-center">
                              <MenuIcon className="w-4 h-4 mr-1 text-green-500" />
                              <span>{restaurant.menuCount}</span>
                            </div>
                            <div className="flex items-center">
                              <CrownIcon className="w-4 h-4 mr-1 text-amber-500" />
                              <span>{restaurant.rating}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(restaurant.status)}`}>
                            {restaurant.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSuspend(restaurant.id);
                              }}
                              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                                restaurant.status === "Active"
                                  ? "text-red-600 bg-red-50 hover:bg-red-100"
                                  : "text-green-600 bg-green-50 hover:bg-green-100"
                              }`}
                            >
                              {restaurant.status === "Active" ? "Suspend" : "Activate"}
                            </button>
                            <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                              <MoreVerticalIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredRestaurants.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🏪</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No restaurants found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors"
                    >
                      Add New Restaurant
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Restaurant Details */}
          <div className="space-y-6">
            {selected ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Restaurant Details</h3>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                      <EditIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Restaurant Header */}
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{selected.image}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{selected.name}</h4>
                      <p className="text-gray-600">{selected.cuisine}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-amber-500">⭐ {selected.rating}</span>
                        <span className="text-gray-400 mx-2">•</span>
                        <span className="text-gray-600">{selected.reviews} reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Status & Plan */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(selected.status)}`}>
                        {selected.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Plan</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPlanColor(selected.plan)}`}>
                        {selected.plan}
                      </span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Contact Information</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Owner:</span>
                        <span className="font-medium">{selected.owner}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{selected.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium">{selected.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{selected.city}</span>
                      </div>
                    </div>
                  </div>

                  {/* Business Metrics */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Business Metrics</h5>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-900">₹{selected.monthlyRevenue.toLocaleString()}</div>
                        <div className="text-gray-600">Monthly Revenue</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-900">{selected.menuCount}</div>
                        <div className="text-gray-600">Menu Items</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-900">{selected.qrs}</div>
                        <div className="text-gray-600">QR Codes</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-gray-900">{selected.reviews}</div>
                        <div className="text-gray-600">Reviews</div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Additional Information</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Joined:</span>
                        <span className="font-medium">{new Date(selected.joinDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Opening Hours:</span>
                        <span className="font-medium">{selected.openingHours}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Address:</span>
                        <span className="font-medium text-right">{selected.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                      Upgrade Plan
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Assign QR
                      </button>
                      <button className="bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        View Analytics
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-6xl mb-4">🏪</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Restaurant Selected</h3>
                <p className="text-gray-600">Select a restaurant from the list to view details</p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 text-sm font-medium hover:bg-opacity-30 transition-all">
                  Bulk QR Generation
                </button>
                <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 text-sm font-medium hover:bg-opacity-30 transition-all">
                  Send Announcement
                </button>
                <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 text-sm font-medium hover:bg-opacity-30 transition-all">
                  Export Data
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-blue-100">
                Use bulk actions to manage multiple restaurants at once. You can upgrade plans, assign QR codes, or send announcements in bulk.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Restaurant Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Add New Restaurant</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name</label>
                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                Add Restaurant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}