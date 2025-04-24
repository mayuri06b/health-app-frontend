'use client';

import CurvedBox from '@/components/CurvedBox';
import Navbar from '@/components/navbar';
import { motion } from 'framer-motion';
import React from 'react';
import confetti from 'canvas-confetti';

export default function HomePage() {
  const launchConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#50477C', '#8a83b5', '#c5b9f2'], // Purple tones
    });
  };

  return (
    <section id='home'>
    <div className='m-6 pt-5 pb-8 bg-gradient-to-t from-white via-[#f9f9fb] to-white rounded-3xl'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <h1 className='text-[#50477C] text-4xl md:text-5xl font-bold leading-tight mb-4'>
            Introduction to The Bump Squad
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-[#50477C] font-semibold text-opacity-90"
          >
            Welcome to The Bump Squad!
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#50477C] rounded-full mt-4 mx-auto md:mx-0"></div>
        </motion.div>

        <br />

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                }
              }
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="text-lg text-[#50477C] leading-relaxed"
            >
              The Bump Squad is here to support you every step of the way through pregnancy. Whether you're looking for fitness tips, expert advice, or just a community to connect with, we're here to help you thrive during this beautiful journey.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="text-lg text-[#50477C] leading-relaxed"
            >
              Join us to experience a blend of strength, support, and confidence throughout your pregnancy. With personalized guidance and a dedicated team, you'll always feel empowered and informed.
            </motion.p>

            <motion.button
              onClick={launchConfetti}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 bg-[#50477C] hover:bg-[#8a83b5] text-white font-medium py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Join The Community
            </motion.button>
          </motion.div>

          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full">
              <CurvedBox />
              <motion.img
                src="/arrow_top_home.png"
                alt="Arrow to dip"
                className="absolute top-0 right-0 w-auto h-3/12 animate-rotate-step"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
