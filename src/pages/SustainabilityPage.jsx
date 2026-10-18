import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { sustainabilityData } from '../data/hotelData';
import { Sun, Leaf, Bird, Droplets, Recycle, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SustainabilityPage() {
  const getIcon = (icon) => {
    switch (icon) {
      case 'solar': return <Sun className="w-7 h-7 text-amber-500" />;
      case 'leaf': return <Leaf className="w-7 h-7 text-emerald-600" />;
      case 'wildlife': return <Bird className="w-7 h-7 text-teal-600" />;
      case 'water': return <Droplets className="w-7 h-7 text-cyan-600" />;
      case 'recycle': return <Recycle className="w-7 h-7 text-emerald-600" />;
      case 'community': return <Users className="w-7 h-7 text-gold-600" />;
      case 'shield': return <ShieldCheck className="w-7 h-7 text-amber-600" />;
      default: return <Leaf className="w-7 h-7 text-emerald-600" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Page Header (Internal tag removed per screenshot) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          SUSTAINABILITY AT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
          {sustainabilityData.intro}
        </p>
      </div>

      {/* IMPACTFUL NUMBERS - Shifted to top per annotated screenshot */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 border-2 border-gold-500/40 shadow-2xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-400">Quantifiable Impact</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
            IMPACTFUL NUMBERS
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-300">100%</div>
            <p className="text-xs text-ivory-200 font-semibold">Hot water generated through solar energy</p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-300">150</div>
            <p className="text-xs text-ivory-200 font-semibold">bighas Estate Left to nature</p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-300">100%</div>
            <p className="text-xs text-ivory-200 font-semibold">Local employed staff</p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-royal">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-300">100+</div>
            <p className="text-xs text-ivory-200 font-semibold">Trees Planted Annually</p>
          </div>
        </div>
      </div>

      {/* 7 Core Pillars (Pillar badges removed, titles made BIG per screenshot) */}
      <div className="space-y-8">
        {sustainabilityData.pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-royal space-y-5"
          >
            <div className="flex items-center space-x-4 border-b border-gold-500/20 pb-4">
              <div className="w-14 h-14 rounded-2xl bg-ivory-200 border border-gold-500/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                {getIcon(pillar.icon)}
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 tracking-tight">
                  {pillar.number}. {pillar.title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal-800">
              {pillar.items.map((item, i) => (
                <div key={i} className="flex items-start space-x-2.5 p-3 rounded-xl bg-ivory-200/60 border border-gold-500/15">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
