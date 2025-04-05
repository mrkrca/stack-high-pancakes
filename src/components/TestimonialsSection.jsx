
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "Best pancakes I've ever had! The blueberry compote is to die for. We come here every weekend with the kids.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Mike Thompson",
    text: "The chicken and waffles changed my life. Perfect balance of sweet and savory. Great service too!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Lisa Garcia",
    text: "I'm obsessed with their French toast. The bread is perfectly fluffy and the vanilla custard is amazing.",
    rating: 5,
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-pancake-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-syrup-800 mb-4">Customer Love</h2>
          <p className="text-syrup-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their OC Pancakes experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-pancake-500 text-pancake-500" />
                  ))}
                </div>
                <p className="text-syrup-600 italic mb-6">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center mt-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-syrup-800">{testimonial.name}</h4>
                  <p className="text-sm text-syrup-500">Regular Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-pancake-600 hover:text-pancake-700 font-medium"
          >
            Read more reviews on Yelp
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
