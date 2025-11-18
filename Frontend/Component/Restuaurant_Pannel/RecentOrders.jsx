import React, { useState } from 'react';

const RecentOrders = ({ darkMode }) => {
  const [orders] = useState([
    {
      id: 'ORD-001',
      table: 'T-02',
      customer: 'John Doe',
      type: 'Dine-in',
      status: 'pending',
      amount: '₹1,250',
      time: '10:30 AM',
      items: 3
    },
    {
      id: 'ORD-002',
      table: '-',
      customer: 'Jane Smith',
      type: 'Online',
      status: 'completed',
      amount: '₹850',
      time: '10:25 AM',
      items: 2
    },
    {
      id: 'ORD-003',
      table: 'T-05',
      customer: 'Mike Johnson',
      type: 'Dine-in',
      status: 'preparing',
      amount: '₹2,100',
      time: '10:15 AM',
      items: 4
    },
    {
      id: 'ORD-004',
      table: '-',
      customer: 'Sarah Wilson',
      type: 'Takeaway',
      status: 'completed',
      amount: '₹650',
      time: '10:00 AM',
      items: 1
    },
    {
      id: 'ORD-005',
      table: 'T-08',
      customer: 'Robert Brown',
      type: 'Dine-in',
      status: 'served',
      amount: '₹1,800',
      time: '09:45 AM',
      items: 3
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      preparing: 'bg-blue-100 text-blue-800',
      served: 'bg-green-100 text-green-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status) => {
    const statusMap = {
      pending: 'Pending',
      preparing: 'Preparing',
      served: 'Served',
      completed: 'Completed',
      cancelled: 'Cancelled'
    };
    return statusMap[status] || status;
  };

  const getTypeIcon = (type) => {
    const icons = {
      'Dine-in': (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      'Online': (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      'Takeaway': (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    };
    return icons[type] || null;
  };

  return (
    <div className={`rounded-2xl shadow-sm border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
        <button className={`text-sm font-medium ${
          darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
        }`}>
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={darkMode ? 'bg-gray-750' : 'bg-gray-50'}>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${
            darkMode ? 'divide-gray-700' : 'divide-gray-200'
          }`}>
            {orders.map((order) => (
              <tr key={order.id} className={darkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium">{order.id}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {order.time} • {order.items} items
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">{order.customer}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {order.table}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(order.type)}
                    <span className="text-sm">{order.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;