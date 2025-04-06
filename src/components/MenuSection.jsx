import React, { useState, useEffect } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(menuItems.filter(item => item.category === activeCategory));
  }, [activeCategory]);

  return (
    <section id="menu" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-syrup-600 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All our dishes are made fresh to order with locally sourced ingredients. 
            Gluten-free options available upon request.
          </p>
        </div>
        
        {/* Menu Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map(category => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 text-lg ${
                activeCategory === category.id
                  ? 'bg-pancake-500 hover:bg-pancake-600 text-white'
                  : 'text-syrup-600 hover:text-syrup-800 border-syrup-300 hover:border-syrup-500'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-pancake-600 mb-3">
            {menuCategories.find(cat => cat.id === activeCategory)?.name}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {menuCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredItems.map(item => (
            <Card 
              key={item.id} 
              className="bg-white border-syrup-200 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-syrup-800 flex items-center">
                    {item.name}
                    {item.isVegetarian && (
                      <span className="ml-2 inline-block w-4 h-4 bg-green-500 rounded-full" title="Vegetarian"></span>
                    )}
                  </CardTitle>
                  <span className="font-bold text-pancake-600">${item.price.toFixed(2)}</span>
                </div>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex gap-2 mt-1">
                    {item.tags.map(tag => (
                      <Badge 
                        key={tag}
                        variant="outline"
                        className="bg-pancake-100 text-pancake-800 border-pancake-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;