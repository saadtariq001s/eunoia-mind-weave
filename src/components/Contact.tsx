
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <PlasmaAnimation className="opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Connect With Us</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto">
            Ready to transform complexity into clarity? Reach out to begin your journey with Eunoia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <form className="bg-white rounded-xl shadow-lg p-8 border border-eunoia-soft-purple/30">
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-eunoia-dark mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md border border-eunoia-soft-purple/40 focus:outline-none focus:ring-2 focus:ring-eunoia-purple/30"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-eunoia-dark mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-md border border-eunoia-soft-purple/40 focus:outline-none focus:ring-2 focus:ring-eunoia-purple/30"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="service" className="block text-sm font-medium text-eunoia-dark mb-1">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-md border border-eunoia-soft-purple/40 focus:outline-none focus:ring-2 focus:ring-eunoia-purple/30"
                >
                  <option value="">Select a service</option>
                  <option value="insight-engine">Insight Engine</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="decision-support">Decision Support</option>
                  <option value="market-analysis">Market Analysis</option>
                  <option value="collaborative-agents">Collaborative Agents</option>
                  <option value="strategic-forecasting">Strategic Forecasting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-eunoia-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project or inquiry"
                  className="w-full px-4 py-3 rounded-md border border-eunoia-soft-purple/40 focus:outline-none focus:ring-2 focus:ring-eunoia-purple/30"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple hover:from-eunoia-light-purple hover:to-eunoia-purple text-white py-3 rounded-md font-sans font-medium transition-all shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-eunoia-soft-purple/40 flex items-start gap-4">
                <div className="bg-eunoia-soft-purple/30 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Mail className="text-eunoia-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2 text-eunoia-dark">Email Us</h3>
                  <p className="text-eunoia-dark/70">info@eunoia.ai</p>
                  <p className="text-eunoia-dark/70">support@eunoia.ai</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-eunoia-soft-purple/40 flex items-start gap-4">
                <div className="bg-eunoia-soft-purple/30 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Phone className="text-eunoia-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2 text-eunoia-dark">Call Us</h3>
                  <p className="text-eunoia-dark/70">+1 (555) 123-4567</p>
                  <p className="text-eunoia-dark/70">Mon-Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-eunoia-soft-purple/40 flex items-start gap-4">
                <div className="bg-eunoia-soft-purple/30 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <MapPin className="text-eunoia-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2 text-eunoia-dark">Visit Us</h3>
                  <p className="text-eunoia-dark/70">123 Innovation Way</p>
                  <p className="text-eunoia-dark/70">Tech District, Athens, Greece</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
