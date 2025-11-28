import React, { useState, useEffect } from "react";
import CartItem from "./CartItems";

const CartSidebar = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  getTotalPrice,
}) => {
  const [mounted, setMounted] = useState(isOpen);

  useEffect(() => {
    let unmountTimer;
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      unmountTimer = setTimeout(() => setMounted(false), 320);
    }
    return () => {
      if (unmountTimer) clearTimeout(unmountTimer);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
        isOpen ? "bg-black/50 opacity-100" : "bg-transparent opacity-0 pointer-events-none"
      }`}
    >
      {/* Sidebar Container */}
      <div
        className={`bg-white w-full sm:max-w-sm md:max-w-md h-full shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-2xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-red-600 to-red-700">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            🛒 Your Order
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition"
            aria-label="Close cart"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 bg-gray-50">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 
                  0a2 2 0 100 4 2 2 0 000-4zm-8 
                  2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-gray-500 text-lg font-medium">
                Your cart is empty
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Add some delicious food to your cart 🍔
              </p>
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

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 bg-white px-6 py-5 shadow-inner rounded-t-2xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">Total</span>
              <span className="text-2xl font-bold text-red-600">
                ₹{getTotalPrice()}
              </span>
            </div>
            <button className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.03]">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
