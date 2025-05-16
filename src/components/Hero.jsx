
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Restaurant background image */}
      <div className="absolute inset-0">
        <img 
          src="/images/backgroundImg.jpg" 
          alt="Stack High Pancakes Restaurant" 
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-syrup-800/30 backdrop-blur-sm"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Little Breakfast 
          <span className="text-pancake-300 block md:inline"> Paradise </span>
        </h1>
        
       {/* <p className="text-xl md:text-2xl text-white mb-8 max-w-xl mx-auto drop-shadow-md">
          Delicious handcrafted pancakes, waffles, and breakfast favorites made fresh daily
        </p>*/}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">




          <button 
            onClick={scrollToMenu}
            className="btn-primary text-syrup-700 hover:bg-syrup-50 mt-6 px-8 py-3 rounded-md font-semibold transition-colors"
          >
            View Menu
          </button>
        </div>
        
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 mb-2 text-pancake-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-white font-medium drop-shadow-md">Open Daily</span>
            <span className="text-white/90 text-sm drop-shadow-sm">8am - 1pm</span>
          </div>
          <a href="#location">
          <div className="flex flex-col items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 mb-2 text-pancake-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-white font-medium drop-shadow-md">Location</span>
            <span className="text-white/90 text-sm drop-shadow-sm">Ocean City, MD</span>
          </div>
          </a>
         
          <a href="https://www.google.com/maps/place/The+Little+House+Of+Pancakes/@38.3944794,-75.0637823,1188m/data=!3m1!1e3!4m8!3m7!1s0x89b8d678d4690b49:0x58752f4100da46c3!8m2!3d38.3944794!4d-75.0637823!9m1!1b1!16s%2Fg%2F1tdz5qkd?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target='_blank'>
          <div className="flex flex-col items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 mb-2 text-pancake-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <span className="text-white font-medium drop-shadow-md">Rated</span>
            <span className="text-white/90 text-sm drop-shadow-sm">4.3/5 Stars</span>
          </div>
          </a>
       
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-pancake-300 transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
