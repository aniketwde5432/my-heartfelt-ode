
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PoemSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [visibleLines, setVisibleLines] = useState(0);
  
  const poemLines = [
    "In lines of code, I write my heart,",
    "Each function call, a work of art.",
    "But no algorithm could ever compute",
    "The depth of love I have for you.",
    "",
    "You're the variable that makes sense,",
    "In this chaotic code sequence.",
    "The constant in my changing world,",
    "My favorite bug that can't be cured.",
    "",
    "Like perfectly compiled code,",
    "You make my errors fade and go.",
    "In you, I found my missing piece,",
    "My heart's eternal release.",
    "",
    "No syntax error could compare",
    "To moments when you're not there.",
    "You're my favorite commit,",
    "The feature that just makes life fit.",
    "",
    "So here's my promise, tried and true,",
    "I'll spend forever loving you.",
    "In every line of code I write,",
    "You'll be my inspiration bright. 💕"
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setVisibleLines(prev => {
          if (prev < poemLines.length) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 800);
      return () => clearInterval(timer);
    }
  }, [isVisible, poemLines.length]);

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden"
    >
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          A Poem Written in Code & Love 💝
        </h2>
        
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {poemLines.map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index < visibleLines
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  fontFamily: "'Dancing Script', cursive"
                }}
              >
                {line === '' ? (
                  <div className="h-4" />
                ) : (
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {line}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
