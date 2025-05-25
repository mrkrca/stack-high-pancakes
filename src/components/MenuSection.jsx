
import React, { useState, useEffect } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BestsellerRibbon from './BestsellerRibbon';
import { WheatOff, Vegan, Coffee, Utensils, Sun } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [activeSubcategory, setActiveSubcategory] = useState('pancakes');
  const [filteredItems, setFilteredItems] = useState([]);

  const getFirstSubcategory = (categoryId) => {
    const category = menuCategories.find(cat => cat.id === categoryId);
    return category?.subcategories?.[0]?.id || '';
  };

  useEffect(() => {
      AOS.init({ duration: 300 });
    }, []);
  
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

  const categoryCards = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: Sun,
      description: 'Try some of the best breakfast in Ocean City featuring over 20 types of pancakes, eggs, omelettes, waffles and a full breakfast menu!'
    },
    {
      id: 'lunch',
      name: 'Lunch',
      icon: Utensils,
      description: 'We are much more than pancakes! Come try some of our amazing sandwiches, burgers, and more!'
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: Coffee,
      description: 'We have some tasty frozen & specialty drinks, as well as smoothies!'
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {categoryCards.map(category => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border-2 ${
                  activeCategory === category.id
                    ? 'border-amber-500 bg-amber-50 shadow-lg scale-105'
                    : 'border-amber-200 hover:border-amber-400 bg-white'
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center ${
                    activeCategory === category.id 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-amber-100 text-amber-600'
                  }`}>
                    <IconComponent size={32} />
                  </div>
                  <CardTitle className={`text-2xl font-bold ${
                    activeCategory === category.id ? 'text-amber-700' : 'text-gray-800'
                  }`}>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className={`mt-4 inline-block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  }`}>
                    View {category.name} Menu
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
                    className={`flex items-center px-5 py-2.5 rounded-full transition-all duration-200
                      border-2 shadow-sm
                      ${activeSubcategory === sub.id 
                        ? 'bg-amber-500 text-white border-amber-600 shadow-md transform scale-105' 
                        : 'bg-white text-amber-800 border-amber-300 hover:border-amber-500 hover:bg-amber-50 hover:transform hover:scale-102'}`}
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
                data-aos="slide-up"
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
