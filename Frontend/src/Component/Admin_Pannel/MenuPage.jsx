import React, { useState } from "react";

// Professional SVG Icons
const MenuIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

const PlusIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const EditIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
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

const ToggleOnIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <circle cx="16" cy="12" r="3" />
  </svg>
);

const ToggleOffIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <circle cx="8" cy="12" r="3" />
  </svg>
);

const ImageIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default function Menu() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "French Fries",
      category: "Starters",
      price: 120,
      available: true,
      description: "Crispy golden fries with sea salt",
      image: "🍟",
      popular: true,
      preparationTime: 10,
      calories: 365,
      ingredients: ["Potatoes", "Sea Salt", "Vegetable Oil"]
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 350,
      available: true,
      description: "Classic pizza with fresh tomatoes and mozzarella",
      image: "🍕",
      popular: true,
      preparationTime: 20,
      calories: 285,
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      category: "Dessert",
      price: 180,
      available: false,
      description: "Warm chocolate cake with molten center",
      image: "🍫",
      popular: false,
      preparationTime: 15,
      calories: 420,
      ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Sugar"]
    },
    {
      id: 4,
      name: "Fresh Orange Juice",
      category: "Beverages",
      price: 90,
      available: true,
      description: "Freshly squeezed orange juice",
      image: "🧃",
      popular: true,
      preparationTime: 5,
      calories: 110,
      ingredients: ["Fresh Oranges"]
    }
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    category: "Starters",
    price: "",
    description: "",
    preparationTime: 15,
    calories: 0,
    ingredients: [""]
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Categories with icons
  const categories = [
    { name: "All", icon: "📁", count: menu.length },
    { name: "Starters", icon: "🍤", count: menu.filter(item => item.category === "Starters").length },
    { name: "Pizza", icon: "🍕", count: menu.filter(item => item.category === "Pizza").length },
    { name: "Dessert", icon: "🍰", count: menu.filter(item => item.category === "Dessert").length },
    { name: "Beverages", icon: "🥤", count: menu.filter(item => item.category === "Beverages").length },
    { name: "Main Course", icon: "🍛", count: menu.filter(item => item.category === "Main Course").length }
  ];

  // Stats
  const stats = [
    { label: "Total Items", value: menu.length, change: "+5%", trend: "up" },
    { label: "Available Items", value: menu.filter(item => item.available).length, change: "+2%", trend: "up" },
    { label: "Popular Items", value: menu.filter(item => item.popular).length, change: "+8%", trend: "up" },
    { label: "Avg. Price", value: `₹${Math.round(menu.reduce((sum, item) => sum + item.price, 0) / menu.length)}`, change: "+3%", trend: "up" }
  ];

  // Filter menu items
  const filteredMenu = menu.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesAvailability = availabilityFilter === "All" || 
                               (availabilityFilter === "Available" && item.available) ||
                               (availabilityFilter === "Unavailable" && !item.available);
    
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  function addItem() {
    if (!newItem.name || !newItem.price) return;

    const item = {
      ...newItem,
      id: Date.now(),
      price: Number(newItem.price),
      available: true,
      popular: false,
      image: "🍽️",
      ingredients: newItem.ingredients.filter(ing => ing.trim() !== "")
    };

    setMenu(prev => [item, ...prev]);
    setShowAddModal(false);
    setNewItem({
      name: "",
      category: "Starters",
      price: "",
      description: "",
      preparationTime: 15,
      calories: 0,
      ingredients: [""]
    });
  }

  function toggleAvailability(id) {
    setMenu(prev =>
      prev.map(item =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  }

  function deleteItem(id) {
    setMenu(prev => prev.filter(item => item.id !== id));
  }

  function togglePopular(id) {
    setMenu(prev =>
      prev.map(item =>
        item.id === id ? { ...item, popular: !item.popular } : item
      )
    );
  }

  function addIngredient() {
    setNewItem(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, ""]
    }));
  }

  function updateIngredient(index, value) {
    setNewItem(prev => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) => i === index ? value : ing)
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <MenuIcon className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
          </div>
          <p className="text-gray-600">Create and manage your restaurant menu items</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
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
                      placeholder="Search menu items..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-3">
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(cat => (
                        <option key={cat.name} value={cat.name}>
                          {cat.name} ({cat.count})
                        </option>
                      ))}
                    </select>

                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={availabilityFilter}
                      onChange={(e) => setAvailabilityFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <PlusIcon className="w-4 h-4" />
                  Add New Item
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedCategory === category.name
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                    <div className="text-xs text-gray-500">{category.count} items</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Menu Items</h2>
                  <span className="text-sm text-gray-500">
                    Showing {filteredMenu.length} of {menu.length} items
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredMenu.map(item => (
                    <div
                      key={item.id}
                      className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                        item.available ? "border-green-200" : "border-red-200"
                      } ${item.popular ? "ring-2 ring-yellow-400" : ""}`}
                    >
                      {/* Popular Badge */}
                      {item.popular && (
                        <div className="absolute -top-2 -right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </div>
                      )}

                      {/* Item Image/Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{item.image}</div>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          item.available 
                            ? "bg-green-100 text-green-800 border border-green-200" 
                            : "bg-red-100 text-red-800 border border-red-200"
                        }`}>
                          {item.available ? (
                            <ToggleOnIcon className="w-3 h-3" />
                          ) : (
                            <ToggleOffIcon className="w-3 h-3" />
                          )}
                          {item.available ? "Available" : "Unavailable"}
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                          <span className="text-lg font-bold text-green-600">₹{item.price}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                          <span>⏱️ {item.preparationTime}min</span>
                          {item.calories > 0 && <span>🔥 {item.calories} cal</span>}
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

                        {/* Ingredients */}
                        <div className="flex flex-wrap gap-1">
                          {item.ingredients.slice(0, 3).map((ingredient, index) => (
                            <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {ingredient}
                            </span>
                          ))}
                          {item.ingredients.length > 3 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{item.ingredients.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleAvailability(item.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              item.available
                                ? "text-red-600 hover:bg-red-50"
                                : "text-green-600 hover:bg-green-50"
                            }`}
                            title={item.available ? "Disable Item" : "Enable Item"}
                          >
                            {item.available ? <ToggleOffIcon className="w-4 h-4" /> : <ToggleOnIcon className="w-4 h-4" />}
                          </button>
                          
                          <button
                            onClick={() => togglePopular(item.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              item.popular
                                ? "text-yellow-600 hover:bg-yellow-50"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                            title={item.popular ? "Remove Popular" : "Mark Popular"}
                          >
                            ⭐
                          </button>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingItem(item)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Item"
                          >
                            <EditIcon className="w-4 h-4" />
                          </button>
                          
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Item"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredMenu.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🍽️</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No menu items found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors"
                    >
                      Add Your First Item
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Available Items</span>
                  <span className="font-semibold">{menu.filter(item => item.available).length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Popular Items</span>
                  <span className="font-semibold">{menu.filter(item => item.popular).length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Avg. Price</span>
                  <span className="font-semibold">
                    ₹{Math.round(menu.reduce((sum, item) => sum + item.price, 0) / menu.length)}
                  </span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-blue-100">
                Mark your best-selling items as "Popular" to highlight them on the digital menu and increase sales.
              </p>
            </div>

            {/* Category Distribution */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Category Distribution</h3>
              <div className="space-y-3">
                {categories.slice(1).map(category => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-sm text-gray-700">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(category.count / menu.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-6 text-right">{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Item Modal */}
      {(showAddModal || editingItem) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {editingItem ? "Edit Menu Item" : "Add New Menu Item"}
                </h3>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingItem(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter item name"
                    value={editingItem ? editingItem.name : newItem.name}
                    onChange={(e) => editingItem 
                      ? setEditingItem({...editingItem, name: e.target.value})
                      : setNewItem({...newItem, name: e.target.value})
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={editingItem ? editingItem.category : newItem.category}
                    onChange={(e) => editingItem
                      ? setEditingItem({...editingItem, category: e.target.value})
                      : setNewItem({...newItem, category: e.target.value})
                    }
                  >
                    <option value="Starters">Starters</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Main Course">Main Course</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter price"
                    value={editingItem ? editingItem.price : newItem.price}
                    onChange={(e) => editingItem
                      ? setEditingItem({...editingItem, price: e.target.value})
                      : setNewItem({...newItem, price: e.target.value})
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preparation Time (min)
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Preparation time"
                    value={editingItem ? editingItem.preparationTime : newItem.preparationTime}
                    onChange={(e) => editingItem
                      ? setEditingItem({...editingItem, preparationTime: e.target.value})
                      : setNewItem({...newItem, preparationTime: e.target.value})
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  rows="3"
                  placeholder="Describe the menu item..."
                  value={editingItem ? editingItem.description : newItem.description}
                  onChange={(e) => editingItem
                    ? setEditingItem({...editingItem, description: e.target.value})
                    : setNewItem({...newItem, description: e.target.value})
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ingredients
                </label>
                <div className="space-y-2">
                  {(editingItem ? editingItem.ingredients : newItem.ingredients).map((ingredient, index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder={`Ingredient ${index + 1}`}
                      value={ingredient}
                      onChange={(e) => editingItem
                        ? setEditingItem({
                            ...editingItem,
                            ingredients: editingItem.ingredients.map((ing, i) => i === index ? e.target.value : ing)
                          })
                        : updateIngredient(index, e.target.value)
                      }
                    />
                  ))}
                  <button
                    onClick={addIngredient}
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Add Another Ingredient
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Calories
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Calories"
                    value={editingItem ? editingItem.calories : newItem.calories}
                    onChange={(e) => editingItem
                      ? setEditingItem({...editingItem, calories: e.target.value})
                      : setNewItem({...newItem, calories: e.target.value})
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Icon
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={editingItem ? editingItem.image : newItem.image}
                    onChange={(e) => editingItem
                      ? setEditingItem({...editingItem, image: e.target.value})
                      : setNewItem({...newItem, image: e.target.value})
                    }
                  >
                    <option value="🍽️">🍽️ Plate</option>
                    <option value="🍕">🍕 Pizza</option>
                    <option value="🍔">🍔 Burger</option>
                    <option value="🍟">🍟 Fries</option>
                    <option value="🍰">🍰 Dessert</option>
                    <option value="🥤">🥤 Drink</option>
                    <option value="🍛">🍛 Curry</option>
                    <option value="🍤">🍤 Seafood</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingItem(null);
                  }}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={editingItem ? () => {
                    setMenu(prev => prev.map(item => item.id === editingItem.id ? editingItem : item));
                    setEditingItem(null);
                  } : addItem}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  {editingItem ? "Update Item" : "Add Item"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}