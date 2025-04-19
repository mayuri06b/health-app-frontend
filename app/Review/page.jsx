'use client'
import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'User Name 1',
    rating: 5,
    review:
      'I chose this prenatal program for the birth prep education, which eased my fears about tearing and gave me confidence for a natural delivery.',
  },
  {
    name: 'User Name 2',
    rating: 4,
    review:
      'The classes were so helpful. I started at 16 weeks after a tough first trimester, and now at 35 weeks, I’ve never felt stronger.',
  },
  {
    name: 'User Name 3',
    rating: 5,
    review:
      'Every video is well structured and motivating. I know losing the baby weight will be easier too!',
  },
  {
    name: 'User Name 4',
    rating: 5,
    review:
      "Amazing! The trainer is so relatable and makes you feel like you're not alone.",
  },
]

export default function ReviewPage() {
  return (
    <div className="bg-white pt-5 pb-16 px-4 sm:px-6 lg:px-16 flex justify-center">
      {/* Main Container */}
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#50477C] leading-snug">
            WHAT ARE MY{' '}
            <span className="bg-gradient-to-r to-[#948ac3] from-[#b77ac5] bg-clip-text text-transparent">
              HAPPY
            </span>{' '}
            CUSTOMERS SAYING
          </h1>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 justify-center">
          {/* Left Image */}
          <motion.div
            className="w-full sm:w-[400px] h-[450px] rounded-3xl bg-[url('/review1.jpg')] bg-cover bg-center shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mt-12 lg:mt-0">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-500 ease-out"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
              >
                <div>
                  <h2 className="font-semibold text-lg text-[#50477C] mb-2">{t.name}</h2>
                  <div className="text-yellow-500 text-lg">
                    {'★'.repeat(t.rating)}
                    {'☆'.repeat(5 - t.rating)}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">{t.review}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#50477C] text-white text-lg font-semibold px-10 py-3 rounded-full hover:bg-[#645ba5] transition duration-300">
            Join the Program
          </button>
        </div>
      </div>
    </div>
  )
}
