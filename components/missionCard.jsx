import React from 'react';

const MissionCard = () => {
  return (
    <div className='max-w-md mx-auto space-y-4 font-sans '>
      <div className='border-2 border-[#50477C] rounded-xl p-6 space-y-4'>
        <img src='/starVector.svg' alt='star icon' className='w-16' /> {/* Replace with your actual star icon path */}
        <h1 className='text-2xl font-bold text-[#50477C]'>My Mission</h1>
        <p className='text-sm text-[#2C2C2C] leading-relaxed'>
          Hi, I'm <span className='font-semibold'>[Your Name]</span>, a certified prenatal and postnatal fitness expert,
          Pilates instructor — and most importantly, a fellow mama. I know firsthand the ups and downs of pregnancy
          and how crucial it is to feel strong, supported, and confident in your body. After guiding over 50 women through
          their own journeys and experiencing it myself, I created this program to be your companion every step of the way.
          Let's move, breathe, and embrace this beautiful chapter together!
        </p>
      </div>

      {/* Timer & Buttons Card */}
      <div className='border-2 border-[#50477C] rounded-xl p-4 space-y-4'>
        {/* Timer */}
        <div className='inline-flex items-center justify-between text-white bg-[#50477C] px-6 py-4 rounded-xl w-full'>
          {[
            { value: '20', label: 'Days' },
            { value: '08', label: 'Hours' },
            { value: '57', label: 'Minutes' },
            { value: '33', label: 'Seconds' },
          ].map((item, idx) => (
            <div key={idx} className='text-center'>
              <h1 className='text-lg font-bold'>{item.value}</h1>
              <p className='text-xs font-light'>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex items-center justify-between gap-2'>
          <button className='flex items-center gap-2 rounded-3xl px-6 py-2 bg-[#50477C] text-white text-sm font-medium'>
            Learn More
            <img src='/arrow.svg' alt='arrow icon' className='w-3 h-3' />
          </button>
          <button className='text-[#50477C] border border-[#50477C] bg-white rounded-3xl px-6 py-2 text-sm font-medium'>
            Book Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
