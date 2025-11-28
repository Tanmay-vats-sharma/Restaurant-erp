import React, { useState } from 'react';

// Feather-like inline icons
const Icon = ({ className = "w-5 h-5", children }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);
const FiSave = (p) => <Icon {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></Icon>;
const FiClock = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></Icon>;
const FiCreditCard = (p) => <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/></Icon>;
const FiBell = (p) => <Icon {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></Icon>;
const FiShield = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Icon>;
const FiUser = (p) => <Icon {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>;
const FiMail = (p) => <Icon {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></Icon>;
const FiMapPin = (p) => <Icon {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></Icon>;
const FiPhone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
const FiGlobe = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>;
const FiDollarSign = (p) => <Icon {...p}><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7a5 5 0 0 0-10 0c0 5 10 3 10 8a5 5 0 0 1-10 0"/></Icon>;
const FiPercent = (p) => <Icon {...p}><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></Icon>;
const FiUpload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></Icon>;
const FiEye = (p) => <Icon {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8"/><circle cx="12" cy="12" r="3"/></Icon>;
const FiEyeOff = (p) => <Icon {...p}><path d="M1 1l22 22"/><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.86 21.86 0 0 1 5.06-6.94"/><path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.86 21.86 0 0 1-2.16 3.19"/><path d="M12 12a3 3 0 0 1-3-3"/><path d="M15 15a3 3 0 0 1-3-3"/></Icon>;
const FiCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const FiX = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>;
const FiEdit = (p) => <Icon {...p}><path d="M11 4h9"/><path d="M3 21v-4L17.5 2.5a2.1 2.1 0 0 1 3 3L6 20z"/></Icon>;
const FiTrash2 = (p) => <Icon {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></Icon>;
const FiPlus = (p) => <Icon {...p}><path d="M12 5v14"/><path d="M5 12h14"/></Icon>;

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "The Grand Restaurant",
    email: "info@grandrestaurant.com",
    phone: "+91 9876543210",
    address: "123 Restaurant Street, Food City, FC 123456",
    description: "A fine dining restaurant serving authentic cuisine with fresh ingredients and exceptional service.",
    website: "www.grandrestaurant.com",
    cuisineType: "Multi-cuisine",
    capacity: "120",
    established: "2018"
  });

  const [businessHours, setBusinessHours] = useState([
    { day: 'Monday', open: '09:00', close: '22:00', closed: false },
    { day: 'Tuesday', open: '09:00', close: '22:00', closed: false },
    { day: 'Wednesday', open: '09:00', close: '22:00', closed: false },
    { day: 'Thursday', open: '09:00', close: '22:00', closed: false },
    { day: 'Friday', open: '09:00', close: '23:00', closed: false },
    { day: 'Saturday', open: '10:00', close: '23:00', closed: false },
    { day: 'Sunday', open: '10:00', close: '21:00', closed: false }
  ]);

  const [taxSettings, setTaxSettings] = useState({
    gstRate: 18,
    serviceCharge: 10,
    inclusivePricing: true
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    orderAlerts: true,
    lowStockAlerts: true,
    dailyReports: true,
    weeklyReports: false
  });

  const tabs = [
    { id: 'general', name: 'General', icon: <FiUser /> },
    { id: 'business', name: 'Business Hours', icon: <FiClock /> },
    { id: 'payment', name: 'Payment & Tax', icon: <FiCreditCard /> },
    { id: 'notifications', name: 'Notifications', icon: <FiBell /> },
    { id: 'security', name: 'Security', icon: <FiShield /> }
  ];

  const updateBusinessHours = (index, field, value) => {
    const updated = [...businessHours];
    if (field === 'closed') {
      updated[index].closed = value;
    } else {
      updated[index][field] = value;
    }
    setBusinessHours(updated);
  };

  const saveSettings = () => {
    // In real app, this would call an API
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FiUser className="w-6 h-6 text-blue-600" />
            </div>
            Restaurant Settings
          </h1>
          <p className="text-gray-600 mt-2">Manage your restaurant configuration and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 ">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <FiUser className="w-5 h-5 text-blue-600" />
                    Restaurant Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Restaurant Name *
                      </label>
                      <input 
                        type="text" 
                        value={restaurantInfo.name}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FiMail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        value={restaurantInfo.email}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FiPhone className="w-4 h-4 inline mr-1" />
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        value={restaurantInfo.phone}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cuisine Type
                      </label>
                      <select 
                        value={restaurantInfo.cuisineType}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, cuisineType: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option>Multi-cuisine</option>
                        <option>Italian</option>
                        <option>Chinese</option>
                        <option>Indian</option>
                        <option>Mexican</option>
                        <option>Continental</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FiMapPin className="w-4 h-4 inline mr-1" />
                        Address *
                      </label>
                      <textarea 
                        rows={3}
                        value={restaurantInfo.address}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, address: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea 
                        rows={3}
                        value={restaurantInfo.description}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FiGlobe className="w-4 h-4 inline mr-1" />
                        Website
                      </label>
                      <input 
                        type="url" 
                        value={restaurantInfo.website}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, website: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Seating Capacity
                      </label>
                      <input 
                        type="number" 
                        value={restaurantInfo.capacity}
                        onChange={(e) => setRestaurantInfo({...restaurantInfo, capacity: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Restaurant Logo & Images */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Restaurant Images</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Logo</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">Click to upload logo</p>
                        <p className="text-gray-400 text-xs">Recommended: 200x200px PNG</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Cover Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">Click to upload cover image</p>
                        <p className="text-gray-400 text-xs">Recommended: 1200x400px JPG</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Business Hours */}
            {activeTab === 'business' && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FiClock className="w-5 h-5 text-blue-600" />
                  Business Hours
                </h2>
                
                <div className="space-y-4">
                  {businessHours.map((day, index) => (
                    <div key={day.day} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="font-medium text-gray-800 w-24">{day.day}</span>
                        
                        {!day.closed ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="time"
                              value={day.open}
                              onChange={(e) => updateBusinessHours(index, 'open', e.target.value)}
                              className="border border-gray-300 rounded px-3 py-1"
                            />
                            <span className="text-gray-500">to</span>
                            <input
                              type="time"
                              value={day.close}
                              onChange={(e) => updateBusinessHours(index, 'close', e.target.value)}
                              className="border border-gray-300 rounded px-3 py-1"
                            />
                          </div>
                        ) : (
                          <span className="text-red-500 font-medium">Closed</span>
                        )}
                      </div>
                      
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={day.closed}
                          onChange={(e) => updateBusinessHours(index, 'closed', e.target.checked)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Closed</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Quick Actions</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setBusinessHours(businessHours.map(d => ({...d, closed: false})))}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    >
                      Open All Days
                    </button>
                    <button 
                      onClick={() => setBusinessHours(businessHours.map(d => ({...d, closed: true})))}
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
                    >
                      Close All Days
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Payment & Tax Settings */}
            {activeTab === 'payment' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <FiCreditCard className="w-5 h-5 text-blue-600" />
                    Payment Methods
                  </h2>
                  
                  <div className="space-y-4">
                    {['Credit Card', 'Debit Card', 'UPI', 'Net Banking', 'Cash', 'Digital Wallet'].map(method => (
                      <label key={method} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="font-medium text-gray-800">{method}</span>
                        </div>
                        <FiCreditCard className="w-4 h-4 text-gray-400" />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <FiPercent className="w-5 h-5 text-blue-600" />
                    Tax Settings
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        GST Rate (%)
                      </label>
                      <input 
                        type="number" 
                        value={taxSettings.gstRate}
                        onChange={(e) => setTaxSettings({...taxSettings, gstRate: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Charge (%)
                      </label>
                      <input 
                        type="number" 
                        value={taxSettings.serviceCharge}
                        onChange={(e) => setTaxSettings({...taxSettings, serviceCharge: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={taxSettings.inclusivePricing}
                          onChange={(e) => setTaxSettings({...taxSettings, inclusivePricing: e.target.checked})}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Include taxes in menu prices</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FiBell className="w-5 h-5 text-blue-600" />
                  Notification Preferences
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Notification Channels</h3>
                    <div className="space-y-3">
                      {[
                        { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                        { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive notifications via SMS' },
                      ].map(({ key, label, description }) => (
                        <label key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <div>
                            <div className="font-medium text-gray-800">{label}</div>
                            <div className="text-sm text-gray-600">{description}</div>
                          </div>
                          <input
                            type="checkbox"
                            checked={notificationSettings[key]}
                            onChange={(e) => setNotificationSettings({...notificationSettings, [key]: e.target.checked})}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Alert Types</h3>
                    <div className="space-y-3">
                      {[
                        { key: 'orderAlerts', label: 'New Order Alerts', description: 'Get notified when new orders are placed' },
                        { key: 'lowStockAlerts', label: 'Low Stock Alerts', description: 'Receive alerts when inventory is low' },
                        { key: 'dailyReports', label: 'Daily Reports', description: 'Receive daily summary reports' },
                        { key: 'weeklyReports', label: 'Weekly Reports', description: 'Receive weekly performance reports' },
                      ].map(({ key, label, description }) => (
                        <label key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <div>
                            <div className="font-medium text-gray-800">{label}</div>
                            <div className="text-sm text-gray-600">{description}</div>
                          </div>
                          <input
                            type="checkbox"
                            checked={notificationSettings[key]}
                            onChange={(e) => setNotificationSettings({...notificationSettings, [key]: e.target.checked})}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                    <FiShield className="w-5 h-5 text-blue-600" />
                    Change Password
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Security Preferences</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">Two-Factor Authentication</div>
                        <div className="text-sm text-gray-600">Add an extra layer of security to your account</div>
                      </div>
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </label>
                    
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">Session Timeout</div>
                        <div className="text-sm text-gray-600">Automatically logout after 30 minutes of inactivity</div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </label>
                    
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">Login Notifications</div>
                        <div className="text-sm text-gray-600">Get notified when someone logs into your account</div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button 
                onClick={saveSettings}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <FiSave className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;