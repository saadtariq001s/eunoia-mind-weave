import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Ethos from '../components/Ethos';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

// Loading screen component
const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
      isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="relative">
        <div className="w-24 h-24 relative">
          {/* Animated logo for loading screen */}
          <div className="absolute w-full h-full border-4 border-eunoia-light-purple rounded-full opacity-80 animate-spin-slow"></div>
          <div className="absolute w-16 h-16 border-2 border-eunoia-purple rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 animate-spin-slow animation-delay-1000" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute w-10 h-10 border border-eunoia-gold/70 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 animate-spin-slow animation-delay-500"></div>
          <div className="absolute w-4 h-4 bg-gradient-to-br from-eunoia-gold to-eunoia-purple rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft shadow-lg shadow-eunoia-purple/30"></div>
        </div>
        <p className="font-serif text-eunoia-dark/70 text-center mt-6 animate-pulse">Loading beautiful thinking...</p>
      </div>
    </div>
  );
};

// Scroll to top button
const ScrollToTopButton: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      className={`fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-eunoia-soft-purple/30 text-eunoia-purple flex items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3.33301V12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.33301 7.99967L7.99967 3.33301L12.6663 7.99967" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Add reveal animation on scroll
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
          section.classList.add('animate-fade-in');
          section.classList.remove('opacity-0');
        }
      });
    };
    
    // Smooth scrolling for anchor links
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', smoothScroll);
    
    // Add initial opacity to sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section.id !== 'hero') {
        section.classList.add('opacity-0');
      }
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', smoothScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <LoadingScreen isLoading={isLoading} />
      
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Ethos />
      <Testimonials />
      <Contact />
      <Footer />
      
      <ScrollToTopButton isVisible={showScrollTop} />
      <ChatAssistant />
    </div>
  );
};

export default Index;