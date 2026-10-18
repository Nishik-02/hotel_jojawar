import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import LightboxModal from '../components/gallery/LightboxModal';
import { galleryData, galleryCategories } from '../data/hotelData';
import { Maximize2 } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'ALL'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const handlePrev = () => setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  const handleNext = () => setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));

  return (
    <div className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Page Header (Internal tag and subtitle removed per screenshot) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          GALLERY
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
      </div>

      {/* Filter Tabs - Rebuilt in requested order: ALL, OUTDOOR, RECEPTION, ROOM, SUITE, DINING, BARADARI, LOBBY */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-emerald-700 text-gold-200 shadow-md border border-gold-500/60 scale-105'
                : 'bg-ivory-100 hover:bg-ivory-300 text-charcoal-800 border border-gold-500/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid - Text overlays removed per screenshot annotations ("Remove text for all") */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gold-500/30 hover:border-gold-500/80 bg-emerald-950 aspect-[4/3] cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <img
              src={image.src}
              alt={`${image.category} view ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            
            {/* Subtle hover overlay with expand icon only, no text overlays */}
            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="p-3 rounded-full bg-emerald-950/80 text-gold-300 border border-gold-500/50 shadow-lg backdrop-blur-xs scale-90 group-hover:scale-100 transition-transform">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        currentImage={lightboxIndex !== null ? filteredImages[lightboxIndex] : null}
        currentIndex={lightboxIndex || 0}
        totalImages={filteredImages.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />

    </div>
  );
}
