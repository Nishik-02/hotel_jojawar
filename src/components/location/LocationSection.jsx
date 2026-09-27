import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { hotelInfo, locationData } from '../../data/hotelData';
import { MapPin, Navigation, Plane, Train, Compass, Car, Map, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-ivory-300 relative overflow-hidden">
      
      {/* Background Subtle Jali */}
      <div className="absolute inset-0 bg-jali-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-2">
            In the Heart of the Aravallis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight leading-tight">
            Location & Access
          </h2>
          <SectionHeader title="" align="center" className="my-2 mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            {locationData.description}
          </p>
        </div>

        {/* Two Columns: Map & Connectivity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Interactive Map Embed & Address */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden shadow-royal border-2 border-gold-500/40 bg-emerald-950 aspect-[16/11] w-full">
              <iframe
                title="Kesar Bagh Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.84852924376!2d73.53580556748464!3d25.688329712711655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396839352e424269%3A0x6b3a2416b2512f45!2sJojawar%2C%20Rajasthan%20306501!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter saturate-90 contrast-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Badge */}
              <div className="absolute top-3 left-3 z-10 p-3 rounded-xl bg-emerald-950/95 text-white border border-gold-500/40 shadow-xl backdrop-blur-md max-w-xs">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gold-500 text-emerald-950 flex items-center justify-center font-bold text-xs">
                    KB
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm text-gold-200">Kesar Bagh</h5>
                    <p className="text-[10px] text-ivory-200">Jojawar, Marwar Junction (Rajasthan)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & "GET DIRECTIONS" Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-ivory-100 border border-gold-500/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-3 text-charcoal-900">
                <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-emerald-950 block">Kesar Bagh</span>
                  <span className="text-[11px] sm:text-xs text-charcoal-700">{hotelInfo.address}</span>
                </div>
              </div>

              <a
                href={hotelInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center space-x-2 border border-gold-500/50 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5 text-gold-400" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Right Column: How to Reach by Air & Rail */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="bg-ivory-100 rounded-2xl p-6 shadow-royal border border-gold-500/30 h-full flex flex-col justify-between space-y-4">
              
              <div>
                <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-gold-500/20">
                  <Compass className="w-5 h-5 text-gold-600" />
                  <h3 className="font-serif font-bold text-lg text-emerald-900">
                    How to Reach Kesar Bagh
                  </h3>
                </div>

                {/* Airports */}
                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-1.5">
                    <Plane className="w-3.5 h-3.5 text-gold-600" />
                    <span>By Air</span>
                  </span>
                  {locationData.howToReach.air.map((air, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-ivory-200/90 border border-gold-500/20 text-xs">
                      <div className="flex items-center justify-between font-bold text-emerald-950">
                        <span>{air.name}</span>
                        <span className="text-gold-700 text-[11px]">{air.distance}</span>
                      </div>
                      <p className="text-[10px] text-charcoal-700 mt-0.5">{air.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Rail */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-1.5">
                    <Train className="w-3.5 h-3.5 text-gold-600" />
                    <span>By Rail</span>
                  </span>
                  {locationData.howToReach.rail.map((rail, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-ivory-200/90 border border-gold-500/20 text-xs">
                      <div className="flex items-center justify-between font-bold text-emerald-950">
                        <span>{rail.name}</span>
                        <span className="text-gold-700 text-[11px]">{rail.distance}</span>
                      </div>
                      <p className="text-[10px] text-charcoal-700 mt-0.5">{rail.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chauffeur Service Note */}
              <div className="pt-3 border-t border-gold-500/20 text-xs text-charcoal-700 flex items-start space-x-2.5">
                <Car className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] leading-snug">
                  Chauffeured private transfers can be arranged by our Travel Desk from Jodhpur, Udaipur, or Marwar Junction.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Explore Rajasthan from Kesar Bagh (Excursions Matrix) */}
        <div className="bg-ivory-100 rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-royal">
          <div className="text-center sm:text-left mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-600">Heritage Excursions</span>
            <h3 className="font-serif text-2xl font-bold text-emerald-900 mt-0.5">
              Explore Rajasthan from Kesar Bagh
            </h3>
            <p className="text-xs text-charcoal-700 mt-1">
              Kesar Bagh's location in the Aravalli countryside makes it possible to combine a peaceful stay in nature with visits to some of Rajasthan's best-known heritage and cultural destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {locationData.excursions.map((exc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-ivory-200 border border-gold-500/20 hover:border-gold-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif font-bold text-emerald-950 text-sm">{exc.name}</h4>
                  <span className="px-2 py-0.5 rounded bg-emerald-900 text-gold-300 font-mono text-[10px] font-bold">
                    {exc.distance}
                  </span>
                </div>
                <p className="text-[11px] text-charcoal-700 leading-relaxed font-light">
                  {exc.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Gateway to the Aravallis Closing Card */}
          <div className="mt-8 p-6 rounded-xl bg-emerald-900 text-ivory-100 border border-gold-500/40">
            <h4 className="font-serif text-lg font-bold text-gold-200 mb-2">
              {locationData.gatewayText.heading}
            </h4>
            <p className="text-xs text-ivory-200/90 leading-relaxed font-light">
              {locationData.gatewayText.p1} {locationData.gatewayText.p2} {locationData.gatewayText.p3}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
