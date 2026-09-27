import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Compass, Sparkles } from 'lucide-react';
import { heroSlides } from '../../data/hotelData';

export default function HeroCarousel({ onOpenBooking, onExploreClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
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
      className="relative w-full h-[70vh] sm:h-[80vh] min-h-[520px] max-h-[850px] overflow-hidden bg-emerald-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Slides */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with subtle Ken Burns effect */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Royal Emerald & Charcoal Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-charcoal-900/60" />
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />
            </div>

            {/* Slide Content Overlay */}
            <div className="relative z-20 h-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center pb-12 sm:pb-16">
              
              {/* Tag */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-900/80 border border-gold-500/50 text-gold-300 text-xs uppercase tracking-[0.25em] font-semibold mb-4 backdrop-blur-sm shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{slide.tag}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory-100 tracking-tight leading-[1.15] max-w-4xl text-shadow-dark mb-3">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="font-serif italic text-base sm:text-xl md:text-2xl text-gold-200/95 max-w-2xl font-light mb-8 text-shadow-dark">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-[0.2em] border border-gold-500/60 shadow-royal hover:shadow-gold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>BOOK YOUR STAY</span>
                </button>

                <button
                  onClick={onExploreClick}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-charcoal-900/60 hover:bg-emerald-900/80 text-ivory-200 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] border border-ivory-300/40 hover:border-gold-400 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Compass className="w-4 h-4 text-gold-400" />
                  <span>EXPLORE KESAR BAGH</span>
                </button>
              </div>

            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/90 text-gold-300 hover:text-white border border-gold-500/40 backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/90 text-gold-300 hover:text-white border border-gold-500/40 backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              idx === currentSlide 
                ? 'w-7 h-2 bg-gold-400 shadow-gold' 
                : 'w-2 h-2 bg-ivory-200/50 hover:bg-ivory-200/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
