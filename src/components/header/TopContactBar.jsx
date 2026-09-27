import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Leaf } from 'lucide-react';
import { hotelInfo } from '../../data/hotelData';

export default function TopContactBar() {
  return (
    <div className="bg-emerald-950 text-gold-300 py-1.5 px-4 sm:px-6 lg:px-8 border-b border-gold-500/25 text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Location & Estate Tagline */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-ivory-200">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Jojawar, Marwar Junction, Pali District, Rajasthan – 306022</span>
          </div>
          <span className="hidden md:inline-flex items-center space-x-1 text-gold-400/90 font-medium">
            <Leaf className="w-3 h-3 text-emerald-400" />
            <span>150 Acres Returned to Nature</span>
          </span>
        </div>

        {/* Right: Phone, Email, Rawla Sister Link */}
        <div className="flex items-center space-x-4">
          <a 
            href={hotelInfo.phones[0].link} 
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-gold-400" />
            <span>{hotelInfo.phones[0].display}</span>
          </a>

        </div>

      </div>
    </div>
  );
}
