
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative mr-2 w-10 h-10">
        <div className="absolute w-10 h-10 border-4 border-eunoia-light-purple rounded-full opacity-90 animate-spin-slow"></div>
        <div className="absolute w-6 h-6 border-2 border-eunoia-purple rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 animate-spin-slow animation-delay-2000"></div>
        <div className="absolute w-2 h-2 bg-eunoia-gold rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"></div>
      </div>
      <h1 className="font-serif text-2xl font-semibold tracking-wide gradient-text">Eunoia</h1>
    </div>
  );
};

export default Logo;
