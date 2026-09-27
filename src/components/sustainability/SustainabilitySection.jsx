import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { sustainabilityData } from '../../data/hotelData';
import { 
  Sun, 
  Leaf, 
  Trees, 
  Droplets, 
  Recycle, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Flame,
  Bird
} from 'lucide-react';

export default function SustainabilitySection() {
  const [activePillar, setActivePillar] = useState(1);

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'solar':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'leaf':
        return <Leaf className="w-5 h-5 text-emerald-400" />;
      case 'wildlife':
        return <Bird className="w-5 h-5 text-teal-400" />;
      case 'water':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'recycle':
        return <Recycle className="w-5 h-5 text-emerald-400" />;
      case 'community':
        return <Users className="w-5 h-5 text-gold-400" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-400" />;
    }
  };

  const currentPillarData = sustainabilityData.pillars.find((p) => p.id === activePillar) || sustainabilityData.pillars[0];

  return (
    <section id="sustainability" className="py-16 md:py-24 bg-emerald-950 text-white relative overflow-hidden">
      
      {/* Background Subtle Leaf/Jali Motif */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-800/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-900/90 border border-gold-500/40 text-gold-300 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ecological Stewardship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-100 tracking-tight leading-tight">
            A Stay with a Lighter Footprint
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto my-4" />
          <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
            Kesar Bagh is more than a place to stay; it is a landscape that has been given the opportunity to breathe and regenerate. Much of the 150-acre estate, once used as farmland, has gradually been allowed to return to nature.
          </p>
        </div>

        {/* Impactful Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {sustainabilityData.impactfulNumbers.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-emerald-900/60 border border-gold-500/30 rounded-2xl p-5 sm:p-6 text-center shadow-royal backdrop-blur-sm hover:border-gold-500/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-300 mb-1">
                {stat.value}
              </div>
              <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-ivory-100 mb-1.5">
                {stat.label}
              </div>
              <p className="text-[11px] sm:text-xs text-ivory-300/80 font-light line-clamp-2">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative Box */}
        <div className="bg-emerald-900/40 border border-emerald-700/50 rounded-2xl p-6 sm:p-8 mb-14 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
            <p>
              Seasonal water bodies, native vegetation and the surrounding Aravalli countryside bring a constantly changing character to the landscape. With the arrival of the monsoon, the land takes on new life, while the changing seasons bring different colours, sounds and wildlife to the estate.
            </p>
            <p>
              For us, sustainability is not simply about reducing our footprint. It is about creating a place where hospitality, nature and the landscape can exist together — and where future generations can continue to experience the beauty of the Aravallis.
            </p>
          </div>
        </div>

        {/* 7 Core Sustainability Pillars */}
        <div className="space-y-6">
          <div className="text-center sm:text-left mb-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">7 Core Pillars</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
              Our Environmental & Community Practices
            </h3>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 pb-2">
            {sustainabilityData.pillars.map((pillar) => {
              const isSelected = pillar.id === activePillar;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-gold-500 text-emerald-950 font-bold border-gold-400 shadow-gold'
                      : 'bg-emerald-900/60 hover:bg-emerald-800/80 text-ivory-200 border-gold-500/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-950' : 'text-gold-400'}`}>
                      0{pillar.number}
                    </span>
                    <div className="scale-90">
                      {getPillarIcon(pillar.icon)}
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold leading-tight line-clamp-2">
                    {pillar.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Pillar Content Card */}
          <div className="bg-emerald-900/90 border-2 border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-gold-500/30">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-gold-400/50 flex items-center justify-center">
                  {getPillarIcon(currentPillarData.icon)}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                    Pillar 0{currentPillarData.number} • {currentPillarData.badge}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100">
                    {currentPillarData.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Pillar Action Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {currentPillarData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 hover:border-gold-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-ivory-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
