export default function WhatIncluded() {
  return (
    <div className="px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-5xl font-bold text-[#50477C] leading-tight">
              What's Included
              <br />
              in the Program?
            </h1>
          </div>
          <div>
            <p className="text-[#50477C] text-base">
              Discover 11 expertly crafted exercise videos, thoughtfully designed to support you from Month 1 to Month 9
              of your pregnancy. Each session focuses on building strength, enhancing flexibility, boosting stamina, and
              easing common pregnancy discomforts — all at your own pace. Feel confident knowing every move is tailored
              to help you thrive in every trimester.
            </p>
          </div>
        </div>

        {/* Trimester Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Trimester */}
          <div className="bg-[#F4F2FA] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full border border-[#50477C] text-[#50477C] text-sm mb-4">
                First Trimester
              </div>
              <p className="text-[#50477C]">
                <span className="font-medium">Gentle stretches, strengthening exercises,</span> and{" "}
                <span className="font-medium">pelvic floor work</span> to support your growing body and create a solid
                foundation for the rest of your pregnancy.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/bellyImage.png"
                alt="Pregnant woman holding belly"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Second Trimester */}
          <div className="bg-[#50477C] text-white rounded-2xl p-6">
            <div className="inline-block px-4 py-1 rounded-full bg-white text-[#50477C] text-sm mb-4">
              Second Trimester
            </div>
            <p>
              A focus on{" "}
              <span className="font-medium">improving balance, core strength, and pelvic floor muscle engagement</span>,
              all of which are crucial as your body adapts and grows.{" "}
              <span className="font-medium">Pilates-based movements</span> are included for a full-body workout.
            </p>
          </div>

          {/* Third Trimester */}
          <div className="bg-[#F4F2FA] rounded-2xl p-6 md:col-span-2">
            <div className="inline-block px-4 py-1 rounded-full border border-[#50477C] text-[#50477C] text-sm mb-4">
              Third Trimester
            </div>
            <p className="text-[#50477C]">
              Exercises focused on <span className="font-medium">relaxation, deep breathing techniques</span>, and
              preparing your body for labor. The third trimester includes a continued emphasis on{" "}
              <span className="font-medium">pelvic floor strengthening</span> and{" "}
              <span className="font-medium">core stabilization</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
