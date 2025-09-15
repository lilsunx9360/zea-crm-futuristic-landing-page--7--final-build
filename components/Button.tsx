import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'gradient', className = '', ...props }) => {
  const baseClasses = "px-6 py-2 text-base sm:px-8 sm:py-3 sm:text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50";

  const variantClasses = {
    gradient: "bg-gradient-to-r from-amber-500 to-yellow-600 text-white focus:ring-amber-400",
    outline: "border-2 border-[#fbbf24] text-[#fbbf24] hover:bg-[#fbbf24] hover:text-black focus:ring-[#fbbf24]",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;