import React, { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import { Calendar, CheckCircle2, ShieldCheck, Sparkles, BedDouble, Users, MapPin, Waves, ChevronLeft, ChevronRight, Images } from 'lucide-react';

export default function RoomDetailModal({ isOpen, onClose, room, onBookNow }) {
  if (!room) return null;

  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [room]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={room.name}
      subtitle={room.countText || room.tag}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6 p-1 sm:p-2">
        
        {/* Main Image Gallery Banner */}
        <div className="space-y-3">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-gold-500/40 shadow-md bg-emerald-950 group">
            <img
              src={images[activeImageIndex]}
              alt={`${room.name} - Photo ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-950/90 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/40 backdrop-blur-sm">
              {room.size}
            </div>

            {images.length > 1 && (
              <>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-950/90 text-gold-300 text-[11px] font-bold border border-gold-500/40 backdrop-blur-sm flex items-center space-x-1">
                  <Images className="w-3 h-3 text-gold-400" />
                  <span>{activeImageIndex + 1} / {images.length}</span>
                </div>

                {/* Left / Right Nav Arrows */}
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all opacity-90 hover:opacity-100 shadow-md"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all opacity-90 hover:opacity-100 shadow-md"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Selector Strip */}
          {images.length > 1 && (
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
              {images.map((imgSrc, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-gold-500 ring-2 ring-gold-400/50 scale-105 shadow-md'
                      : 'border-gold-500/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgSrc} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Narrative Description */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-emerald-900">
            About this Accommodation
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            {room.fullDescription || room.description}
          </p>
        </div>

        {/* Room Features List per PDF */}
        <div className="bg-ivory-100 rounded-xl p-5 border border-gold-500/30">
          <h4 className="font-serif text-base font-bold text-emerald-900 mb-3 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold-600" />
            <span>Room Features & Amenities</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-charcoal-800">
            {(room.features || room.amenities || []).map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold-500/20">
          <div className="text-xs text-charcoal-700">
            <span className="font-bold text-emerald-900 block">{room.view}</span>
            <span>Relaxed countryside ambiance amidst the Aravalli Hills</span>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBookNow) onBookNow(room);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center space-x-2 border border-gold-500/50"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>RESERVE THIS ACCOMMODATION</span>
          </button>
        </div>

      </div>
    </Modal>
  );
}
