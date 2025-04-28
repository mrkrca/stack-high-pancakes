
import React, { useState, useEffect } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BestsellerRibbon from './BestsellerRibbon';
import { WheatOff, Vegan } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [activeSubcategory, setActiveSubcategory] = useState('pancakes');
  const [filteredItems, setFilteredItems] = useState([]);

  const getFirstSubcategory = (categoryId) => {
    const category = menuCategories.find(cat => cat.id === categoryId);
    return category?.subcategories?.[0]?.id || '';
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    let initialSubcategory = '';
    
    if (categoryId === 'breakfast') {
      initialSubcategory = 'pancakes';
    } else if (categoryId === 'lunch') {
      initialSubcategory = 'appetizers';
    } else if (categoryId === 'beverages') {
      initialSubcategory = 'coffee';
    } else {
      initialSubcategory = getFirstSubcategory(categoryId);
    }
    
    setActiveSubcategory(initialSubcategory);
  };

  useEffect(() => {
    const filtered = menuItems.filter(item => {
      if (activeSubcategory) {
        return item.category === activeCategory && item.subcategory === activeSubcategory;
      }
      return item.category === activeCategory;
    });
    
    setFilteredItems(filtered);
  }, [activeCategory, activeSubcategory]);

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-5xl md:text-6xl font-bold text-syrup-600 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All our dishes are made fresh to order with locally sourced ingredients. 
            Gluten-free options available upon request.
          </p>
        </div>
        
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

        {currentCategory?.subcategories && currentCategory.subcategories.length > 0 && (
          <div className="mb-8">
            <Tabs 
              value={activeSubcategory} 
              onValueChange={(value) => setActiveSubcategory(value)}
            >
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
                {currentCategory.subcategories.map((sub) => (
                  <TabsTrigger
                    key={sub.id}
                    value={sub.id}
                    className={`flex items-center px-4 py-2 rounded-full transition-colors
                      ${activeSubcategory === sub.id 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'hover:bg-amber-50'}`}
                  >
                    {sub.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-amber-700 mb-3">
            {activeSubcategory 
              ? currentCategory?.subcategories.find(sub => sub.id === activeSubcategory)?.name
              : currentCategory?.name}
          </h3>
          <div className="text-gray-600 max-w-2xl mx-auto space-y-4">
            {activeSubcategory 
              ? currentCategory?.subcategories.find(sub => sub.id === activeSubcategory)?.description?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : currentCategory?.description?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
          </div>
        </div>
        
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {filteredItems.map(item => (
              <Card 
                key={item.id} 
                className="bg-white border-amber-300 hover:shadow-2xl transition-all duration-300 border rounded-lg cursor-pointer relative overflow-hidden"
              >
                {item.isBestseller && <BestsellerRibbon />}
                <CardHeader className="pb-1">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-amber-800 flex items-center max-w-[75%]">
                      {item.name}
                      {item.isVegetarian && (
                        <span className="ml-2 inline-block w-4 h-4 bg-green-500 rounded-full" title="Vegetarian"></span>
                      )}
                    </CardTitle>
                    <span className="font-bold text-amber-600 ml-auto relative top-7 ">${item.price.toFixed(2)}</span>
                  </div>
                  {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tags.map(tag => (
                      <Badge 
                      key={tag}
                      variant="outline"
                      className="bg-amber-100 text-amber-800 border-amber-300 p-1 flex items-center gap-1"
                    >
                      
                      {tag === 'Gluten-Free' && <WheatOff className="w-4 h-4 text-amber-800" />}
                      {tag === 'Vegetarian' && <Vegan className="w-4 h-4 text-green-600" />}
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
      <div className="tipPolicy text-center mt-12 text-gray-700">
        <p className="text-lg font-medium bg-amber-100 inline-block px-6 py-3 rounded-lg shadow-md">
          Please NO substitutions. 20% service charge added to parties of 6 or more. Some menu items may be unavailable in off-season.
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
