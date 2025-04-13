
import React, { useEffect, useState } from 'react';

interface PlasmaOrbProps {
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const PlasmaOrb: React.FC<PlasmaOrbProps> = ({ size, x, y, delay, duration }) => {
  return (
    <div 
      className="plasma-orb"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

interface PlasmaAnimationProps {
  orbCount?: number;
  className?: string;
}

const PlasmaAnimation: React.FC<PlasmaAnimationProps> = ({ orbCount = 8, className = "" }) => {
  const [orbs, setOrbs] = useState<PlasmaOrbProps[]>([]);
  
  useEffect(() => {
    const newOrbs: PlasmaOrbProps[] = [];
    
    for (let i = 0; i < orbCount; i++) {
      newOrbs.push({
        size: Math.floor(Math.random() * 400) + 150, // 150-550px (larger orbs)
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        delay: Math.random() * 3, // Faster start
        duration: Math.floor(Math.random() * 8) + 4, // 4-12s (faster animation)
      });
    }
    
    setOrbs(newOrbs);
  }, [orbCount]);
  
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
