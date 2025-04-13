import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

// Form field component with label and validation
const FormField: React.FC<{
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  component?: 'input' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
  className?: string;
}> = ({ 
  id, 
  label, 
  type, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  component = 'input',
  options = [],
  className = ""
}) => {
  return (
    <div className={`mb-5 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-eunoia-dark mb-1">
        {label} {required && <span className="text-eunoia-purple">*</span>}
      </label>
      
      {component === 'input' && (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange as any}
          className={`w-full px-4 py-3 rounded-md border ${error ? 'border-eunoia-error focus:ring-eunoia-error/30' : 'border-eunoia-soft-purple/40 focus:ring-eunoia-purple/30'} focus:outline-none focus:ring-2 bg-white/70 backdrop-blur-sm transition-all duration-200`}
        />
      )}
      
      {component === 'textarea' && (
        <textarea
          id={id}
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-md border ${error ? 'border-eunoia-error focus:ring-eunoia-error/30' : 'border-eunoia-soft-purple/40 focus:ring-eunoia-purple/30'} focus:outline-none focus:ring-2 bg-white/70 backdrop-blur-sm transition-all duration-200`}
        ></textarea>
      )}
      
      {component === 'select' && (
        <select
          id={id}
          value={value}
          onChange={onChange as any}
          className={`w-full px-4 py-3 rounded-md border ${error ? 'border-eunoia-error focus:ring-eunoia-error/30' : 'border-eunoia-soft-purple/40 focus:ring-eunoia-purple/30'} focus:outline-none focus:ring-2 bg-white/70 backdrop-blur-sm transition-all duration-200`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-eunoia-error flex items-center">
          <AlertCircle size={12} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  
  // Form validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        service: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // Service options
  const serviceOptions = [
    { value: 'insight-engine', label: 'Insight Engine' },
    { value: 'content-creation', label: 'Content Creation' },
    { value: 'decision-support', label: 'Decision Support' },
    { value: 'market-analysis', label: 'Market Analysis' },
    { value: 'collaborative-agents', label: 'Collaborative Agents' },
    { value: 'strategic-forecasting', label: 'Strategic Forecasting' },
    { value: 'other', label: 'Other' },
  ];
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <PlasmaAnimation 
        className="opacity-30" 
        colorVariant="mixed" 
        density="medium" 
        orbCount={12}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-eunoia-soft-purple/30 text-eunoia-purple text-sm font-medium mb-4">Get In Touch</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Connect With Us</span>
          </h2>
          <p className="text-eunoia-dark-secondary max-w-2xl mx-auto text-lg">
            Ready to transform complexity into clarity? Reach out to begin your journey with Eunoia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-purple-lg p-8 border border-eunoia-soft-purple/30 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-eunoia-soft-purple/10 rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-eunoia-soft-purple/10 rounded-full"></div>
              
              <div className="relative">
                <h3 className="font-serif text-2xl mb-6 text-eunoia-dark">Let's Start a Conversation</h3>
                
                {isSubmitted ? (
                  <div className="py-12">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-eunoia-success/10 flex items-center justify-center mb-4">
                        <CheckCircle size={32} className="text-eunoia-success" />
                      </div>
                      <h4 className="font-serif text-xl text-eunoia-dark mb-2">Message Sent Successfully!</h4>
                      <p className="text-eunoia-dark-secondary mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-eunoia-purple hover:text-eunoia-medium-purple font-medium transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        id="name"
                        label="Name"
                        type="text"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                      />
                      
                      <FormField
                        id="email"
                        label="Email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                      />
                    </div>
                    
                    <FormField
                      id="service"
                      label="Service of Interest"
                      type="text"
                      placeholder="Select a service"
                      value={formState.service}
                      onChange={handleChange}
                      error={errors.service}
                      required
                      component="select"
                      options={serviceOptions}
                    />
                    
                    <FormField
                      id="message"
                      label="Message"
                      type="text"
                      placeholder="Tell us about your project or inquiry"
                      value={formState.message}
                      onChange={handleChange}
                      error={errors.message}
                      required
                      component="textarea"
                    />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full relative overflow-hidden group ${
                        isSubmitting 
                          ? 'bg-eunoia-soft-purple/50 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-eunoia-purple to-eunoia-medium-purple hover:from-eunoia-medium-purple hover:to-eunoia-purple'
                      } text-white py-3 rounded-md font-sans font-medium transition-all shadow-purple-md hover:shadow-purple-lg`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-purple-md border border-eunoia-soft-purple/30 flex items-start gap-6 transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1">
                <div className="bg-gradient-to-r from-eunoia-soft-purple/40 to-eunoia-soft-purple/20 w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Mail className="text-eunoia-purple" size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-3 text-eunoia-dark">Email Us</h3>
                  <a href="mailto:info@eunoia.ai" className="text-eunoia-dark-secondary hover:text-eunoia-purple transition-colors block mb-2">info@eunoia.ai</a>
                  <a href="mailto:support@eunoia.ai" className="text-eunoia-dark-secondary hover:text-eunoia-purple transition-colors block">support@eunoia.ai</a>
                  <p className="mt-4 text-sm text-eunoia-dark-secondary/70">Response time: Within 24 hours</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-purple-md border border-eunoia-soft-purple/30 flex items-start gap-6 transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1">
                <div className="bg-gradient-to-r from-eunoia-soft-purple/40 to-eunoia-soft-purple/20 w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Phone className="text-eunoia-purple" size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-3 text-eunoia-dark">Call Us</h3>
                  <a href="tel:+15551234567" className="text-eunoia-dark-secondary hover:text-eunoia-purple transition-colors block mb-2">+1 (555) 123-4567</a>
                  <p className="text-eunoia-dark-secondary">Mon-Fri, 9:00 AM - 6:00 PM</p>
                  <p className="mt-4 text-sm text-eunoia-dark-secondary/70">International: +44 20 1234 5678</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-purple-md border border-eunoia-soft-purple/30 flex items-start gap-6 transition-all duration-300 hover:shadow-purple-lg hover:-translate-y-1">
                <div className="bg-gradient-to-r from-eunoia-soft-purple/40 to-eunoia-soft-purple/20 w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <MapPin className="text-eunoia-purple" size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-3 text-eunoia-dark">Visit Us</h3>
                  <address className="text-eunoia-dark-secondary not-italic">
                    <p>123 Innovation Way</p>
                    <p>Tech District, Athens, Greece</p>
                  </address>
                  <p className="mt-4 text-sm text-eunoia-dark-secondary/70">By appointment only</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-eunoia-purple to-eunoia-medium-purple rounded-xl p-8 shadow-purple-lg text-white">
                <h3 className="font-serif text-xl mb-3">Join Our Newsletter</h3>
                <p className="text-white/80 mb-4">Get monthly updates on AI trends, exclusive insights, and upcoming events.</p>
                
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/20 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-eunoia-purple px-4 py-1.5 rounded-md font-medium transition-all hover:bg-eunoia-gold hover:text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 text-center">
          <p className="text-eunoia-dark-secondary">We have partners and clients worldwide</p>
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-purple-md border border-eunoia-soft-purple/20 max-w-3xl mx-auto">
            <div className="font-serif italic text-eunoia-dark text-lg">
              "Working with Eunoia transformed how we approach market analysis. Their AI solutions cut our research time in half while doubling the quality of insights."
            </div>
            <div className="mt-4">
              <div className="font-medium text-eunoia-dark">Sarah Johnson</div>
              <div className="text-sm text-eunoia-dark-secondary">Chief Strategy Officer, Global Insights Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;