import React, { useEffect, useState } from 'react';

interface PlasmaOrbProps {
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  colorVariant: 'purple' | 'blue' | 'gold' | 'mixed' | 'teal';
  opacity: number;
}

const PlasmaOrb: React.FC<PlasmaOrbProps> = ({ 
  size, 
  x, 
  y, 
  delay, 
  duration, 
  colorVariant,
  opacity
}) => {
  // Define gradient based on color variant
  let gradientClass = '';
  
  switch (colorVariant) {
    case 'purple':
      gradientClass = 'from-eunoia-light-purple to-eunoia-purple';
      break;
    case 'blue':
      gradientClass = 'from-eunoia-blue to-eunoia-purple';
      break;
    case 'gold':
      gradientClass = 'from-eunoia-gold to-eunoia-purple';
      break;
    case 'teal':
      gradientClass = 'from-teal-400 to-eunoia-blue';
      break;
    case 'mixed':
      gradientClass = 'from-eunoia-gold via-eunoia-purple to-eunoia-blue';
      break;
    default:
      gradientClass = 'from-eunoia-light-purple to-eunoia-purple';
  }

  return (
    <div 
      className={`absolute rounded-full bg-gradient-to-r ${gradientClass} blur-xl animate-pulse-soft`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: opacity,
      }}
    />
  );
};

interface PlasmaAnimationProps {
  orbCount?: number;
  className?: string;
  colorVariant?: 'purple' | 'blue' | 'gold' | 'mixed' | 'teal';
  density?: 'low' | 'medium' | 'high';
  maxOpacity?: number;
}

const PlasmaAnimation: React.FC<PlasmaAnimationProps> = ({ 
  orbCount = 12, 
  className = "",
  colorVariant = 'purple',
  density = 'medium',
  maxOpacity = 0.7
}) => {
  const [orbs, setOrbs] = useState<PlasmaOrbProps[]>([]);
  
  useEffect(() => {
    const newOrbs: PlasmaOrbProps[] = [];
    
    // Set size ranges based on density
    let minSize = 60;
    let maxSize = 200;
    let actualOrbCount = orbCount;
    
    switch (density) {
      case 'low':
        minSize = 100;
        maxSize = 250;
        break;
      case 'medium':
        minSize = 60;
        maxSize = 200;
        actualOrbCount = orbCount * 1.5;
        break;
      case 'high':
        minSize = 30;
        maxSize = 150;
        actualOrbCount = orbCount * 2.5;
        break;
    }

    // Generate more randomized positions
    for (let i = 0; i < actualOrbCount; i++) {
      // For a more random distribution, use varying ranges
      const quadrant = i % 4; // Split into 4 quadrants for better distribution
      let xRange = [0, 100];
      let yRange = [0, 100];
      
      switch (quadrant) {
        case 0: // Top left
          xRange = [-10, 50];
          yRange = [-10, 50];
          break;
        case 1: // Top right
          xRange = [50, 110];
          yRange = [-10, 50];
          break;
        case 2: // Bottom left
          xRange = [-10, 50];
          yRange = [50, 110];
          break;
        case 3: // Bottom right
          xRange = [50, 110];
          yRange = [50, 110];
          break;
      }
      
      // Generate a random variant or use the provided one
      let orbColorVariant = colorVariant;
      if (Math.random() > 0.7) {
        const variants: ('purple' | 'blue' | 'gold' | 'mixed' | 'teal')[] = 
          ['purple', 'blue', 'gold', 'mixed', 'teal'];
        orbColorVariant = variants[Math.floor(Math.random() * variants.length)];
      }
      
      // Random opacity between 0.2 and the maximum
      const opacity = 0.2 + (Math.random() * (maxOpacity - 0.2));
      
      newOrbs.push({
        size: Math.floor(Math.random() * (maxSize - minSize)) + minSize,
        x: Math.random() * (xRange[1] - xRange[0]) + xRange[0],
        y: Math.random() * (yRange[1] - yRange[0]) + yRange[0],
        delay: Math.random() * 5, // More varied start times
        duration: Math.floor(Math.random() * 12) + 8, // 8-20s (varied animation)
        colorVariant: orbColorVariant,
        opacity
      });
    }
    
    setOrbs(newOrbs);
  }, [orbCount, colorVariant, density, maxOpacity]);
  
  return (
    <div className={`plasma-container absolute inset-0 ${className}`}>
      {orbs.map((orb, index) => (
        <PlasmaOrb key={index} {...orb} />
      ))}
      <div className="absolute inset-0 noise-bg"></div>
    </div>
  );
};

export default PlasmaAnimation;