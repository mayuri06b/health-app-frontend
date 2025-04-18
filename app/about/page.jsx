'use client'

import MissionCard from "@/components/missionCard";

export default function AboutPage() {
  return (
    <div className="rounded-b-4xl min-h-screen px-6 py-12 bg-white flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#50477C] leading-tight">
            About
          </h1>
          <p className="text-lg sm:text-xl text-[#50477C]">
            Move with strength, embrace confidence, and feel supported throughout pregnancy.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <img src="/filledVector.svg" alt="star icon" className="w-12 mt-1" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#50477C] leading-tight">
                Empower Your Pregnancy with Expert Guidance.
              </h2>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-md">
          <MissionCard />
        </div>
      </div>
    </div>
  );
}
