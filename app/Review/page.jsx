'use client'
import React from 'react'

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
    <div className="bg-[#F7F7F3] py-16 px-4 sm:px-6 lg:px-16">
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
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Image */}
        <div className="w-full sm:w-[400px] h-[450px] rounded-3xl bg-[url('/review1.jpg')] bg-cover bg-center shadow-xl"></div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-xl duration-200 ease-in-out"
            >
              <div>
                <h2 className="font-semibold text-lg text-[#50477C] mb-1">{t.name}</h2>
                <div className="text-yellow-500 text-base">
                  {'★'.repeat(t.rating)}
                  {'☆'.repeat(5 - t.rating)}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">{t.review}</p>
            </div>
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
  )
}
