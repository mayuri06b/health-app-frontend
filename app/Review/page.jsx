'use client'
import React from 'react'

const testimonials = [
  {
    name: "User Name 1",
    rating: 5,
    review:
      "I chose this prenatal program for the birth prep education, which eased my fears about tearing and gave me confidence for a natural delivery.",
  },
  {
    name: "User Name 2",
    rating: 4,
    review:
      "The classes were so helpful. I started at 16 weeks after a tough first trimester, and now at 35 weeks, I’ve never felt stronger.",
  },
  {
    name: "User Name 3",
    rating: 5,
    review:
      "Every video is well structured and motivating. I know losing the baby weight will be easier too!",
  },
  {
    name: "User Name 4",
    rating: 5,
    review:
      "Amazing! The trainer is so relatable and makes you feel like you're not alone.",
  },
]

export default function ReviewPage() {
  return (
    <div className="bg-[#F7F7F3] py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-[#50477C]">
          WHAT ARE MY <span className="text-6xl bg-gradient-to-r to-[#948ac3] from-[#b77ac5] bg-clip-text text-transparent">HAPPY</span> CUSTOMERS SAYING
        </h1>
      </div>

      {/* Image + Testimonials Grid */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
        {/* Background Image */}
        <div className="h-[450px] w-[350px] rounded-3xl bg-[url('/review1.jpg')] bg-cover bg-center"></div>

        {/* 2x2 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 w-[300px] h-[220px] space-y-3">
              <div>
                <h2 className="font-semibold text-lg text-gray-800">{t.name}</h2>
                <div className="text-yellow-500 text-base">
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-snug">
                {t.review}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="text-center mt-12">
        <button className="bg-[#50477C] text-white px-8 py-3 rounded-3xl hover:bg-[#50477C] transition">
          Join the Program
        </button>
      </div>
    </div>
  )
}
