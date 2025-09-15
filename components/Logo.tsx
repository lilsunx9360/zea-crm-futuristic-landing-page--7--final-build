import React from 'react';

const Logo: React.FC = () => {
  const logoUrl = 'https://storage.googleapis.com/msgsndr/ZIUcRWhXjh3QwolflS2G/media/68c480ec9bf28955322b4813.png';
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 flex items-center justify-center">
        <img 
            src={logoUrl} 
            alt="ZEA CRM Logo" 
            className="relative z-10 w-full h-full object-contain"
        />
        <div className="absolute w-full h-full bg-[#fbbf24] rounded-full opacity-10 animate-ping"></div>
    </div>
  );
};

export default Logo;