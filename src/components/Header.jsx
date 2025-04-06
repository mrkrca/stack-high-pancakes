
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
         
          
            <img 
              src="/images/logo.png" 
              alt="OC Pancakes Logo" 
              className="w-32 h-auto" 
            />
            
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-syrup-700 hover:text-pancake-600 font-medium transition">Menu</a>
            <a href="#about" className="text-syrup-700 hover:text-pancake-600 font-medium transition">About</a>
            <a href="#location" className="text-syrup-700 hover:text-pancake-600 font-medium transition">Location</a>
            <a href="#contact" className="btn-primary">Order Online</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-syrup-700 hover:text-pancake-600 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fadeIn">
            <a 
              href="#menu" 
              className="text-syrup-700 hover:text-pancake-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#about" 
              className="text-syrup-700 hover:text-pancake-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#location" 
              className="text-syrup-700 hover:text-pancake-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Location
            </a>
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Online
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
