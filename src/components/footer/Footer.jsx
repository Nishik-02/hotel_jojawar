import React from 'react';
import { Link } from 'react-router-dom';
import { hotelInfo } from '../../data/hotelData';
import hotelLogo from '../../assets/images/hotel-logo.png';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Rooms & Suites', to: '/rooms' },
    { name: 'Experiences', to: '/experiences' },
    { name: 'Sustainability', to: '/sustainability' },
    { name: 'Location', to: '/location' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-emerald-950 text-ivory-200 pt-16 pb-8 border-t-2 border-gold-500/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-jali opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gold-500/20">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3.5">
              <img src={hotelLogo} alt="Kesar Bagh Logo" className="w-12 h-14 object-contain" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-gold-200">Kesar Bagh</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-bold">
                  A Quiet Retreat in the Aravalli Hills
                </p>
              </div>
            </div>
            <p className="text-xs text-ivory-300 leading-relaxed font-light">
              Spread across 150 acres returned to nature amidst the scenic Aravalli Hills in Jojawar, Rajasthan. Recreated by Rao Sahib of Jojawar, Maharaj Singh Ji.
            </p>
            <div className="pt-1">
              <a
                href={hotelInfo.rawlaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-gold-300 hover:text-white bg-emerald-900/90 px-3 py-1.5 rounded-lg border border-gold-500/30"
              >
                <span>Visit Sister Hotel: Rawla Jojawar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Pages Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-300">
              Pages
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-ivory-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="hover:text-gold-200 transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sanctuary Highlights */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-300">
              Sanctuary Stats
            </h4>
            <div className="space-y-2 text-xs text-ivory-300">
              <p><strong className="text-gold-200">150 Acres</strong> Left to Nature</p>
              <p><strong className="text-gold-200">100%</strong> Solar Hot Water</p>
              <p><strong className="text-gold-200">100%</strong> Local Staff</p>
              <p><strong className="text-gold-200">170+</strong> Bird Species</p>
            </div>
          </div>

          {/* Col 4: Address & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-300">
              Address & Contact
            </h4>
            <div className="space-y-2 text-xs text-ivory-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{hotelInfo.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={hotelInfo.phones[0].link} className="hover:text-gold-200 font-bold">{hotelInfo.phones[0].display}</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-gold-200">{hotelInfo.email}</a>
              </p>
              <div className="pt-1">
                <a
                  href={hotelInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-gold-300 hover:text-white underline"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-400 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Kesar Bagh, Jojawar. All rights reserved.</p>
          <p className="text-gold-400/80">Recreated by Rao Sahib of Jojawar, Maharaj Singh Ji</p>
        </div>
      </div>
    </footer>
  );
}
