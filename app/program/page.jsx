'use client'

import React, { useState } from 'react'

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
]

export default function ProgramPage() {
  const [selectedMode, setSelectedMode] = useState(programModes[0])

  return (
    <div className="bg-[#50477C] py-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
  <div className="bg-[#50477C] border-2 text-white py-8 px-4 sm:px-8 lg:px-20 rounded-3xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
      What Makes My Program Unique?
    </h1>

    {/* Button group */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
      {programModes.map((mode) => (
        <button
          key={mode.label}
          onClick={() => setSelectedMode(mode)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 transform ${
            selectedMode.label === mode.label
              ? 'bg-white text-[#50477C] scale-105'
              : 'bg-[#50477C] text-white border-white hover:scale-105'
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>

    {/* Main content grid */}
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-10 sm:gap-12">
      {/* Image */}
      <div className="p-2 sm:p-4 rounded-3xl w-full max-w-xs sm:max-w-md md:max-w-lg">
        <img
          src={selectedMode.image}
          alt={selectedMode.title}
          className="w-full h-auto rounded-3xl transition-transform transform hover:scale-105"
        />
      </div>

      {/* Text content */}
      <div className="text-center sm:text-left max-w-lg px-2 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          {selectedMode.title}
        </h2>
        <p className="text-base sm:text-lg font-light mb-6">
          {selectedMode.description}
        </p>
        <button className="text-[#50477C] text-lg font-medium bg-white rounded-full py-3 px-6 sm:px-8 shadow-lg hover:border-[#c488ec] border-2">
          Join the Squad
        </button>
      </div>
    </div>
  </div>
</div>

  )
}
