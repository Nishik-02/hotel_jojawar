import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import LightboxModal from '../components/gallery/LightboxModal';
import { aboutData, hotelInfo, lobbyData } from '../data/hotelData';
import { Crown, Trees, ExternalLink, ShieldCheck, Heart, Sparkles, Feather, ChevronLeft, ChevronRight, Maximize2, Armchair } from 'lucide-react';
import heroPoolImg from '../assets/images/hero-pool.jpg';

export default function AboutPage() {
  const [activeLobbyIndex, setActiveLobbyIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrevLobby = () => {
    setActiveLobbyIndex((prev) => (prev === 0 ? lobbyData.photos.length - 1 : prev - 1));
  };

  const handleNextLobby = () => {
    setActiveLobbyIndex((prev) => (prev === lobbyData.photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-700">
          PAGE 2 – ABOUT US
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          ABOUT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="font-serif italic text-lg sm:text-xl text-gold-700">
          A Family Story, Reimagined in Nature
        </p>
      </div>

      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border-2 border-gold-500/40 shadow-royal">
        <img src={heroPoolImg} alt="Kesar Bagh Heritage Manor" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-xs uppercase tracking-widest text-gold-300 font-bold">150-Acre Countryside Retreat</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">The Sanctuary in the Aravalli Hills</h2>
        </div>
      </div>

      {/* Structured Sections (Page 5 & 6 of PDF) */}
      <div className="space-y-8 text-charcoal-800">
        {aboutData.sections.map((sec) => (
          <div key={sec.id} className="bg-ivory-100 rounded-2xl p-6 sm:p-10 border border-gold-500/30 shadow-sm space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500 inline-block"></span>
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
        ))}
      </div>

      {/* 5. The Lobby & Welcoming Heritage Lounges Showcase */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <div className="border-b border-gold-500/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 flex items-center space-x-1.5">
              <Armchair className="w-3.5 h-3.5 text-gold-600" />
              <span>Estate Architecture & Interiors</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 mt-1">
              {lobbyData.title}
            </h2>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-900 text-gold-300 text-xs font-bold font-mono self-start sm:self-auto">
            5 Curated Spaces
          </span>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          {lobbyData.description}
        </p>

        {/* Featured Lobby Display with Overlays */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-gold-500/40 shadow-royal bg-emerald-950 group">
          <img
            src={lobbyData.photos[activeLobbyIndex].src}
            alt={lobbyData.photos[activeLobbyIndex].title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full bg-emerald-950/90 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/40 backdrop-blur-sm shadow-md">
              {lobbyData.photos[activeLobbyIndex].badge}
            </span>
          </div>

          {/* Fullscreen Trigger */}
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="px-3 py-1.5 rounded-full bg-emerald-950/90 hover:bg-emerald-900 text-gold-300 text-xs font-bold border border-gold-500/40 backdrop-blur-sm shadow-md flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fullscreen</span>
            </button>
          </div>

          {/* Bottom Title & Caption */}
          <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-gold-100 drop-shadow-sm">
              {lobbyData.photos[activeLobbyIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200/90 mt-1 max-w-2xl drop-shadow-sm font-light">
              {lobbyData.photos[activeLobbyIndex].caption}
            </p>
          </div>

          {/* Prev / Next Arrows */}
          <button
            type="button"
            onClick={handlePrevLobby}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all opacity-85 hover:opacity-100 shadow-lg cursor-pointer"
            aria-label="Previous space"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={handleNextLobby}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all opacity-85 hover:opacity-100 shadow-lg cursor-pointer"
            aria-label="Next space"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* 5 Thumbnails Row */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3 pt-1">
          {lobbyData.photos.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActiveLobbyIndex(idx)}
              className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all duration-200 cursor-pointer ${
                activeLobbyIndex === idx
                  ? 'border-gold-500 ring-2 ring-gold-400/50 scale-105 shadow-md'
                  : 'border-gold-500/30 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-emerald-950/20" />
              <span className="hidden sm:block absolute bottom-1 inset-x-1 text-[9px] font-bold text-gold-200 truncate bg-emerald-950/85 px-1 py-0.5 rounded text-center">
                {photo.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox for Fullscreen View */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        currentImage={lobbyData.photos[activeLobbyIndex]}
        currentIndex={activeLobbyIndex}
        totalImages={lobbyData.photos.length}
        onPrev={handlePrevLobby}
        onNext={handleNextLobby}
      />

    </div>
  );
}

