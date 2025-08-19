import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Award, Users, Zap } from 'lucide-react';

const CTASection: React.FC = () => {
  const futureFeatures = [
    {
      icon: Globe,
      title: "Hybrid Models",
      description: "Blending online and offline learning experiences"
    },
    {
      icon: Users,
      title: "Lifelong Learning",
      description: "Continuous skill development throughout careers"
    },
    {
      icon: Award,
      title: "Blockchain-verified Credentials",
      description: "Secure, tamper-proof digital certificates"
    },
    {
      icon: Zap,
      title: "Global Learning Equality",
      description: "Breaking down barriers to quality education worldwide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Future We're Building */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12">The Future We're Building</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group hover:scale-105 transform"
              >
                <div className="bg-[#BEA260] text-[#00446E] p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-[#BEA260] transition-colors">{feature.title}</h4>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;