import React from 'react'
import { Shield, Clock, Star, PoundSterling, ThumbsUp, Award } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: 'Fully Insured', color: 'text-green-500' },
  { icon: Clock, label: 'Fast Response', color: 'text-cyan-500' },
  { icon: Star, label: '5-Star Rated', color: 'text-amber-500' },
  { icon: PoundSterling, label: 'Free Quotes', color: 'text-purple-500' },
  { icon: ThumbsUp, label: 'Work Guaranteed', color: 'text-teal-500' },
  { icon: Award, label: '15+ Years Exp', color: 'text-orange-500' },
]

const TrustSignals = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustBadges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className={`w-12 h-12 ${badge.color} bg-gray-100 rounded-full flex items-center justify-center mb-3`}>
                <badge.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals
