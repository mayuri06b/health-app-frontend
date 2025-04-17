import React from 'react'
import LearnMoreButton from '@/components/learnMoreButton'

export default function BonusPage() {
  return (
    <div className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: Tag and Heading */}
        <div>
          <button className="border-[#50477C] text-[#50477C] border rounded-3xl bg-white px-4 py-2 mb-4 text-sm font-semibold">
            Our Bonuses
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-[#50477C] leading-tight">
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
      <div>
        <h2>hdxwx</h2>
      </div>
    </div>
  )
}
