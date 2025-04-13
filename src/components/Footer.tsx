import React, { useState } from 'react';
import Logo from './Logo';
import { Twitter, Linkedin, Facebook, Instagram, Github, ArrowUp, Mail, Check } from 'lucide-react';

interface FooterLinkGroupProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
    isNew?: boolean;
    isExternal?: boolean;
  }>;
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="text-white font-serif text-lg mb-6 relative inline-block">
        {title}
        <div className="absolute left-0 bottom-0 w-12 h-0.5 bg-eunoia-light-purple/50"></div>
      </h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-white/70 hover:text-white transition-colors flex items-center group"
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
            >
              <span className="relative">
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-eunoia-light-purple/70 transition-all duration-300 group-hover:w-full"></span>
              </span>
              {link.isNew && (
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-eunoia-light-purple/30 text-eunoia-light-purple">New</span>
              )}
              {link.isExternal && (
                <svg 
                  className="ml-1 w-3 h-3 text-white/50 group-hover:text-white/80 transition-colors" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription process
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
      }, 1000);
    }
  };
  
  // Current year for copyright notice
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" }
  ];
  
  // Footer navigation groups
  const navGroups = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#", isNew: true },
        { label: "Press", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Team", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Insight Engine", href: "#services" },
        { label: "Content Creation", href: "#services" },
        { label: "Decision Support", href: "#services" },
        { label: "Market Analysis", href: "#services" },
        { label: "Collaborative Agents", href: "#services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#", isExternal: true },
        { label: "API Reference", href: "#", isExternal: true },
        { label: "Case Studies", href: "#" },
        { label: "Client Testimonials", href: "#" },
        { label: "Contact Support", href: "#contact" }
      ]
    }
  ];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-eunoia-dark to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-eunoia-purple via-eunoia-light-purple to-eunoia-gold"></div>
      <div className="absolute top-0 right-0 w-36 h-36 bg-eunoia-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-eunoia-gold/5 rounded-full blur-3xl"></div>
      
      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-white/70 mb-8 pr-4 text-lg leading-relaxed">
              Elevating human potential through beautiful thinking and AI-powered solutions that embody clarity, creativity, and compassion.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all duration-300" 
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            {/* Newsletter signup */}
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <h3 className="text-white font-serif text-lg mb-3">Stay Updated</h3>
              <p className="text-white/70 mb-4 text-sm">
                Subscribe to our newsletter for the latest AI insights and Eunoia updates.
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center text-green-400 bg-green-400/10 rounded-md p-3">
                  <Check size={16} className="mr-2" />
                  <span>Thank you! You're now subscribed.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex">
                    <div className="relative flex-grow">
                      <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-l-md text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-eunoia-light-purple/50"
                      />
                    </div>
                    <button type="submit" className="bg-eunoia-purple hover:bg-eunoia-light-purple text-white px-4 py-2 rounded-r-md transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          {/* Navigation link groups */}
          {navGroups.map((group, index) => (
            <FooterLinkGroup key={index} title={group.title} links={group.links} />
          ))}
        </div>
        
        {/* Bottom footer - copyright, policies, scroll to top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 mb-4 md:mb-0">© {currentYear} Eunoia. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Cookie Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Accessibility</a>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-eunoia-purple/90 hover:bg-eunoia-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-20"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;