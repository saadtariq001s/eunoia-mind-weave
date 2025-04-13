
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <PlasmaAnimation className="opacity-40" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Elevating Cognition,</span><br/>
            <span className="gradient-text">Amplifying Potential</span>
          </h1>
          
          <p className="text-lg md:text-xl text-eunoia-dark/80 mb-8 max-w-2xl mx-auto">
            At Eunoia, we blend ancient wisdom with cutting-edge AI to create solutions that embody clarity, creativity, and compassion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple hover:from-eunoia-light-purple hover:to-eunoia-purple text-white px-8 py-3 rounded-md font-sans font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center">
              Discover Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="border-2 border-eunoia-purple text-eunoia-purple px-8 py-3 rounded-md font-sans font-medium hover:bg-eunoia-soft-purple/20 transition-all">
              Learn Our Story
            </button>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-eunoia-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float">
            <img 
              src="/lovable-uploads/8008a3ee-b703-4be9-88dd-e142bb1aadd3.png" 
              alt="Eunoia Logo" 
              className="w-40 h-40 object-contain mx-auto glow-effect"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce rounded-full w-10 h-10 flex items-center justify-center bg-white shadow-md"
        >
          <ArrowRight className="text-eunoia-purple transform rotate-90" size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
