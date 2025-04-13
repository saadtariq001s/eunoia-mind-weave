import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Sparkles, PieChart, BarChart4, Layers, Users } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

interface FeatureTabProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  imgSrc?: string;
  isActive: boolean;
  onClick: () => void;
}

const FeatureTab: React.FC<FeatureTabProps> = ({ 
  id, 
  title, 
  icon, 
  description, 
  benefits, 
  imgSrc, 
  isActive, 
  onClick 
}) => {
  return (
    <div 
      className={`flex flex-col cursor-pointer transition-all duration-300 border-b border-eunoia-soft-purple/20 py-4 ${
        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isActive ? 'bg-eunoia-purple text-white' : 'bg-eunoia-soft-purple/30 text-eunoia-purple'
        }`}>
          {icon}
        </div>
        <h3 className={`font-serif text-lg transition-colors duration-300 ${
          isActive ? 'text-eunoia-dark font-medium' : 'text-eunoia-dark/70'
        }`}>
          {title}
        </h3>
        <div className="ml-auto">
          <ArrowRight size={16} className={`transition-all duration-300 ${
            isActive ? 'text-eunoia-purple rotate-90' : 'text-eunoia-dark/30'
          }`} />
        </div>
      </div>
    </div>
  );
};

interface FeatureDetailProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  imgSrc?: string;
  isActive: boolean;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ 
  id, 
  title, 
  icon, 
  description, 
  benefits, 
  imgSrc, 
  isActive 
}) => {
  return (
    <div 
      className={`absolute inset-0 w-full transition-all duration-700 ease-in-out ${
        isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-eunoia-purple/20 to-eunoia-light-purple/20 text-eunoia-purple">
            {icon}
          </div>
          <h3 className="font-serif text-2xl text-eunoia-dark">{title}</h3>
        </div>
        
        <p className="text-eunoia-dark/70 mb-6 leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-eunoia-purple mt-1 flex-shrink-0" />
              <p className="text-eunoia-dark/80 text-sm">{benefit}</p>
            </div>
          ))}
        </div>
        
        {imgSrc ? (
          <div className="mt-auto rounded-xl overflow-hidden shadow-lg border border-eunoia-soft-purple/20 bg-white/50 h-64 relative">
            {/* Placeholder for feature image/illustration */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-eunoia-soft-purple/10 to-eunoia-light-purple/10">
              <div className="text-eunoia-purple/30 text-5xl font-serif">
                {title.charAt(0)}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-eunoia-soft-purple/20">
              <p className="text-eunoia-dark/80 text-sm font-medium">{title} in action</p>
            </div>
          </div>
        ) : (
          <a href="#services" className="mt-auto inline-flex items-center text-eunoia-purple hover:text-eunoia-light-purple font-medium transition-colors w-fit">
            Learn more about {title}
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Features data
  const features = [
    {
      id: 'adaptive-learning',
      title: 'Adaptive Learning',
      icon: <Zap size={20} />,
      description: 'Our AI continuously learns from your interactions, adapting to your preferences, industry context, and specific challenges over time.',
      benefits: [
        'Personalized recommendations based on your historical preferences',
        'Context-aware responses that incorporate domain knowledge',
        'Progressive adaptation that improves with continued use',
        'Transparent learning process with user control over adaptations'
      ]
    },
    {
      id: 'data-privacy',
      title: 'Enterprise-Grade Privacy',
      icon: <Shield size={20} />,
      description: 'We prioritize data security and privacy with robust encryption, selective memory retention, and transparent data handling policies.',
      benefits: [
        'End-to-end encryption for all sensitive communications',
        'Customizable data retention policies to meet compliance needs',
        'Role-based access controls for enterprise deployments',
        'Regular security audits and compliance certifications'
      ]
    },
    {
      id: 'multi-modal',
      title: 'Multi-Modal Integration',
      icon: <Layers size={20} />,
      description: 'Our solutions seamlessly process and analyze text, images, charts, and structured data to provide comprehensive insights from diverse sources.',
      benefits: [
        'Unified analysis across documents, images, and data visualizations',
        'Automated data extraction from complex visual elements',
        'Cross-reference capabilities between different information formats',
        'Contextual understanding that bridges multiple information sources'
      ]
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      icon: <BarChart4 size={20} />,
      description: 'Leverage advanced predictive capabilities to forecast trends, anticipate challenges, and identify opportunities before they become obvious.',
      benefits: [
        'Time-series forecasting with adjustable confidence intervals',
        'Scenario planning with multiple potential outcomes',
        'Early warning indicators for emerging trends',
        'Customizable prediction horizons from days to years'
      ]
    },
    {
      id: 'semantic-search',
      title: 'Semantic Understanding',
      icon: <Sparkles size={20} />,
      description: 'Our AI goes beyond keyword matching to truly understand the meaning, context, and nuance in your communications and data.',
      benefits: [
        'Context-aware responses that capture subtle meaning differences',
        'Domain-specific terminology understanding across industries',
        'Recognition of implicit information and unstated assumptions',
        'Ability to identify conceptual relationships beyond explicit connections'
      ]
    },
    {
      id: 'team-collaboration',
      title: 'Team Collaboration',
      icon: <Users size={20} />,
      description: 'Designed for seamless integration into team workflows, our tools enhance collaboration through shared insights and collective intelligence.',
      benefits: [
        'Collaborative workspaces with real-time synchronization',
        'Knowledge sharing across teams with appropriate access controls',
        'Version history and attribution of contributions',
        'Integration with popular team communication platforms'
      ]
    }
  ];
  
  // Observe when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Auto-rotate through features
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, features.length]);
  
  return (
    <section id="features" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <PlasmaAnimation 
        className="opacity-20" 
        colorVariant="purple" 
        density="medium" 
        orbCount={10}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-eunoia-soft-purple/30 text-eunoia-purple text-sm font-medium mb-4">Advanced Capabilities</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto text-lg">
            Explore the innovative capabilities that make Eunoia's AI solutions uniquely powerful and intuitive.
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-16 items-start transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Features list */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-eunoia-soft-purple/30 p-6 shadow-lg">
            <div className="space-y-2">
              {features.map((feature, index) => (
                <FeatureTab
                  key={feature.id}
                  {...feature}
                  isActive={activeFeature === index}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Feature details */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-eunoia-soft-purple/30 p-6 shadow-lg relative min-h-[460px]">
            {features.map((feature, index) => (
              <FeatureDetail
                key={feature.id}
                {...feature}
                isActive={activeFeature === index}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple opacity-20 blur-xl rounded-full"></div>
            <a 
              href="#contact" 
              className="relative z-10 inline-flex items-center bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple hover:from-eunoia-light-purple hover:to-eunoia-purple text-white px-8 py-4 rounded-full font-medium transition-all shadow-xl hover:shadow-2xl"
            >
              Request a Custom Demo
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-eunoia-dark to-black transform -skew-y-2 -mb-10 z-0"></div>
    </section>
  );
};

export default Features;