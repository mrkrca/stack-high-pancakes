
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-pancake-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-syrup-800 mb-4">
              Our Pancake Story
            </h2>
            <p className="text-syrup-600 mb-4">
              Since 1985, OC Pancakes has been serving the freshest, fluffiest pancakes in Orange County. What started as a small family kitchen with a secret recipe has grown into the breakfast destination loved by locals and tourists alike.
            </p>
            <p className="text-syrup-600 mb-4">
              Our founder, Grandma Betty, believed that breakfast should never be rushed and always made with love. Today, we continue her legacy by using only the finest ingredients and making everything from scratch daily.
            </p>
            <p className="text-syrup-600 mb-8">
              From our classic buttermilk pancakes to our creative seasonal specials, every dish is crafted to bring warmth and joy to your morning.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-pancake-600 mb-2">35+</span>
                <span className="text-syrup-600 text-sm">Years of Service</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-pancake-600 mb-2">20+</span>
                <span className="text-syrup-600 text-sm">Menu Items</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-pancake-600 mb-2">Local</span>
                <span className="text-syrup-600 text-sm">Ingredients</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-pancake-600 mb-2">1000s</span>
                <span className="text-syrup-600 text-sm">Happy Customers</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-6">
                <img 
                  src="/images/pancake-stack.jpg" 
                  alt="Pancakes being prepared" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/french-toast.jpg" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/waffle.jpg" 
                  alt="Stack of pancakes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-6">
                <img 
                  src="/images/breakfast-plate.jpg" 
                  alt="Happy customers" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
