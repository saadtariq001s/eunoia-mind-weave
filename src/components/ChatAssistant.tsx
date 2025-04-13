import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ChevronRight, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface SuggestionType {
  id: string;
  text: string;
  action?: () => void;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Initial suggestions for users
  const suggestions: SuggestionType[] = [
    {
      id: 'services',
      text: 'Tell me about your services',
      action: () => sendMessage('Tell me about your services')
    },
    {
      id: 'pricing',
      text: 'What are your pricing plans?',
      action: () => sendMessage('What are your pricing plans?')
    },
    {
      id: 'demo',
      text: 'Request a demo',
      action: () => sendMessage('I would like to request a demo')
    },
    {
      id: 'contact',
      text: 'Contact support',
      action: () => sendMessage('How can I contact support?')
    }
  ];
  
  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message with slight delay for effect
      setTimeout(() => {
        setMessages([
          {
            id: 'welcome',
            text: "Hello! I'm Eunoia's virtual assistant. How can I help you today?",
            sender: 'assistant',
            timestamp: new Date()
          }
        ]);
        setIsTyping(false);
      }, 700);
      
      setIsTyping(true);
    }
  }, [isOpen, messages.length]);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);
  
  // Send a message function
  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      let responseText = '';
      
      // Simple pattern matching for demo purposes
      if (text.toLowerCase().includes('service')) {
        responseText = "Eunoia offers several AI services including Insight Engine, Content Creation, Decision Support, Market Analysis, Collaborative Agents, and Strategic Forecasting. Each service is customized to meet your specific business needs.";
      } else if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
        responseText = "We offer flexible pricing plans tailored to your organization's size and needs. Our plans start at $99/month for startups and scale up for enterprise solutions. Would you like to speak with a sales representative for a custom quote?";
      } else if (text.toLowerCase().includes('demo')) {
        responseText = "Great! I'd be happy to arrange a demo for you. Could you please provide your email address and company name? Alternatively, you can schedule a demo directly on our calendar at eunoia.ai/demo";
      } else if (text.toLowerCase().includes('contact') || text.toLowerCase().includes('support')) {
        responseText = "You can reach our support team at support@eunoia.ai or call us at +1 (555) 123-4567 during business hours (9AM-6PM ET). For urgent issues, we also offer 24/7 emergency support for enterprise clients.";
      } else {
        responseText = "Thank you for your message. One of our team members will get back to you shortly. Is there anything specific about Eunoia's AI solutions you'd like to know in the meantime?";
      }
      
      const botMessage: Message = {
        id: `assistant-${Date.now()}`,
        text: responseText,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };
  
  return (
    <>
      {/* Chat toggle button */}
      <button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {/* Chat window */}
      <div className={`fixed bottom-6 right-6 z-40 w-80 sm:w-96 h-[500px] max-h-[80vh] rounded-2xl bg-white shadow-2xl border border-eunoia-soft-purple/30 flex flex-col transition-all duration-300 transform ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}>
        {/* Chat header */}
        <div className="p-4 bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple text-white rounded-t-2xl flex items-center">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
            <Sparkles size={16} className="text-white" />
          </div>
          <div>
            <h3 className="font-medium">Eunoia Assistant</h3>
            <p className="text-xs text-white/80">We typically reply in a few minutes</p>
          </div>
          <button 
            className="ml-auto text-white/90 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-4 bg-eunoia-soft-purple/10">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-eunoia-purple text-white rounded-tr-none' 
                    : 'bg-white border border-eunoia-soft-purple/30 text-eunoia-dark rounded-tl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <div 
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-eunoia-dark/50'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="mb-4 flex justify-start">
              <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-white border border-eunoia-soft-purple/30 text-eunoia-dark rounded-tl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-eunoia-purple/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-eunoia-purple/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-eunoia-purple/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Initial suggestions */}
          {messages.length <= 1 && !isTyping && (
            <div className="mt-6">
              <p className="text-xs text-eunoia-dark/60 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={suggestion.action}
                    className="text-xs bg-white hover:bg-eunoia-soft-purple/30 text-eunoia-dark hover:text-eunoia-purple px-3 py-1.5 rounded-full border border-eunoia-soft-purple/30 transition-colors"
                  >
                    {suggestion.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-eunoia-soft-purple/20 bg-white rounded-b-2xl">
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-eunoia-soft-purple/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-eunoia-purple/30"
              disabled={isTyping}
            />
            <button
              type="submit"
              className={`ml-2 w-8 h-8 flex items-center justify-center rounded-full ${
                inputValue.trim() 
                  ? 'bg-eunoia-purple text-white' 
                  : 'bg-eunoia-soft-purple/30 text-eunoia-purple/50'
              }`}
              disabled={!inputValue.trim() || isTyping}
            >
              <Send size={14} />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-eunoia-dark/50">Powered by <span className="text-eunoia-purple">Eunoia AI</span></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatAssistant;