
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import './location.css'
import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationSection = () => {

  
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [38.39449638884106, -75.06376917775981],
      zoom: 10.12
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-syrup-800 mb-4">Find Us</h2>
          <p className="text-syrup-600 max-w-xl mx-auto">
            Conveniently located in the heart of Orange County, with plenty of parking available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
            {/* This would be replaced with an actual map */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
             <div id='map-container' ref={mapContainerRef}/>
            </div>
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
                    <p className="text-syrup-600">123 Main Street<br />Orange County, CA 92705</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Phone className="text-pancake-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-syrup-700">Phone</h4>
                    <p className="text-syrup-600">(714) 555-1234</p>
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
