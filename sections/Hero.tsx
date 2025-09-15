import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';

interface HeroProps {
  onStartTrial: () => void;
  onScrollToServices: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartTrial, onScrollToServices }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-4 relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <style>{`
          .bg-grid-pattern {
            background-image: linear-gradient(#fbbf24 0.5px, transparent 0.5px), linear-gradient(to right, #fbbf24 0.5px, transparent 0.5px);
            background-size: 20px 20px;
          }
        `}</style>
      
      <div className="z-10 flex flex-col items-center">
        <Logo />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-white drop-shadow-lg">
          Revolutionizing
          <br />
          Customer
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl text-gray-300">
          Integrated CRM solutions for the modern business world.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant="gradient" onClick={onStartTrial}>
            Reach Us
          </Button>
          <Button variant="outline" onClick={onScrollToServices}>
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;