'use client'
import React from 'react'

const Footer = () => {
  return (
    <div className="m-6 rounded-2xl bg-white text-[#50477C] px-6 py-12">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo / Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-2">YourBrand</h3>
          <p className="text-sm text-[#50477C]/80">
            Empowering wellness through every trimester.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-[#50477C]/80">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Programs</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-medium mb-2">Contact Us</h4>
          <p className="text-sm text-[#50477C]/80">hello@yourbrand.com</p>
          <p className="text-sm text-[#50477C]/80">+91 12345 67890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-8 text-center text-sm text-[#50477C]/60">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
