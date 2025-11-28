import React, { useState } from "react";

// Professional SVG Icons
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

const DownloadIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const BulkGenerateIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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

const RestaurantIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8" />
    <path d="M12 11v11" />
    <path d="M16 7.5V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v2.5" />
    <path d="M18 22V12.5a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4V22" />
    <rect x="6" y="2" width="12" height="6" rx="1" />
  </svg>
);

export default function QRPage() {
  const [qrs, setQrs] = useState(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      code: `QR-${1000 + i}`,
      table: `Table ${i + 1}`,
      status: i % 4 === 0 ? "Assigned" : i % 4 === 1 ? "Active" : i % 4 === 2 ? "Inactive" : "Pending",
      restaurant: i % 3 === 0 ? "SpiceHouse" : i % 3 === 1 ? "City Grill" : "La Patisserie",
      scans: Math.floor(Math.random() * 150) + 10,
      lastScan: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    }))
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [restaurantFilter, setRestaurantFilter] = useState("All");
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [bulkSettings, setBulkSettings] = useState({
    count: 10,
    prefix: "QR-",
    restaurant: "SpiceHouse",
    startTable: 1,
  });

  // Filter QR codes based on search and filters
  const filteredQrs = qrs.filter(qr => {
    const matchesSearch = qr.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         qr.table.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || qr.status === statusFilter;
    const matchesRestaurant = restaurantFilter === "All" || qr.restaurant === restaurantFilter;
    
    return matchesSearch && matchesStatus && matchesRestaurant;
  });

  function bulkGenerate() {
    const nextId = qrs.length + 1;
    const newQrs = Array.from({ length: bulkSettings.count }).map((_, i) => ({
      id: nextId + i,
      code: `${bulkSettings.prefix}${1000 + nextId + i}`,
      table: `Table ${bulkSettings.startTable + i}`,
      status: "Active",
      restaurant: bulkSettings.restaurant,
      scans: 0,
      lastScan: "Never",
    }));
    
    setQrs(prev => [...newQrs, ...prev]);
    setShowBulkModal(false);
    setBulkSettings({
      count: 10,
      prefix: "QR-",
      restaurant: "SpiceHouse",
      startTable: 1,
    });
  }

  function downloadQRs() {
    // Simulate download
    alert(`Downloading ${filteredQrs.length} QR codes as PDF`);
  }

  function getStatusColor(status) {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 border-green-200";
      case "Assigned": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Inactive": return "bg-gray-100 text-gray-800 border-gray-200";
      case "Pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <QrCodeIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">QR Code Management</h1>
          </div>
          <p className="text-gray-600">Manage and generate QR codes for your restaurant tables</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total QR Codes</p>
                    <p className="text-2xl font-bold text-gray-900">{qrs.length}</p>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <QrCodeIcon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Codes</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {qrs.filter(q => q.status === "Active").length}
                    </p>
                  </div>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <div className="w-5 h-5 text-green-600">✓</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Scans</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {qrs.reduce((sum, q) => sum + q.scans, 0)}
                    </p>
                  </div>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <div className="w-5 h-5 text-purple-600">👁️</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Restaurants</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {new Set(qrs.map(q => q.restaurant)).size}
                    </p>
                  </div>
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <RestaurantIcon className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Controls Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 max-w-md">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search QR codes or tables..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-3">
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Assigned">Assigned</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Pending">Pending</option>
                    </select>

                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={restaurantFilter}
                      onChange={(e) => setRestaurantFilter(e.target.value)}
                    >
                      <option value="All">All Restaurants</option>
                      <option value="SpiceHouse">SpiceHouse</option>
                      <option value="City Grill">City Grill</option>
                      <option value="La Patisserie">La Patisserie</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowBulkModal(true)}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <BulkGenerateIcon className="w-4 h-4" />
                    Generate Bulk
                  </button>
                  <button
                    onClick={downloadQRs}
                    className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* QR Grid */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">QR Codes</h2>
                <span className="text-sm text-gray-500">
                  Showing {filteredQrs.length} of {qrs.length} codes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredQrs.map((qr) => (
                  <div
                    key={qr.id}
                    className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* QR Code Placeholder */}
                    <div className="bg-gray-100 rounded-lg p-4 mb-3 flex items-center justify-center aspect-square">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📱</div>
                        <div className="text-xs text-gray-600 font-mono">{qr.code}</div>
                      </div>
                    </div>

                    {/* QR Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{qr.table}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(qr.status)}`}>
                          {qr.status}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <RestaurantIcon className="w-3 h-3" />
                        {qr.restaurant}
                      </div>

                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{qr.scans} scans</span>
                        <span>Last: {qr.lastScan}</span>
                      </div>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 rounded-xl bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <button className="bg-white px-3 py-1 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-shadow">
                          Edit
                        </button>
                        <button className="bg-white px-3 py-1 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-shadow">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredQrs.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📷</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No QR codes found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                  <button
                    onClick={() => setShowBulkModal(true)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    Generate New Codes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Settings Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="p-1.5 bg-gray-100 rounded-lg">
                  <QrCodeIcon className="w-4 h-4 text-gray-600" />
                </div>
                QR Settings
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Default URL
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="/menu"
                    defaultValue="/menu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assign to Restaurant
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>SpiceHouse</option>
                    <option>City Grill</option>
                    <option>La Patisserie</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    QR Code Size
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Small (200x200)</option>
                    <option>Medium (300x300)</option>
                    <option>Large (400x400)</option>
                  </select>
                </div>

                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Save Settings
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 text-sm font-medium hover:bg-opacity-30 transition-all">
                  Print All Active
                </button>
                <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 text-sm font-medium hover:bg-opacity-30 transition-all">
                  Assign Multiple
                </button>
                <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 text-sm font-medium hover:bg-opacity-30 transition-all">
                  Update Status
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-green-100">
                Use bulk generation with unique table numbers to streamline restaurant setup. Each QR code can be assigned to specific tables for better tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Generate Modal */}
      {showBulkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Generate QR Codes in Bulk</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Codes
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={bulkSettings.count}
                  onChange={(e) => setBulkSettings(prev => ({ ...prev, count: parseInt(e.target.value) }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code Prefix
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={bulkSettings.prefix}
                  onChange={(e) => setBulkSettings(prev => ({ ...prev, prefix: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={bulkSettings.restaurant}
                  onChange={(e) => setBulkSettings(prev => ({ ...prev, restaurant: e.target.value }))}
                >
                  <option>SpiceHouse</option>
                  <option>City Grill</option>
                  <option>La Patisserie</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Table Number
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={bulkSettings.startTable}
                  onChange={(e) => setBulkSettings(prev => ({ ...prev, startTable: parseInt(e.target.value) }))}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowBulkModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={bulkGenerate}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Generate {bulkSettings.count} Codes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}