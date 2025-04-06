
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
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore voluptate qui cum impedit illum magnam quam obcaecati aut expedita, debitis facere quos ut repellendus eum blanditiis sunt porro animi.
            </p>
            <p className="text-syrup-600 mb-4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rerum facere impedit nobis culpa beatae cumque ex fuga dolorem tempora corrupti et, vitae sit at unde quo error, dolores adipisci.            </p>
            <p className="text-syrup-600 mb-8">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad in natus sequi reprehenderit repellat autem amet possimus minus ut rem nulla itaque enim distinctio dicta, quia nisi impedit illo excepturi!            </p>
            
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
                  src="/images/gallery3.jpg" 
                  alt="Pancakes being prepared" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/toastImg.jpg" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/EggsImg.jpg" 
                  alt="Stack of pancakes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform translate-y-6">
                <img 
                  src="/images/interior.jpg" 
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
