
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";

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
      isScrolled ? 'bg-blue-900/95 shadow-md py-2' : 'bg-blue-900/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="OC Pancakes Logo" 
              className="w-32 h-auto" 
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-yellow-300 hover:text-white font-semibold text-lg transition">About</a>
            <a href="#location" className="text-yellow-300 hover:text-white font-semibold text-lg transition">Location</a>
            <a href="#menu" className="text-yellow-300 hover:text-white font-semibold text-lg transition">Menu</a>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2 text-white font-semibold text-lg">
            <Phone size={22} className="text-yellow-300" />
            <a href="tel:+14105200407" className="hover:text-yellow-300 transition">
              +1 (410) 520-0407
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-yellow-300 hover:text-white transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fadeIn bg-blue-900/95 rounded-md shadow-md mt-2">
            <a 
              href="#menu" 
              className="text-yellow-300 hover:text-white font-semibold transition px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#about" 
              className="text-yellow-300 hover:text-white font-semibold transition px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#location" 
              className="text-yellow-300 hover:text-white font-semibold transition px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Location
            </a>
            {/* Phone Number in Mobile Menu */}
            <a 
              href="tel:+14105200407" 
              className="text-yellow-300 hover:text-white font-semibold transition flex items-center space-x-2 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={16} className="text-yellow-300" />
              <span>+1 (410) 520-0407</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
