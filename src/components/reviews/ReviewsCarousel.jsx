import React, { useState, useEffect } from 'react';
import SectionHeader from '../common/SectionHeader';
import WriteReviewModal from './WriteReviewModal';
import { reviewsData as initialReviews } from '../../data/hotelData';
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState(initialReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
    setCurrentIndex(0);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-ivory-300 relative overflow-hidden">
      
      {/* Background Subtle Jali */}
      <div className="absolute inset-0 bg-jali-pattern pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-2">
            Honored Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight leading-tight">
            Customer Review
          </h2>
          <SectionHeader title="" align="center" className="my-2 mb-4" />
        </div>

        {/* Customer Review Card */}
        <div className="max-w-2xl mx-auto text-center space-y-6 bg-ivory-100 p-6 sm:p-10 rounded-xl shadow-royal border border-gold-500/35 relative">
          
          {/* Circular Royal Avatar */}
          <div className="w-16 h-16 rounded-full bg-emerald-900 border-2 border-gold-500 text-gold-300 mx-auto flex items-center justify-center shadow-md">
            <User className="w-8 h-8" />
          </div>

          {/* Gold Star Rating */}
          <div className="flex items-center justify-center space-x-1">
            {Array.from({ length: currentReview.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="font-serif italic text-lg sm:text-2xl text-charcoal-900 leading-relaxed font-normal">
            “{currentReview.review}”
          </p>

          {/* Author Name */}
          <div>
            <h4 className="font-sans font-bold text-base sm:text-lg text-emerald-900 tracking-wide">
              {currentReview.name}
            </h4>
            <p className="text-xs text-gold-700 font-semibold">{currentReview.location}</p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gold-500/20">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg hover:bg-ivory-300 text-emerald-900 transition-colors"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all rounded-full ${
                    idx === currentIndex ? 'w-5 h-2 bg-emerald-800' : 'w-2 h-2 bg-gold-400'
                  }`}
                  aria-label={`Review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-lg hover:bg-ivory-300 text-emerald-900 transition-colors"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-1">
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="text-xs text-emerald-800 hover:text-emerald-950 hover:underline font-bold uppercase tracking-wider"
            >
              + Write a Review
            </button>
          </div>

        </div>

      </div>

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onReviewSubmitted={handleAddReview}
      />
    </section>
  );
}
