'use client';
import React from 'react';
import LearnMoreButton from '@/components/learnMoreButton';
import { motion } from 'framer-motion';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100, scale: 0.8 },
  hiddenRight: { opacity: 0, x: 100, scale: 0.8 },
  hiddenCenter: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.8, type: 'spring' } },
};

export default function BonusPage() {
  return (
    <section id="bonuses" className="bg-white px-10 pt-6 pb-16 m-6 rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: Tag and Heading */}
        <div>
          <button className="border-[#50477C] text-[#50477C] border rounded-3xl bg-white px-4 py-2 mb-4 text-sm font-semibold transition-transform transform hover:scale-105">
            Our Bonuses
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-[#50477C] leading-tight">
            Unlock Your Exclusive Prenatal Journey: <br />
            <span className="text-[#7C6CC3]">Get 3 FREE Bonuses</span> with Every Course Sign-Up!
          </h1>
        </div>

        {/* Right side: Description + Button */}
        <div className="text-[#50477C]">
          <p className="text-lg mb-6">
            Sign up for the exclusive prenatal exercise program and get 3 FREE bonuses —
            specially designed to support and empower your pregnancy journey!
          </p>
          <LearnMoreButton />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {/* Card 1 - Left */}
        <motion.div
          initial="hiddenLeft"
          animate="visible"
          variants={cardVariants}
          className="relative bg-[url('/bonus_image1.jpg')] bg-cover p-6 text-white h-96 w-full sm:w-80 md:w-96 rounded-2xl flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
          <div className="flex justify-end z-10">
            <img src="/arrow_white.svg" className="w-14" />
          </div>
          <div className="space-y-2 z-10">
            <h2 className="text-3xl font-bold">Pregnancy Nutrition Guide</h2>
            <p className="text-sm">Nutrient-packed meal ideas and tips to fuel your body and your baby.</p>
            <div className="space-x-3">
              <button className="py-1 rounded-3xl px-6 bg-[#bda4c53e] hover:scale-105 transition duration-300">Nutrients</button>
              <button className="py-1 rounded-3xl px-6 bg-[#bda4c53e] hover:scale-105 transition duration-300">Meal</button>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - Center */}
        <motion.div
          initial="hiddenCenter"
          animate="visible"
          variants={cardVariants}
          className="relative bg-[url('/bonus_image2.png')] bg-cover p-6 text-white h-96 w-full sm:w-80 md:w-96 rounded-2xl flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
          <div className="flex justify-end z-10">
            <img src="/arrow_white.svg" className="w-14" />
          </div>
          <div className="space-y-2 z-10">
            <h2 className="text-3xl font-bold">Birth Preparation Guide</h2>
            <p className="text-sm">Practical tips to help you feel confident and prepared for labor.</p>
            <div className="space-x-3">
              <button className="py-1 rounded-3xl px-6 bg-[#bda4c53e] hover:scale-105 transition duration-300">Confident</button>
              <button className="py-1 rounded-3xl px-6 bg-[#bda4c53e] hover:scale-105 transition duration-300">Labor</button>
            </div>
          </div>
        </motion.div>

        {/* Card 3 - Right */}
        <motion.div
          initial="hiddenRight"
          animate="visible"
          variants={cardVariants}
          className="relative bg-[url('/bonus_image3.jpg')] bg-cover p-6 text-white h-96 w-full sm:w-80 md:w-96 rounded-2xl flex flex-col justify-between hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
          <div className="flex justify-end z-10">
            <img src="/arrow_white.svg" className="w-14" />
          </div>
          <div className="space-y-2 z-10">
            <h2 className="text-3xl font-bold">Trimester-by-Trimester Guide</h2>
            <p className="text-sm">Month-by-month advice on what to expect and how to care for yourself.</p>
            <div className="space-x-3">
              <button className="py-1 rounded-3xl px-6 bg-[#bda4c53e] hover:scale-105 transition duration-300">Monthly</button>
              <button className="py-1 rounded-3xl px-6 bg-[#bda4c53e] hover:scale-105 transition duration-300">Care</button>
              <button className="py-1 rounded-3xl px-6 bg-[#bda4c53e] hover:scale-105 transition duration-300">Advice</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
