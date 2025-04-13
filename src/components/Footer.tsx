
import React from 'react';
import Logo from './Logo';
import { Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eunoia-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo className="mb-6" />
            <p className="text-white/70 mb-6 pr-4">
              Elevating human potential through beautiful thinking and AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Press</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Insight Engine</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Content Creation</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Decision Support</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Market Analysis</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 mb-4 md:mb-0">© {new Date().getFullYear()} Eunoia. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
