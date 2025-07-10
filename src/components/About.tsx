import React from 'react';
import { Target, Eye, Heart, Award, Users, Calendar, Lightbulb, Telescope, GraduationCap, Globe, TrendingUp, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by innovation, guided by purpose, committed to transformation
          </p>
        </div>

        {/* Our Purpose - Text Left, Visual Right */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#00446E] mb-6">Our Purpose</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The world is changing rapidly, and education must evolve with it. Traditional learning models often fall short—limited by cost, rigid delivery, and lack of personalization. We exist to close that gap.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to democratize access to high-quality education through technology that adapts, engages, and scales. We're here to help people learn better, faster, and more affordably—no matter who they are or where they start.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-[#009C9F] to-[#00446E] text-white p-12 rounded-2xl shadow-lg">
                <Target size={80} className="mx-auto text-[#BEA260]" />
                <div className="text-center mt-4">
                  <h4 className="text-xl font-semibold mb-2">Mission Focused</h4>
                  <p className="text-gray-200 text-sm">Targeting educational barriers with precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision - Text Right, Visual Left */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#BEA260] to-[#009C9F] text-white p-12 rounded-2xl shadow-lg">
                <Eye size={80} className="mx-auto text-[#00446E]" />
                <div className="text-center mt-4">
                  <h4 className="text-xl font-semibold mb-2">Future Vision</h4>
                  <p className="text-gray-200 text-sm">Seeing beyond traditional boundaries</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-[#00446E] mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We see a world where education is no longer a barrier—but a bridge. A world where every learner, regardless of background, has access to the tools and support they need to succeed. We're building that future—one solution, one learner, one breakthrough at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values - Text Left, Visual Right */}
         <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#00446E] mb-6">Our Values</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At EdHub360, we believe education should be within everyone’s reach—affordable and accessible, not reserved for the few. That’s why we prioritize breaking barriers to learning for all.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on innovation with purpose, creating tools that solve real problems, not just follow trends. Every feature we build is designed to make learning more meaningful and effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We value collaboration over competition, working closely with educators and learners to continuously evolve and improve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                And above all, we strive for impact you can measure—transforming not just knowledge, but confidence and opportunity in every learner's journey.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-[#00446E] to-[#BEA260] text-white p-12 rounded-2xl shadow-lg">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-16 h-16 border-4 border-[#BEA260] rounded-full opacity-30"></div>
                  <div className="relative bg-[#BEA260] p-4 rounded-full w-fit mx-auto">
                    <Award size={48} className="text-[#00446E]" />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-xl font-semibold mb-2">Core Principles</h4>
                  <p className="text-gray-200 text-sm">Values that guide every decision</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="text-3xl font-bold text-[#00446E] mb-12 text-center">Our Strategic Direction</h3>
          
          {/* Curved Road Roadmap */}
          <div className="relative max-w-7xl mx-auto overflow-x-auto">
            {/* Desktop Roadmap */}
            <div className="hidden lg:block relative min-h-[650px] py-8">
              {/* Curved Road Path */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 1500 650" 
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Main Road Path */}
                <path
                  d="M 50 325 Q 175 225 300 325 Q 425 425 550 325 Q 675 225 800 325 Q 925 425 1050 325 Q 1175 225 1300 325 Q 1400 375 1450 325"
                  stroke="#374151"
                  strokeWidth="24"
                  fill="none"
                  className="drop-shadow-sm"
                />
                {/* Dashed Center Line */}
                <path
                  d="M 50 325 Q 175 225 300 325 Q 425 425 550 325 Q 675 225 800 325 Q 925 425 1050 325 Q 1175 225 1300 325 Q 1400 375 1450 325"
                  stroke="#BEA260"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="15,10"
                  className="opacity-80"
                />
                
                {/* Milestone Dots at Exact Curve Points */}
                <circle cx="175" cy="225" r="8" fill="#BEA260" stroke="white" strokeWidth="3" className="drop-shadow-sm" />
                <circle cx="425" cy="425" r="8" fill="#BEA260" stroke="white" strokeWidth="3" className="drop-shadow-sm" />
                <circle cx="675" cy="225" r="8" fill="#BEA260" stroke="white" strokeWidth="3" className="drop-shadow-sm" />
                <circle cx="925" cy="425" r="8" fill="#BEA260" stroke="white" strokeWidth="3" className="drop-shadow-sm" />
                <circle cx="1175" cy="225" r="8" fill="#BEA260" stroke="white" strokeWidth="3" className="drop-shadow-sm" />
                <circle cx="1400" cy="375" r="8" fill="#BEA260" stroke="white" strokeWidth="3" className="drop-shadow-sm" />
              </svg>

              {/* Milestones */}
              <div className="absolute inset-0">
                {/* Q3-2025 - Above road */}
                <div className="absolute" style={{ left: '115px', top: '120px' }}>
                  <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 w-60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap size={18} className="text-[#009C9F] mr-2" />
                      <h4 className="text-sm font-bold text-[#00446E]">Q3-2025</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-tight">Courses in Technology, Finance, and Legal</p>
                  </div>
                </div>

                {/* Q4-2025 - Below road */}
                  <div className="absolute" style={{ left: '195px', top: '420px' }}>
                    <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 w-60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-2">
                        <Globe size={18} className="text-[#009C9F] mr-2" />
                        <h4 className="text-sm font-bold text-[#00446E]">Q4-2025</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-tight">
                        Global Reach Across Diverse Geographies
                      </p>
                    </div>
                  </div>
  
                {/* Q1-2026 - Above road */}
                  <div className="absolute" style={{ left: '525px', top: '120px' }}>
                    <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 w-60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-2">
                        <TrendingUp size={18} className="text-[#009C9F] mr-2" />
                        <h4 className="text-sm font-bold text-[#00446E]">Q1–2026</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-tight">
                        Professional Development and Upskilling
                      </p>
                    </div>
                  </div>
                  
                  {/* Q2-2026 - Below road */}
                  <div className="absolute" style={{ left: '625px', top: '420px' }}>
                    <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 w-60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-2">
                        <Users size={18} className="text-[#009C9F] mr-2" />
                        <h4 className="text-sm font-bold text-[#00446E]">Q2–2026</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-tight">
                        EdHub Community
                      </p>
                    </div>
                  </div>
                  
                  {/* Q3-2026 - Above road */}
                  <div className="absolute" style={{ left: '915px', top: '130px' }}>
                    <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 w-60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-2">
                        <Award size={18} className="text-[#009C9F] mr-2" />
                        <h4 className="text-sm font-bold text-[#00446E]">Q3–2026</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-tight">
                        Engage with Industry Experts
                      </p>
                    </div>
                  </div>
                  
                  {/* Q4-2026 - Below road */}
                  <div className="absolute" style={{ left: '1015px', top: '420px' }}>
                    <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 w-60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-2">
                        <Brain size={18} className="text-[#009C9F] mr-2" />
                        <h4 className="text-sm font-bold text-[#00446E]">Q4–2026</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-tight">
                        Future Vision: AI-Powered Interactive Learning Bots
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                
            {/* Tablet Roadmap - Horizontal Scrollable */}
            <div className="hidden md:block lg:hidden">
              <div className="flex space-x-8 pb-4 overflow-x-auto">
                {[
                  { title: "Q3-2025", content: "Specialized Courses in Technology, Finance, and Legal", icon: GraduationCap },
                  { title: "Q4-2025", content: "Global Reach Across Diverse Geographies", icon: Globe },
                  { title: "Q1-2026", content: "Professional Development and Upskilling", icon: TrendingUp },
                  { title: "Q2-2026", content: "EdHub Community", icon: Users },
                  { title: "Q3-2026", content: "Engage with Industry Experts", icon: Award },
                  { title: "Q4-2026", content: "Future Vision: AI-Powered Interactive Learning Bots", icon: Brain }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex-shrink-0 w-72">
                      <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center mb-2">
                          <IconComponent size={20} className="text-[#009C9F] mr-2" />
                          <h4 className="text-lg font-bold text-[#00446E]">{item.title}</h4>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                      </div>
                      {/* Road connector */}
                      {index < 5 && (
                        <div className="flex items-center justify-center mt-4">
                          <div className="w-8 h-1 bg-[#374151] rounded"></div>
                          <div className="w-2 h-2 bg-[#BEA260] rounded-full mx-2"></div>
                          <div className="w-8 h-1 bg-[#374151] rounded"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Roadmap - Vertical Wave */}
            <div className="md:hidden space-y-6">
              {[
                { title: "Q3-2025", content: "Specialized Courses in Technology, Finance, and Legal", icon: GraduationCap },
                { title: "Q4-2025", content: "Global Reach Across Diverse Geographies", icon: Globe },
                { title: "Q1-2026", content: "Professional Development and Upskilling", icon: TrendingUp },
                { title: "Q2-2026", content: "EdHub Community", icon: Users },
                { title: "Q3-2026", content: "Engage with Industry Experts", icon: Award },
                { title: "Q4-2026", content: "Future Vision: AI-Powered Interactive Learning Bots", icon: Brain }
              ].map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${isEven ? 'pr-4' : 'pl-4'}`}>
                      <div className="bg-white border-2 border-[#009C9F] rounded-xl p-4 shadow-lg">
                        <div className="flex items-center mb-2">
                          <IconComponent size={20} className="text-[#009C9F] mr-2" />
                          <h4 className="text-lg font-bold text-[#00446E]">{item.title}</h4>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-4 h-4 bg-[#BEA260] rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                    <div className="flex-1">
                      {/* Curved connector line */}
                      {index < 5 && (
                        <svg className="w-full h-16" viewBox="0 0 100 60">
                          <path
                            d={isEven ? "M 0 30 Q 50 10 100 30" : "M 0 30 Q 50 50 100 30"}
                            stroke="#374151"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="5,3"
                            className="opacity-60"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
              </div> 
            </div> 
          </div>
        </div> 
      </section>
  );
};

export default About;
