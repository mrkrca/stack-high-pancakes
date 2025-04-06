
import React, { useState, useEffect } from 'react';
import { menuCategories, menuItems } from '../data/menuData';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(menuItems.filter(item => item.category === activeCategory));
  }, [activeCategory]);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-syrup-800 mb-4">Our Menu</h2>
          <p className="text-syrup-600 max-w-2xl mx-auto">
            All our dishes are made fresh to order with locally sourced ingredients. 
            Gluten-free options available upon request.
          </p>
        </div>
        
        {/* Menu Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-colors text-lg ${
                activeCategory === category.id
                  ? 'bg-pancake-500 text-white'
                  : 'bg-muted hover:bg-pancake-200 text-syrup-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-syrup-700 mb-3">
            {menuCategories.find(cat => cat.id === activeCategory)?.name}
          </h3>
          <p className="text-syrup-500 max-w-2xl mx-auto">
            {menuCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Item Image */}
              <div className="relative">
                {/* Tags */}
                {item.tags && item.tags.map(tag => (
                  <span 
                    key={tag}
                    className="absolute top-2 left-2 bg-pancake-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                
                {/* Vegetarian Tag */}
                {item.isVegetarian && (
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Vegetarian
                  </span>
                )}
                
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-syrup-800">{item.name}</h4>
                  <span className="font-bold text-pancake-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-syrup-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
