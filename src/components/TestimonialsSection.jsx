
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Victoria",
    text: "We visit this spot every time we're in Ocean City. The food and service is sooo good. We've been coming here for the past 12yrs and we've bragged enough about them that we've started bringing family out here just to share this deliciousness with them. My mom, sisters, and nieces love this spot. 10/10 HIGHLY RECOMMENDED. I wish they were located in our home state.",
    rating: 5,
    //image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Lori Tharp",
    text: "Very good food , amazing staff  very clean will definitely be visiting here again. Called ahead and they were able to accommodate our group of 11 in a timely manner",
    rating: 5,
   // image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Peggy Scarbro",
    text: "Our waitress Marilyn was absolutely amazing. Pleasant,  precise and so very friendly. Tommy the cook is in his wheelhouse. The foid was top notch.  We had a party of 11 women and Marilyn was on her A game . Highly recommend and will be definitely be back. Thank you",
    rating: 5,
    // image: "/placeholder.svg"
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
              {/* <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  /> 
                </div>*/}
                <div>
                  <h4 className="font-semibold text-syrup-800">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a target="_blank"
            href="https://www.google.com/maps/place/The+Little+House+Of+Pancakes/@38.3944794,-75.0637823,1188m/data=!3m1!1e3!4m8!3m7!1s0x89b8d678d4690b49:0x58752f4100da46c3!8m2!3d38.3944794!4d-75.0637823!9m1!1b1!16s%2Fg%2F1tdz5qkd?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" 
            className="inline-flex items-center text-pancake-600 hover:text-pancake-700 font-medium"
          >
            Read more reviews on Google reviews
             {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
*/}
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
