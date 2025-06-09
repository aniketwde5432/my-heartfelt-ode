
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ClosingSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowConfetti(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleHeartClick = () => {
    setHeartClicked(true);
    setTimeout(() => setHeartClicked(false), 1000);
  };

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 relative overflow-hidden"
    >
      {/* Confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <Sparkles className="text-pink-400 w-6 h-6" />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div 
          className={`transition-all duration-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            My Final Message 💌
          </h2>
          
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 mb-12">
            <p 
              className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              "No matter how much code I write,<br />
              it will never be enough to show<br />
              how deeply I love you."
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              You are my greatest creation, my most beautiful bug, 
              and the only program I want to run forever. ✨
            </p>
            
            <p className="text-base md:text-lg text-gray-500">
              Thank you for being my inspiration, my motivation, 
              and the love of my life. Here's to all our future commits together! 🚀
            </p>
          </div>

          {/* Interactive heart */}
          <div className="flex justify-center">
            <button
              onClick={handleHeartClick}
              className={`relative group transition-all duration-500 ${
                heartClicked ? 'scale-125' : 'scale-100 hover:scale-110'
              }`}
            >
              <Heart 
                className={`w-20 h-20 transition-all duration-300 ${
                  heartClicked 
                    ? 'text-red-500 fill-current' 
                    : 'text-pink-500 group-hover:text-red-500 group-hover:fill-current'
                }`} 
              />
              
              {/* Heart pulse effect */}
              <div className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                heartClicked ? 'animate-ping bg-red-400 opacity-30' : ''
              }`} />
              
              {/* Floating hearts on click */}
              {heartClicked && [...Array(8)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-red-400 w-4 h-4 fill-current animate-float"
                  style={{
                    left: `${Math.random() * 100 - 50}%`,
                    top: `${Math.random() * 100 - 50}%`,
                    animationDelay: `${i * 100}ms`,
                  }}
                />
              ))}
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Click the heart for a surprise! 💕
          </p>
        </div>
        
        {/* Made with love footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-400 flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400 fill-current" />
            <span>and lots of code</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
