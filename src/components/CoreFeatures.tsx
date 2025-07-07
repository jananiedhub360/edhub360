import React from 'react';
import { Bot, Users, Cog, Zap } from 'lucide-react';

const CoreFeatures = () => {
  const aiRoles = [
    {
      icon: Bot,
      title: "AI‑Disrupted Professions",
      description: "Teaching, legal research, software dev reshaped by ChatGPT‑style tools"
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "AI‑tailored paths challenge one‑size‑fits‑all degrees"
    },
    {
      icon: Cog,
      title: "Automated Admin",
      description: "Admissions, grading, and support streamlined for cost savings"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Role of AI in Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artificial Intelligence is fundamentally transforming how we learn, teach, and manage education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiRoles.map((role, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-200 hover:border-[#009C9F] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-teal-50"
            >
              <div className="bg-gradient-to-br from-[#009C9F] to-[#00446E] text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <role.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#009C9F] transition-colors">
                {role.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <Zap size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">The AI Revolution in Education</h3>
            <p className="text-lg text-gray-200">
              We're not just witnessing change—we're leading it. AI isn't replacing education; it's making it more effective, accessible, and personalized than ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;