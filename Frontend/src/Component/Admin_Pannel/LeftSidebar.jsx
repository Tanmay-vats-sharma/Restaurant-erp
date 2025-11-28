import React from "react";
import {
  HomeIcon,
  RestaurantIcon,
  QrCodeIcon,
  MenuIcon,
  ClipboardListIcon,
  SparklesIcon,
} from "./icons";

const items = [
  { key: "dashboard", label: "Dashboard", icon: HomeIcon },
  { key: "restaurants", label: "Restaurants", icon: RestaurantIcon },
  { key: "qr", label: "QR Codes", icon: QrCodeIcon },
  { key: "menu", label: "Menu Editor", icon: MenuIcon },
  { key: "orders", label: "Orders", icon: ClipboardListIcon },
  { key: "plans", label: "Plans", icon: SparklesIcon },
];

export default function LeftSidebar({ route, setRoute }) {
  return (
    <aside className="w-72 bg-linear-to-b from-indigo-600 to-indigo-700 text-white p-6 min-h-screen hidden md:block">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">DineDash Admin</h1>
        <p className="text-sm opacity-90 mt-1">
          Manage restaurants, QR, plans & menus
        </p>
      </div>

      <nav className="flex flex-col gap-1">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => setRoute(it.key)}
            className={`text-left p-3 rounded-lg flex items-center gap-3 w-full hover:bg-white/10 ${
              route === it.key ? "bg-white/20" : ""
            }`}
          >
            <it.icon className="w-5 h-5" />
            <span className="font-medium">{it.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6">
        <div className="text-xs opacity-90">Signed in as</div>
        <div className="mt-2 font-semibold">Admin Team</div>
      </div>
    </aside>
  );
}
