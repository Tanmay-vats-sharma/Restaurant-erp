import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

//  Restuaurant Pannel
import Sidebar from "../Component/Restuaurant_Pannel/Sidebar";
import Header from "../Component/Restuaurant_Pannel/Header";
import Dashboard from "../Component/Restuaurant_Pannel/Dashboard";
import OrdersManagement from "../Component/Restuaurant_Pannel/OrdersManagement";
import MenuManagement from "../Component/Restuaurant_Pannel/MenuManagement";
import EarningsDashboard from "../Component/Restuaurant_Pannel/Earnings";
import Settings from "../Component/Restuaurant_Pannel/Settings";
import MenuComponent from "../Component/Customer_Pannel/MenuComponent";

//  Admin Pannel
import DashboardPage from "../Component/Admin_Pannel/DashboardPage";
import Restaurants from '../Component/Admin_Pannel/RestaurantsPage'
import QRPage from "../Component/Admin_Pannel/QRPage";
import PlansPage from "../Component/Admin_Pannel/PlansPage";
import OrdersPage from "../Component/Admin_Pannel/OrdersPage";

import MenuItems from "../Component/Admin_Pannel/MenuPage";


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

            {/* Restuaurant Panel Routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/orders" element={<OrdersManagement />} />
            <Route path="/admin/menu" element={<MenuManagement />} />
            <Route path="/admin/earnings" element={<EarningsDashboard />} />
            <Route path="/admin/settings" element={<Settings />} />

            {/* Admin Panel Routes */}
            <Route path="/dashboardPage" element={<DashboardPage />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/menu" element={<MenuItems />} />
            <Route path="/qr" element={<QRPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/orders" element={<OrdersPage />} />

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
