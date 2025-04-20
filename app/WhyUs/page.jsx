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

        {/* --- */}

        <div className="flex justify-center gap-x-4 mb-2">
  <div className="w-6/12 h-60 bg-white rounded-2xl shadow-md p-6">
    <button className="mb-4 bg-[#F3E8FF] text-[#7E22CE] font-semibold text-sm px-4 py-1 rounded-full">
      First Trimester
    </button>
    <p className="text-gray-700 text-[15px] leading-relaxed">
      Gentle stretches, strengthening exercises, and pelvic floor work to support your growing body and create a solid foundation for the rest of your pregnancy.
    </p>
  </div>

  <div className="w-4/12 h-60 bg-amber-400 rounded-2xl shadow-md p-6">
    {/* Content for second div goes here */}
  </div>
</div>

<div className="flex justify-center gap-x-4">
  <div className="w-5/12 h-60 bg-white rounded-2xl shadow-md p-6">
    <button className="mb-4 bg-[#F3E8FF] text-[#7E22CE] font-semibold text-sm px-4 py-1 rounded-full">
    Second Trimester 
    </button>
    <p className="text-gray-700 text-[15px] leading-relaxed">
      Gentle stretches, strengthening exercises, and pelvic floor work to support your growing body and create a solid foundation for the rest of your pregnancy.
    </p>
  </div>

  <div className="w-5/12 h-60 bg-white rounded-2xl shadow-md p-6">
    <button className="mb-4 bg-[#F3E8FF] text-[#7E22CE] font-semibold text-sm px-4 py-1 rounded-full">
      Third Trimester
    </button>
    <p className="text-gray-700 text-[15px] leading-relaxed">
      Gentle stretches, strengthening exercises, and pelvic floor work to support your growing body and create a solid foundation for the rest of your pregnancy.
    </p>
  </div>
</div>



{/* --- */}
      </div>
    </div>
  )
}
