import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "../Component/Restuaurant_Pannel/Sidebar";
import Header from "../Component/Restuaurant_Pannel/Header";
import Dashboard from "../Component/Restuaurant_Pannel/Dashboard";
import OrdersManagement from "../Component/Restuaurant_Pannel/OrdersManagement";
import MenuManagement from "../Component/Restuaurant_Pannel/MenuManagement";
// import EarningsReports from "./pages/EarningsReports";
import Settings from "../Component/Restuaurant_Pannel/Settings";
import MenuComponent from "../Component/Customer_Pannel/MenuComponent";

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar visible only for admin panel pages */}
      {isAdminRoute && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {isAdminRoute && <Header setSidebarOpen={setSidebarOpen} />}

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Routes>
            {/* Customer Panel Route */}
            <Route path="/" element={<MenuComponent />} />

            {/* Admin Panel Routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/orders" element={<OrdersManagement />} />
            <Route path="/admin/menu" element={<MenuManagement />} />
            {/* <Route path="/admin/earnings" element={<EarningsReports />} /> */}
            <Route path="/admin/settings" element={<Settings />} />

            {/* Fallback Route */}
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
