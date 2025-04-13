import React, { useState } from 'react';
import { CircleDot, Layers, Command, LineChart, Users, Compass, ArrowRight } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group overflow-hidden rounded-xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transform: `translateY(${isHovered ? '-8px' : '0px'})`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Card background with glass effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl border border-eunoia-soft-purple/30 transition-all duration-500 group-hover:border-eunoia-purple/40 group-hover:shadow-purple-lg z-10"></div>
      
      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-eunoia-purple to-eunoia-medium-purple rounded-xl blur opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-30' : ''}`}></div>
      
      {/* Content */}
      <div className="relative z-20 p-8">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-r from-eunoia-soft-purple/40 to-eunoia-soft-purple/20 mb-6 transition-all duration-300 group-hover:from-eunoia-purple/20 group-hover:to-eunoia-medium-purple/20">
          {icon}
        </div>
        
        <h3 className="font-serif text-2xl mb-4 text-eunoia-dark">{title}</h3>
        <p className="text-eunoia-dark-secondary leading-relaxed mb-6">{description}</p>
        
        <div className="flex items-center">
          <button className="bg-transparent text-eunoia-purple font-medium text-sm transition-all duration-300 group-hover:text-eunoia-medium-purple flex items-center">
            Learn more 
            <span className={`ml-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background animation with blue tint */}
      <PlasmaAnimation 
        className="opacity-10" 
        colorVariant="blue" 
        density="high" 
        orbCount={16}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-eunoia-soft-purple/30 text-eunoia-purple text-sm font-medium mb-4">Our Expertise</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Intelligent Solutions for Complex Challenges</span>
          </h2>
          <p className="text-eunoia-dark-secondary max-w-2xl mx-auto text-lg">
            Explore our comprehensive suite of AI-powered services designed to transform your cognitive capabilities and amplify your potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Insight Engine"
            description="Transform vast amounts of data into actionable insights tailored to your specific needs with our advanced pattern recognition algorithms."
            icon={<CircleDot size={32} className="text-eunoia-purple" />}
            index={0}
          />
          <ServiceCard 
            title="Content Creation"
            description="Generate compelling, on-brand content that resonates with your audience while maintaining your authentic voice and creative vision."
            icon={<Layers size={32} className="text-eunoia-purple" />}
            index={1}
          />
          <ServiceCard 
            title="Decision Support"
            description="Navigate complex choices with an AI companion that helps you weigh options and identify optimal paths forward based on your goals."
            icon={<Command size={32} className="text-eunoia-purple" />}
            index={2}
          />
          <ServiceCard 
            title="Market Analysis"
            description="Stay ahead of trends with predictive analytics that anticipate shifts in your industry landscape and identify emerging opportunities."
            icon={<LineChart size={32} className="text-eunoia-purple" />}
            index={3}
          />
          <ServiceCard 
            title="Collaborative Agents"
            description="Enhance team productivity with AI assistants that adapt to your workflow and communication style for seamless integration."
            icon={<Users size={32} className="text-eunoia-purple" />}
            index={4}
          />
          <ServiceCard 
            title="Strategic Forecasting"
            description="Plan for the future with confidence using our advanced predictive modeling and scenario analysis powered by generative AI."
            icon={<Compass size={32} className="text-eunoia-purple" />}
            index={5}
          />
        </div>
        
        <div className="mt-20 text-center relative">
          {/* Button glow effect */}
          <div className="absolute inset-0 blur-2xl opacity-10 bg-gradient-to-r from-eunoia-purple to-eunoia-medium-purple rounded-full"></div>
          
          {/* Gold accent CTA button */}
          <div className="relative">
            <button className="inline-block px-8 py-4 bg-gradient-to-r from-eunoia-purple via-eunoia-medium-purple to-eunoia-gold hover:from-eunoia-gold hover:via-eunoia-medium-purple hover:to-eunoia-purple text-white rounded-full font-medium shadow-purple-lg hover:shadow-gold-glow transition-all duration-300 transform hover:scale-105 group">
              <span className="flex items-center">
                Request Custom Solution
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;