'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const programModes = [
  {
    label: 'Trimester-Specific',
    title: 'Tailored for Every Trimester',
    description:
      "The exercises are specifically designed for each stage of your pregnancy, so you're always working on the right exercises at the right time.",
    image: '/programSVG.svg',
  },
  {
    label: 'Core & Pelvic Floor',
    title: 'Strong Foundation',
    description:
      'Focused routines to strengthen your core and pelvic floor, supporting your body during and after pregnancy.',
    image: '/programSVG.svg',
  },
  {
    label: 'Holistic Care',
    title: 'Mind, Body & Baby',
    description:
      'Incorporating mindfulness, breathwork, and movement for a fully holistic pregnancy wellness approach.',
    image: '/programSVG.svg',
  },
  {
    label: 'Expert-Led',
    title: 'Guided by Experts',
    description:
      'Led by certified professionals so you can feel confident in every stretch, squat, and breath.',
    image: '/programSVG.svg',
  },
  {
    label: 'On-Demand Access',
    title: 'Anytime, Anywhere',
    description:
      'Access your workouts whenever it suits your schedule — from the comfort of your home.',
    image: '/programSVG.svg',
  },
];

export default function ProgramPage() {
  const launchConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#50477C', '#8a83b5', '#c5b9f2'],
    });
  };
  const [selectedMode, setSelectedMode] = useState(programModes[0]);
  return (
    <section id="program" className="m-6 bg-[#50477C] py-6 rounded-3xl">
      <div className="m-6 bg-[#50477C] py-6 rounded-3xl">
        <div className="border-2 text-white py-8 px-8 sm:px-8 lg:px-20 rounded-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10"
          >
            What Makes My Program Unique?
          </motion.h1>

          {/* Button group */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            {programModes.map((mode) => (
              <motion.button
                key={mode.label}
                onClick={() => setSelectedMode(mode)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 transform ${selectedMode.label === mode.label
                    ? 'bg-white text-[#50477C] scale-105'
                    : 'bg-[#50477C] text-white border-white hover:scale-105'
                  }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {mode.label}
              </motion.button>
            ))}
          </div>

          {/* Main content grid */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-10 sm:gap-12"
          >
            {/* Image */}
            <div className="p-2 sm:p-4 rounded-3xl w-full max-w-xs sm:max-w-md md:max-w-lg">
              <motion.img
                src={selectedMode.image}
                alt={selectedMode.title}
                className="w-full h-auto rounded-3xl"
                animate={{
                  y: [0, -5, 0], // float up and down
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
              />

            </div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center sm:text-left max-w-lg px-2 sm:px-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                {selectedMode.title}
              </h2>
              <p className="text-base sm:text-lg font-light mb-6">
                {selectedMode.description}
              </p>
              <motion.button
                onClick={launchConfetti}
                className="text-[#50477C] text-lg font-medium bg-white rounded-full py-3 px-6 sm:px-8 shadow-lg hover:border-[#c488ec] border-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Join the Squad
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
