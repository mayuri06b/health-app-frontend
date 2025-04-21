import CurvedBox from '@/components/CurvedBox';
import MissionCard from '@/components/missionCard';
import Navbar from '@/components/navbar';
import React from 'react';

export default function HomePage() {
  return (
    <div className='m-6 pt-5 pb-8 bg-gradient-to-t from-white via-[#f9f9fb] to-white rounded-3xl'>
      <div className=''>
        <Navbar />
      </div>
      {/* Main Content Container - removed min-h-screen and adjusted padding */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2'>
        {/* Heading Section */}
        <div className="text-center md:text-left mb-9">
          <h1 className='text-[#50477C] text-4xl md:text-5xl font-bold leading-tight mb-4'>
            Introduction to The Bump Squad
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#50477C] font-semibold text-opacity-90">
            Welcome to The Bump Squad!
          </h2>
          <div className="w-24 h-1.5 bg-[#50477C] rounded-full mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg text-[#50477C] leading-relaxed">
              The Bump Squad is here to support you every step of the way through pregnancy. Whether you're looking for fitness tips, expert advice, or just a community to connect with, we're here to help you thrive during this beautiful journey.
            </p>
            <p className="text-lg text-[#50477C] leading-relaxed">
              Join us to experience a blend of strength, support, and confidence throughout your pregnancy. With personalized guidance and a dedicated team, you'll always feel empowered and informed.
            </p>
            
            {/* Call-to-action Button */}
            <button className="mt-6 bg-[#50477C] hover:bg-[#8a83b5] text-white font-medium py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Join The Community
            </button>
          </div>

          {/* CurvedBox and Arrow */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full">
              <CurvedBox />
              <img
                src="/arrow_top_home.svg"
                alt="Arrow to dip"
                className="absolute top-0 right-0 w-auto h-3/12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}