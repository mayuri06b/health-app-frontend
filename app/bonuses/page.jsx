import React from 'react'
import LearnMoreButton from '@/components/learnMoreButton'

export default function BonusPage() {
  return (
    <div className="bg-white px-6 py-16">
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

      {/* Cards section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {/* Card 1 */}
        <div className="bg-[url('/bonus_image1.svg')] bg-cover p-6 text-white h-96 w-full sm:w-80 md:w-96 rounded-2xl flex flex-col justify-between transition-all transform hover:scale-105 hover:rotate-3 hover:shadow-lg duration-500">
          <div className="flex justify-end">
            <img src="/arrow_white.svg" className="w-14 opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Pregnancy Nutrition Guide</h2>
            <p className="text-sm">Nutrient-packed meal ideas and tips to fuel your body and your baby.</p>
            <div className="space-x-3">
              <button className="py-1 rounded-3xl px-6 border-[#dfd4e276] border-1 bg-[#bda4c53e] transition-transform transform hover:scale-105 duration-300">Nutrients</button>
              <button className="py-1 rounded-3xl px-6 border-[#dfd4e276] border-1 bg-[#bda4c53e] transition-transform transform hover:scale-105 duration-300">Meal</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[url('/bonus_image1.svg')] bg-cover p-6 text-white h-96 w-full sm:w-80 md:w-96 rounded-2xl flex flex-col justify-between transition-all transform hover:scale-105 hover:rotate-3 hover:shadow-lg duration-500">
          <div className="flex justify-end">
            <img src="/arrow_white.svg" className="w-14 opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Birth Preparation Guide</h2>
            <p className="text-sm">Practical tips to help you feel confident and prepared for labor.</p>
            <div className="space-x-3">
              <button className="py-1 rounded-3xl px-6 border-[#dfd4e276] border-1 bg-[#bda4c53e] transition-transform transform hover:scale-105 duration-300">Confident</button>
              <button className="py-1 rounded-3xl px-6 border-[#dfd4e276] border-1 bg-[#bda4c53e] transition-transform transform hover:scale-105 duration-300">Labor</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[url('/bonus_image1.svg')] bg-cover p-6 text-white h-96 w-full sm:w-80 md:w-96 rounded-2xl flex flex-col justify-between transition-all transform hover:scale-105 hover:rotate-3 hover:shadow-lg duration-500">
          <div className="flex justify-end">
            <img src="/arrow_white.svg" className="w-14 opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Trimester-by-Trimester Guide</h2>
            <p className="text-sm">Month-by-month advice on what to expect and how to care for yourself.</p>
            <div className="space-x-3">
              <button className="py-1 rounded-3xl px-6 border-[#dfd4e276] border-1 bg-[#bda4c53e] transition-transform transform hover:scale-105 duration-300">Monthly</button>
              <button className="py-1 rounded-3xl px-6 border-[#dfd4e276] border-1 bg-[#bda4c53e] transition-transform transform hover:scale-105 duration-300">Care</button>
              <button className="py-1 rounded-3xl px-6 border-[#dfd4e276] border-1 bg-[#bda4c53e] transition-transform transform hover:scale-105 duration-300">Advice</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
