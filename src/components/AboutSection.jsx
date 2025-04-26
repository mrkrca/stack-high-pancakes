
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
            Since 2002, Little House of Pancakes has been Ocean City's go-to spot for hearty breakfasts and casual lunches. Family-owned and open year-round, we offer over 20 varieties of pancakes, waffles, omelettes, and more — all made fresh and served all day. Enjoy a relaxed, welcoming atmosphere with indoor and outdoor dining. Whether you're a local or just visiting, we’re here to make you feel right at home with great food and friendly service.
            </p>
            <p>
            At Little House of Pancakes, we’re all about comfort, community, and great food. We’re a family-owned spot where every meal is cooked with care, and every guest is treated like family. Whether you're a local regular or a visitor discovering Ocean City for the first time, we invite you to sit back, relax, and dig into a meal that feels like home. Come taste why we’re a favorite tradition for so many — breakfast and lunch just aren't the same anywhere else!
            </p>
           
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-6 mt-5">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-pancake-600 mb-2">23+</span>
                <span className="text-syrup-600 text-sm">Years of Service</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-pancake-600 mb-2">100+</span>
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
