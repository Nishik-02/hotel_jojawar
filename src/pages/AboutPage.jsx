import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { aboutData } from '../data/hotelData';
import { ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Page Header (Internal tag removed per screenshot) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          ABOUT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="font-serif italic text-lg sm:text-xl text-gold-700">
          A Family Story, Reimagined in Nature
        </p>
      </div>

      {/* Banner - Changed picture to majestic estate view without obstructing overlays */}
      <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border-2 border-gold-500/40 shadow-royal">
        <img 
          src={aboutData.bannerImage} 
          alt="Kesar Bagh Heritage Manor" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 6 Structured Content Blocks - Each with its matching image from Page 2 folder */}
      <div className="space-y-10 text-charcoal-800">
        {aboutData.sections.map((sec, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div 
              key={sec.id} 
              className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-sm"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-500 inline-block shrink-0"></span>
                    <span>{sec.heading}</span>
                  </h2>
                  <div className="space-y-3 text-sm sm:text-base text-charcoal-800 leading-relaxed">
                    {sec.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {sec.linkUrl && (
                    <div className="pt-2">
                      <a
                        href={sec.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                      >
                        <span>{sec.linkText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Matching Image Side */}
                <div className={`lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-gold-500/40 shadow-md ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={sec.image} 
                    alt={sec.heading} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
