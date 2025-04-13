
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

const PlasmaAnimation: React.FC<PlasmaAnimationProps> = ({ orbCount = 6, className = "" }) => {
  const [orbs, setOrbs] = useState<PlasmaOrbProps[]>([]);
  
  useEffect(() => {
    const newOrbs: PlasmaOrbProps[] = [];
    
    for (let i = 0; i < orbCount; i++) {
      newOrbs.push({
        size: Math.floor(Math.random() * 300) + 100, // 100-400px
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        delay: Math.random() * 5,
        duration: Math.floor(Math.random() * 10) + 5, // 5-15s
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
