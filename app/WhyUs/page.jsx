'use client'

export default function WhatIncluded() {
  return (
    <div className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Previous Heading Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div>
            <h2 className="text-5xl font-bold text-[#50477C] leading-tight">
              What's Included
              <br />
              in the Program?
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#50477C] text-base">
              Discover 11 expertly crafted exercise videos, thoughtfully designed to support you from Month 1 to Month 9
              of your pregnancy. Each session focuses on building strength, enhancing flexibility, boosting stamina, and
              easing common pregnancy discomforts — all at your own pace.
            </p>
          </div>
        </div>

        {/* Trimester Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Trimester */}
          <div className="bg-gradient-to-r from-[#F4F2FA] to-[#E1D9F2] rounded-2xl p-8 transform transition-transform hover:scale-105 duration-300 shadow-lg">
            <div className="inline-block px-6 py-2 rounded-full border border-[#50477C] text-[#50477C] text-sm mb-6">
              First Trimester
            </div>
            <p className="text-[#50477C] text-lg font-medium">
              <span className="font-semibold">Gentle stretches, strengthening exercises,</span> and{' '}
              <span className="font-semibold">pelvic floor work</span> to support your growing body and create a solid
              foundation for the rest of your pregnancy.
            </p>
          </div>

          {/* Pregnant Woman Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300">
            <img
              src="/horizon.jpg"
              alt="Pregnant woman holding belly"
              className="h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Lower Section Grid */}
        <div className="grid grid-cols-3 md:grid-cols-2 gap-12 mt-14">
          {/* Second Trimester */}
          <div className="bg-gradient-to-r from-[#50477C] to-[#8C7FB1] text-white rounded-2xl p-8 transform transition-transform hover:scale-105 duration-300 shadow-lg">
            <div className="inline-block px-6 py-2 rounded-full bg-white text-[#50477C] text-sm mb-6">
              Second Trimester
            </div>
            <p className="text-lg font-medium">
              A focus on <span className="font-semibold">improving balance, core strength, and pelvic floor muscle engagement</span>, 
              all of which are crucial as your body adapts and grows. <span className="font-semibold">Pilates-based movements</span> 
              are included for a full-body workout.
            </p>
          </div>

          {/* Third Trimester */}
          <div className="bg-gradient-to-r from-[#F4F2FA] to-[#E1D9F2] rounded-2xl p-8 transform transition-transform hover:scale-105 duration-300 shadow-lg">
            <div className="inline-block px-6 py-2 rounded-full border border-[#50477C] text-[#50477C] text-sm mb-6">
              Third Trimester
            </div>
            <p className="text-[#50477C] text-lg font-medium">
              Exercises focused on <span className="font-semibold">relaxation, deep breathing techniques</span>, and
              preparing your body for labor. The third trimester includes continued emphasis on{' '}
              <span className="font-semibold">pelvic floor strengthening</span> and{' '}
              <span className="font-semibold">core stabilization</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
