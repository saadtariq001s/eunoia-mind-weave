
import React from 'react';
import { Sparkles, History, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Story</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto">
            The journey from ancient Greek philosophy to modern artificial intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-eunoia-light-purple/20 to-eunoia-purple/20 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="font-serif text-2xl mb-4 text-eunoia-dark">Origins in Ancient Wisdom</h3>
                <p className="text-eunoia-dark/80 mb-6 leading-relaxed">
                  In ancient Greece, the word eunoia spoke of "beautiful thinking"—the harmonious fusion of clarity, creativity, and compassion in the human mind. Our founders, a philosopher and an engineer, were captivated by that idea.
                </p>
                <p className="text-eunoia-dark/80 leading-relaxed">
                  They saw a parallel between the best of human insight and the emerging power of artificial intelligence: both strive to connect dots, anticipate needs, and craft solutions that feel almost intuitive. From that spark of inspiration, Eunoia was born.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-eunoia-gold/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-eunoia-light-purple/30 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-eunoia-soft-purple/40 hover:shadow-lg transition-all">
              <div className="bg-eunoia-soft-purple/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-eunoia-purple" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-eunoia-dark">A Journey from Complexity to Confidence</h3>
              <p className="text-eunoia-dark/70">
                Eunoia's mission is to transform moments of overwhelm into empowerment. Our AI agents sift through complexity, highlight what matters most, and guide you toward confident decisions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-eunoia-soft-purple/40 hover:shadow-lg transition-all">
              <div className="bg-eunoia-soft-purple/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <History className="text-eunoia-purple" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-eunoia-dark">Crafting Tomorrow, Today</h3>
              <p className="text-eunoia-dark/70">
                As we look to the future, Eunoia stands at the crossroads of human ingenuity and machine precision. Our roadmap includes AI that anticipates societal shifts and democratizes access to expertise.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-eunoia-soft-purple/40 hover:shadow-lg transition-all">
              <div className="bg-eunoia-soft-purple/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-eunoia-purple" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-eunoia-dark">True to Our Name</h3>
              <p className="text-eunoia-dark/70">
                Through every innovation, we remain true to our name: cultivating beautiful thinking that resonates in every solution, every interaction, and every success story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
