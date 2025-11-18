import React, { useState } from 'react';

// Feather-like inline icons
const BaseIcon = ({ className="w-5 h-5", children }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >{children}</svg>
);
const FiPlus = (p) => <BaseIcon {...p}><path d="M12 5v14"/><path d="M5 12h14"/></BaseIcon>;
const FiEdit = (p) => <BaseIcon {...p}><path d="M11 4h9"/><path d="M3 21v-4L17.5 2.5a2.1 2.1 0 0 1 3 3L6 20z"/></BaseIcon>;
const FiTrash2 = (p) => <BaseIcon {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></BaseIcon>;
const FiSearch = (p) => <BaseIcon {...p}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></BaseIcon>;
const FiFilter = (p) => <BaseIcon {...p}><path d="M4 6h16"/><path d="M6 12h12"/><path d="M10 18h8"/></BaseIcon>;
const FiCoffee = (p) => <BaseIcon {...p}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></BaseIcon>;
const FiShoppingBag = (p) => <BaseIcon {...p}><path d="M6 7h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z"/><path d="M9 7a3 3 0 0 0 6 0"/></BaseIcon>;
const FiStar = (p) => <BaseIcon {...p}><polygon points="12 2 15.1 8.5 22 9.3 17 14.1 18.2 21 12 17.7 5.8 21 7 14.1 2 9.3 8.9 8.5 12 2"/></BaseIcon>;
const FiClock = (p) => <BaseIcon {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></BaseIcon>;
const FiDollarSign = (p) => <BaseIcon {...p}><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 7a5 5 0 0 0-10 0c0 5 10 3 10 8a5 5 0 0 1-10 0"/></BaseIcon>;
const FiEye = (p) => <BaseIcon {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8"/><circle cx="12" cy="12" r="3"/></BaseIcon>;
const FiEyeOff = (p) => <BaseIcon {...p}><path d="M1 1l22 22"/><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.86 21.86 0 0 1 5.06-6.94"/><path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.86 21.86 0 0 1-2.16 3.19"/><path d="M12 12a3 3 0 0 1-3-3"/><path d="M15 15a3 3 0 0 1-3-3"/></BaseIcon>;
const FiChevronDown = (p) => <BaseIcon {...p}><polyline points="6 9 12 15 18 9"/></BaseIcon>;
const FiUpload = (p) => <BaseIcon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></BaseIcon>;

// Added helpers
const getPlaceholder = (name) => `https://via.placeholder.com/600x400.png?text=${encodeURIComponent(name)}`;
const ImageWithFallback = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  return (
    <img
      src={error ? 'https://via.placeholder.com/600x400?text=Image' : src}
      alt={alt}
      onError={() => setError(true)}
      loading="lazy"
      className={className}
    />
  );
};

const MenuManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Sample menu data
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh tomatoes, mozzarella, and basil',
      price: 12.99,
      category: 'main-course',
      image: "http://abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-500x500.jpg",
      preparationTime: 15,
      isVegetarian: true,
      isAvailable: true,
      rating: 4.5,
      popular: true
    },
    {
      id: 2,
      name: 'Grilled Chicken',
      description: 'Tender grilled chicken with herbs and spices',
      price: 16.99,
      category: 'main-course',
      image: "https://spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg",
      preparationTime: 20,
      isVegetarian: false,
      isAvailable: true,
      rating: 4.2,
      popular: false
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with Caesar dressing and croutons',
      price: 8.99,
      category: 'appetizers',
      image: "https://shwetainthekitchen.com/wp-content/uploads/2022/09/vegetarian-caesar-salad.jpg",
      preparationTime: 10,
      isVegetarian: true,
      isAvailable: true,
      rating: 4.3,
      popular: true
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      price: 6.99,
      category: 'desserts',
      image: "https://www.billyparisi.com/wp-content/uploads/2022/02/lava-cake-1-500x500.jpg",
      preparationTime: 8,
      isVegetarian: true,
      isAvailable: false,
      rating: 4.8,
      popular: true
    },
    {
      id: 5,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: 3.99,
      category: 'beverages',
      image: "https://cdn1.foodviva.com/static-content/food-images/juice-recipes/mango-juice/mango-juice.jpg",
      preparationTime: 5,
      isVegetarian: true,
      isAvailable: true,
      rating: 4.1,
      popular: false
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Items', count: menuItems.length, icon: <FiShoppingBag /> },
    { id: 'appetizers', name: 'Appetizers', count: menuItems.filter(item => item.category === 'appetizers').length, icon: <FiCoffee /> },
    { id: 'main-course', name: 'Main Course', count: menuItems.filter(item => item.category === 'main-course').length, icon: <FiShoppingBag /> },
    { id: 'desserts', name: 'Desserts', count: menuItems.filter(item => item.category === 'desserts').length, icon: <FiStar /> },
    { id: 'beverages', name: 'Beverages', count: menuItems.filter(item => item.category === 'beverages').length, icon: <FiCoffee /> }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price': return a.price - b.price;
      case 'rating': return b.rating - a.rating;
      case 'time': return a.preparationTime - b.preparationTime;
      default: return a.name.localeCompare(b.name);
    }
  });

  const toggleAvailability = (id) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
    ));
  };

  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const stats = {
    total: menuItems.length,
    available: menuItems.filter(item => item.isAvailable).length,
    popular: menuItems.filter(item => item.popular).length,
    vegetarian: menuItems.filter(item => item.isVegetarian).length
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FiShoppingBag className="w-6 h-6 text-green-600" />
                </div>
                Menu Management
              </h1>
              <p className="text-gray-600 mt-2">Manage your restaurant menu items and categories</p>
            </div>
            
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-200 font-medium"
            >
              <FiPlus className="w-5 h-5" />
              Add New Item
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Items</p>
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
                  <p className="text-sm font-medium text-gray-600">Available</p>
                  <p className="text-2xl font-bold text-green-600">{stats.available}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <FiEye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Popular Items</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.popular}</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <FiStar className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Vegetarian</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.vegetarian}</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FiCoffee className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FiFilter className="w-5 h-5 text-gray-600" />
            Categories
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-green-500 bg-green-50 text-green-700 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedCategory === category.id
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-3">
              <select 
                className="border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="time">Sort by Prep Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedItems.map(item => (
            <div key={item.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div className="relative h-44 bg-gray-100">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                />
                {!item.isAvailable && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">Unavailable</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {item.popular && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-md text-[10px] font-semibold flex items-center gap-1 shadow">
                      <FiStar className="w-3 h-3" /> Popular
                    </span>
                  )}
                  {item.isVegetarian && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded-md text-[10px] font-semibold shadow">
                      Veg
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 flex flex-col h-[220px]">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.name}</h3>
                  <span className="font-bold text-green-600 text-sm">${item.price}</span>
                </div>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3.5 h-3.5" /> {item.preparationTime}m
                  </span>
                  <span className="flex items-center gap-1">
                    <FiStar className="w-3.5 h-3.5 text-yellow-500" /> {item.rating}
                  </span>
                </div>
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-medium transition ${
                      item.isAvailable ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {item.isAvailable ? <FiEyeOff className="w-3.5 h-3.5" /> : <FiEye className="w-3.5 h-3.5" />}
                    {item.isAvailable ? 'Hide' : 'Show'}
                  </button>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
            <FiShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-medium">No menu items found</p>
            <p className="text-gray-400 text-sm mt-2">
              {searchTerm ? 'Try adjusting your search terms' : 'Add your first menu item to get started'}
            </p>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add New Item
            </button>
          </div>
        )}

        {/* Add Item Modal */}
        {isAddModalOpen && (
          <AddItemModal 
            onClose={() => setIsAddModalOpen(false)}
            onAddItem={(newItem) => setMenuItems(prev => [...prev, { ...newItem, id: Date.now() }])}
          />
        )}
      </div>
    </div>
  );
};

// Add Item Modal Component
const AddItemModal = ({ onClose, onAddItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'main-course',
    preparationTime: '',
    isVegetarian: false,
    isAvailable: true,
    popular: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      ...formData,
      price: parseFloat(formData.price),
      preparationTime: parseInt(formData.preparationTime),
      rating: 4.0,
      image: getPlaceholder(formData.name || 'New Item')
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">Add New Menu Item</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiPlus className="w-6 h-6 transform rotate-45" />
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Item Name *
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                step="0.01"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="appetizers">Appetizers</option>
                <option value="main-course">Main Course</option>
                <option value="desserts">Desserts</option>
                <option value="beverages">Beverages</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preparation Time (minutes) *
              </label>
              <input
                type="number"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={formData.preparationTime}
                onChange={(e) => setFormData({...formData, preparationTime: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                checked={formData.isVegetarian}
                onChange={(e) => setFormData({...formData, isVegetarian: e.target.checked})}
              />
              <span className="text-sm text-gray-700">Vegetarian</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                checked={formData.isAvailable}
                onChange={(e) => setFormData({...formData, isAvailable: e.target.checked})}
              />
              <span className="text-sm text-gray-700">Available</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                checked={formData.popular}
                onChange={(e) => setFormData({...formData, popular: e.target.checked})}
              />
              <span className="text-sm text-gray-700">Popular Item</span>
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuManagement;