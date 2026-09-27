import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import LightboxModal from '../components/gallery/LightboxModal';
import { galleryData } from '../data/hotelData';
import { Maximize2 } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Per PDF Page 23: OUTDOORS | ROOMS | SUITES | DINING | LOBBY | EXPERIENCES | NATURE
  const categories = ['ALL', 'OUTDOORS', 'ROOMS', 'SUITES', 'DINING', 'LOBBY', 'EXPERIENCES', 'NATURE'];

  const filteredImages = activeCategory === 'ALL'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const handlePrev = () => setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  const handleNext = () => setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));

  return (
    <div className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-700">
          PAGE 7 – GALLERY
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          GALLERY
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="text-xs sm:text-sm text-charcoal-700 font-semibold tracking-wider uppercase">
          OUTDOORS | ROOMS | SUITES | DINING | LOBBY | EXPERIENCES | NATURE
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? 'bg-emerald-700 text-gold-200 shadow-md border border-gold-500/50'
                : 'bg-ivory-100 hover:bg-ivory-300 text-charcoal-800 border border-gold-500/25'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gold-500/30 hover:border-gold-500/80 bg-emerald-950 aspect-[4/3] cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-end">
                <div className="p-1.5 rounded-full bg-emerald-900/90 text-gold-300 border border-gold-500/40">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 block mb-0.5">
                  {image.category}
                </span>
                <h4 className="font-serif text-sm font-bold text-gold-100 leading-tight">
                  {image.title}
                </h4>
                <p className="text-xs text-ivory-200/80 line-clamp-1 mt-0.5 font-light">
                  {image.caption}
                </p>
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
