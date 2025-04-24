'use client'

import { motion } from 'framer-motion'

export default function WhatIncluded() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id='whyUs'>
    <div className="px-4 md:px-6 py-16 bg-white m-7 rounded-2xl">
      <div className="max-w-7xl mx-auto">

        {/* Heading Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#50477C] leading-tight">
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
        </motion.div>

        {/* Cards Section 1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col lg:flex-row justify-center gap-4 mb-4"
        >
          <div className="w-full lg:w-6/12 h-60 bg-gradient-to-br from-[#50477C] to-[#8576B9] rounded-2xl shadow-md p-6">
            <button className="mb-4 bg-white text-[#50477C] font-semibold text-sm px-4 py-1 rounded-full">
              First Trimester
            </button>
            <p className="text-white text-[15px] leading-relaxed">
              Gentle stretches, strengthening exercises, and pelvic floor work to support your growing body and create a solid foundation for the rest of your pregnancy.
            </p>
          </div>

          <div className="w-full lg:w-4/12 h-60 bg-[url('/temp1.jpg')] bg-cover bg-center rounded-2xl shadow-md p-6">
            {/* You can add content here with animation too */}
          </div>
        </motion.div>

        {/* Cards Section 2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col lg:flex-row justify-center gap-4"
        >
          <div className="w-full lg:w-5/12 h-60 bg-[#e8e4f8] rounded-2xl shadow-md p-6">
            <button className="mb-4 bg-white text-[#50477C] font-semibold text-sm px-4 py-1 rounded-full">
              Second Trimester
            </button>
            <p className="text-[#50477C] text-[15px] leading-relaxed">
              Focus on posture, endurance, and mobility as your belly grows. Maintain energy and ease common aches with safe, guided movements.
            </p>
          </div>

          <div className="w-full lg:w-5/12 h-60 bg-[#e8e4f8] rounded-2xl shadow-md p-6">
            <button className="mb-4 bg-white text-[#50477C] font-semibold text-sm px-4 py-1 rounded-full">
              Third Trimester
            </button>
            <p className="text-[#50477C] text-[15px] leading-relaxed">
              Prepare your body for labor and delivery with gentle movements, breathwork, and calming practices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  )
}
