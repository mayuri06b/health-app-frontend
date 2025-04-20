'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'User Name 1',
    role: 'Prenatal Member',
    rating: 5,
    review:
      'I chose this prenatal program for the birth prep education, which eased my fears about tearing and gave me confidence for a natural delivery.',
    img: '/user1.jpg',
  },
  {
    name: 'User Name 2',
    role: 'Fitness Enthusiast',
    rating: 4,
    review:
      'The classes were so helpful. I started at 16 weeks after a tough first trimester, and now at 35 weeks, Ive never felt stronger.',
    img: '/user2.jpg',
  },
  {
    name: 'User Name 3',
    role: 'Mother of Two',
    rating: 5,
    review:
      'Every video is well structured and motivating. I know losing the baby weight will be easier too!',
    img: '/user3.jpg',
  },
  {
    name: 'User Name 4',
    role: 'New Mom',
    rating: 5,
    review:
      "Amazing! The trainer is so relatable and makes you feel like you're not alone.",
    img: '/user4.jpg',
  },
  {
    name: 'User Name 5',
    role: 'Happy Client',
    rating: 5,
    review: 'I love the energy and structure of each session!',
    img: '/user5.jpg',
  },
  {
    name: 'User Name 6',
    role: 'Returning Member',
    rating: 4,
    review: 'Second time using this program and it still works wonders!',
    img: '/user6.jpg',
  },
]

const cardsToShow = 3
const totalPages = Math.ceil(testimonials.length / cardsToShow)

export default function ReviewCarousel() {
  const [pageIndex, setPageIndex] = useState(0)

  const handleNext = () => {
    if (pageIndex < totalPages - 1) setPageIndex((prev) => prev + 1)
  }

  const handleBack = () => {
    if (pageIndex > 0) setPageIndex((prev) => prev - 1)
  }

  const startIndex = pageIndex * cardsToShow
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsToShow
  )

  return (
    <div className="bg-white py-12 px-4 relative">
      <h2 className="text-center text-4xl font-bold text-[#50477C] mb-10">
        WHAT ARE MY{' '}
        <span className="bg-gradient-to-r from-[#b77ac5] to-[#948ac3] bg-clip-text text-transparent">
          HAPPY
        </span>{' '}
        CUSTOMERS SAYING
      </h2>

      <div className="flex justify-center items-center gap-6">
        {/* Back Button */}
        <button
          onClick={handleBack}
          disabled={pageIndex === 0}
          className={`p-3 rounded-full ${
            pageIndex === 0 ? 'bg-gray-300' : 'bg-[#50477C] text-white'
          }`}
        >
          <ChevronLeft />
        </button>

        {/* Group Animated Cards */}
        <div className="w-full max-w-5xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              className="flex gap-6 justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-300 p-6 bg-white w-full max-w-sm flex-shrink-0"
                >
                  <p className="text-gray-600 mb-4">{testimonial.review}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <p className="font-semibold text-[#50477C]">{testimonial.name}</p>
                      <p className="text-sm text-blue-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={pageIndex === totalPages - 1}
          className={`p-3 rounded-full ${
            pageIndex === totalPages - 1
              ? 'bg-gray-300'
              : 'bg-[#50477C] text-white'
          }`}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Page Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === pageIndex ? 'bg-[#50477C]' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  )
}
