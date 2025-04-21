'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

// Example Testimonial Data
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
    img: '/user5.jpeg',
  },
  {
    name: 'User Name 6',
    role: 'Returning Member',
    rating: 4,
    review: 'Second time using this program and it still works wonders!',
    img: '/user6.jpg',
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
    <div className="bg-white rounded-2xl m-6 py-16 px-4 relative">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#f0e7ff] opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-[#e7f0ff] opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

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
                  whileHover={{ y: -5 }}
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
                    <motion.img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#f0e7ff]"
                      whileHover={{ scale: 1.05 }}
                    />
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
              pageIndex === 0 ? 'bg-gray-200' : 'bg-[#50477C] text-white'
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
              pageIndex === totalPages - 1 ? 'bg-gray-200' : 'bg-[#50477C] text-white'
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
  );
}
