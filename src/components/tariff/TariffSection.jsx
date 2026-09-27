import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { tariffPackages } from '../../data/hotelData';
import { Check, ArrowRight } from 'lucide-react';

export default function TariffSection({ onBookPackage }) {
  return (
    <section id="tariff" className="py-16 md:py-24 bg-ivory-200 relative overflow-hidden">
      
      {/* Background Ornamentation */}
      <div className="absolute inset-0 bg-jali-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-2">
            Transparent Rates & Curated Plans
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight leading-tight">
            Tariff & Meal Plans
          </h2>
          <SectionHeader title="" align="center" className="my-2 mb-4" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {tariffPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-7 transition-all duration-300 flex flex-col justify-between relative ${
                pkg.popular
                  ? 'bg-emerald-900 text-white shadow-royal-lg border-2 border-gold-500 transform md:-translate-y-2'
                  : 'bg-ivory-100 text-charcoal-900 shadow-royal border border-gold-500/30 hover:border-gold-500/60'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-emerald-950 px-3.5 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                  ★ Recommended
                </div>
              )}

              <div>
                <span className={`text-xs uppercase font-bold tracking-widest block mb-2 ${pkg.popular ? 'text-gold-300' : 'text-emerald-700'}`}>
                  {pkg.discount}
                </span>

                <h3 className={`font-serif text-2xl font-bold mb-3 ${pkg.popular ? 'text-gold-200' : 'text-emerald-900'}`}>
                  {pkg.plan}
                </h3>

                <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${pkg.popular ? 'text-ivory-300' : 'text-charcoal-700'}`}>
                  {pkg.desc}
                </p>

                {/* Inclusions List */}
                <div className="space-y-2.5 pt-4 border-t border-gold-500/20">
                  <span className={`text-xs font-bold uppercase tracking-wider block ${pkg.popular ? 'text-gold-400' : 'text-emerald-900'}`}>
                    Package Inclusions:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-gold-400' : 'text-gold-600'}`} />
                      <span className={pkg.popular ? 'text-ivory-200' : 'text-charcoal-800'}>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onBookPackage(pkg)}
                  className={`w-full py-3 px-5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow-md ${
                    pkg.popular
                      ? 'bg-gold-500 hover:bg-gold-400 text-emerald-950 shadow-gold'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white border border-gold-500/40'
                  }`}
                >
                  <span>Select {pkg.plan.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Policies Note */}
        <div className="p-6 rounded-xl bg-ivory-100 border border-gold-500/25 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-charcoal-700">
          <div>
            <span className="font-bold text-emerald-900 uppercase block mb-1">Check-in & Check-out</span>
            <p>Check-in: 14:00 hrs | Check-out: 11:00 hrs. Early check-in and late checkout subject to room availability.</p>
          </div>
          <div>
            <span className="font-bold text-emerald-900 uppercase block mb-1">Child Policy</span>
            <p>Complimentary stay for one child under 6 years sharing existing bedding with parents.</p>
          </div>
          <div>
            <span className="font-bold text-emerald-900 uppercase block mb-1">Taxes & Cancellation</span>
            <p>Applicable GST extra as per Govt norms. Free cancellation up to 48 hours prior to arrival date.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
