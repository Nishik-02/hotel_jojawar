import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, currentImage, onPrev, onNext, totalImages, currentIndex }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-emerald-950/95 backdrop-blur-md select-none">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-gold-300 hover:text-white border border-gold-500/40 transition-colors focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-gold-300 hover:text-white border border-gold-500/40 transition-all transform hover:-translate-x-1 focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-gold-300 hover:text-white border border-gold-500/40 transition-all transform hover:translate-x-1 focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container with Caption */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
        <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gold-500/40 bg-emerald-950">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 text-center text-white space-y-1 max-w-2xl px-4">
          <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-bold">
            <span className="px-2.5 py-0.5 rounded bg-emerald-900 border border-gold-500/40">{currentImage.category}</span>
            <span>•</span>
            <span>Image {currentIndex + 1} of {totalImages}</span>
          </div>
          <h4 className="font-serif text-base sm:text-lg font-bold text-gold-200">
            {currentImage.title}
          </h4>
          <p className="text-xs sm:text-sm text-ivory-200 font-light">
            {currentImage.caption}
          </p>
        </div>
      </div>

    </div>
  );
}
