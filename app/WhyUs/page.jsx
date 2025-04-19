'use client'

export default function WhatIncluded() {
  return (
    <div className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Trimester */}
          <div className="bg-[#F4F2FA] rounded-2xl p-6 w-3xl flex flex-col justify-between h-full">
            <div>
              <div className="inline-block px-4 py-1 rounded-full border border-[#50477C] text-[#50477C] text-sm mb-4">
                First Trimester
              </div>
              <p className="text-[#50477C]">
                <span className="font-semibold">Gentle stretches, strengthening exercises,</span> and{' '}
                <span className="font-semibold">pelvic floor work</span> to support your growing body and create a solid
                foundation for the rest of your pregnancy.
              </p>
            </div>
          </div>

          {/* Pregnant Woman Image (You can replace this with actual image tag if desired) */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/bellyImage.png"
              alt="Pregnant woman holding belly"
              className="h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Lower Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Second Trimester */}
          <div className="bg-[#50477C] text-white rounded-2xl p-6">
            <div className="inline-block px-4 py-1 rounded-full bg-white text-[#50477C] text-sm mb-4">
              Second Trimester
            </div>
            <p>
              A focus on <span className="font-semibold">improving balance, core strength, and pelvic floor muscle engagement</span>, 
              all of which are crucial as your body adapts and grows. <span className="font-semibold">Pilates-based movements</span> 
              are included for a full-body workout.
            </p>
          </div>

          {/* Third Trimester */}
          <div className="bg-[#F4F2FA] rounded-2xl p-6">
            <div className="inline-block px-4 py-1 rounded-full border border-[#50477C] text-[#50477C] text-sm mb-4">
              Third Trimester
            </div>
            <p className="text-[#50477C]">
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
