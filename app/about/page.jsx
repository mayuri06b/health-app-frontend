'use client'

import BoxWithCarousel from "@/components/BoxWithCarousel";
import MissionCard from "@/components/missionCard";
import { motion } from "framer-motion"; // Import Framer Motion

export default function AboutPage() {
  return (
    <div className="m-6 p-10 rounded-3xl bg-gradient-to-b from-white to-[#f9f9fb]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12">
        {/* Left Section - Text and Carousel */}
        <div className="lg:w-1/2 space-y-8">
          {/* Heading and Description Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false , amount: 0.4 }}
            transition={{ duration: 1, type: "spring" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#50477C] leading-tight">
              About The Bump Squad
            </h1>
            <p className="text-xl text-[#50477C] leading-relaxed">
              Empower Your Pregnancy with Expert Guidance
              Move with strength, embrace confidence, and feel supported throughout your pregnancy journey.
            </p>
          </motion.div>

          {/* Carousel Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full aspect-video mb-1"
          >
            <BoxWithCarousel />
          </motion.div>
        </div>

        {/* Right Section - Mission Card Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:w-1/2 flex justify-center lg:justify-end items-center"
        >
          <div className="w-full max-w-md">
            <MissionCard />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
