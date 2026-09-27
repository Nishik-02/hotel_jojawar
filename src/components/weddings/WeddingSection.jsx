import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import WeddingInquiryModal from './WeddingInquiryModal';
import { Heart, Sparkles, Crown, Music, Utensils, Calendar } from 'lucide-react';

export default function WeddingSection() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const weddingFeatures = [
    {
      title: "Royal Courtyard Venues",
      desc: "Accommodates up to 250-300 guests under starlit skies surrounded by illuminated sandstone arches.",
      icon: Crown
    },
    {
      title: "Pedigreed Equine Baraat",
      desc: "Traditional Rajput groom procession with ornate Marwari warhorses, royal flags, and dholak drummers.",
      icon: Sparkles
    },
    {
      title: "Authentic Folk Orchestras",
      desc: "Live Shehnai, Manganiyar vocalists, and Kalbelia dancers adding royal glamour to every ritual.",
      icon: Music
    },
    {
      title: "Bespoke Royal Banquets",
      desc: "Authentic multi-course Mewari & Marwari feasts cooked in heirloom brass deghs by veteran palace cooks.",
      icon: Utensils
    }
  ];

  return (
    <section id="weddings" className="relative py-20 md:py-28 overflow-hidden bg-emerald-950 text-white">
      
      {/* Background Image with Layered Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-2">
            Destination Weddings & Celebrations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-100 tracking-tight leading-tight">
            Celebrate Your Special Moments
          </h2>
          <SectionHeader title="" align="center" light={true} className="my-2 mb-4" />
          <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
            Create unforgettable memories surrounded by the timeless charm of Rajasthan. From intimate celebrations to grand royal weddings, our heritage property provides a unique setting for your special occasion.
          </p>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {weddingFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-emerald-900/80 border border-gold-500/30 backdrop-blur-md hover:border-gold-400 transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-800 border border-gold-400 flex items-center justify-center text-gold-300 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-gold-200 mb-1">
                  {feat.title}
                </h4>
                <p className="text-xs text-ivory-300/80 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Card with CTA Buttons */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-emerald-900/90 via-emerald-800/90 to-emerald-900/90 border-2 border-gold-500/40 shadow-2xl backdrop-blur-md text-center space-y-5">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-950/80 text-gold-300 text-xs font-bold uppercase tracking-widest border border-gold-500/40">
            Exclusive Palace Buyout Available
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 leading-tight">
            Celebrate in the Timeless Landscapes of Kesar Bagh & Jojawar
          </h3>

          <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed max-w-xl mx-auto">
            From pre-wedding mehendi brunches by the courtyard pool to grand candlelit sangeet nights and sacred pheras under historic jharokhas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-[0.2em] shadow-gold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-emerald-950" />
              <span>PLAN YOUR EVENT</span>
            </button>

            <a
              href={`https://wa.me/919119169956?text=${encodeURIComponent("Hello, I would like to inquire about hosting a celebration/event at Kesar Bagh.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-lg bg-emerald-950/70 hover:bg-emerald-950 text-ivory-100 font-semibold text-xs uppercase tracking-[0.2em] border border-gold-500/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Heart className="w-4 h-4 text-gold-400" />
              <span>TALK TO WEDDING CONCIERGE</span>
            </a>
          </div>
        </div>

      </div>

      {/* Wedding RFP Modal */}
      <WeddingInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </section>
  );
}
