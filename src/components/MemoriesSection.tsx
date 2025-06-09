
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MemoriesSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const memories = [
    {
      id: 1,
      caption: "Our first date - the moment I knew you were special ✨",
      description: "Coffee shop conversations that lasted for hours"
    },
    {
      id: 2,
      caption: "That perfect sunset we watched together 🌅",
      description: "When time stood still and it was just us"
    },
    {
      id: 3,
      caption: "Your beautiful smile that lights up my world 😊",
      description: "The reason my days are brighter"
    },
    {
      id: 4,
      caption: "Adventures together, creating our story 🎈",
      description: "Every journey is better with you"
    },
    {
      id: 5,
      caption: "Quiet moments that mean everything 💕",
      description: "In your arms, I found my home"
    }
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % memories.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Beautiful Moments 📸
        </h2>
        
        <div className="relative">
          {/* Main photo display */}
          <div className="flex justify-center mb-8">
            <div 
              className={`relative bg-white p-6 rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transform: 'rotate(-1deg)' }}
            >
              {/* Placeholder for photo */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-24 h-24 text-pink-400 opacity-50" />
                <div className="absolute inset-0 bg-black/5 rounded-lg"></div>
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-gray-600">
                  {memories[currentPhoto].id}/5
                </div>
              </div>
              
              {/* Photo caption */}
              <div className="text-center">
                <p 
                  className="text-lg font-medium text-gray-800 mb-2"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {memories[currentPhoto].caption}
                </p>
                <p className="text-sm text-gray-600">
                  {memories[currentPhoto].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevPhoto}
              className="bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Photo indicators */}
            <div className="flex space-x-3">
              {memories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentPhoto 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-pink-200 hover:bg-pink-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPhoto}
              className="bg-pink-400 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
