import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Custom SVG Logo with increased size */}
      <div className="relative w-16 h-16 mr-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 400 400"
          className="w-full h-full"
        >
          <defs>
            {/* Primary gradient for main elements */}
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A3AFF" />
              <stop offset="50%" stopColor="#7B68EE" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
            
            {/* Secondary gradient for accents */}
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A3AFF" />
              <stop offset="100%" stopColor="#F0B429" />
            </linearGradient>
            
            {/* Subtle glow effect */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Neural network pattern */}
            <pattern id="neuralPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
              <path d="M10 10L50 50M50 10L10 50M30 0V60" stroke="#4A3AFF" strokeWidth="0.5" strokeOpacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Background elements */}
          <circle cx="200" cy="200" r="150" fill="url(#neuralPattern)" opacity="0.15" className="animate-spin-slow" />
          
          {/* Abstract brain/neural network shape */}
          <path d="M140 160
                  C140 120, 180 80, 260 120
                  C300 140, 320 180, 280 220
                  C240 260, 180 240, 170 200
                  C160 160, 200 140, 230 160
                  C260 180, 240 220, 210 200"
                stroke="url(#primaryGradient)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round" 
                className="animate-pulse-soft" />
                
          {/* Neural network nodes with animation classes */}
          <circle cx="260" cy="120" r="8" fill="#4A3AFF" filter="url(#glow)" className="animate-pulse-soft" />
          <circle cx="280" cy="220" r="8" fill="#7B68EE" filter="url(#glow)" className="animate-pulse-soft animation-delay-500" />
          <circle cx="170" cy="200" r="8" fill="#A78BFA" filter="url(#glow)" className="animate-pulse-soft animation-delay-1000" />
          <circle cx="230" cy="160" r="8" fill="#F0B429" filter="url(#glow)" className="animate-orbit" />
          <circle cx="210" cy="200" r="8" fill="#4A3AFF" filter="url(#glow)" className="animate-pulse-soft animation-delay-700" />
          
          {/* Greek-inspired design element */}
          <path d="M150 270 H250" 
                stroke="url(#accentGradient)" 
                strokeWidth="4" 
                strokeLinecap="round" />
          
          {/* Greek meander pattern (simplified) */}
          <path d="M160 285 H170 V290 H160 Z M180 285 H190 V290 H180 Z M200 285 H210 V290 H200 Z M220 285 H230 V290 H220 Z M240 285 H250 V290 H240 Z" 
                fill="#4A3AFF" 
                opacity="0.6" />
        </svg>
        
        {/* Additional animated elements to match the original logo style */}
        <div className="absolute w-full h-full top-0 left-0 border-2 border-eunoia-light-purple rounded-full opacity-30 animate-spin-slow"></div>
        <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-eunoia-purple/50 rounded-full opacity-40 animate-spin-slow animation-delay-500" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <h1 className="font-serif text-3xl font-semibold tracking-wide gradient-text">Eunoia</h1>
    </div>
  );
};

export default Logo;