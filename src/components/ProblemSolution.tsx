import React from 'react';
import { DollarSign, BookOpen, Users, TrendingUp } from 'lucide-react';

const ProblemSolution = () => {
  const disruptions = [
    {
      icon: DollarSign,
      title: "Rising Costs, Shrinking ROI",
      description: "Tuition up, wage premiums flat, debt crisis"
    },
    {
      icon: BookOpen,
      title: "Skills Mismatch",
      description: "Grads lack job‑ready skills; curricula lag industry"
    },
    {
      icon: Users,
      title: "Inequality & Accessibility",
      description: "Elite schools favor wealthier students; online models level the field"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why College Degrees Are Being Disrupted
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional higher education faces unprecedented challenges that are reshaping the future of learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {disruptions.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-xl w-fit mb-6">
                <item.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-8 inline-block">
            <TrendingUp size={48} className="mx-auto mb-4" />
            <p className="text-xl font-semibold">
              The disruption is here. The question is: Will you adapt or be left behind?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;