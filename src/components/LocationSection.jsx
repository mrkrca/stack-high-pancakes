import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import L from 'leaflet';
import './location.css';

// Fix for default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationSection = () => {
  const restaurantLocation = [38.394601296380166, -75.06376084768533]; // Latitude and Longitude for Ocean City, MD

  return (
    <section id="location" className="py-20 bg-white ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-syrup-800 mb-4">Find Us</h2>
          <p className="text-syrup-600 max-w-xl mx-auto">
            Conveniently located in the heart of Ocean City, with plenty of parking available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8  items-center" >
          {/* Map Section */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg h-96 z-10"> 
            <MapContainer
              center={restaurantLocation}
              zoom={15}
              scrollWheelZoom={false}
              className="w-full h-full"
              style={{ borderRadius: '0.5rem' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={restaurantLocation}>
                <Popup>
                  <strong>OC Pancakes</strong>
                  <br />
                  123 Coastal Highway, Ocean City, MD
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Contact Information Section */}
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
                    <p className="text-syrup-600">7307 Coastal Hwy<br />Ocean City, MD 21842</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Phone className="text-pancake-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-syrup-700">Phone</h4>
                    <p className="text-syrup-600">+1 (410) 520-0407</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4">
                    <Clock className="text-pancake-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-syrup-700">Hours</h4>
                    <p className="text-syrup-600">
                      Monday - Friday: 8:00am - 1pm<br />
                      Saturday - Sunday: 7:30am - 1pm
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