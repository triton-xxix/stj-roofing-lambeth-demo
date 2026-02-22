import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="bg-cyan-700 text-white section-padding">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-cyan-100">
            Call now or fill in the form below for a free, no-obligation quote. 
            We're here to help with all your roofing needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <a href="tel:02036704368" className="text-2xl font-bold text-orange-300 hover:text-orange-200 transition-colors">
                  020 3670 4368
                </a>
                <p className="text-cyan-200 text-sm mt-1">Available 24/7 for emergencies</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <a href="mailto:info@stjroofinglambeth.co.uk" className="text-cyan-100 hover:text-white transition-colors">
                  info@stjroofinglambeth.co.uk
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-cyan-100">69 S Lambeth Rd, London SW8 1QU</p>
                <p className="text-cyan-200 text-sm mt-1">Serving SW8 and surrounding areas</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Opening Hours</h3>
                <div className="text-cyan-100 space-y-1">
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p className="text-orange-300">Sunday: Emergency only</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Simple Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold mb-6">Request a Callback</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-orange-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-orange-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-orange-400"
              />
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-cyan-200 focus:outline-none focus:border-orange-400">
                <option value="">Select Service</option>
                <option value="repair">Roof Repair</option>
                <option value="new">New Roof</option>
                <option value="emergency">Emergency Repair</option>
                <option value="chimney">Chimney Work</option>
                <option value="guttering">Guttering</option>
                <option value="other">Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:border-orange-400 resize-none"
              />
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
