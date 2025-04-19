import CurvedBox from '@/components/CurvedBox'
import MissionCard from '@/components/missionCard'
import Navbar from '@/components/navbar'
import React from 'react'


export default function HomePage() {
  return (
    <div className='bg-white rounded-3xl'>
      <div className=''>
      <Navbar />
      </div>
      {/* Heading */}
      <div>
        <h1 className='text-[#50477C] text-4xl pl-10 pt-7'>
          Introduction to The Bump Squad
        </h1>
      </div>

      {/* Side-by-side Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-12 pt-12 gap-10">
        {/* Left: MissionCard */}
        <div className="w-full md:w-1/2">
          <MissionCard />
        </div>

        {/* Right: CurvedBox and Arrow */}
        <div className="relative w-full md:w-1/2 flex justify-end">
          <CurvedBox />
          <img
            src="/arrow_top_home.png"
            alt="Arrow to dip"
            className="absolute top-[5.5rem] right-10 h-20 md:h-24 z-10"
          />
        </div>
      </div>
    </div>
  )
}
