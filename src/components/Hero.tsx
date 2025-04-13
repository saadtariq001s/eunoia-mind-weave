import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Brain, Heart } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

// Animated typing effect component
const TypedText: React.FC<{ texts: string[], typingSpeed?: number, deletingSpeed?: number, delayBetween?: number }> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(timeout);
    }
    
    const currentText = texts[currentIndex];
    
    if (isTyping && !isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        setIsPaused(true);
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delayBetween]);
  
  return (
    <span className="font-serif">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Floating animated icon
const FloatingIcon: React.FC<{ icon: React.ReactNode, delay: number, duration: number, className?: string }> = ({
  icon,
  delay,
  duration,
  className = ""
}) => {
  return (
    <div 
      className={`absolute opacity-80 bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-purple-md border border-white/20 animate-float ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {icon}
    </div>
  );
};

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay for the entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Text options for typing animation
  const typingTexts = [
    "Clarity",
    "Creativity",
    "Compassion",
    "Intelligence",
    "Beautiful Thinking"
  ];
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Enhanced plasma animation with more orbs */}
      <PlasmaAnimation 
        className="opacity-70" 
        colorVariant="purple" 
        density="high"
        orbCount={20} 
      />
      
      

      
      <FloatingIcon 
        icon={<Heart className="text-eunoia-gold" size={16} />} 
        delay={2} 
        duration={7}
        className="bottom-1/4 left-1/3"
      />
      
      
      {/* Main content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          {/* Hero badge */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full shadow-purple-md inline-flex items-center">
              <div className="bg-eunoia-light-purple/20 rounded-full p-1 mr-2">
                <Sparkles size={14} className="text-eunoia-purple" />
              </div>
              <span className="text-eunoia-dark text-sm font-medium">
                Next Generation AI Solutions
              </span>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="text-center">
            <h1 className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
              <div className="mb-3">
                <span className="gradient-text">Elevating Cognition</span>
              </div>
              <div className="mb-3">
                <span className="gradient-text">Amplifying Potential</span>
              </div>
            
            </h1>
            
            <p className={`text-lg md:text-xl text-eunoia-dark-secondary mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              At Eunoia, we blend ancient wisdom with cutting-edge AI to create solutions that embody clarity, creativity, and compassion in every interaction.
            </p>
            
            {/* CTA buttons with updated styles */}
            <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              {/* Primary CTA Button - using our new gradient */}
              <button className="relative overflow-hidden group bg-gradient-to-r from-eunoia-purple to-eunoia-medium-purple hover:from-eunoia-medium-purple hover:to-eunoia-purple text-white px-8 py-4 rounded-md font-sans font-medium transition-all shadow-purple-lg hover:shadow-purple-xl">
                <span className="relative z-10 flex items-center">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Shimmer effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
              </button>
              
              {/* Secondary CTA Button - using our border style */}
              <button className="relative overflow-hidden group border-2 border-eunoia-purple text-eunoia-purple px-8 py-4 rounded-md font-sans font-medium hover:bg-eunoia-soft-purple/40 transition-all shadow-sm hover:shadow-purple-md">
                <span className="relative z-10 flex items-center">
                  Learn Our Story
                </span>
              </button>
            </div>
            
            {/* Social proof */}
            <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-eunoia-dark-secondary text-sm mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                {/* Placeholder for company logos */}
                <div className="text-eunoia-dark-secondary/60 font-medium">TechCorp</div>
                <div className="text-eunoia-dark-secondary/60 font-medium">InnovateLabs</div>
                <div className="text-eunoia-dark-secondary/60 font-medium">FutureAI</div>
                <div className="text-eunoia-dark-secondary/60 font-medium">QuantumSoft</div>
                <div className="text-eunoia-dark-secondary/60 font-medium">NexGen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <a 
          href="#about" 
          className="relative group"
          aria-label="Scroll to About section"
        >
          <div className="animate-bounce rounded-full w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-purple-md border border-eunoia-soft-purple/30 transition-all duration-300 group-hover:bg-white group-hover:shadow-purple-lg">
            <ArrowRight className="text-eunoia-purple transform rotate-90 transition-all duration-300 group-hover:text-eunoia-medium-purple" size={20} />
          </div>
          <span className="absolute top-14 left-1/2 transform -translate-x-1/2 text-sm text-eunoia-dark-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;