import React from 'react';
import { Target, Eye, Heart, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Accessibility First",
      description: "Learning should be available to everyone—not just those who can afford it."
    },
    {
      icon: Eye,
      title: "Innovation with Purpose",
      description: "Every tool we build serves a real educational need—not just a trend."
    },
    {
      icon: Heart,
      title: "Collaboration Over Competition",
      description: "We work hand-in-hand with educators and learners to refine and improve everything we offer."
    },
    {
      icon: Award,
      title: "Impact You Can Measure",
      description: "Our goal is not just engagement, but transformation—in knowledge, confidence, and opportunity."
    }
  ];

  const timeline = [
    { year: "2025", event: "Founded with a vision to democratize education" },
    { year: "2025", event: "Launched AI-powered personalization engine" },
    { year: "2025", event: "Partnered with leading educational institutions" },
    { year: "Today", event: "Serving thousands of learners worldwide" }
  ];

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

        {/* Why We Exist */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-[#00446E] mb-6">Our Purpose</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The world is changing rapidly, and education must evolve with it. Traditional learning models often fall short—limited by cost, rigid delivery, and lack of personalization. We exist to close that gap.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to democratize access to high-quality education through technology that adapts, engages, and scales. We're here to help people learn better, faster, and more affordably—no matter who they are or where they start.
          </p>
        </div>

        {/* Our Vision */}
        <div className="mb-20 text-center bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            We see a world where education is no longer a barrier—but a bridge. A world where every learner, regardless of background, has access to the tools and support they need to succeed. We're building that future—one solution, one learner, one breakthrough at a time.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-20 text-center bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold mb-6">Our Values</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            We value accessibility, purposeful innovation, and meaningful collaboration. Every solution we build is aimed at creating measurable impact in learners' lives—regardless of their background or location.
          </p>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="text-3xl font-bold text-[#00446E] mb-12 text-center">Our Roadmap</h3>
          <div className="relative max-w-4xl mx-auto">
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

            {/* Mobile Timeline - Stacked Layout */}
            <div className="md:hidden space-y-8">
              {[
                { title: "Step 1", content: "Specialized Courses in Technology, Finance, and Legal" },
                { title: "Step 2", content: "Global Reach Across Diverse Geographies" },
                { title: "Step 3", content: "Ongoing Professional Development and Upskilling" },
                { title: "Step 4", content: "Collaborative and Inclusive Community-Based Learning" },
                { title: "Step 5", content: "Direct Engagement with Industry Experts" },
                { title: "Step 6", content: "Future Vision: AI-Powered Interactive Learning Bots" }
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