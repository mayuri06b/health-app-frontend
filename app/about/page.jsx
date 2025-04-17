'use client'

import MissionCard from "@/components/missionCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-semibold text-[#50477C]">About</h1>
          <p className="text-lg text-[#50477C]">
            Move with strength, embrace confidence, and feel supported throughout pregnancy.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <img src="/filledVector.svg" alt="star icon" className="w-16 mt-1" />
              <h2 className="text-4xl lg:text-6xl text-[#50477C] leading-tight">
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
