'use client'

import BoxWithCarousel from "@/components/BoxWithCarousel";
import MissionCard from "@/components/missionCard";

export default function AboutPage() {
  return (
    <div className="m-6 p-10 rounded-3xl bg-gradient-to-b from-white to-[#f9f9fb]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#50477C] leading-tight">
              About The Bump Squad
            </h1>
            <p className="text-xl text-[#50477C] leading-relaxed">
              Move with strength, embrace confidence, and feel supported throughout your pregnancy journey.
            </p>
          </div>

          {/* Enlarged Carousel Section */}
          <div className="w-full m-0 aspect-video"> {/* Adjust aspect ratio as needed */}
            <BoxWithCarousel />
          </div>

          {/* Simplified Feature Highlight */}
          <div className="flex items-start gap-4">
            <img 
              src="/filledVector.svg" 
              alt="star icon" 
              className="w-12 mt-1 flex-shrink-0" 
            />
            <div>
              <h2 className="text-4xl font-semibold text-[#50477C]">
                Empower Your Pregnancy with Expert Guidance
              </h2>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Mission Card Only */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
          <div className="w-full max-w-md">
            <MissionCard />
          </div>
        </div>
      </div>
    </div>
  );
}