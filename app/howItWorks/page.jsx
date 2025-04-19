'use client'

import React, { useEffect } from 'react'
import {
  ShieldCheck,
  GraduationCap,
  Clock,
  Users,
} from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

export default function HowItWorksPage() {
  const features = [
    {
      title: 'Safe and Effective',
      icon: <ShieldCheck className="w-14 h-14 sm:w-16 sm:h-16 mb-4 text-[#50477C]" />,
      description:
        'All exercises are designed with your safety and well-being in mind, ensuring you stay strong and healthy throughout your pregnancy.',
    },
    {
      title: 'Tailored to Your Pregnancy Journey',
      icon: <GraduationCap className="w-14 h-14 sm:w-16 sm:h-16 mb-4 text-[#50477C]" />,
      description:
        'Each trimester offers a new set of exercises aimed at addressing the changing needs of your body.',
    },
    {
      title: 'Convenient & Accessible',
      icon: <Clock className="w-14 h-14 sm:w-16 sm:h-16 mb-4 text-[#50477C]" />,
      description:
        'These videos are available anytime, making it easy to stay fit no matter your schedule.',
    },
    {
      title: 'Expert Guidance',
      icon: <Users className="w-14 h-14 sm:w-16 sm:h-16 mb-4 text-[#50477C]" />,
      description:
        'With my experience and training, you’ll be guided by a professional who understands prenatal fitness.',
    },
  ]

  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    }))
  }, [controls])

  return (
    <div className="relative px-3 py-10 sm:px-4 sm:py-12 bg-white mx-2 sm:m-6 rounded-2xl overflow-hidden">
      {/* Decorative Images - hidden on mobile */}
      <img
        src="/Leaves.svg"
        alt="Decorative Leaves"
        className="absolute top-[-15px] left-[-100px] w-[300px] sm:w-[350px] rotate-90 pointer-events-none hidden sm:block"
      />
      <img
        src="/bg2.svg"
        alt="Decorative Accent"
        className="absolute right-[-100px] w-[300px] sm:w-[400px] rotate-270 pointer-events-none hidden sm:block"
      />

      <div className="mb-10 sm:mb-12 text-center relative z-10 px-2 sm:px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#50477C] leading-snug">
          Why Choose My Prenatal Exercise Program?
        </h1>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto relative z-10 px-1 sm:px-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              rotate: 10 * (index % 2 === 0 ? 1 : -1),
              scale: 0.7,
            }}
            animate={controls}
            className="bg-[#ffffffbe] rounded-xl shadow-md p-4 sm:p-6 text-center flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            {feature.icon}
            <h2 className="text-base sm:text-xl font-semibold text-[#50477C] mb-2 sm:mb-4">
              {feature.title}
            </h2>
            <p className="text-sm text-[#50477C]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
