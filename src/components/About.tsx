import React, { useState, useEffect } from 'react';
import { Sparkles, History, BookOpen, ArrowRightCircle } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

// Animated number counter component
const AnimatedCounter: React.FC<{ value: number, suffix?: string, prefix?: string }> = ({ value, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const step = Math.ceil(value / (duration / 16)); // 60fps is ~16ms per frame
    
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <span>{prefix}{count.toLocaleString()}{suffix}</span>
  );
};

// Timeline item component
const TimelineItem: React.FC<{ year: string; title: string; description: string; isActive: boolean; onClick: () => void }> = ({ 
  year, 
  title, 
  description, 
  isActive,
  onClick
}) => {
  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div 
          className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${isActive ? 'bg-eunoia-purple text-white scale-125' : 'bg-eunoia-soft-purple/50 text-eunoia-purple'}`}
        >
          {isActive ? <Sparkles size={14} /> : null}
        </div>
        <div className={`h-0.5 flex-grow mx-3 transition-all duration-300 ${isActive ? 'bg-eunoia-purple' : 'bg-eunoia-soft-purple/50'}`}></div>
        <span className={`font-serif font-bold transition-all duration-300 ${isActive ? 'text-eunoia-purple text-lg' : 'text-eunoia-dark/50'}`}>{year}</span>
      </div>
      <div className={`mt-4 pl-12 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h4 className="font-serif text-xl mb-2 text-eunoia-dark">{title}</h4>
        <p className="text-eunoia-dark/70">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  // Timeline data
  const timelineItems = [
    {
      year: '2018',
      title: 'The Concept',
      description: 'Drawing from ancient Greek philosophy, our founders envisioned AI that embodies the harmony of clarity, creativity, and compassion.'
    },
    {
      year: '2020',
      title: 'Research Phase',
      description: 'Assembled a multidisciplinary team to develop neural networks that could balance analytical precision with creative thinking.'
    },
    {
      year: '2022',
      title: 'First Products',
      description: 'Launched our first suite of AI tools focused on helping creative professionals overcome complex challenges.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded our reach to three continents with custom solutions for enterprise clients across diverse industries.'
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Leading the industry with AI that truly understands the needs of its users, continually improving through ethical training methods.'
    }
  ];
  
  // Auto advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineIndex(prev => (prev + 1) % timelineItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [timelineItems.length]);
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <PlasmaAnimation 
        className="opacity-20" 
        colorVariant="gold" 
        density="medium"
        orbCount={14}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-eunoia-soft-purple/30 text-eunoia-purple text-sm font-medium mb-4">Our Journey</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Beautiful Thinking, Evolved</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto text-lg">
            The journey from ancient Greek philosophy to modern artificial intelligence
          </p>
        </div>
        
        {/* Stats row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-eunoia-soft-purple/30 text-center">
            <h3 className="font-serif text-4xl font-bold text-eunoia-purple mb-2">
              <AnimatedCounter value={146} prefix="+" />
            </h3>
            <p className="text-eunoia-dark/70">Global Clients</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-eunoia-soft-purple/30 text-center">
            <h3 className="font-serif text-4xl font-bold text-eunoia-purple mb-2">
              <AnimatedCounter value={94} suffix="%" />
            </h3>
            <p className="text-eunoia-dark/70">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-eunoia-soft-purple/30 text-center">
            <h3 className="font-serif text-4xl font-bold text-eunoia-purple mb-2">
              <AnimatedCounter value={12} />
            </h3>
            <p className="text-eunoia-dark/70">Industries Served</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-eunoia-soft-purple/30 text-center">
            <h3 className="font-serif text-4xl font-bold text-eunoia-purple mb-2">
              <AnimatedCounter value={5} suffix="M+" />
            </h3>
            <p className="text-eunoia-dark/70">Data Points Analyzed</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-white to-eunoia-soft-purple/20 p-8 rounded-2xl backdrop-blur-sm border border-white/30 shadow-xl">
                <h3 className="font-serif text-2xl mb-6 text-eunoia-dark">Origins in Ancient Wisdom</h3>
                <p className="text-eunoia-dark/80 mb-6 leading-relaxed">
                  In ancient Greece, the word <span className="font-serif italic text-eunoia-purple">eunoia</span> spoke of "beautiful thinking"—the harmonious fusion of clarity, creativity, and compassion in the human mind. Our founders, a philosopher and an engineer, were captivated by that idea.
                </p>
                <p className="text-eunoia-dark/80 leading-relaxed mb-8">
                  They saw a parallel between the best of human insight and the emerging power of artificial intelligence: both strive to connect dots, anticipate needs, and craft solutions that feel almost intuitive. From that spark of inspiration, Eunoia was born.
                </p>
                
                <div className="py-6 space-y-8">
                  {timelineItems.map((item, index) => (
                    <TimelineItem 
                      key={index}
                      year={item.year}
                      title={item.title}
                      description={item.description}
                      isActive={index === activeTimelineIndex}
                      onClick={() => setActiveTimelineIndex(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-8 w-36 h-36 bg-eunoia-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-8 w-36 h-36 bg-eunoia-light-purple/20 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-eunoia-soft-purple/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-r from-eunoia-soft-purple/30 to-eunoia-soft-purple/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:from-eunoia-purple/20 group-hover:to-eunoia-light-purple/20 transition-all duration-300">
                <Sparkles className="text-eunoia-purple text-opacity-80 group-hover:text-opacity-100 transition-all duration-300" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-eunoia-dark group-hover:text-eunoia-purple transition-all duration-300">A Journey from Complexity to Confidence</h3>
              <p className="text-eunoia-dark/70 mb-4 leading-relaxed">
                Eunoia's mission is to transform moments of overwhelm into empowerment. Our AI agents sift through complexity, highlight what matters most, and guide you toward confident decisions.
              </p>
              <a href="#services" className="inline-flex items-center text-eunoia-purple font-medium group-hover:text-eunoia-light-purple transition-all duration-300">
                Discover our approach
                <ArrowRightCircle size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-eunoia-soft-purple/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-r from-eunoia-soft-purple/30 to-eunoia-soft-purple/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:from-eunoia-purple/20 group-hover:to-eunoia-light-purple/20 transition-all duration-300">
                <History className="text-eunoia-purple text-opacity-80 group-hover:text-opacity-100 transition-all duration-300" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-eunoia-dark group-hover:text-eunoia-purple transition-all duration-300">Crafting Tomorrow, Today</h3>
              <p className="text-eunoia-dark/70 mb-4 leading-relaxed">
                As we look to the future, Eunoia stands at the crossroads of human ingenuity and machine precision. Our roadmap includes AI that anticipates societal shifts and democratizes access to expertise.
              </p>
              <a href="#ethos" className="inline-flex items-center text-eunoia-purple font-medium group-hover:text-eunoia-light-purple transition-all duration-300">
                Explore our vision
                <ArrowRightCircle size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-eunoia-soft-purple/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="bg-gradient-to-r from-eunoia-soft-purple/30 to-eunoia-soft-purple/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:from-eunoia-purple/20 group-hover:to-eunoia-light-purple/20 transition-all duration-300">
                <BookOpen className="text-eunoia-purple text-opacity-80 group-hover:text-opacity-100 transition-all duration-300" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-eunoia-dark group-hover:text-eunoia-purple transition-all duration-300">True to Our Name</h3>
              <p className="text-eunoia-dark/70 mb-4 leading-relaxed">
                Through every innovation, we remain true to our name: cultivating beautiful thinking that resonates in every solution, every interaction, and every success story we help create.
              </p>
              <a href="#contact" className="inline-flex items-center text-eunoia-purple font-medium group-hover:text-eunoia-light-purple transition-all duration-300">
                Connect with us
                <ArrowRightCircle size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;