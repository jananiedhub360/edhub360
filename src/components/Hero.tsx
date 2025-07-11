import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight, DollarSign, Rocket, Users, Brain } from 'lucide-react';

interface HeroProps {
  onGetInTouch: () => void;
  onExploreSolutions: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetInTouch, onExploreSolutions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      icon: DollarSign,
      headline: "90% Cost Reduction",
      subtext: "Maximize ROI with minimal spend"
    },
    {
      icon: Rocket,
      headline: "Faster Learning with Relevant Content",
      subtext: "Learn more in less time"
    },
    {
      icon: Users,
      headline: "Human + AI Collaboration",
      subtext: "The best of both worlds"
    },
    {
      icon: Brain,
      headline: "Smart Personalization",
      subtext: "Tailored paths for every learner"
    }
  ];

  // Auto-rotation every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [benefits.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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

          {/* Animated Carousel */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Carousel Container */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 bg-[#BEA260]/20 rounded-lg p-6 flex flex-col items-center justify-center text-center"
                      >
                        <div className="bg-[#BEA260] text-[#00446E] p-4 rounded-full mb-4">
                          <IconComponent size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{benefit.headline}</h3>
                        <p className="text-sm text-gray-300">{benefit.subtext}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={prevSlide}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Previous benefit"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {benefits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-[#BEA260]' : 'bg-white/30'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                  aria-label="Next benefit"
                >
                  <ChevronRight size={20} />
                </button>
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