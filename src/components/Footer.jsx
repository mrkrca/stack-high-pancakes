
import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">OC Pancakes</h3>
            <p className="text-blue-100 mb-4">Serving the best breakfast in Maryland since 2002.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-300 hover:text-yellow-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-yellow-300 hover:text-yellow-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-yellow-300 hover:text-yellow-500 transition">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@ocpancakes.com" className="text-yellow-300 hover:text-yellow-500 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#menu" className="text-blue-100 hover:text-yellow-300 transition">Menu</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-yellow-300 transition">About Us</a></li>
              <li><a href="#location" className="text-blue-100 hover:text-yellow-300 transition">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-blue-100">7307 Coastal Hwy</li>
              <li className="text-blue-100">Ocean City, MD 21842</li>
              <li className="text-blue-100">+1 (410) 520-0407</li>
              <li>
                <a href="mailto:hello@ocpancakes.com" className="text-blue-100 hover:text-yellow-300 transition">
                  hello@ocpancakes.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2">
              <li className="text-blue-100">
                <span className="font-medium">Mon-Fri:</span> 7am - 2pm
              </li>
              <li className="text-blue-100">
                <span className="font-medium">Sat-Sun:</span> 7am - 3pm
              </li>
        {/*
              <li className="text-pancake-300 mt-4">
                <span className="font-medium">Happy Hour:</span> 7am - 9am Daily
              </li>
            */}
            </ul>
          </div>
        </div>
        
        <hr className="border-blue-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OC Pancakes. All rights reserved.
          </p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
