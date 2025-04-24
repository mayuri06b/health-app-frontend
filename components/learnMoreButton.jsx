import React from 'react'

const LearnMoreButton = () => {
  return (
    <div>
        <button className='flex items-center gap-2 rounded-3xl px-6 py-2 bg-[#50477C] text-white text-sm font-medium hover:bg-[#8a83b5] shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
            Learn More
            <img src='/arrow.svg' alt='arrow icon' className='w-3 h-3' />
          </button>
          </div>
  )
}

export default LearnMoreButton