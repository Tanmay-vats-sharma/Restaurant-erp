import React, { useState } from 'react';
import OrderFilters from './OrderFilters';
// import OrdersList from '../components/orders/OrdersList';

const OrdersManagement = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    dateRange: 'today'
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Orders Management</h1>
        <div className="flex items-center space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            New Order
          </button>
        </div>
      </div>

      <OrderFilters filters={filters} setFilters={setFilters} />
      {/* <OrdersList filters={filters} /> */}
    </div>
  );
};

export default OrdersManagement;