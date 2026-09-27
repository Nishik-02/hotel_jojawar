import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import BookingCTA from '../components/contact/BookingCTA';
import { hotelInfo } from '../data/hotelData';
import { MapPin, Phone, Mail, Navigation, ExternalLink, Calendar, Heart } from 'lucide-react';

export default function ContactPage({ onOpenBooking, onOpenContact }) {
  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-700">
          PAGE 8 – CONTACT
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          CONTACT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-xl mx-auto">
          We welcome you to get in touch with our team for reservations, personalized countryside itineraries, train safaris, and inquiries.
        </p>
      </div>

      {/* Main Contact CTA Section */}
      <BookingCTA 
        onOpenBooking={onOpenBooking}
        onOpenContact={onOpenContact}
      />

      {/* Detailed Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-ivory-100 rounded-2xl p-6 border border-gold-500/30 text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-emerald-950 text-base">Estate Address</h3>
          <p className="text-xs text-charcoal-700 leading-relaxed">
            {hotelInfo.address}
          </p>
          <a
            href={hotelInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-emerald-800 font-bold underline hover:text-emerald-600 pt-1"
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="bg-ivory-100 rounded-2xl p-6 border border-gold-500/30 text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-emerald-950 text-base">Phone & WhatsApp</h3>
          <div className="space-y-1 text-xs text-charcoal-700 font-semibold">
            {hotelInfo.phones.map((phone, idx) => (
              <p key={idx}><a href={phone.link} className="hover:text-emerald-800">{phone.display}</a></p>
            ))}
          </div>
          <p className="text-[11px] text-charcoal-500">Available 24/7 for Reservations</p>
        </div>

        <div className="bg-ivory-100 rounded-2xl p-6 border border-gold-500/30 text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-emerald-950 text-base">Direct Email</h3>
          <div className="space-y-1 text-xs text-charcoal-700 font-semibold">
            <p><a href={`mailto:${hotelInfo.email}`} className="hover:text-emerald-800">{hotelInfo.email}</a></p>
          </div>
          <p className="text-[11px] text-charcoal-500">Inquiries answered within 24h</p>
        </div>
      </div>

    </div>
  );
}
