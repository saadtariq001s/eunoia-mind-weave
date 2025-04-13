import React, { useEffect, useState, useRef } from 'react';
import { Lightbulb, Brain, Heart, Check, Zap } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

interface EthosCardProps { 
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  benefits: string[];
}

const EthosCard: React.FC<EthosCardProps> = ({ title, description, icon, index, benefits }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer to trigger animations when card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add('animate-fade-in-up');
          cardRef.current?.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-eunoia-soft-purple/30 opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background decoration */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-eunoia-soft-purple/10 rounded-full"></div>
      <div className="absolute -top-16 -left-16 w-36 h-36 bg-eunoia-soft-purple/10 rounded-full"></div>
      
      <div className="relative z-10 p-8">
        <div className="bg-gradient-to-r from-eunoia-soft-purple/30 to-eunoia-soft-purple/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 hover:from-eunoia-purple/20 hover:to-eunoia-light-purple/20">
          {icon}
        </div>
        
        <h3 className="font-serif text-2xl mb-3 text-eunoia-dark">{title}</h3>
        <p className="text-eunoia-dark/70 leading-relaxed mb-5">{description}</p>
        
        {/* Expandable benefits list */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-80' : 'max-h-0'}`}>
          <div className="pt-4 pb-2 space-y-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start">
                <div className="bg-eunoia-soft-purple/30 rounded-full p-1 mr-3 mt-0.5">
                  <Check size={12} className="text-eunoia-purple" />
                </div>
                <p className="text-eunoia-dark/80 text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-eunoia-purple flex items-center text-sm font-medium hover:text-eunoia-light-purple transition-colors"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
          <span className={`ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
        </button>
      </div>
    </div>
  );
};

const Ethos: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('ethos');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const ethosData = [
    {
      title: "Clarity",
      description: "Stripping away noise to deliver insights that are precise, actionable, and easy to understand.",
      icon: <Lightbulb size={32} className="text-eunoia-purple" />,
      benefits: [
        "Enhanced decision-making through distilled information",
        "Simplified presentation of complex data",
        "Intuitive interfaces designed for human understanding",
        "Context-aware recommendations that cut through the noise"
      ]
    },
    {
      title: "Creativity",
      description: "Generating fresh ideas and novel approaches, so you never feel boxed in by conventional thinking.",
      icon: <Brain size={32} className="text-eunoia-purple" />,
      benefits: [
        "Cross-disciplinary inspiration from diverse knowledge domains",
        "Unexpected connections that spark innovation",
        "Multiple solution paths for every challenge",
        "Adaptive thinking that evolves with your needs"
      ]
    },
    {
      title: "Compassion",
      description: "Anticipating human needs with empathy, ensuring that every recommendation feels personalized and respectful.",
      icon: <Heart size={32} className="text-eunoia-purple" />,
      benefits: [
        "Human-centered design at every touchpoint",
        "Ethical considerations built into every algorithm",
        "Solutions that honor human agency and choice",
        "Respect for privacy and individual preferences"
      ]
    }
  ];
  
  return (
    <section id="ethos" className="py-20 relative overflow-hidden">
      <PlasmaAnimation 
        className="opacity-30" 
        colorVariant="teal" 
        density="high" 
        orbCount={18}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-eunoia-soft-purple/30 text-eunoia-purple text-sm font-medium mb-4">Our Principles</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Eunoia Ethos</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto text-lg">
            At Eunoia, we believe that technology should elevate, not replace, the human spirit. Every AI Agent we build embodies three essential pillars.
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex bg-eunoia-soft-purple/20 rounded-full p-1">
            {ethosData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-white text-eunoia-purple shadow-md' 
                    : 'text-eunoia-dark/70 hover:text-eunoia-purple'
                }`}
              >
                <div className="flex items-center">
                  {React.cloneElement(item.icon as React.ReactElement, { 
                    size: 16, 
                    className: activeTab === index ? 'text-eunoia-purple mr-2' : 'text-eunoia-dark/50 mr-2' 
                  })}
                  {item.title}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Active tab content */}
        <div className={`mb-16 transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-eunoia-soft-purple/30">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-eunoia-soft-purple/30 to-eunoia-purple/10 rounded-xl w-16 h-16 flex-shrink-0 flex items-center justify-center">
                {React.cloneElement(ethosData[activeTab].icon as React.ReactElement, { size: 32 })}
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-3 text-eunoia-dark">{ethosData[activeTab].title}</h3>
                <p className="text-eunoia-dark/70 leading-relaxed mb-6">{ethosData[activeTab].description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ethosData[activeTab].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-eunoia-soft-purple/30 rounded-full p-1 mr-3 mt-1">
                        <Zap size={12} className="text-eunoia-purple" />
                      </div>
                      <p className="text-eunoia-dark/80 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {ethosData.map((item, index) => (
            <EthosCard 
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
              benefits={item.benefits}
            />
          ))}
        </div>
        
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <blockquote className="relative">
            <div className="absolute -top-10 left-0 text-6xl text-eunoia-purple/20 font-serif">"</div>
            <p className="text-xl font-serif italic text-eunoia-dark/80 px-12">
              Our Agents don't just compute—they contemplate. They learn your preferences, adapt to your style, and speak in a voice that feels authentically yours.
            </p>
            <div className="absolute -bottom-10 right-0 text-6xl text-eunoia-purple/20 font-serif">"</div>
          </blockquote>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple rounded-full"></div>
          </div>
          <p className="mt-4 text-eunoia-dark/60 text-sm">Dr. Eliana Chen, Chief AI Ethicist</p>
        </div>
      </div>
    </section>
  );
};

export default Ethos;