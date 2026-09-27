import React from 'react';
import { Sparkles, ArrowRight, Eye, CheckCircle } from 'lucide-react';

export default function RoomCard({ room, onKnowMore, onBookNow }) {
  return (
    <div className="bg-ivory-100 rounded-2xl overflow-hidden shadow-royal hover:shadow-gold border border-gold-500/30 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Room Image Container */}
      <div className="relative aspect-[16/11] overflow-hidden bg-emerald-950">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-60" />

        {/* Tag Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-950/90 text-gold-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-gold-500/40 backdrop-blur-sm">
          {room.tag}
        </div>

        {/* Size Badge */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-emerald-950/90 text-ivory-200 text-[11px] font-semibold backdrop-blur-sm">
          {room.size}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="text-[11px] text-emerald-800 font-bold uppercase tracking-widest mb-1">
            {room.countText || room.category}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
            {room.name}
          </h3>

          <p className="text-xs text-charcoal-700 mt-2.5 line-clamp-3 leading-relaxed">
            {room.description}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-1.5 pt-2 border-t border-gold-500/20">
          <div className="text-[11px] font-semibold text-emerald-900 flex items-center space-x-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
            <span className="truncate">{room.features ? room.features[1] : 'Private Balcony / Terrace'}</span>
          </div>
          <div className="text-[11px] font-semibold text-emerald-900 flex items-center space-x-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
            <span className="truncate">{room.features ? room.features[2] : 'Spacious Bathroom'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-gold-500/20 flex items-center justify-between gap-2">
          <button
            onClick={() => onKnowMore(room)}
            className="px-4 py-2.5 rounded-lg bg-ivory-200 hover:bg-ivory-300 text-emerald-900 font-bold text-xs uppercase tracking-wider border border-gold-500/30 transition-colors flex items-center space-x-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-gold-700" />
            <span>KNOW MORE</span>
          </button>

          <button
            onClick={() => onBookNow(room)}
            className="px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-gold-500/50 shadow-md transition-all flex items-center space-x-1.5"
          >
            <span>BOOK NOW</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

      </div>

    </div>
  );
}
