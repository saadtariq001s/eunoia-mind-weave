
import React from 'react';
import { Lightbulb, Brain, Heart } from 'lucide-react';
import PlasmaAnimation from './PlasmaAnimation';

const EthosCard: React.FC<{ 
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-xl bg-white shadow-lg border border-eunoia-soft-purple/30 p-6 group hover:shadow-xl transition-all"
      style={{ animationDelay: delay }}
    >
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-eunoia-soft-purple/10 rounded-full group-hover:bg-eunoia-soft-purple/20 transition-colors"></div>
      <div className="relative z-10">
        <div className="bg-eunoia-soft-purple/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-eunoia-soft-purple/50 transition-colors">
          {icon}
        </div>
        <h3 className="font-serif text-2xl mb-3 text-eunoia-dark">{title}</h3>
        <p className="text-eunoia-dark/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Ethos: React.FC = () => {
  return (
    <section id="ethos" className="py-20 relative">
      <PlasmaAnimation className="opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">The Eunoia Ethos</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto">
            At Eunoia, we believe that technology should elevate, not replace, the human spirit. Every AI Agent we build embodies three essential pillars.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <EthosCard 
            title="Clarity"
            description="Stripping away noise to deliver insights that are precise, actionable, and easy to understand."
            icon={<Lightbulb size={32} className="text-eunoia-purple" />}
            delay="0s"
          />
          <EthosCard 
            title="Creativity"
            description="Generating fresh ideas and novel approaches, so you never feel boxed in by conventional thinking."
            icon={<Brain size={32} className="text-eunoia-purple" />}
            delay="0.2s"
          />
          <EthosCard 
            title="Compassion"
            description="Anticipating human needs with empathy, ensuring that every recommendation feels personalized and respectful."
            icon={<Heart size={32} className="text-eunoia-purple" />}
            delay="0.4s"
          />
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl font-serif italic text-eunoia-dark/80 max-w-2xl mx-auto">
            "Our Agents don't just compute—they contemplate. They learn your preferences, adapt to your style, and speak in a voice that feels authentically yours."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ethos;
