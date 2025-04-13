
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-sans text-eunoia-dark hover:text-eunoia-purple transition-colors">About</a>
          <a href="#services" className="font-sans text-eunoia-dark hover:text-eunoia-purple transition-colors">Services</a>
          <a href="#ethos" className="font-sans text-eunoia-dark hover:text-eunoia-purple transition-colors">Our Ethos</a>
          <a href="#contact" className="font-sans text-eunoia-dark hover:text-eunoia-purple transition-colors">Contact</a>
          <button className="bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple hover:from-eunoia-light-purple hover:to-eunoia-purple text-white px-5 py-2 rounded-md transition-all shadow-md hover:shadow-lg">
            Get Started
          </button>
        </div>
        
        <button 
          className="md:hidden text-eunoia-dark p-1" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-sans text-eunoia-dark py-2 hover:text-eunoia-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="font-sans text-eunoia-dark py-2 hover:text-eunoia-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#ethos" 
              className="font-sans text-eunoia-dark py-2 hover:text-eunoia-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Ethos
            </a>
            <a 
              href="#contact" 
              className="font-sans text-eunoia-dark py-2 hover:text-eunoia-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple text-white w-full py-2 rounded-md shadow-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
