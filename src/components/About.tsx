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

        {/* Our Story */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#00446E] mb-6">Our Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At EdHub, we are driven by a simple but powerful idea: education should be effective, affordable, and accessible to all. 
            We build intelligent, user-focused learning solutions that empower individuals, educators, and organizations to grow—without being limited by outdated systems or high costs. Our tools are crafted to support every stage of the learning journey, from foundational skills to advanced knowledge, across academic and professional settings.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-[#00446E] mb-6">Why We Exist</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The world is changing rapidly, and education must evolve with it. Traditional learning models often fall short—limited by cost, rigid delivery, and lack of personalization. We exist to close that gap.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to democratize access to high-quality education through technology that adapts, engages, and scales. We're here to help people learn better, faster, and more affordably—no matter who they are or where they start.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#00446E] mb-8">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#009C9F]/10 to-[#00446E]/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-[#00446E] mb-3">Modern Learning Platforms</h4>
              <p className="text-gray-700">Create intuitive, flexible platforms built to scale with your needs.</p>
            </div>
            <div className="bg-gradient-to-br from-[#009C9F]/10 to-[#00446E]/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-[#00446E] mb-3">Cost-Effective Solutions</h4>
              <p className="text-gray-700">Design affordable course solutions accessible to institutions and individuals.</p>
            </div>
            <div className="bg-gradient-to-br from-[#009C9F]/10 to-[#00446E]/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-[#00446E] mb-3">Smart Personalization</h4>
              <p className="text-gray-700">Use data and automation to personalize learning experiences and improve outcomes.</p>
            </div>
            <div className="bg-gradient-to-br from-[#009C9F]/10 to-[#00446E]/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-[#00446E] mb-3">Collaborative Communities</h4>
              <p className="text-gray-700">Enable engaging, human-centered knowledge-sharing communities.</p>
            </div>
          </div>
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
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#009C9F] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Technology, Finance, Legal – Courses
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#009C9F] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Across Geographies
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#009C9F] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Continuing Education for Professionals – Upskilling
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#009C9F] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Community Learning
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#009C9F] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Including personal interaction with Industry Experts
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#009C9F] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                Future Implementations → AI BOT interactively training
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;