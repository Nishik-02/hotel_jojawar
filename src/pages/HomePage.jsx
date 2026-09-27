import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/hero/HeroCarousel';
import QuickBookingBar from '../components/hero/QuickBookingBar';
import ReviewsCarousel from '../components/reviews/ReviewsCarousel';
import Footer from '../components/footer/Footer';
import { homeContent, hotelInfo } from '../data/hotelData';
import { 
  ArrowRight, 
  Trees, 
  BedDouble, 
  Compass, 
  Camera, 
  Leaf, 
  MapPin, 
  ExternalLink,
  Sparkles,
  Heart
} from 'lucide-react';
import heroPoolImg from '../assets/images/outdoor-aravalli-estate-panorama.jpg';
import deluxeRoomImg from '../assets/images/deluxe-room.jpg';
import { suiteExteriorPoolImg, lobbyReceptionHallImg, outdoorLakeSunsetPanoramaImg } from '../data/hotelData';

export default function HomePage({ onOpenBooking }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. Hero Carousel */}
      <HeroCarousel 
        onOpenBooking={() => onOpenBooking({})}
        onExploreClick={() => {
          const el = document.getElementById('home-intro');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Quick Booking Bar */}
      <QuickBookingBar 
        onCheckAvailability={(searchParams) => onOpenBooking(searchParams)}
      />

      {/* 3. Main Home Narrative / Intro (Page 2 of PDF) */}
      <section id="home-intro" className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-ivory-100 rounded-3xl p-6 sm:p-12 border border-gold-500/30 shadow-royal space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-800">
              PAGE 1 – HOME • KESAR BAGH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950">
              {homeContent.headline}
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto" />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
            {homeContent.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Link to Kesar Bagh Website About Us Page */}
          <div className="pt-4 text-center sm:text-left border-t border-gold-500/20">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all group"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Stay Amidst the Aravallis (Page 2 of PDF) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ivory-300 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-900 text-gold-300 text-[11px] font-bold uppercase tracking-wider">
              <BedDouble className="w-3.5 h-3.5 text-gold-400" />
              <span>Accommodations</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              {homeContent.stayAmidstAravallis.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              {homeContent.stayAmidstAravallis.desc}
            </p>
            <div className="pt-2">
              <Link
                to="/rooms"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all group"
              >
                <span>Explore Rooms & Suites</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-gold-500/40">
            <img 
              src={deluxeRoomImg} 
              alt="Stay Amidst the Aravallis" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. Experience Rural Rajasthan (Page 3 of PDF) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-12 border border-gold-500/40 shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute inset-0 bg-gold-jali opacity-5 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-900 border border-gold-500/40 text-gold-300 text-[11px] font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>11 Curated Excursions</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-ivory-100">
              {homeContent.experienceRuralRajasthan.title}
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed font-light">
              {homeContent.experienceRuralRajasthan.desc}
            </p>
            <div className="pt-2">
              <Link
                to="/experiences"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-widest shadow-gold transition-all group"
              >
                <span>Explore Experiences</span>
                <ArrowRight className="w-4 h-4 text-emerald-950 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. A Glimpse of Kesar Bagh (Page 3 of PDF) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">Visual Journey</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
            {homeContent.glimpseOfKesarBagh.title}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-700 italic">
            "{homeContent.glimpseOfKesarBagh.desc}"
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-gold-500/30">
            <img src={heroPoolImg} alt="Kesar Bagh Outdoor" className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-gold-300 text-[10px] font-bold">Outdoor & Pool</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-gold-500/30">
            <img src={deluxeRoomImg} alt="Kesar Bagh Room" className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-gold-300 text-[10px] font-bold">Luxury Rooms</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-gold-500/30">
            <img src={suiteExteriorPoolImg} alt="Kesar Bagh Suite" className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-gold-300 text-[10px] font-bold">Suites</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-gold-500/30">
            <img src={lobbyReceptionHallImg} alt="Kesar Bagh Lobby" className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-gold-300 text-[10px] font-bold">Lobby & Lounges</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-gold-500/30 col-span-2 sm:col-span-1">
            <img src={outdoorLakeSunsetPanoramaImg} alt="Kesar Bagh Nature Sanctuary" className="w-full h-full object-cover" />
            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-gold-300 text-[10px] font-bold">Nature & Lake</span>
          </div>
        </div>

        <div>
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all group"
          >
            <span>View Gallery</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 7. A Stay with a Lighter Footprint (Pages 3–4 of PDF) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-ivory-100 rounded-3xl p-6 sm:p-12 border border-gold-500/30 shadow-royal space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 flex items-center space-x-1.5">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sustainability</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              {homeContent.lighterFootprint.title}
            </h3>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            {homeContent.lighterFootprint.paragraphs.slice(0, 3).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/sustainability"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all group"
            >
              <span>Discover Sustainability at Kesar Bagh</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. In the Heart of the Aravallis & Location Summary (Page 4 of PDF) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-ivory-300 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Location</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              {homeContent.inHeartOfAravallis.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
            {homeContent.inHeartOfAravallis.desc}
          </p>

          <div className="pt-2">
            <Link
              to="/location"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all group"
            >
              <span>Discover Our Location</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Part of the Jojawar Family (Page 4 of PDF) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-emerald-900 text-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/40 shadow-royal flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">Generational Story</span>
            <h3 className="font-serif text-2xl font-bold text-gold-200">
              {homeContent.partOfJojawarFamily.title}
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200/90 max-w-xl">
              {homeContent.partOfJojawarFamily.desc}
            </p>
          </div>

        </div>
      </section>

      {/* 10. Come Away to the Quiet (Page 4 of PDF) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-ivory-100 rounded-3xl p-6 sm:p-12 border border-gold-500/30 shadow-royal space-y-6">
          <Heart className="w-8 h-8 text-gold-600 mx-auto" />
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
            {homeContent.comeAwayToQuiet.title}
          </h3>
          <p className="text-sm sm:text-base text-charcoal-800 max-w-2xl mx-auto leading-relaxed font-light">
            {homeContent.comeAwayToQuiet.desc}
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-royal hover:shadow-gold transition-all group"
            >
              <span>Plan Your Stay</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. REVIEWS (Page 4 of PDF) */}
      <ReviewsCarousel />

      {/* 12. Footer (Exclusive to Home Page) */}
      <Footer onOpenBooking={() => onOpenBooking({})} />

    </div>
  );
}

