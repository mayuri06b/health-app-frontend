'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logoImg from '@/public/Logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src={logoImg} alt="Logo" width={100} height={100} />
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 bg-[#f0ebeb] rounded-full px-6 py-2 text-[#50477C] font-medium">
        <li><a href="#" className="px-3 py-1 rounded-full bg-white text-[#50477C]">Home</a></li>
        <li><a href="#" className="hover:text-[#50477C]">About</a></li>
        <li><a href="#" className="hover:text-[#50477C]">Program</a></li>
        <li><a href="#" className="hover:text-[#50477C]">Why Us</a></li>
        <li><a href="#" className="hover:text-[#50477C]">Reviews</a></li>
        <li><a href="#" className="hover:text-[#50477C]">Bonuses</a></li>
        <li><a href="#" className="hover:text-[#50477C]">How it Works</a></li>
      </ul>

      {/* CTA Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-[#50477C] text-white rounded-full px-5 py-2 hover:bg-[#50477C] transition">
          Join Now
        </button>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#50477C] focus:outline-none"
        >
          {/* Simple Hamburger Icon */}
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-[#50477C]"></div>
            <div className="w-6 h-0.5 bg-[#50477C]"></div>
            <div className="w-6 h-0.5 bg-[#50477C]"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#f0ebeb] flex flex-col items-center space-y-4 py-6 text-purple-800 font-medium z-50 md:hidden">
          <a href="#" className="px-3 py-1 rounded-full bg-white text-purple-800">Home</a>
          <a href="#" className="hover:text-[#50477C]">About</a>
          <a href="#" className="hover:text-[#50477C]">Program</a>
          <a href="#" className="hover:text-[#50477C]">Why Us</a>
          <a href="#" className="hover:text-[#50477C]">Reviews</a>
          <a href="#" className="hover:text-[#50477C]">Bonuses</a>
          <a href="#" className="hover:text-[#50477C]">How it Works</a>
          <button className="bg-purple-800 text-white rounded-full px-5 py-2 hover:bg-purple-700 transition">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
