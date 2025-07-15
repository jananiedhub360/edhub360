import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Infinity } from 'lucide-react';

interface HeroProps {
  onGetInTouch: () => void;
  onExploreSolutions: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetInTouch, onExploreSolutions }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#009C9F] via-[#00446E] to-[#003355] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#BEA260] rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#BEA260] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-[#BEA260] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Education Without
              <span className="block text-[#BEA260]">Limits</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 font-light">
              Tailored • Affordable • Empowering
            </p>
            
            <p className="text-lg mb-10 text-gray-300 max-w-xl">
              We build intelligent, user-focused learning solutions that transform individuals, educators, and organizations to grow—without being limited by outdated systems or high costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onExploreSolutions}
                className="bg-[#BEA260] text-[#00446E] px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Explore Solutions
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onGetInTouch}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#00446E] transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* 4-Block Benefits Grid */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* 2x2 Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* 1/10th Cost */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2">1/10th</div>
                  <div className="text-md text-gray-300">Cost</div>
                </div>

                {/* 5× Faster Learning */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2">40%</div>
                  <div className="text-md text-gray-300 leading-tight">Time Saved with Personalised Courses</div>
                </div>

                {/* ∞ Smarter Learning */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2"></div>
                  <div className="text-md text-white-300 leading-tight">Smarter Learning with an AI-Powered Mentor</div>
                </div>

                {/* 100% Personalized */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2"></div>
                  <div className="text-md text-white-300">Your Speed Lane to Lifelong Skills.</div>
                </div>
              </div>

              {/* Watch Demo Button */}
              <div className="text-center">
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors group">
                  <Play size={24} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                </button>
                <div className="text-sm text-gray-300 mt-2">Watch Demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;