import React, { useState, useEffect } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coffee, Utensils, Pizza, Sandwich, ArrowUp } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Filter items based on category and subcategory
    const filtered = menuItems.filter(item => {
      if (activeSubcategory) {
        return item.category === activeCategory && item.subcategory === activeSubcategory;
      }
      return item.category === activeCategory;
    });
    
    setFilteredItems(filtered);
  }, [activeCategory, activeSubcategory]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(''); // Reset subcategory when changing main category
  };

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  // Function to get appropriate icon for subcategory
  const getSubcategoryIcon = (subcategoryId) => {
    switch (subcategoryId) {
      case 'pancakes':
        return <Pizza className="mr-2" />;
      case 'country-eggs':
        return <ArrowUp className="mr-2" />;
      case 'sandwiches':
        return <Sandwich className="mr-2" />;
      case 'waffles':
        return <Coffee className="mr-2" />;
      case 'sides':
        return <Utensils className="mr-2" />;
      default:
        return null;
    }
  };

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
        
        {/* Main Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {menuCategories.map(category => (
            <Button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 text-lg ${
                activeCategory === category.id
                  ? 'bg-amber-500 hover:bg-amber-600 text-white'
                  : 'text-amber-700 hover:text-amber-800 border-amber-300 hover:border-amber-500'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Subcategories for Current Category */}
        {currentCategory?.subcategories && currentCategory.subcategories.length > 0 && (
          <div className="mb-8">
            <Tabs 
              value={activeSubcategory || 'all'} 
              onValueChange={(value) => setActiveSubcategory(value === 'all' ? '' : value)}
            >
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
                <TabsTrigger
                  key="all"
                  value="all"
                  className={`flex items-center px-4 py-2 rounded-full transition-colors
                    ${activeSubcategory === '' 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'hover:bg-amber-50'}`}
                >
                  All {currentCategory.name}
                </TabsTrigger>
                {currentCategory.subcategories.map((sub) => (
                  <TabsTrigger
                    key={sub.id}
                    value={sub.id}
                    className={`flex items-center px-4 py-2 rounded-full transition-colors
                      ${activeSubcategory === sub.id 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'hover:bg-amber-50'}`}
                  >
                    {getSubcategoryIcon(sub.id)}
                    {sub.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}
        
        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-amber-700 mb-3">
            {activeSubcategory 
              ? currentCategory?.subcategories.find(sub => sub.id === activeSubcategory)?.name
              : currentCategory?.name}
          </h3>
          {!activeSubcategory && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {currentCategory?.description}
            </p>
          )}
        </div>
        
        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <Card 
                key={item.id} 
                className="bg-white border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-amber-800 flex items-center">
                      {item.name}
                      {item.isVegetarian && (
                        <span className="ml-2 inline-block w-4 h-4 bg-green-500 rounded-full" title="Vegetarian"></span>
                      )}
                    </CardTitle>
                    <span className="font-bold text-amber-600">${item.price.toFixed(2)}</span>
                  </div>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex gap-2 mt-1">
                      {item.tags.map(tag => (
                        <Badge 
                          key={tag}
                          variant="outline"
                          className="bg-amber-100 text-amber-800 border-amber-300"
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
