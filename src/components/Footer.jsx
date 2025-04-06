
import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-syrup-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">OC Pancakes</h3>
            <p className="text-syrup-200 mb-4">Serving the best breakfast in Orange County since 1985.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pancake-300 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-pancake-300 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-pancake-300 transition">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@ocpancakes.com" className="text-white hover:text-pancake-300 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-syrup-200 hover:text-white transition">Home</a></li>
              <li><a href="#menu" className="text-syrup-200 hover:text-white transition">Menu</a></li>
              <li><a href="#about" className="text-syrup-200 hover:text-white transition">About Us</a></li>
              <li><a href="#location" className="text-syrup-200 hover:text-white transition">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-syrup-200">123 Main Street</li>
              <li className="text-syrup-200">Ocean City, MD 78250</li>
              <li className="text-syrup-200">(714) 555-1234</li>
              <li>
                <a href="mailto:hello@ocpancakes.com" className="text-syrup-200 hover:text-white transition">
                  hello@ocpancakes.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2">
              <li className="text-syrup-200">
                <span className="font-medium">Mon-Fri:</span> 7am - 2pm
              </li>
              <li className="text-syrup-200">
                <span className="font-medium">Sat-Sun:</span> 7am - 3pm
              </li>
              <li className="text-pancake-300 mt-4">
                <span className="font-medium">Happy Hour:</span> 7am - 9am Daily
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-syrup-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-syrup-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OC Pancakes. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-syrup-300 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-syrup-300 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-syrup-300 hover:text-white transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
