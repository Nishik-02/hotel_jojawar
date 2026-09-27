import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { locationData, hotelInfo } from '../data/hotelData';
import { MapPin, Navigation, Plane, Train, Compass, Car } from 'lucide-react';

export default function LocationPage() {
  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-700">
          PAGE 6 – LOCATION
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          LOCATION
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-emerald-900">
          {locationData.heading}
        </h2>
        <p className="font-serif italic text-base text-gold-700 font-normal">
          {locationData.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
          {locationData.description}
        </p>
      </div>

      {/* How to Reach Kesar Bagh (Page 20 of PDF) */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <div className="border-b border-gold-500/20 pb-3">
          <h3 className="font-serif text-2xl font-bold text-emerald-950">
            How to Reach Kesar Bagh
          </h3>
          <p className="text-xs text-charcoal-700 mt-1">
            {locationData.howToReach.intro}
          </p>
        </div>

        {/* By Air */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold text-emerald-900 flex items-center space-x-2">
            <Plane className="w-4 h-4 text-gold-600" />
            <span>By Air</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {locationData.howToReach.air.map((air, i) => (
              <div key={i} className="p-4 rounded-2xl bg-ivory-200 border border-gold-500/25 space-y-1.5">
                <div className="font-bold text-sm text-emerald-950">{air.name}</div>
                <div className="text-xs font-mono font-bold text-gold-700">{air.distance}</div>
                <p className="text-xs text-charcoal-700 leading-snug">{air.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* By Rail */}
        <div className="space-y-4 pt-2">
          <h4 className="font-serif text-lg font-bold text-emerald-900 flex items-center space-x-2">
            <Train className="w-4 h-4 text-gold-600" />
            <span>By Rail</span>
          </h4>
          <div className="p-4 rounded-2xl bg-ivory-200 border border-gold-500/25 space-y-1.5 max-w-xl">
            <div className="font-bold text-sm text-emerald-950">{locationData.howToReach.rail[0].name}</div>
            <div className="text-xs font-mono font-bold text-gold-700">{locationData.howToReach.rail[0].distance}</div>
            <p className="text-xs text-charcoal-700 leading-snug">{locationData.howToReach.rail[0].desc}</p>
          </div>
        </div>
      </div>

      {/* Explore Rajasthan from Kesar Bagh (Page 21 of PDF) */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <div className="border-b border-gold-500/20 pb-3">
          <h3 className="font-serif text-2xl font-bold text-emerald-950">
            Explore Rajasthan from Kesar Bagh
          </h3>
          <p className="text-xs text-charcoal-700 mt-1">
            Kesar Bagh's location in the Aravalli countryside makes it possible to combine a peaceful stay in nature with visits to some of Rajasthan's best-known heritage and cultural destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locationData.excursions.map((exc, i) => (
            <div key={i} className="p-4 rounded-2xl bg-ivory-200 border border-gold-500/20 space-y-1.5">
              <div className="flex justify-between items-center">
                <h4 className="font-serif font-bold text-sm text-emerald-950">{exc.name}</h4>
                <span className="px-2 py-0.5 rounded bg-emerald-900 text-gold-300 font-mono text-[10px] font-bold">
                  {exc.distance}
                </span>
              </div>
              <p className="text-xs text-charcoal-700 leading-snug font-light">{exc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Location & Directions (Page 22 of PDF) */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <h3 className="font-serif text-2xl font-bold text-emerald-950">
          Our Location
        </h3>

        <div className="p-4 rounded-2xl bg-ivory-200 border border-gold-500/30 space-y-1 text-sm text-charcoal-900 font-medium">
          <p className="font-bold text-emerald-950">Kesar Bagh</p>
          <p>Jojawar, Marwar Junction</p>
          <p>Pali District, Rajasthan – 306022</p>
          <p>India</p>
        </div>

        {/* Interactive Map Embed */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border-2 border-gold-500/40 shadow-md">
          <iframe
            title="Kesar Bagh Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.84852924376!2d73.53580556748464!3d25.688329712711655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396839352e424269%3A0x6b3a2416b2512f45!2sJojawar%2C%20Rajasthan%20306501!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        <div className="flex justify-center sm:justify-start">
          <a
            href={locationData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all"
          >
            <Navigation className="w-4 h-4 text-gold-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* A Gateway to the Aravallis (Page 22 of PDF) */}
        <div className="pt-4 border-t border-gold-500/20 space-y-2">
          <h4 className="font-serif text-xl font-bold text-emerald-950">
            {locationData.gatewayText.heading}
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            {locationData.gatewayText.p1}
          </p>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            {locationData.gatewayText.p2}
          </p>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            {locationData.gatewayText.p3}
          </p>
        </div>
      </div>

    </div>
  );
}
