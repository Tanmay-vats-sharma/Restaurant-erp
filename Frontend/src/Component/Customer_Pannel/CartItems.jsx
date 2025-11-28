import React, { useState, useEffect } from "react";

// --- Food-specific options ---
const FOOD_SIZES = {
  Small: { price: 0, description: "Perfect for a light meal" },
  Medium: { price: 30, description: "Our most popular size" },
  Large: { price: 60, description: "Great for sharing" },
};

const FOOD_ADDONS = {
  "Extra Cheese": { price: 25, popular: true },
  "Double Patty": { price: 40, popular: true },
  "Spicy Sauce": { price: 15 },
  "Bacon Strips": { price: 35, popular: true },
  "Avocado": { price: 30 },
  "Caramelized Onions": { price: 20 },
};

// --- Drink-specific options ---
const DRINK_SIZES = {
  Regular: { price: 0, description: "12oz serving" },
  Large: { price: 20, description: "20oz serving" },
};

const DRINK_OPTIONS = {
  "Ice Level": ["Less Ice", "Normal Ice", "No Ice"],
  "Sugar Level": ["Less Sugar", "Normal Sugar", "No Sugar"],
};

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const safeItem = {
    name: item?.name || "Unknown Item",
    price: item?.price || 0,
    quantity: item?.quantity || 1,
    image: item?.image || "/default-food.jpg",
    description: item?.description || "Delicious item",
    type: item?.type || "food",
    size: item?.size || "Medium",
    addons: item?.addons || [],
    iceLevel: item?.iceLevel || "Normal Ice",
    sugarLevel: item?.sugarLevel || "Normal Sugar",
    isPopular: item?.isPopular || false,
    originalPrice: item?.originalPrice || null
  };

  const [size, setSize] = useState(safeItem.size);
  const [addons, setAddons] = useState(safeItem.addons);
  const [iceLevel, setIceLevel] = useState(safeItem.iceLevel);
  const [sugarLevel, setSugarLevel] = useState(safeItem.sugarLevel);
  const [totalPrice, setTotalPrice] = useState(safeItem.price);
  const [isExpanded, setIsExpanded] = useState(false);

  const isDrink =
    safeItem.type === "drink" ||
    /cola|shake|juice|coffee|tea/i.test(safeItem.name);

  useEffect(() => {
    let base = safeItem.price;
    if (isDrink) {
      base += DRINK_SIZES[size]?.price || 0;
    } else {
      base += FOOD_SIZES[size]?.price || 0;
      base += addons.reduce(
        (sum, addon) => sum + (FOOD_ADDONS[addon]?.price || 0),
        0
      );
    }
    setTotalPrice(base);
  }, [size, addons, iceLevel, sugarLevel, safeItem.price, isDrink]);

  const handleAddonChange = (addon) => {
    setAddons((prev) =>
      prev.includes(addon)
        ? prev.filter((a) => a !== addon)
        : [...prev, addon]
    );
  };

  const handleQuantityUpdate = (newQuantity) => {
    if (newQuantity === 0) {
      onRemove(safeItem.name);
    } else {
      onUpdateQuantity(safeItem.name, newQuantity);
    }
  };

  if (!item) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center text-gray-500">
        Item not available
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Main Item Card */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <img
              src={safeItem.image}
              alt={safeItem.name}
              className="w-24 h-24 sm:w-20 sm:h-20 rounded-xl object-cover shadow-md"
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiNGM0Y0RjYiLz4KPHBhdGggZD0iTTQwIDQ0QzQyLjIwOTEgNDQgNDQgNDIuMjA5MSA0NCA0MEM0NCAzNy43OTA5IDQyLjIwOTEgMzYgNDAgMzZDMzcuNzkwOSAzNiAzNiAzNy43OTA5IDM2IDQwQzM2IDQyLjIwOTEgMzcuNzkwOSA0NCA0MCA0NFoiIGZpbGw9IiNEOEUxRTYiLz4KPHBhdGggZD0iTTM2IDI4TDM2IDUyTTQ0IDI4TDUyIDM2TTQ0IDUyTDUyIDQ0TTI4IDM2TDM2IDI4TTI4IDQ0TDM2IDUyIiBzdHJva2U9IiNEOEUxRTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=";
              }}
            />
            {safeItem.isPopular && (
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                Popular
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">
                  {safeItem.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {safeItem.description}
                </p>

                {/* Price and Quantity */}
                <div className="flex flex-wrap items-center justify-between mt-3 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-amber-600">
                      ${totalPrice.toFixed(2)}
                    </span>
                    {safeItem.originalPrice && (
                      <span className="text-sm sm:text-lg text-gray-400 line-through">
                        ${safeItem.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1">
                    <button
                      onClick={() =>
                        handleQuantityUpdate((safeItem.quantity || 1) - 1)
                      }
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm text-gray-600 hover:text-amber-600"
                      aria-label="Decrease quantity"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M20 12H4"
                        />
                      </svg>
                    </button>

                    <span className="w-6 sm:w-8 text-center font-bold text-gray-900 text-base sm:text-lg">
                      {safeItem.quantity}
                    </span>

                    <button
                      onClick={() =>
                        handleQuantityUpdate((safeItem.quantity || 1) + 1)
                      }
                      className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg text-white"
                      aria-label="Increase quantity"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Customize Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 mt-4 text-amber-600 hover:text-amber-700 transition-colors font-semibold text-sm"
            >
              <span>Customize your order</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Section */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50 p-4 sm:p-6">
         {!isDrink && (
            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  Choose Size
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(FOOD_SIZES).map(([sizeKey, { price, description }]) => (
                    <button
                      key={sizeKey}
                      onClick={() => setSize(sizeKey)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        size === sizeKey
                          ? 'border-amber-500 bg-amber-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-gray-900">{sizeKey}</span>
                        <span className="text-amber-600 font-bold">
                          {price > 0 ? `+$${price}` : 'Free'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Extras
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(FOOD_ADDONS).map(([addon, { price, popular }]) => (
                    <button
                      key={addon}
                      onClick={() => handleAddonChange(addon)}
                      className={`p-3 rounded-lg border transition-all text-left relative ${
                        addons.includes(addon)
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium text-gray-900 block">{addon}</span>
                          <span className="text-amber-600 font-semibold text-sm">
                            +${price}
                          </span>
                        </div>
                        {popular && (
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Drink Customization */}
          {isDrink && (
            <div className="space-y-6">
              {/* Drink Size */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Drink Size</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(DRINK_SIZES).map(([sizeKey, { price, description }]) => (
                    <button
                      key={sizeKey}
                      onClick={() => setSize(sizeKey)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        size === sizeKey
                          ? 'border-amber-500 bg-amber-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-gray-900">{sizeKey}</span>
                        <span className="text-amber-600 font-bold">
                          {price > 0 ? `+$${price}` : 'Free'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Drink Preferences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ice Level */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Ice Level</h4>
                  <div className="flex flex-wrap gap-2">
                    {DRINK_OPTIONS["Ice Level"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setIceLevel(option)}
                        className={`px-4 py-2 rounded-full border transition-all ${
                          iceLevel === option
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sugar Level */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Sugar Level</h4>
                  <div className="flex flex-wrap gap-2">
                    {DRINK_OPTIONS["Sugar Level"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSugarLevel(option)}
                        className={`px-4 py-2 rounded-full border transition-all ${
                          sugarLevel === option
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Selected Options Summary */}
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <h5 className="font-semibold text-gray-900 mb-2">Your Customization</h5>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Size: <span className="font-medium text-gray-900">{size}</span></div>
              {!isDrink && addons.length > 0 && (
                <div>Add-ons: <span className="font-medium text-gray-900">{addons.join(", ")}</span></div>
              )}
              {isDrink && (
                <>
                  <div>Ice: <span className="font-medium text-gray-900">{iceLevel}</span></div>
                  <div>Sugar: <span className="font-medium text-gray-900">{sugarLevel}</span></div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
