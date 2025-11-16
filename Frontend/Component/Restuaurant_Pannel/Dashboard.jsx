import React from 'react';
import StatsCards from './StatsCards';
// import ChartsSection from '../components/dashboard/ChartsSection';
import RecentOrders from './RecentOrders';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <StatsCards />
      
      {/* Charts Section */}
      {/* <ChartsSection /> */}
      
      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
};

export default Dashboard;