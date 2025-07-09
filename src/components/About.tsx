import React from 'react';
import { Target, Eye, Heart, Award, Users, Calendar, Lightbulb, Telescope } from 'lucide-react';

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
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#009C9F] text-white p-2 rounded-lg flex-shrink-0">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Accessibility First</h4>
                    <p className="text-gray-600 text-sm">Learning should be available to everyone—not just those who can afford it.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#009C9F] text-white p-2 rounded-lg flex-shrink-0">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation with Purpose</h4>
                    <p className="text-gray-600 text-sm">Every tool we build serves a real educational need—not just a trend.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#009C9F] text-white p-2 rounded-lg flex-shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Collaboration Over Competition</h4>
                    <p className="text-gray-600 text-sm">We work hand-in-hand with educators and learners to refine and improve everything we offer.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#009C9F] text-white p-2 rounded-lg flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Impact You Can Measure</h4>
                    <p className="text-gray-600 text-sm">Our goal is not just engagement, but transformation—in knowledge, confidence, and opportunity.</p>
                  </div>
                </div>
              </div>
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
          <h3 className="text-3xl font-bold text-[#00446E] mb-12 text-center">Our Roadmap</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#009C9F] to-[#BEA260]"></div>
              
              {/* Timeline Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border-2 border-[#009C9F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-bold text-[#00446E] mb-3 text-right">Q3-2025</h4>
                      <p className="text-gray-700 leading-relaxed">Specialized Courses in Technology, Finance, and Legal</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#BEA260] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#BEA260] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white border-2 border-[#009C9F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-bold text-[#00446E] mb-3">Q4-2025</h4>
                      <p className="text-gray-700 leading-relaxed">Global Reach Across Diverse Geographies</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border-2 border-[#009C9F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-bold text-[#00446E] mb-3 text-right">Q1-2026</h4>
                      <p className="text-gray-700 leading-relaxed">Continuous Professional Development and Upskilling</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#BEA260] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#BEA260] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white border-2 border-[#009C9F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-bold text-[#00446E] mb-3">Q2-2026</h4>
                      <p className="text-gray-700 leading-relaxed">Collaborative and Inclusive Community-Based Learning</p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white border-2 border-[#009C9F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-bold text-[#00446E] mb-3 text-right">Q3-2026</h4>
                      <p className="text-gray-700 leading-relaxed">Engage with Industry Experts</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#BEA260] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Step 6 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#BEA260] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white border-2 border-[#009C9F] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-bold text-[#00446E] mb-3">Q4-2026</h4>
                      <p className="text-gray-700 leading-relaxed">Future Vision: AI-Powered Interactive Learning Bots</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline - Stacked Layout */}
            <div className="md:hidden space-y-8">
              {[
                { title: "Q3-2025", content: "Specialized Courses in Technology, Finance, and Legal" },
                { title: "Q4-2025", content: "Global Reach Across Diverse Geographies" },
                { title: "Q1-2026", content: "Continuous Professional Development and Upskilling" },
                { title: "Q2-2026", content: "Collaborative and Inclusive Community-Based Learning" },
                { title: "Q3-2026", content: "Engage with Industry Experts" },
                { title: "Q4-2026", content: "Future Vision: AI-Powered Interactive Learning Bots" }
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-[#009C9F] rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-[#00446E] mb-3">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;