import React from 'react';
import { Calendar, PhoneCall, Sparkles, Heart } from 'lucide-react';
import { hotelInfo, homeContent } from '../../data/hotelData';

export default function BookingCTA({ onOpenBooking, onOpenContact }) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-emerald-900 text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gold-jali opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/50 text-gold-300 text-xs uppercase tracking-[0.25em] font-semibold">
          <Heart className="w-3.5 h-3.5 text-gold-400" />
          <span>Plan Your Stay</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ivory-100 tracking-tight leading-tight">
          Come Away to the Quiet
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-ivory-200/95 max-w-2xl mx-auto leading-relaxed font-light">
          {homeContent.comeAwayToQuiet.desc}
        </p>

        <p className="font-serif italic text-gold-200 text-base sm:text-xl font-light">
          "Come for the landscape. Stay for the tranquillity. Leave with a deeper connection to Rajasthan."
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-[0.2em] shadow-royal hover:shadow-gold transition-all duration-300 flex items-center justify-center space-x-2 border border-gold-300"
          >
            <Calendar className="w-4 h-4 text-emerald-950" />
            <span>BOOK YOUR STAY NOW</span>
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-950 text-ivory-200 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] border border-gold-500/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            <span>CONTACT CONCIERGE</span>
          </button>
        </div>

        {/* Quick Contact Line */}
        <div className="pt-4 text-xs text-ivory-300 space-x-4">
          <span>Call: <a href={hotelInfo.phones[0].link} className="text-gold-300 font-bold hover:underline">{hotelInfo.phones[0].display}</a></span>
          <span>•</span>
          <span>Email: <a href={`mailto:${hotelInfo.email}`} className="text-gold-300 font-bold hover:underline">{hotelInfo.email}</a></span>
        </div>

      </div>
    </section>
  );
}
