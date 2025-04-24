'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LearnMoreButton from './learnMoreButton';

const MissionCard = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false); // To detect if we're on the client

  // Real-time Timer logic, runs only on client-side
  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts
  }, []);

  useEffect(() => {
    if (isClient) {
      const targetDate = new Date('2025-12-31T23:59:59'); // Target date for countdown

      const interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);

      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, [isClient]);

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 3600 * 24));
    const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  if (!isClient) {
    return null; // Prevent rendering the timer on the server side (this avoids hydration error)
  }

  return (
    <div className="max-w-md mx-auto space-y-4 font-sans">
      {/* Mission Card - Outer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="border-2 border-[#50477C] rounded-xl p-6 space-y-4"
      >
        <img src="/starVector.svg" alt="star icon" className="w-16" />
        <h1 className="text-2xl font-bold text-[#50477C]">My Mission</h1>
        <p className="text-sm text-[#2C2C2C] leading-relaxed">
          Hi, I'm <span className="font-semibold">[Your Name]</span>, a certified prenatal and postnatal fitness expert,
          Pilates instructor — and most importantly, a fellow mama. I know firsthand the ups and downs of pregnancy
          and how crucial it is to feel strong, supported, and confident in your body. After guiding over 50 women through
          their own journeys and experiencing it myself, I created this program to be your companion every step of the way.
          Let's move, breathe, and embrace this beautiful chapter together!
        </p>
      </motion.div>

      {/* Timer & Buttons Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="border-2 border-[#50477C] rounded-xl p-4 space-y-4"
      >
        {/* Timer */}
        <div className="inline-flex items-center justify-between text-white bg-[#50477C] px-6 py-4 rounded-xl w-full">
          <div className="text-center">
            <h1 className="text-lg font-bold">{timeLeft.days}</h1>
            <p className="text-xs font-light">Days</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold">{timeLeft.hours}</h1>
            <p className="text-xs font-light">Hours</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold">{timeLeft.minutes}</h1>
            <p className="text-xs font-light">Minutes</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold">{timeLeft.seconds}</h1>
            <p className="text-xs font-light">Seconds</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-2">
          <LearnMoreButton />
          <button className="text-[#50477C] border border-[#50477C] bg-white rounded-3xl px-6 py-2 text-sm font-medium transition duration-300 transform hover:bg-[#50477C] hover:text-white hover:scale-105">
            Book Course</button>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionCard;
