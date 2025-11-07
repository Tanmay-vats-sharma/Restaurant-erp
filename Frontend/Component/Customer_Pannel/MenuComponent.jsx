import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import FoodFilter from './FoodFilter';

// ========== CATEGORIES / ITEMS (each item now has a `type`: 'veg' | 'nonveg' | 'mixed') ==========
const CATEGORIES = [
  {
    id: 1,
    name: "Whopper",
    emoji: "🍔",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&h=150&fit=crop&crop=center",
    items: [
      {
        name: "Whopper",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
        description: "Our signature flame-grilled beef patty topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.",
        calories: 660,
        type: "nonveg"
      },
      {
        name: "Whopper Jr.",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
        description: "All the flavor of the Whopper but sized just right. Flame-grilled beef patty with fresh toppings.",
        calories: 310,
        type: "nonveg"
      },
      {
        name: "Bacon King",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
        description: "Two flame-grilled beef patties, topped with a hearty portion of thick-cut smoked bacon, melted cheese, ketchup and mayonnaise on a soft sesame seed bun.",
        calories: 790,
        type: "nonveg"
      }
    ]
  },
  {
    id: 2,
    name: "Chicken",
    emoji: "🍗",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=150&h=150&fit=crop&crop=center",
    items: [
      {
        name: "Crispy Chicken",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
        description: "Crispy, juicy chicken fillet topped with fresh lettuce and creamy mayonnaise on a soft sesame seed bun.",
        calories: 420,
        type: "nonveg"
      },
      {
        name: "Spicy Chicken",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        description: "Spicy, juicy chicken fillet with a kick of heat, topped with fresh lettuce and spicy sauce.",
        calories: 450,
        type: "nonveg"
      },
      {
        name: "Chicken Fries",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
        description: "Crispy, tender chicken fries perfect for dipping in your favorite sauce.",
        calories: 280,
        type: "nonveg"
      }
    ]
  },
  {
    id: 3,
    name: "Sides",
    emoji: "🍟",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=150&h=150&fit=crop&crop=center",
    items: [
      {
        name: "French Fries",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop",
        description: "Golden, crispy fries perfectly salted and served hot.",
        calories: 320,
        type: "veg"
      },
      {
        name: "Onion Rings",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1636567821812-d86b1d08d0e3?w=400&h=300&fit=crop",
        description: "Crispy, golden-brown onion rings with a light, crunchy coating.",
        calories: 280,
        type: "veg"
      },
      {
        name: "Mozzarella Sticks",
        price: 4.29,
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=300&fit=crop",
        description: "Breaded mozzarella cheese sticks, fried to perfection. Served with marinara sauce.",
        calories: 340,
        type: "veg"
      }
    ]
  },
  {
    id: 4,
    name: "Drinks",
    emoji: "🥤",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=150&h=150&fit=crop&crop=center",
    items: [
      {
        name: "Coca-Cola",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        description: "Ice-cold Coca-Cola classic. Available in small, medium, and large sizes.",
        calories: 140,
        type: "veg"
      },
      {
        name: "Iced Tea",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1597481499750-3e11b3e2c5e6?w=400&h=300&fit=crop",
        description: "Refreshing iced tea, sweetened or unsweetened. Perfect thirst quencher.",
        calories: 70,
        type: "veg"
      },
      {
        name: "Orange Juice",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop",
        description: "Freshly squeezed orange juice, packed with vitamin C.",
        calories: 110,
        type: "veg"
      }
    ]
  },
  {
    id: 5,
    name: "Desserts",
    emoji: "🍰",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=150&h=150&fit=crop&crop=center",
    items: [
      {
        name: "Ice Cream",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=400&h=300&fit=crop",
        description: "Creamy vanilla soft serve ice cream. Perfect sweet treat to end your meal.",
        calories: 180,
        type: "veg"
      },
      {
        name: "Apple Pie",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1541167767982-cc0e596d59b7?w=400&h=300&fit=crop",
        description: "Warm, flaky pastry filled with cinnamon-spiced apples.",
        calories: 240,
        type: "veg"
      },
      {
        name: "Chocolate Cake",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        description: "Rich, moist chocolate cake with creamy chocolate frosting.",
        calories: 320,
        type: "veg"
      }
    ]
  },
  {
    id: 6,
    name: "Deals",
    emoji: "🎁",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&h=150&fit=crop&crop=center",
    items: [
      {
        name: "2 for $5",
        price: 5.0,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
        description: "Mix and match any two selected items for just $5. Choose from burgers, chicken sandwiches, and more.",
        calories: "Varies",
        type: "mixed"
      },
      {
        name: "Family Bundle",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop",
        description: "Perfect for the whole family! Includes 4 burgers, 4 fries, and 4 drinks.",
        calories: "Varies",
        type: "mixed"
      },
      {
        name: "King's Meal",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        description: "Our premium meal deal featuring a Whopper, large fries, and large drink.",
        calories: 1180,
        type: "nonveg"
      }
    ]
  },
  {
    id: 7,
    name: "Salads",
    emoji: "🥗",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=150&fit=crop&crop=center",
    items: [
      {
        name: "Garden Salad",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        description: "Fresh mixed greens, cherry tomatoes, cucumbers, and carrots served with your choice of dressing.",
        calories: 120,
        type: "veg"
      }
    ]
  }
];

// ========== useCart hook (kept same as your code) ==========
const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((itemName) => {
    setCart(prevCart => prevCart.filter(item => item.name !== itemName));
  }, []);

  const updateQuantity = useCallback((itemName, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemName);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.name === itemName ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }, [removeFromCart]);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity || 0), 0).toFixed(2);
  }, [cart]);

  const getTotalItems = useCallback(() => {
    return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    setCart
  };
};

// ========== Subcomponents (CategoryButton, Navigation, Menu Items etc.) ==========
const CategoryButton = ({ category, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center transition-all duration-300 transform ${isActive ? 'scale-110 -translate-y-1' : 'opacity-90 hover:opacity-100 hover:scale-105'}`}
    aria-pressed={isActive}
    title={category.name}
  >
    <div className={`relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 ${isActive ? 'border-amber-400 shadow-amber-200' : 'border-gray-200'}`}>
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {isActive && (
        <div className="absolute inset-0 bg-amber-400/20 border-2 border-amber-400 rounded-2xl" />
      )}
    </div>
    <span className={`mt-2 font-semibold text-sm ${isActive ? 'text-red-600 font-bold' : 'text-gray-700'}`}>
      <span className="mr-1">{category.emoji}</span>
      {category.name}
    </span>
  </button>
);

const DesktopCategoryNavigation = ({ categories, activeCategory, onCategoryChange, scrollLeft, scrollRight, scrollContainerRef }) => (
  <div className="hidden md:block bg-white shadow-xl sticky top-20 z-40 border-b border-gray-200">
    <div className="container mx-auto relative">
      <button 
        onClick={scrollLeft}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-full p-3 z-20 hover:bg-amber-50 transition-all duration-300 border border-gray-200 hover:border-amber-300"
        aria-label="Scroll categories left"
      >
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div 
        ref={scrollContainerRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide px-14 py-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {categories.map((category, index) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={activeCategory === index}
            onClick={() => onCategoryChange(index)}
          />
        ))}
      </div>
      
      <button 
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-full p-3 z-20 hover:bg-amber-50 transition-all duration-300 border border-gray-200 hover:border-amber-300"
        aria-label="Scroll categories right"
      >
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const MobileCategoryNavigation = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="md:hidden ">
    <div className="fixed left-0 top-16 w-16 bg-white border-r border-gray-200 z-30 shadow-lg flex flex-col items-center py-3 h-[calc(100vh-3.5rem)]">
       <div className="mt-2 mb-3">
         <div className="bg-[#4B1E0A] text-white w-12 h-12 rounded-xl flex flex-col items-center justify-center shadow-md  py-2 border-b border-gray-200 z-10 ">
          <h2 className="text-[8px] font-semibold mt-0.5 text-center leading-tight">Categories</h2>
         </div>
       </div>
      <div className="flex-1 overflow-y-auto w-full flex flex-col items-center scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-gray-100 hover:scrollbar-thumb-amber-500 scroll-smooth">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(index)}
            className={`w-full flex flex-col items-center mb-4 px-1 transition-transform duration-200 ${activeCategory === index ? 'translate-x-1' : 'hover:translate-x-1/2'}`}
            aria-pressed={activeCategory === index}
            title={category.name}
          >
            <div className={`relative w-10 h-10 rounded-lg overflow-hidden border-2 flex items-center justify-center ${activeCategory === index ? 'border-amber-400 bg-amber-50' : 'border-gray-200 bg-white'}`}>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {activeCategory === index && (
                <div className="absolute inset-0 bg-amber-400/20 rounded-lg" />
              )}
            </div>
            <span className={`text-[10px] font-medium text-center mt-1 leading-tight ${activeCategory === index ? 'text-red-600' : 'text-gray-600'}`}>
              {category.emoji} <span className="block">{category.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
    <div className="w-16 flex-shrink-0" />
  </div>
);

const MenuItemCard = ({ item, onAddToCart }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden">
    <div className="relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="absolute top-3 right-3 bg-amber-400 text-red-900 px-2 py-0.5 rounded-full font-bold text-sm shadow-lg">
        ${item.price}
      </div>
      {item.calories && (
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-0.5 rounded-full text-xs">
          {item.calories} cal
        </div>
      )}
    </div>

    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center justify-between">
        <span>{item.name}</span>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item.type === 'veg' ? 'bg-green-100 text-green-700' : item.type === 'nonveg' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
          {item.type === 'veg' ? 'Veg' : item.type === 'nonveg' ? 'Non-Veg' : 'Mixed'}
        </span>
      </h3>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-red-600">${item.price}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="text-sm">Add</span>
        </button>
      </div>
    </div>
  </div>
);

const MenuItemsGrid = ({ categories, activeCategory, onAddToCart, filter }) => {
  const currentCategory = useMemo(() => categories[activeCategory], [categories, activeCategory]);

  const filteredItems = useMemo(() => {
    if (!currentCategory) return [];
    if (filter === 'all') return currentCategory.items;
    if (filter === 'veg') return currentCategory.items.filter(it => it.type === 'veg' || it.type === 'mixed');
    if (filter === 'nonveg') return currentCategory.items.filter(it => it.type === 'nonveg' || it.type === 'mixed');
    return currentCategory.items;
  }, [currentCategory, filter]);

  return (
    <div className="container mx-auto px-4 py-8 md:pl-0 overflow-y-auto -mt-6 sm:-mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-16 md:pl-0">
        {filteredItems.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-20">
            No items found for this filter.
          </div>
        ) : (
          filteredItems.map((item, index) => (
            <MenuItemCard
              key={`${currentCategory.id}-${index}`}
              item={item}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
    <img 
      src={item.image} 
      alt={item.name}
      className="w-16 h-16 rounded-lg object-cover"
      loading="lazy"
    />
    <div className="flex-1">
      <h4 className="font-semibold text-gray-800">{item.name}</h4>
      <p className="text-red-600 font-bold">${item.price}</p>
    </div>
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => onUpdateQuantity(item.name, Math.max((item.quantity || 1) - 1, 0))}
        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
        aria-label={`Decrease ${item.name}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <span className="w-8 text-center font-semibold">{item.quantity}</span>
      <button 
        onClick={() => onUpdateQuantity(item.name, (item.quantity || 1) + 1)}
        className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
        aria-label={`Increase ${item.name}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  </div>
);

const CartSidebar = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, getTotalPrice }) => {
  const [mounted, setMounted] = useState(isOpen);

  useEffect(() => {
    let unmountTimer;
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      unmountTimer = setTimeout(() => setMounted(false), 320);
    }
    return () => {
      if (unmountTimer) clearTimeout(unmountTimer);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 bg-black/50 z-50 flex justify-end transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`bg-white w-full max-w-md h-full shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.name}-${index}`}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                  />
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-red-600">${getTotalPrice()}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FloatingCartButton = ({ itemCount, onClick }) => (
  <button 
    onClick={onClick}
    className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-full shadow-2xl z-40 hover:scale-110 transform transition-all duration-300"
    aria-label={`Open cart with ${itemCount} items`}
  >
    <div className="flex items-center space-x-2">
      <span className="font-bold">{itemCount}</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
  </button>
);

// ========== MAIN MENU COMPONENT ==========
const PromotionalBanner = () => (
  <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 text-red-900 py-3 shadow-lg z-50">
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
        <span className="font-bold text-lg">🔥 LIMITED TIME OFFER</span>
        <span className="text-sm">Buy 1 Whopper Get 1 Free</span>
      </div>
    </div>
  </div>
);

const MenuComponent = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filter, setFilter] = useState('all'); // <-- hook for veg/nonveg/all
  const scrollContainerRef = useRef(null);

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }, []);

  const handleCategoryChange = useCallback((index) => {
    setActiveCategory(index);
    // reset filter or keep it? we keep current filter — user might want to persist selection
  }, []);

  const handleAddToCart = useCallback((item) => {
    addToCart(item);
  }, [addToCart]);

  const handleUpdateQuantity = useCallback((itemName, quantity) => {
    updateQuantity(itemName, quantity);
  }, [updateQuantity]);

  // filter change from FoodFilter
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      <PromotionalBanner />

      <div className="pt-14"> {/* spacing for fixed banner */}
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="hidden md:flex items-center">
            <FoodFilter onFilterChange={handleFilterChange} />
          </div>
        </div>

        {/* Desktop category nav (shows on md+) */}
        <DesktopCategoryNavigation
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          scrollContainerRef={scrollContainerRef}
        />

        <div className="relative">
          {/* Mobile category nav + mobile filter */}
          <MobileCategoryNavigation
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Mobile filter below top bar */}
          <div className="md:hidden container mx-auto px-6 py-4">
            <FoodFilter onFilterChange={handleFilterChange} />
          </div>

          {/* Menu items grid with filter */}
          <MenuItemsGrid
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onAddToCart={handleAddToCart}
            filter={filter}
          />
        </div>
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={removeFromCart}
        getTotalPrice={getTotalPrice}
      />

      {/* Floating cart button */}
      {cart.length > 0 && !isCartOpen && (
        <FloatingCartButton
          itemCount={getTotalItems()}
          onClick={() => setIsCartOpen(true)}
        />
      )}
    </div>
  );
};

export default MenuComponent;
