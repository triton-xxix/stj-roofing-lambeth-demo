import React from 'react'
import { Users, Shield, PoundSterling, MapPin } from 'lucide-react'

const differentiators = [
  {
    icon: Users,
    title: '500+ Happy Customers',
    description: 'Proudly serving Lambeth and surrounding areas with a reputation built on trust and quality workmanship.',
  },
  {
    icon: Shield,
    title: 'Fully Insured & Guaranteed',
    description: 'Full public liability insurance and workmanship guarantees on all jobs for your complete peace of mind.',
  },
  {
    icon: PoundSterling,
    title: 'Free, No-Obligation Quotes',
    description: 'Transparent pricing with no hidden costs. We provide detailed written quotes so you know exactly what you\'re paying for.',
  },
  {
    icon: MapPin,
    title: 'Local & Reliable',
    description: 'Based in Lambeth, we understand local properties and weather conditions. We\'re never far when you need us.',
  },
]

const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Stj Roofing Lambeth
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Stj Roofing Lambeth has been serving SW8 and surrounding areas for over 
                15 years. We're a family-run business built on reputation, quality 
                workmanship, and customer satisfaction.
              </p>
              
              <p>
                Our mission is simple: to provide honest, reliable roofing services at 
                fair prices. No shortcuts, no surprises — just quality work that stands 
                the test of time.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-cyan-50 rounded-xl border-l-4 border-primary">
              <p className="text-gray-700 italic">
                "We treat every home as if it were our own. That's why our customers 
                recommend us to their friends and family."
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">— The Stj Roofing Lambeth Team</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
