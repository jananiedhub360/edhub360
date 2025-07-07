import React from 'react';
import { Brain, MessageSquare, Globe, Search, Award, GraduationCap } from 'lucide-react';

const WhyEdHub = () => {
  const features = [
    {
      icon: Brain,
      title: "Individualized Programs powered by AI",
      description: "Adaptive learning paths that evolve with your progress and goals"
    },
    {
      icon: MessageSquare,
      title: "Personalized Tutoring via virtual assistants",
      description: "24/7 AI tutors that understand your learning style and pace"
    },
    {
      icon: Globe,
      title: "Curated Global Content updated regularly",
      description: "Access to the world's best educational resources, constantly refreshed"
    },
    {
      icon: Search,
      title: "Smart Study Tools (Google‑Scholar‑plus‑ExplainPaper style)",
      description: "Advanced research and comprehension tools that make complex topics accessible"
    },
    {
      icon: Award,
      title: "Industry‑Aligned Assessments & Badges",
      description: "Credentials that employers recognize and value in today's job market"
    },
    {
      icon: GraduationCap,
      title: "Self‑Paced Degree Equivalent at 1/10th the cost",
      description: "Complete degree-level education without the traditional barriers and expenses"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why EdHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another education platform. We're your partners in transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-[#009C9F]"
            >
              <div className="bg-gradient-to-br from-[#BEA260] to-[#009C9F] text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#009C9F] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Future of Education is Here</h3>
            <p className="text-lg text-gray-200 mb-6">
              Join thousands of learners who have already discovered the power of AI-driven, personalized education that adapts to their needs and accelerates their success.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#BEA260]">90%</div>
                <div>Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#BEA260]">5x</div>
                <div>Faster Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#BEA260]">100%</div>
                <div>Personalized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEdHub;