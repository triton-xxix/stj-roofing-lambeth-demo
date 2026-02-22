import React from 'react'
import { MapPin } from 'lucide-react'

const areas = [
  'Lambeth', 'Vauxhall', 'Stockwell', 'Kennington',
  'Oval', 'Brixton', 'Clapham', 'Wandsworth',
  'Pimlico', 'Westminster', 'Elephant & Castle', 'Waterloo'
]

const AreasServed = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-600">
            Based in Lambeth, we cover all surrounding areas within approximately 
            10 miles. If you're not sure if we cover your location, just give us a call.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              And all surrounding areas within SW8, SW9, SW4, SE11, SE1, SE17 postcodes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AreasServed
