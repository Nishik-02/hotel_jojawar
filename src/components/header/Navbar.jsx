import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles, Phone } from 'lucide-react';
import { hotelInfo } from '../../data/hotelData';
import hotelLogo from '../../assets/images/hotel-logo.png';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 8 PDF Pages: Home, About Us, Rooms, Experiences, Sustainability, Location, Gallery, Contact
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Rooms', to: '/rooms' },
    { name: 'Experiences', to: '/experiences' },
    { name: 'Sustainability', to: '/sustainability' },
    { name: 'Location', to: '/location' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-ivory-200/98 backdrop-blur-md shadow-md py-2 border-b border-gold-500/30' 
            : 'bg-ivory-200 py-3 border-b border-gold-500/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-12 h-14 sm:w-16 sm:h-20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src={hotelLogo}
                alt="Kesar Bagh Logo"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900 tracking-wide leading-tight group-hover:text-emerald-700 transition-colors">
                Kesar Bagh
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.24em] text-gold-600">
                A Quiet Retreat in the Aravallis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 text-xs xl:text-sm font-semibold tracking-wider transition-all duration-200 relative ${
                    isActive 
                      ? 'text-emerald-900 font-bold' 
                      : 'text-charcoal-800/80 hover:text-emerald-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gold-500 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action: BOOK NOW */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white px-5 py-2.5 text-xs uppercase font-bold tracking-widest border border-gold-500/60 shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded bg-emerald-700 text-gold-300 text-[11px] font-bold uppercase tracking-wider border border-gold-500/40"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-emerald-900 hover:text-emerald-700 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <div className="space-y-1.5 w-6">
                  <span className="block w-6 h-0.5 bg-emerald-900"></span>
                  <span className="block w-6 h-0.5 bg-emerald-900"></span>
                  <span className="block w-6 h-0.5 bg-emerald-900"></span>
                </div>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-charcoal-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-ivory-200 shadow-2xl border-l border-gold-500/30 flex flex-col justify-between overflow-y-auto animate-slideLeft">
            <div>
              <div className="p-4 bg-emerald-900 border-b border-gold-500/30 flex items-center justify-between text-white">
                <div className="flex items-center space-x-3">
                  <img src={hotelLogo} alt="Logo" className="w-9 h-11 object-contain" />
                  <div>
                    <p className="font-serif text-lg font-bold text-gold-200">Kesar Bagh</p>
                    <p className="text-[9px] uppercase tracking-widest text-gold-400">Aravalli Hills Retreat</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-gold-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors ${
                        isActive
                          ? 'bg-emerald-700 text-gold-200 font-bold'
                          : 'text-charcoal-800 hover:bg-ivory-300 hover:text-emerald-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="p-4 bg-ivory-300 border-t border-gold-500/20 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 font-bold text-xs tracking-widest uppercase shadow-md transition-colors border border-gold-500/40"
              >
                PLAN YOUR STAY
              </button>
              <div className="text-center text-xs text-charcoal-800">
                <a href={hotelInfo.phones[0].link} className="text-emerald-900 font-bold block">
                  {hotelInfo.phones[0].display}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
