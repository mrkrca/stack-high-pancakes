
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import './location.css';

const LocationSection = () => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Load the Google Maps API script
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhFerFLvgyd_qwPsLA-wJNt_ugTVsl9_o&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
    
    googleMapScript.addEventListener('load', () => {
      setMapLoaded(true);
    });
    
    return () => {
      // Clean up the script when component unmounts
      window.document.body.removeChild(googleMapScript);
    };
  }, []);
  
  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      // Restaurant location (Ocean City, MD)
      const restaurantLocation = { lat: 38.3365, lng: -75.0849 };
      
      // Create the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: restaurantLocation,
        zoom: 15,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false
      });
      
      // Add a marker for the restaurant
      new window.google.maps.Marker({
        position: restaurantLocation,
        map,
        title: 'OC Pancakes',
        animation: window.google.maps.Animation.DROP
      });
    }
  }, [mapLoaded]);

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-syrup-800 mb-4">Find Us</h2>
          <p className="text-syrup-600 max-w-xl mx-auto">
            Conveniently located in the heart of Ocean City, with plenty of parking available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg h-96">
            <div 
              ref={mapRef} 
              className="w-full h-full bg-gray-100"
              style={{ borderRadius: '0.5rem' }}
            ></div>
          </div>
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-pancake-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-syrup-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <MapPin className="text-pancake-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-syrup-700">Address</h4>
                    <p className="text-syrup-600">123 Coastal Highway<br />Ocean City, MD 21842</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Phone className="text-pancake-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-syrup-700">Phone</h4>
                    <p className="text-syrup-600">(410) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Clock className="text-pancake-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-syrup-700">Hours</h4>
                    <p className="text-syrup-600">
                      Monday - Friday: 7am - 2pm<br />
                      Saturday - Sunday: 7am - 3pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Mail className="text-pancake-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-syrup-700">Email</h4>
                    <p className="text-syrup-600">hello@ocpancakes.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
