import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import HeritageStoryModal from './HeritageStoryModal';
import { Crown, Trees, Compass, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import heroPoolImg from '../../assets/images/hero-pool.jpg';
import { hotelInfo } from '../../data/hotelData';

export default function AboutSection() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-ivory-200 relative overflow-hidden">
      
      {/* Background Subtle Jali Pattern */}
      <div className="absolute inset-0 bg-jali-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-2">
            A Quiet Retreat in the Aravalli Hills
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight leading-tight">
            About Kesar Bagh
          </h2>
          <SectionHeader title="" align="center" className="my-2 mb-4" />
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-gold-500/40 text-emerald-800 text-xs font-bold uppercase tracking-widest">
              <Trees className="w-3.5 h-3.5 text-gold-600" />
              <span>150 Acres Returned to Nature</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900 leading-snug">
              A Family Story, Reimagined in Nature
            </h3>

            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed">
              Set amidst the scenic Aravalli Hills, <strong>Kesar Bagh</strong> is a peaceful countryside retreat spread across 150 acres of land that has gradually been returned to nature. Surrounded by native vegetation, seasonal water bodies and the landscapes of rural Rajasthan, the Bagh offers a chance to step away from the bustle of city life and experience the quiet beauty of the countryside.
            </p>

            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              The original Kesar Bagh once stood beside a lake in the Aravalli Hills before gradually falling into ruin. Inspired by a desire to preserve the traditions of his family and the region, the present Rao Sahib of Jojawar, <strong>Maharaj Singh Ji</strong>, recreated Kesar Bagh as it stands today—thoughtfully developed to blend with its natural surroundings.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-ivory-100 border border-gold-500/30 shadow-sm">
                <Trees className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="font-serif font-bold text-emerald-900 text-sm sm:text-base">The Land Comes First</h4>
                <p className="text-xs text-charcoal-700 mt-1">150 acres creating a thriving sanctuary where trees, birds and wildlife thrive.</p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-100 border border-gold-500/30 shadow-sm">
                <Crown className="w-5 h-5 text-gold-600 mb-2" />
                <h4 className="font-serif font-bold text-emerald-900 text-sm sm:text-base">Rooted in Jojawar</h4>
                <p className="text-xs text-charcoal-700 mt-1">Generations of heritage dating back to late 18th century garrison commanders.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2 border border-gold-500/50 group"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={hotelInfo.rawlaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-ivory-100 hover:bg-ivory-300 text-emerald-900 font-bold text-xs uppercase tracking-wider border border-gold-500/40 shadow-sm transition-all flex items-center space-x-2"
              >
                <span>Rawla Jojawar</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-600" />
              </a>
            </div>

          </div>

          {/* Right Column: Framed Image with Gold Seal */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gold-500/40 bg-ivory-100 p-2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
                <img
                  src={heroPoolImg}
                  alt="Kesar Bagh Countryside Sanctuary and Pool"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif text-lg sm:text-xl font-bold text-gold-200">Kesar Bagh Estate & Pool</p>
                  <p className="text-xs text-ivory-200 font-light">Surrounded by scenic Aravalli hills, trees & native wildlife</p>
                </div>
              </div>
            </div>

            {/* Floating Estate Badge */}
            <div className="absolute -bottom-5 -left-4 sm:bottom-4 sm:-left-6 bg-emerald-900 text-gold-300 p-4 rounded-xl shadow-2xl border-2 border-gold-500 flex items-center space-x-3.5 z-20">
              <div className="w-11 h-11 rounded-full bg-emerald-800 border border-gold-400/60 flex items-center justify-center text-gold-300">
                <Trees className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">COUNTRYSIDE RETREAT</p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-ivory-100 tracking-wider">150 ACRES</p>
                <p className="text-[10px] text-ivory-300">Returned to Nature</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Heritage Story Full Modal */}
      <HeritageStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </section>
  );
}
