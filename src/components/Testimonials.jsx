import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Excellent service from start to finish. Fixed our leak quickly and the price was very fair. Would definitely recommend!",
    author: "Sarah M.",
    location: "Lambeth",
    rating: 5,
  },
  {
    text: "Professional, punctual, and did a great job on our new roof. Left everything clean and tidy. Very happy customers.",
    author: "James & Linda K.",
    location: "Vauxhall",
    rating: 5,
  },
  {
    text: "Called them for an emergency repair after the storm. They came out within the hour and sorted it. Lifesavers!",
    author: "Michael T.",
    location: "Stockwell",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-cyan-500 section-padding">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-cyan-100">
            Don't just take our word for it. Here's what homeowners in Lambeth 
            and surrounding areas have to say about our work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                <p className="text-gray-700 relative z-10 italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
