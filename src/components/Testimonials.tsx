import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "University Professor",
      content: "EDHUB360 has revolutionized how I deliver content to my students. The personalization features ensure every learner gets exactly what they need.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Corporate Training Director",
      content: "We've reduced training costs by 70% while improving completion rates by 85%. The ROI speaks for itself.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Lifelong Learner",
      content: "Finally, education that adapts to my schedule and learning style. I've completed more courses this year than in the past five combined.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#00446E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of learners and educators who have transformed their educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#BEA260] fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote size={32} className="text-[#BEA260] mb-4" />
                <p className="text-gray-200 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-[#BEA260] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos Bar */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">Trusted by leading institutions and organizations</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="bg-white/20 px-6 py-3 rounded-lg">University Partner</div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">Corporate Client</div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">Training Institute</div>
            <div className="bg-white/20 px-6 py-3 rounded-lg">EdTech Alliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;