import React from "react";

export default function LeftSidebar({ className = "" }) {
  const navItems = [
    {
      key: "overview",
      label: "Overview",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      key: "restaurants",
      label: "Restaurants",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8" />
          <path d="M12 11v11" />
          <path d="M16 7.5V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v2.5" />
        </svg>
      ),
    },
    {
      key: "qrcode",
      label: "QR Codes",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="3" y="15" width="6" height="6" rx="1" />
        </svg>
      ),
    },
    {
      key: "menus",
      label: "Menus",
      icon: "📋",
    },
    {
      key: "users",
      label: "Users",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      key: "settings",
      label: "Settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className={`bg-white border-r border-gray-100 p-4 min-h-screen ${className}`}>
      <div className="flex items-center mb-6 px-1">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
          RC
        </div>
        <div className="ml-3">
          <div className="text-sm font-bold text-gray-900">Restaurant ERP</div>
          <div className="text-xs text-gray-500">Admin Panel</div>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={"#"+item.key}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:shadow-sm transition-colors"
          >
            <span className="flex-shrink-0 text-gray-500">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-6 px-2">
        <button className="w-full text-sm bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 rounded-lg shadow-sm hover:opacity-95">
          New Restaurant
        </button>
      </div>

      {/* compact footer/status */}
      <div className="mt-6 px-2 text-xs text-gray-500">
        <div>Plan: Pro</div>
        <div className="mt-2">Uptime: <span className="text-green-600 font-medium">99.98%</span></div>
      </div>
    </aside>
  );
}
