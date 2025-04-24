'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logoImg from '@/public/Logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="rounded-t-4xl bg-white px-4 sm:px-6 pt-4 flex items-center justify-between relative">
      <div className="flex items-center space-x-2">
        <Image src={logoImg} alt="Logo" width={80} height={80} className="w-20 sm:w-24" />
      </div>
      <ul className="hidden md:flex space-x-4 lg:space-x-6 bg-[#e1ddf0] rounded-full px-4 py-2 text-[#50477C] font-medium text-sm lg:text-base">
        <li><a href="#home" className="px-3 py-1 rounded-full bg-white text-[#50477C] transition duration-300 hover:scale-105">Home</a></li>
        <li><a href="#about" className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">About</a></li>
        <li><a href="#program" className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Program</a></li>
        <li><a href="#whyUs" className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Why Us</a></li>
        <li><a href="#review" className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Reviews</a></li>
        <li><a href="#bonuses" className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Bonuses</a></li>
        <li><a href="#howItWorks" className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">How it Works</a></li>
      </ul>


      
      <div className="hidden md:block">
        <button className="bg-[#50477C] text-white rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base transition duration-300 hover:bg-[#8a83b5] hover:scale-105">
          Join Now
        </button>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#50477C] focus:outline-none"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-[#50477C]"></div>
            <div className="w-6 h-0.5 bg-[#50477C]"></div>
            <div className="w-6 h-0.5 bg-[#50477C]"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#e1ddf0] flex flex-col items-center space-y-4 py-6 text-[#50477C] font-medium text-sm z-50 md:hidden">
          <a href="#home" onClick={() => setMenuOpen(false)} className="px-3 py-1 rounded-full bg-white text-[#50477C] transition duration-300 hover:scale-105">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">About</a>
          <a href="#program" onClick={() => setMenuOpen(false)} className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Program</a>
          <a href="#whyUs" onClick={() => setMenuOpen(false)} className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Why Us</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Reviews</a>
          <a href="#bonuses" onClick={() => setMenuOpen(false)} className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">Bonuses</a>
          <a href="#howItWorks" onClick={() => setMenuOpen(false)} className="hover:text-[#50477C] transition duration-300 hover:scale-105 hover:bg-[#d5ccf4] px-2 py-1 rounded-full">How it Works</a>
          <button className="bg-[#50477C] text-white rounded-full px-4 py-2 text-sm transition duration-300 hover:bg-[#3e3a65] hover:scale-105">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
