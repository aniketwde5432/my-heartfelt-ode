
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AppreciationSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "You make everything brighter ☀️",
    "Thank you for being you 🌸",
    "Every moment with you is a blessing 💫",
    "Your smile is my favorite notification 😊",
    "You turn ordinary days into adventures 🎈",
    "My heart skips a beat every time I see you 💕"
  ];

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, messages.length]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          Every day, I'm grateful for...
        </h2>
        
        <div className="relative h-32 flex items-center justify-center">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                index === currentMessage
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 translate-y-4'
              }`}
            >
              <p 
                className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-medium"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {message}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentMessage ? 'bg-pink-400 scale-125' : 'bg-pink-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;
