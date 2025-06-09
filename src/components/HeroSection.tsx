
import React, { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMainText, setShowMainText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMainText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Note: You can add actual audio functionality here
    console.log('Music toggled:', !isPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Heart className="text-pink-300 w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Music toggle */}
      <button
        onClick={toggleMusic}
        className="absolute top-8 right-8 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-pink-600" />
        ) : (
          <VolumeX className="w-6 h-6 text-pink-600" />
        )}
      </button>

      {/* Main content */}
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <div className="relative inline-block">
            <Heart className="w-16 h-16 text-pink-400 animate-pulse mx-auto mb-6" />
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
        
        <h1 
          className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 mb-6 transition-all duration-2000 ${
            showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          For the most special person
          <br />
          in my life...
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-gray-600 transition-all duration-2000 delay-500 ${
            showMainText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          A digital love letter, crafted with code and filled with my heart ✨
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
