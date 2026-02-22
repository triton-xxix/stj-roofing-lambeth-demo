import React from 'react'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Stj Roofing Lambeth</span>
            </div>
            <p className="text-gray-400">
              Professional roofing services in Lambeth. Quality workmanship guaranteed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary transition-colors">Roof Repairs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">New Roofs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Emergency Repairs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Guttering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:02036704368" className="hover:text-primary transition-colors">020 3670 4368</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>69 S Lambeth Rd, London SW8 1QU</span>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2">
              <li>Lambeth</li>
              <li>SW8</li>
              <li>Vauxhall</li>
              <li>Kennington</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Stj Roofing Lambeth. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Emergency roofing services available 24/7
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
