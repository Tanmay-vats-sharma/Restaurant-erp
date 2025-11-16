import React, { useState } from 'react';
import MenuCategories from './MenuCategories';
// import MenuItemsList from '../components/menu/MenuItemsList';
// import AddItemModal from '../components/menu/AddItemModal';

const MenuManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Menu Management</h1>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <span>+</span>
          <span>Add New Item</span>
        </button>
      </div>

      <MenuCategories 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      
      {/* <MenuItemsList category={selectedCategory} /> */}
      
      {/* <AddItemModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      /> */}
    </div>
  );
};

export default MenuManagement;