import React from 'react'
import { Wrench, Home, Flame, Building2, Droplets, Clock } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Roof Repairs',
    description: 'From minor leaks to major damage, we fix all types of roof problems quickly and effectively. Emergency service available.',
    benefits: ['Same-day service', 'All roof types', 'Competitive pricing'],
    color: 'bg-cyan-500',
  },
  {
    icon: Home,
    title: 'New Roof Installation',
    description: 'Complete roof replacements using high-quality materials. Slate, tile, flat roofs — we do it all with long guarantees.',
    benefits: ['10+ year guarantee', 'Premium materials', 'Expert fitting'],
    color: 'bg-teal-500',
  },
  {
    icon: Flame,
    title: 'Chimney Repairs',
    description: 'Chimney repointing, rebuilding, and capping. Keep your chimney safe and watertight with our specialist services.',
    benefits: ['Safe scaffolding', 'Weatherproofing', 'Structural repairs'],
    color: 'bg-orange-500',
  },
  {
    icon: Building2,
    title: 'Flat Roofing',
    description: 'EPDM rubber, GRP fibreglass, and felt flat roof solutions. Perfect for extensions, garages, and commercial properties.',
    benefits: ['20+ year lifespan', 'Weather resistant', 'Low maintenance'],
    color: 'bg-cyan-600',
  },
  {
    icon: Droplets,
    title: 'Guttering & Fascias',
    description: 'Complete guttering services including cleaning, repairs, and replacement. Protect your property from water damage.',
    benefits: ['Prevents damp', 'Free flow guaranteed', 'Fascia replacement'],
    color: 'bg-teal-600',
  },
  {
    icon: Clock,
    title: 'Emergency Roofing',
    description: '24/7 emergency callouts for storm damage, leaks, and urgent repairs. Fast response to protect your home.',
    benefits: ['24/7 availability', 'Rapid response', 'Temporary weatherproofing'],
    color: 'bg-orange-600',
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a full range of professional roofing services to keep your property 
            protected. From minor repairs to complete installations, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="tel:02036704368" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get a Free Quote</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
