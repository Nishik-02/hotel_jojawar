import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/hotelData';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div 
      id="home"
      className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] min-h-[480px] max-h-[900px] overflow-hidden bg-charcoal-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Slides without text overlays for unobstructed view */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-emerald-950/50 hover:bg-emerald-950/80 text-gold-200 hover:text-white border border-gold-500/40 backdrop-blur-sm transition-all focus:outline-none cursor-pointer shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-emerald-950/50 hover:bg-emerald-950/80 text-gold-200 hover:text-white border border-gold-500/40 backdrop-blur-sm transition-all focus:outline-none cursor-pointer shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 bg-emerald-950/40 px-3 py-1.5 rounded-full backdrop-blur-xs border border-gold-500/20">
        {heroSlides.map((_, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
              idx === currentSlide 
                ? 'w-6 h-2 bg-gold-400 shadow-gold' 
                : 'w-2 h-2 bg-ivory-100/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
