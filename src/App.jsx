import React from 'react'
import { Phone, Shield } from 'lucide-react'
import Hero from './components/Hero'
import TrustSignals from './components/TrustSignals'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import AreasServed from './components/AreasServed'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Stj Roofing Lambeth</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>
            
            <a 
              href="tel:02036704368" 
              className="flex items-center space-x-2 bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">020 3670 4368</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        <Hero />
        <TrustSignals />
        <Services />
        <About />
        <Testimonials />
        <AreasServed />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
