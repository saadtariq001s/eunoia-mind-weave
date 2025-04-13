import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section for highlighting the correct nav item
      const sections = ['hero', 'about', 'services', 'ethos', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar items with their corresponding links
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Ethos', href: '#ethos' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-purple-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Logo />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className={`relative px-4 py-2 font-sans text-eunoia-dark hover:text-eunoia-purple transition-colors ${
                activeSection === item.href.substring(1) ? 'text-eunoia-purple font-medium' : ''
              }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-eunoia-purple rounded-full"></span>
              )}
            </a>
          ))}
          
          <button className="ml-4 bg-gradient-to-r from-eunoia-purple to-eunoia-medium-purple hover:from-eunoia-medium-purple hover:to-eunoia-purple text-white px-5 py-2 rounded-md transition-all shadow-purple-md hover:shadow-purple-lg group">
            <span className="flex items-center">
              Get Started
              <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
            </span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-eunoia-dark p-1 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`
        md:hidden fixed inset-0 bg-white z-40 pt-20 transition-all duration-500 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-auto
      `}>
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="font-sans text-eunoia-dark text-lg hover:text-eunoia-purple transition-colors py-2 border-b border-eunoia-soft-purple/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          <button className="w-full bg-gradient-to-r from-eunoia-purple to-eunoia-medium-purple text-white py-3 rounded-md shadow-purple-md mt-4">
            Get Started
          </button>
          
          <div className="pt-6 mt-auto">
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-eunoia-dark-secondary hover:text-eunoia-purple transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-eunoia-dark-secondary hover:text-eunoia-purple transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-.2.32-.5.497-.854.5h-7.18c-.354-.003-.653-.18-.853-.5a.968.968 0 01-.068-1.032l3.59-6.9c.2-.38.62-.59 1.06-.59.44 0 .86.21 1.06.59l3.59 6.9c.17.33.14.75-.068 1.032z"/>
                </svg>
              </a>
              <a href="#" className="text-eunoia-dark-secondary hover:text-eunoia-purple transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.53 11.53 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.824 1.102.824 2.222v3.293c0 .32.192.694.8.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;