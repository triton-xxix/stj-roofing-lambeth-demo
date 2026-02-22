import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Do you offer free quotes?',
    answer: 'Yes, all our quotes are completely free with no obligation. We\'ll visit your property, assess the work needed, and provide a detailed written quote.',
  },
  {
    question: 'Are you fully insured?',
    answer: 'Absolutely. We have full public liability insurance for your peace of mind. Certificates are available on request.',
  },
  {
    question: 'Do you offer emergency repairs?',
    answer: 'Yes, we offer 24/7 emergency roofing services for urgent issues like storm damage or severe leaks. Call us anytime on 020 3670 4368.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We primarily serve Lambeth, Vauxhall, Stockwell, Kennington, and surrounding areas. Contact us to check your specific location.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements take 3-5 days, depending on size and weather. We\'ll give you a clear timeline in your quote.',
  },
  {
    question: 'Do your roofs come with a guarantee?',
    answer: 'Yes, all our new roofs come with a minimum 10-year guarantee on workmanship. Some materials carry additional manufacturer warranties.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white section-padding">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We've got answers. If you don't see what you're looking for, 
            feel free to give us a call.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
