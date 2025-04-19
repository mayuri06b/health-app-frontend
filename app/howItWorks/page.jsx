import React from 'react';
import {
  ShieldCheck,
  GraduationCap,
  Clock,
  Users,
} from 'lucide-react';

export default function HowItWorksPage() {
  const features = [
    {
      title: 'Safe and Effective',
      icon: (
        <ShieldCheck className="w-16 h-16 mb-4 text-[#50477C]" />
      ),
      description:
        'All exercises are designed with your safety and well-being in mind, ensuring you stay strong and healthy throughout your pregnancy.',
    },
    {
      title: 'Tailored to Your Pregnancy Journey',
      icon: (
        <GraduationCap className="w-16 h-16 mb-4 text-[#50477C]" />
      ),
      description:
        'Each trimester offers a new set of exercises aimed at addressing the changing needs of your body.',
    },
    {
      title: 'Convenient & Accessible',
      icon: (
        <Clock className="w-16 h-16 mb-4 text-[#50477C]" />
      ),
      description:
        'Whether you’re at home, in a hotel, or anywhere else, these videos are available to you anytime, making it easy to maintain your fitness routine no matter your schedule.',
    },
    {
      title: 'Expert Guidance',
      icon: (
        <Users className="w-16 h-16 mb-4 text-[#50477C]" />
      ),
      description:
        'With my experience working with 50+ clients and as a Pilates trainer, I know what works. You’ll be led through each exercise by a professional who truly understands the importance of staying fit during pregnancy.',
    },
  ];

  return (
    <div className="relative px-4 py-12 bg-white m-6 rounded-3xl overflow-hidden">
      {/* Background Illustration */}
      <img
        src="/Leaves.svg"
        alt="Decorative Leaves"
        className="absolute top-[-15px] left-[-100px] w-[300px] sm:w-[350px] rotate-90 pointer-events-none"
      />
      <img
        src="/bg2.svg"
        alt="Decorative Accent"
        className="absolute right-[-100px] w-[300px] sm:w-[400px] rotate-270 pointer-events-none"
      />

      <div className="mb-12 text-center relative z-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#50477C]">
          Why Choose My Prenatal Exercise Program?
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto relative z-10 px-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#ffffffbe] rounded-xl shadow-md p-6 text-center flex flex-col items-center"
          >
            {feature.icon}
            <h2 className="text-lg sm:text-xl font-semibold text-[#50477C] mb-2 sm:mb-4 text-center">
              {feature.title}
            </h2>
            <p className="text-sm sm:text-base text-[#50477C]">{feature.description}</p>
          </div>
        ))}
      </div>
      <br/>
    </div>
  );
}
