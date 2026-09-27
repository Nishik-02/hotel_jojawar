import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { sustainabilityData, outdoorData } from '../data/hotelData';
import LightboxModal from '../components/gallery/LightboxModal';
import { Sun, Leaf, Bird, Droplets, Recycle, Users, ShieldCheck, CheckCircle2, Trees, Maximize2, Compass } from 'lucide-react';

export default function SustainabilityPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const getIcon = (icon) => {
    switch (icon) {
      case 'solar': return <Sun className="w-6 h-6 text-amber-500" />;
      case 'leaf': return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'wildlife': return <Bird className="w-6 h-6 text-teal-600" />;
      case 'water': return <Droplets className="w-6 h-6 text-cyan-600" />;
      case 'recycle': return <Recycle className="w-6 h-6 text-emerald-600" />;
      case 'community': return <Users className="w-6 h-6 text-gold-600" />;
      case 'shield': return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      default: return <Leaf className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-700">
          PAGE 5 – SUSTAINABILITY
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          SUSTAINABILITY AT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
          {sustainabilityData.intro}
        </p>
      </div>

      {/* 7 Core Pillars (Pages 16–19 of PDF) */}
      <div className="space-y-8">
        {sustainabilityData.pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-royal space-y-4"
          >
            <div className="flex items-center space-x-4 border-b border-gold-500/20 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-ivory-200 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                {getIcon(pillar.icon)}
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-gold-700">
                  Pillar 0{pillar.number}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-emerald-950">
                  {pillar.number}. {pillar.title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal-800">
              {pillar.items.map((item, i) => (
                <div key={i} className="flex items-start space-x-2.5 p-2 rounded-lg bg-ivory-200/60 border border-gold-500/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 150-ACRE OUTDOOR SANCTUARY & LANDSCAPES SHOWCASE */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-800 flex items-center justify-center space-x-2">
            <Trees className="w-4 h-4 text-emerald-700" />
            <span>Pillars 02 & 03 in Harmony</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-emerald-950">
            The 150-Acre Outdoor Sanctuary
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            Regenerated farmland returned to native nature — from lakeside chhatris and sunset reflections to traditional safari trails and royal open-air terraces.
          </p>
        </div>

        {/* Outdoor Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outdoorData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group bg-ivory-100 rounded-2xl overflow-hidden border border-gold-500/30 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center space-x-1 text-xs text-gold-300 font-semibold">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/85 text-gold-300 border border-gold-500/40 backdrop-blur-xs">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-700 leading-relaxed mt-1.5 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-gold-500/20 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                  <span>Explore Landscape</span>
                  <Maximize2 className="w-3.5 h-3.5 text-gold-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACTFUL NUMBERS (Page 19 of PDF) */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-12 border-2 border-gold-500/40 shadow-2xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-400">Quantifiable Impact</span>
          <h2 className="font-serif text-3xl font-bold text-ivory-100">
            IMPACTFUL NUMBERS
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl font-bold text-gold-300">100%</div>
            <p className="text-xs text-ivory-200 font-semibold">Hot water generated through solar energy</p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl font-bold text-gold-300">150</div>
            <p className="text-xs text-ivory-200 font-semibold">bighas Estate Left to nature</p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl font-bold text-gold-300">100%</div>
            <p className="text-xs text-ivory-200 font-semibold">Local employed staff</p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl font-bold text-gold-300">100+</div>
            <p className="text-xs text-ivory-200 font-semibold">Trees Planted Annually</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          images={outdoorData.map((o) => ({
            src: o.image,
            title: o.title,
            caption: o.description,
            category: "OUTDOORS"
          }))}
          currentIndex={lightboxIndex}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? outdoorData.length - 1 : prev - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === outdoorData.length - 1 ? 0 : prev + 1))}
        />
      )}

    </div>
  );
}
