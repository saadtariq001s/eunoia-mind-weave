
import React from 'react';
import { CircleDot, Layers, Command, LineChart, Users, Compass } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="group hover:bg-gradient-to-br from-eunoia-purple/5 to-eunoia-light-purple/5 rounded-xl p-6 transition-all cursor-pointer border border-transparent hover:border-eunoia-soft-purple/30">
      <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-eunoia-soft-purple/30 mb-5 group-hover:bg-gradient-to-r group-hover:from-eunoia-purple/20 group-hover:to-eunoia-light-purple/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-3 text-eunoia-dark">{title}</h3>
      <p className="text-eunoia-dark/70">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-eunoia-soft-purple/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-eunoia-dark/70 max-w-2xl mx-auto">
            Explore our range of AI solutions designed to elevate your cognitive capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Insight Engine"
            description="Convert vast amounts of data into actionable insights tailored to your specific needs and preferences."
            icon={<CircleDot size={24} className="text-eunoia-purple" />}
          />
          <ServiceCard 
            title="Content Creation"
            description="Generate compelling, on-brand content that resonates with your audience while maintaining your authentic voice."
            icon={<Layers size={24} className="text-eunoia-purple" />}
          />
          <ServiceCard 
            title="Decision Support"
            description="Navigate complex choices with an AI companion that helps you weigh options and identify optimal paths forward."
            icon={<Command size={24} className="text-eunoia-purple" />}
          />
          <ServiceCard 
            title="Market Analysis"
            description="Stay ahead of trends with predictive analytics that anticipate shifts in your industry landscape."
            icon={<LineChart size={24} className="text-eunoia-purple" />}
          />
          <ServiceCard 
            title="Collaborative Agents"
            description="Enhance team productivity with AI assistants that adapt to your workflow and communication style."
            icon={<Users size={24} className="text-eunoia-purple" />}
          />
          <ServiceCard 
            title="Strategic Forecasting"
            description="Plan for the future with confidence using our advanced predictive modeling and scenario analysis."
            icon={<Compass size={24} className="text-eunoia-purple" />}
          />
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-eunoia-purple to-eunoia-light-purple hover:from-eunoia-light-purple hover:to-eunoia-purple text-white px-8 py-3 rounded-md font-sans font-medium transition-all shadow-md hover:shadow-lg">
            Request Custom Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
