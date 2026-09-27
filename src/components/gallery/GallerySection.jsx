import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import LightboxModal from './LightboxModal';
import { galleryData } from '../../data/hotelData';
import { Maximize2, Camera } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Per PDF Page 7: OUTDOOR, ROOMS, SUITES, DINING, LOBBY, EXPERIENCES, NATURE
  const categories = ['ALL', 'OUTDOORS', 'ROOMS', 'SUITES', 'DINING', 'LOBBY', 'EXPERIENCES', 'NATURE'];

  const filteredImages = activeCategory === 'ALL'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-ivory-200 relative overflow-hidden">
      
      {/* Background Jali */}
      <div className="absolute inset-0 bg-jali-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-2">
            A Glimpse of Kesar Bagh
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight leading-tight">
            Gallery
          </h2>
          <SectionHeader title="" align="center" className="my-2 mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-700 max-w-xl mx-auto italic font-light">
            Let the images do the work — rooms, Aravalli landscape, gardens, dining, experiences, wildlife, etc.
          </p>
        </div>

        {/* Category Filter Tabs per PDF Page 7 */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-emerald-700 text-gold-200 shadow-md border border-gold-500/50'
                  : 'bg-ivory-100 hover:bg-ivory-300 text-charcoal-800 border border-gold-500/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gold-500/30 hover:border-gold-500/80 bg-emerald-950 aspect-[4/3] cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <div className="p-1.5 rounded-full bg-emerald-900/90 text-gold-300 border border-gold-500/40 backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 block mb-0.5">
                    {image.category}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-gold-100 leading-tight">
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
    </section>
  );
}
