import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl?: string;
  rating?: number;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Eunoia's AI solutions have transformed our content strategy. Their insight engine delivers analyses that would have taken our team weeks to compile.",
    author: "Sarah Johnson",
    position: "Chief Marketing Officer",
    company: "TechCorp Global",
    rating: 5
  },
  {
    quote: "The level of nuance in Eunoia's decision support tools is remarkable. It's like having an expert consultant who understands our industry's unique challenges.",
    author: "Michael Chen",
    position: "Director of Operations",
    company: "InnovateLabs",
    rating: 5
  },
  {
    quote: "Working with Eunoia has been incredibly refreshing. Their collaborative agents adapt to our team's workflow instead of forcing us to change our processes.",
    author: "Elena Rodriguez",
    position: "VP of Product Development",
    company: "FutureAI",
    rating: 4
  },
  {
    quote: "Their market analysis provided insights that gave us a six-month competitive advantage. The foresight capability is unlike anything we've used before.",
    author: "Thomas Wright",
    position: "Strategic Planning Lead",
    company: "QuantumSoft",
    rating: 5
  },
  {
    quote: "What sets Eunoia apart is their emphasis on the human element. Their AI doesn't just analyze data—it understands context and nuance in a way that feels almost intuitive.",
    author: "Aisha Patel",
    position: "Chief Innovation Officer",
    company: "NexGen Solutions",
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: TestimonialProps; isActive: boolean; index: number }> = ({ 
  testimonial, 
  isActive,
  index 
}) => {
  return (
    <div 
      className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
        isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'
      }`}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-eunoia-soft-purple/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-eunoia-soft-purple/10 rounded-full -translate-x-12 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-eunoia-soft-purple/10 rounded-full translate-x-6 translate-y-10"></div>
        
        {/* Quote icon */}
        <div className="absolute top-6 right-6 text-eunoia-purple/20">
          <Quote size={64} />
        </div>
        
        <div className="relative">
          {/* Rating stars */}
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i} 
                className={`w-5 h-5 ${i < (testimonial.rating || 5) ? 'text-eunoia-gold' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Quote text */}
          <blockquote className="font-serif italic text-xl text-eunoia-dark mb-6 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
          
          {/* Author info */}
          <div className="flex items-center">
            {testimonial.avatarUrl ? (
              <img 
                src={testimonial.avatarUrl} 
                alt={testimonial.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-eunoia-soft-purple/30"
              />
            ) : (
              <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-eunoia-soft-purple to-eunoia-light-purple/30 flex items-center justify-center text-eunoia-purple font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
            )}
            
            <div>
              <div className="font-medium text-eunoia-dark">{testimonial.author}</div>
              <div className="text-sm text-eunoia-dark/60">{testimonial.position}, {testimonial.company}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// A modern, semi-transparent "card" that slides in on hover
const FloatingCard: React.FC<{ title: string; content: string; icon: React.ReactNode; delay: string }> = ({ 
  title, 
  content, 
  icon,
  delay
}) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
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
      className={`group bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-eunoia-soft-purple/20 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="relative z-10">
        <div className="bg-eunoia-soft-purple/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-eunoia-purple/20 group-hover:to-eunoia-light-purple/20 transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="font-serif text-xl mb-2 text-eunoia-dark group-hover:text-eunoia-purple transition-colors duration-300">{title}</h3>
        <p className="text-eunoia-dark/70">{content}</p>
      </div>
      
      {/* Background gradient that moves on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-eunoia-purple/5 to-eunoia-light-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  // Navigation functions
  const goToNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <PlasmaAnimation 
        className="opacity-20" 
        colorVariant="blue" 
        density="medium" 
        orbCount={12}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-eunoia-soft-purple/30 text-eunoia-purple text-sm font-medium mb-4">Client Experiences</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto text-lg">
            Discover how Eunoia has helped organizations across industries transform their approach to decision-making and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FloatingCard
            title="96% Satisfaction"
            content="Our clients consistently rate our solutions above industry standards for both effectiveness and ease of use."
            icon={<svg className="w-6 h-6 text-eunoia-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>}
            delay="0ms"
          />
          <FloatingCard
            title="30% Time Savings"
            content="On average, our AI solutions save organizations 30% of time previously spent on complex analysis and decision-making."
            icon={<svg className="w-6 h-6 text-eunoia-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            delay="150ms"
          />
          <FloatingCard
            title="150+ Enterprise Clients"
            content="From startups to Fortune 500 companies, organizations of all sizes trust Eunoia to enhance their capabilities."
            icon={<svg className="w-6 h-6 text-eunoia-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            delay="300ms"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          {/* Testimonial cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                isActive={index === activeIndex}
                index={index}
              />
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-eunoia-soft-purple/20 text-eunoia-dark hover:text-eunoia-purple transition-colors pointer-events-auto transform -translate-x-5 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-eunoia-soft-purple/20 text-eunoia-dark hover:text-eunoia-purple transition-colors pointer-events-auto transform translate-x-5 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-eunoia-purple w-6' 
                    : 'bg-eunoia-soft-purple/40 hover:bg-eunoia-soft-purple/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;