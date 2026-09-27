import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

export default function ActivityCard({ activity, onExplore }) {
  const renderIcon = () => {
    switch (activity.type) {
      case 'town':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M40 28 L56 28 L56 50 L75 50 L75 68 L25 68 L25 40 L40 40 Z" fill="currentColor" />
            <circle cx="34" cy="50" r="4" fill="#0E3024" />
            <circle cx="48" cy="38" r="3" fill="#0E3024" />
            <circle cx="48" cy="46" r="3" fill="#0E3024" />
            <circle cx="64" cy="58" r="3" fill="#0E3024" />
            <path d="M48 68 Q52 78 40 88 L52 88 Q62 78 58 68 Z" fill="currentColor" />
          </svg>
        );
      case 'jeep':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M30 45 L45 32 L70 32 L78 45 L85 48 L85 62 L78 62 L78 60 L32 60 L32 62 L22 62 L22 52 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            <circle cx="36" cy="62" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="68" cy="62" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M45 35 L45 45 L68 45 L68 35 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        );
      case 'train':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M25 45 L55 45 L55 35 L75 35 L75 65 L25 65 Z" fill="currentColor" />
            <circle cx="35" cy="72" r="6" fill="currentColor" />
            <circle cx="50" cy="72" r="6" fill="currentColor" />
            <circle cx="65" cy="72" r="6" fill="currentColor" />
          </svg>
        );
      case 'horse':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M35 70 C35 55 42 42 48 35 C46 30 50 22 55 20 C58 20 62 25 60 30 C65 32 70 38 68 45 C64 45 60 42 58 46 C55 52 56 62 55 70 Z" fill="currentColor" />
          </svg>
        );
      case 'jungle':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 15 L35 45 L45 45 L30 70 L70 70 L55 45 L65 45 Z" fill="currentColor" />
          </svg>
        );
      case 'bird':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M20 50 Q40 20 60 45 Q75 35 85 45 Q65 65 45 55 Q35 70 20 50 Z" fill="currentColor" />
          </svg>
        );
      case 'camera':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <rect x="20" y="35" width="60" height="40" rx="6" />
            <circle cx="50" cy="55" r="12" />
            <path d="M38 35 L44 26 L56 26 L62 35" />
          </svg>
        );
      case 'culinary':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M30 40 L70 40 Q70 70 50 70 Q30 70 30 40 Z" />
            <line x1="25" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="4" />
          </svg>
        );
      case 'fort':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <path d="M20 75 L20 40 L30 40 L30 50 L40 50 L40 35 L60 35 L60 50 L70 50 L70 40 L80 40 L80 75 Z" />
          </svg>
        );
      case 'vintage':
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <path d="M20 55 L35 40 L65 40 L80 55 L85 62 L15 62 Z" />
            <circle cx="32" cy="65" r="7" fill="currentColor" />
            <circle cx="68" cy="65" r="7" fill="currentColor" />
          </svg>
        );
      default:
        return (
          <svg className="w-10 h-10 text-gold-400 mx-auto" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="25" />
          </svg>
        );
    }
  };

  return (
    <div
      onClick={() => onExplore(activity)}
      className="bg-emerald-950 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-royal hover:shadow-gold border border-gold-500/35 hover:border-gold-500/80 group min-h-[220px] relative overflow-hidden"
    >
      {/* Background Ornament */}
      <div className="absolute inset-0 bg-gold-jali opacity-5 group-hover:opacity-10 transition-opacity" />

      {/* Card Header: Icon & Duration */}
      <div className="flex items-start justify-between relative z-10 mb-3">
        <div className="p-2 rounded-xl bg-emerald-900 border border-gold-500/30 group-hover:border-gold-400/80 transition-colors">
          {renderIcon()}
        </div>
        <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-900/90 text-gold-300 text-[10px] font-bold tracking-wider border border-gold-500/30">
          <Clock className="w-3 h-3 text-gold-400" />
          <span>{activity.duration}</span>
        </div>
      </div>

      {/* Activity Details */}
      <div className="space-y-1.5 relative z-10">
        <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block">
          {activity.category}
        </span>
        <h3 className="font-serif font-bold text-base sm:text-lg tracking-wide text-ivory-100 group-hover:text-gold-200 transition-colors">
          {activity.title}
        </h3>
        <p className="text-xs text-ivory-300/80 line-clamp-2 leading-relaxed font-light">
          {activity.shortDesc}
        </p>
      </div>

      {/* Card Footer Link */}
      <div className="pt-3 mt-2 border-t border-emerald-800/80 flex items-center justify-between text-gold-300 text-[11px] font-bold uppercase tracking-wider relative z-10 group-hover:text-gold-200">
        <span>Explore Details</span>
        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
