'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/img1.png',
  '/img2.png',
  '/img3.png',
  '/img4.png',
  '/img5.png',
  '/img6.png',
  '/img7.png',
];

export default function BoxWithCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg sm:max-w-xl h-48 sm:h-72  rounded-xl overflow-hidden relative shadow-lg">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          width={640}
          height={288}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
