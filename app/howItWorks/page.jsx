'use client'

import React, { useState } from 'react'
import { ShieldCheck, GraduationCap, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HowItWorksPage() {
  const features = [
    {
      title: 'Safe and Effective',
      icon: <ShieldCheck className="w-12 h-12 md:w-14 md:h-14 mb-4 text-[#50477C]" />,
      description:
        'All exercises are designed with your safety and well-being in mind, ensuring you stay strong and healthy throughout your pregnancy.',
    },
    {
      title: 'Tailored to Your Pregnancy Journey',
      icon: <GraduationCap className="w-12 h-12 md:w-14 md:h-14 mb-4 text-[#50477C]" />,
      description:
        'Each trimester offers a new set of exercises aimed at addressing the changing needs of your body.',
    },
    {
      title: 'Convenient & Accessible',
      icon: <Clock className="w-12 h-12 md:w-14 md:h-14 mb-4 text-[#50477C]" />,
      description:
        'These videos are available anytime, making it easy to stay fit no matter your schedule.',
    },
    {
      title: 'Expert Guidance',
      icon: <Users className="w-12 h-12 md:w-14 md:h-14 mb-4 text-[#50477C]" />,
      description:
        'With my experience and training, you’ll be guided by a professional who understands prenatal fitness.',
    },
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const handleNext = () => {
    if (currentCardIndex < features.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
    }
  }

  return (
    <section id='howItWorks' >
    <div className="m-6 relative px-4 py-10 sm:px-6 sm:py-16 lg:px-20 bg-white rounded-2xl overflow-hidden">
      {/* Animated Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[
          { size: 'w-36 h-36', top: 'top-10', left: 'left-6', bg: 'bg-pink-200', opacity: 'opacity-20' },
          { size: 'w-28 h-28', top: 'top-1/4', left: 'left-1/3', bg: 'bg-purple-100', opacity: 'opacity-20' },
          { size: 'w-48 h-48', top: 'top-2/3', left: 'left-1/2', bg: 'bg-[#F8BBD0]', opacity: 'opacity-20' },
          { size: 'w-32 h-32', top: 'top-0', left: 'left-2/3', bg: 'bg-[#CE93D8]', opacity: 'opacity-20' },
          { size: 'w-14 h-14', top: 'bottom-10', left: 'left-1/5', bg: 'bg-pink-300', opacity: 'opacity-20' },
        ].map((circle, index) => (
          <motion.div
            key={index}
            className={`${circle.size} ${circle.top} ${circle.left} ${circle.bg} ${circle.opacity} rounded-full absolute`}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6 + index }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="mb-10 text-center px-4 relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#50477C] leading-snug">
          Why Choose My Prenatal Exercise Program?
        </h1>
      </div>

      {/* Mobile & Tablet View */}
      <div className="sm:hidden relative z-10">
        <motion.div
          key={currentCardIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#ffffffbe] rounded-xl shadow-md p-5 sm:p-6 text-center flex flex-col items-center hover:bg-gradient-to-br hover:from-[#E1BEE7] hover:to-[#D1C4E9] transition-all duration-300"
        >
          {features[currentCardIndex].icon}
          <h2 className="text-base sm:text-lg font-semibold text-[#50477C] mb-2">
            {features[currentCardIndex].title}
          </h2>
          <p className="text-sm text-[#50477C]">{features[currentCardIndex].description}</p>
        </motion.div>

        <div className="flex justify-between mt-6 px-4">
          <button
            onClick={handlePrev}
            className={`bg-[#50477C] text-white py-2 px-5 text-sm sm:text-base rounded-full transition duration-200 ${
              currentCardIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#7C6CC3]'
            }`}
            disabled={currentCardIndex === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className={`bg-[#50477C] text-white py-2 px-5 text-sm sm:text-base rounded-full transition duration-200 ${
              currentCardIndex === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#7C6CC3]'
            }`}
            disabled={currentCardIndex === features.length - 1}
          >
            Next
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 12,
              delay: index * 0.1,
            }}
            className="bg-[#ffffffbe] rounded-xl shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#E1BEE7] hover:to-[#D1C4E9] hover:scale-105"
          >
            {feature.icon}
            <h2 className="text-base md:text-lg font-semibold text-[#50477C] mb-2">{feature.title}</h2>
            <p className="text-sm text-[#50477C]">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  )
}
