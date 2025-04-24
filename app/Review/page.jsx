'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Aarti Sharma',
    role: 'Prenatal Member',
    rating: 5,
    review:
      'I chose this prenatal program for the birth prep education, which eased my fears about tearing and gave me confidence for a natural delivery. Highly recommended for all expecting mothers!',
  },
  {
    name: 'Priya Patel',
    role: 'Fitness Enthusiast',
    rating: 4,
    review:
      'The classes were so helpful. I started at 16 weeks after a tough first trimester, and now at 35 weeks, I’ve never felt stronger. Thank you for guiding me through!',
  },
  {
    name: 'Neha Desai',
    role: 'Mother of Two',
    rating: 5,
    review:
      'Every video is well structured and motivating. I know losing the baby weight will be easier too! It’s been a great journey with you!',
  },
  {
    name: 'Kavita Reddy',
    role: 'New Mom',
    rating: 5,
    review:
      'Amazing! The trainer is so relatable and makes you feel like you\'re not alone in this. Truly a wonderful experience!',
  },
  {
    name: 'Manisha Gupta',
    role: 'Happy Client',
    rating: 5,
    review: 'I love the energy and structure of each session! Definitely worth every minute.',
  },
  {
    name: 'Swati Mehta',
    role: 'Returning Member',
    rating: 4,
    review: 'Second time using this program and it still works wonders! Really appreciate the support.',
  },
]

const cardsPerPage = 2;

const cardVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const containerVariants = {
  center: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function TestimonialsSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const visibleTestimonials = testimonials.slice(
    pageIndex * cardsPerPage,
    (pageIndex + 1) * cardsPerPage
  );

  const handleNext = () => {
    if (pageIndex < totalPages - 1) {
      setDirection(1);
      setPageIndex(pageIndex + 1);
    }
  };

  const handleBack = () => {
    if (pageIndex > 0) {
      setDirection(-1);
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <section id='review'>
    <div className="bg-white rounded-2xl m-6 py-16 px-4 relative">
      <motion.h2
        className="text-center text-4xl font-bold text-[#50477C] mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        WHAT ARE MY{' '}
        <span className="bg-gradient-to-r from-[#b77ac5] to-[#948ac3] bg-clip-text text-transparent">
          HAPPY
        </span>{' '}
        CUSTOMERS SAYING
      </motion.h2>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={pageIndex}
              className="flex flex-wrap justify-center gap-8"
              custom={direction}
              variants={{ center: containerVariants.center }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${pageIndex}-${index}`}
                  variants={cardVariants}
                  className="rounded-3xl border border-[#eaeaea] p-6 sm:p-8 bg-white w-full max-w-sm flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < testimonial.rating ? "#FFD700" : "none"}
                        stroke={i < testimonial.rating ? "#FFD700" : "#ddd"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 text-lg leading-relaxed relative before:content-['“'] after:content-['”'] text-wrap-balance">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-semibold text-[#50477C] text-lg">{testimonial.name}</p>
                      <p className="text-sm text-[#948ac3]">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <motion.button
            onClick={handleBack}
            disabled={pageIndex === 0}
            whileHover={{ scale: pageIndex === 0 ? 1 : 1.1 }}
            whileTap={{ scale: pageIndex === 0 ? 1 : 0.95 }}
            className={`p-3 rounded-full shadow-md transition-transform duration-300 ${
              pageIndex === 0 ? 'bg-gray-50 text-[#50477C]' : 'bg-[#50477C] text-white'
            }`}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            disabled={pageIndex === totalPages - 1}
            whileHover={{ scale: pageIndex === totalPages - 1 ? 1 : 1.1 }}
            whileTap={{ scale: pageIndex === totalPages - 1 ? 1 : 0.95 }}
            className={`p-3 rounded-full shadow-md transition-transform duration-300 ${
              pageIndex === totalPages - 1 ? 'bg-gray-50 text-[#50477C]' : 'bg-[#50477C] text-white'
            }`}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Page Indicators */}
        <motion.div
          className="flex justify-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <motion.span
              key={idx}
              onClick={() => setPageIndex(idx)}
              className={`h-2 w-6 rounded-full cursor-pointer transition-all ${
                idx === pageIndex ? 'bg-[#50477C] shadow-md' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
    </section>
  );
}
