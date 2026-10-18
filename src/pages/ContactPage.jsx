import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import BookingCTA from '../components/contact/BookingCTA';
import { hotelInfo } from '../data/hotelData';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function ContactPage({ onOpenBooking, onOpenContact }) {
  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Page Header (Internal tag and subtitle removed per screenshot) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          CONTACT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
      </div>

      {/* Main Contact CTA Section */}
      <BookingCTA 
        onOpenBooking={onOpenBooking}
        onOpenContact={onOpenContact}
      />

      {/* Enlarged 3 Contact Cards ("Big" per screenshot annotation) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Card 1: Estate Address */}
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-10 border-2 border-gold-500/35 text-center flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center shadow-royal border border-gold-500/40">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" />
            </div>
            <h3 className="font-serif font-bold text-emerald-950 text-xl sm:text-2xl">
              Estate Address
            </h3>
            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
              {hotelInfo.address}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={hotelInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all border border-gold-500/30"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4 text-gold-400" />
            </a>
          </div>
        </div>

        {/* Card 2: Phone & WhatsApp */}
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-10 border-2 border-gold-500/35 text-center flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center shadow-royal border border-gold-500/40">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" />
            </div>
            <h3 className="font-serif font-bold text-emerald-950 text-xl sm:text-2xl">
              Phone & WhatsApp
            </h3>
            <div className="space-y-1.5 text-base sm:text-lg text-emerald-950 font-bold">
              {hotelInfo.phones.map((phone, idx) => (
                <p key={idx}>
                  <a href={phone.link} className="hover:text-emerald-700 transition-colors">
                    {phone.display}
                  </a>
                </p>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 font-medium">
              Available 24/7 for Reservations & Inquiries
            </p>
          </div>

          <div className="pt-2">
            <a
              href={hotelInfo.phones[0].link}
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all border border-gold-500/30"
            >
              <span>Call Now</span>
              <Phone className="w-4 h-4 text-gold-400" />
            </a>
          </div>
        </div>

        {/* Card 3: Direct Email */}
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-10 border-2 border-gold-500/35 text-center flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center shadow-royal border border-gold-500/40">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-gold-400" />
            </div>
            <h3 className="font-serif font-bold text-emerald-950 text-xl sm:text-2xl">
              Direct Email
            </h3>
            <div className="text-base sm:text-lg text-emerald-950 font-bold">
              <p>
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-emerald-700 transition-colors">
                  {hotelInfo.email}
                </a>
              </p>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 font-medium">
              Inquiries answered promptly within 24h
            </p>
          </div>

          <div className="pt-2">
            <a
              href={`mailto:${hotelInfo.email}`}
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all border border-gold-500/30"
            >
              <span>Send Email</span>
              <Mail className="w-4 h-4 text-gold-400" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
