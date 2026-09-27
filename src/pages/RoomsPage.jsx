import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import RoomDetailModal from '../components/rooms/RoomDetailModal';
import { 
  roomsData, 
  comfortsData, 
  suiteExteriorPoolImg, 
  suiteBathroomTubImg, 
  suiteBathtubViewImg, 
  suiteDiningFireplaceImg, 
  suiteBedroomInteriorImg,
  suiteBedroomTeakImg,
  suiteBedroomWindowImg,
  suiteHorseArtifactImg,
  suitePalatialLayoutImg,
  suiteMuralDiningImg
} from '../data/hotelData';
import deluxeRoomImg from '../assets/images/deluxe-room.jpg';
import { 
  Sparkles, 
  CheckCircle2, 
  Waves, 
  Heart, 
  Compass, 
  Shirt, 
  PhoneCall, 
  Feather, 
  Eye, 
  ArrowRight, 
  Images, 
  ChevronLeft, 
  ChevronRight,
  Maximize2 
} from 'lucide-react';

export default function RoomsPage({ onSelectRoomForBooking }) {
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);
  const [activeSuitePhotoIndex, setActiveSuitePhotoIndex] = useState(0);

  const suitePhotos = [
    {
      title: "Ground Floor Suite & Private Plunge Pool",
      caption: "Secluded plunge pool, courtyard fire pit & illuminated heritage facade at twilight",
      src: suiteExteriorPoolImg,
      badge: "Plunge Pool & Garden",
      room: roomsData[1]
    },
    {
      title: "Palatial 900 Sq. Ft. Suite Open Layout",
      caption: "Spacious master bedroom, dining lounge, reading armchairs and polished marble flooring",
      src: suitePalatialLayoutImg,
      badge: "Palatial 900 Sq. Ft.",
      room: roomsData[1]
    },
    {
      title: "Palatial Master Suite & Living Lounge",
      caption: "Carved antique wooden screens, Rajasthani royal horse fresco & king-sized master bed",
      src: suiteBedroomInteriorImg,
      badge: "Suite Interiors",
      room: roomsData[1]
    },
    {
      title: "Master Suite Four-Poster Bed & Teak Armoire",
      caption: "Heritage four-poster bed, antique carved teak armoire and serene garden window view",
      src: suiteBedroomTeakImg,
      badge: "Teak Furnishings",
      room: roomsData[1]
    },
    {
      title: "Suite Bedroom & Garden Window Dining Nook",
      caption: "Sunny private breakfast corner and floral canopy master bed overlooking gardens",
      src: suiteBedroomWindowImg,
      badge: "Garden Window Nook",
      room: roomsData[1]
    },
    {
      title: "First Floor Private Dining & Fireplace",
      caption: "Intimate private dining room with warm brick fireplace and evening candlelit ambiance",
      src: suiteDiningFireplaceImg,
      badge: "Private Dining & Fireplace",
      room: roomsData[2]
    },
    {
      title: "Private In-Suite Dining & Royal Horse Fresco",
      caption: "Candlelit private suite dining table set against hand-painted Rajput mural art",
      src: suiteMuralDiningImg,
      badge: "Rajput Dining & Art",
      room: roomsData[2]
    },
    {
      title: "Handcrafted Marwari Horse Artifact",
      caption: "Curated antique wooden sculpture celebrating Marwar's indigenous equestrian heritage",
      src: suiteHorseArtifactImg,
      badge: "Heritage Artifacts",
      room: roomsData[2]
    },
    {
      title: "Luxury Marble En-Suite Bathroom",
      caption: "Expansive marble bathroom with freestanding soaking bathtub, vanity and glass shower",
      src: suiteBathroomTubImg,
      badge: "En-Suite Bath",
      room: roomsData[1]
    },
    {
      title: "Clawfoot Soaking Tub with Hill Views",
      caption: "Relaxing bathtub window retreat overlooking the tranquil green countryside of the Aravallis",
      src: suiteBathtubViewImg,
      badge: "Scenic Aravalli Views",
      room: roomsData[2]
    }
  ];

  const handleBook = (room) => {
    if (onSelectRoomForBooking) onSelectRoomForBooking(room);
  };

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-700">
          PAGE 3 – STAY
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          STAY AT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-emerald-900">
          Rooms & Suites Amidst the Aravalli Hills
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
          Kesar Bagh offers <strong>10 thoughtfully appointed Luxury Rooms</strong> and <strong>2 spacious Kesar Bagh Suites</strong>, set amidst the peaceful landscape of the Aravalli Hills. Designed to make the most of their natural surroundings, the rooms combine the character of a countryside retreat with the comforts of a modern stay.
        </p>
      </div>

      {/* 1. Luxury Rooms Section (Page 7 of PDF) */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <div className="border-b border-gold-500/20 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">Accommodation 01</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">Luxury Rooms</h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-900 text-gold-300 text-xs font-bold font-mono">
              10 Rooms · Approximately 300 sq. ft.
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          The ten Luxury Rooms at Kesar Bagh offer comfortable, thoughtfully designed spaces for a peaceful stay in the countryside. At approximately 300 square feet, each room provides ample space to relax, with a spacious bathroom and a private balcony or terrace in almost every room. The rooms are individually designed, so no two are quite alike, while all retain the calm character of the Bagh.
        </p>

        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed italic">
          Wake to views of the Aravalli Hills and surrounding countryside, spend a quiet afternoon on your balcony, or return after a day of exploring Rajasthan to the comfort of your room.
        </p>

        {/* Room Features per PDF */}
        <div className="bg-ivory-200/90 rounded-2xl p-6 border border-gold-500/30">
          <h4 className="font-serif text-base font-bold text-emerald-950 mb-4">
            Room Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-charcoal-800 font-medium">
            {roomsData[0].features.map((feat, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center justify-end">
          <button
            onClick={() => handleBook(roomsData[0])}
            className="px-7 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center space-x-2 border border-gold-500/40"
          >
            <span>Book Luxury Room</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>
      </div>

      {/* 2. Kesar Bagh Suites Section (Pages 8–9 of PDF) */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <div className="border-b border-gold-500/20 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">Accommodation 02</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">Kesar Bagh Suites</h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-900 text-gold-300 text-xs font-bold font-mono">
              2 Suites · Approximately 900 sq. ft. each
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          For those looking for more space and privacy, the two Kesar Bagh Suites offer approximately 900 square feet of accommodation, with each suite designed as a distinctive experience in its own right. Both suites share the same sense of space, comfort and connection with the surrounding landscape, while each has its own character and special features.
        </p>

        {/* Interactive Suite Visual Gallery */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Images className="w-4 h-4 text-emerald-800" />
              <h4 className="font-serif text-lg font-bold text-emerald-950">Suite Visual Gallery</h4>
            </div>
            <span className="text-xs text-charcoal-700 font-medium">
              Photo {activeSuitePhotoIndex + 1} of {suitePhotos.length}
            </span>
          </div>

          {/* Featured Image Display with overlays & navigation */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-gold-500/40 shadow-royal bg-emerald-950 group">
            <img
              src={suitePhotos[activeSuitePhotoIndex].src}
              alt={suitePhotos[activeSuitePhotoIndex].title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-full bg-emerald-950/90 text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/40 backdrop-blur-sm shadow-md">
                {suitePhotos[activeSuitePhotoIndex].badge}
              </span>
            </div>

            {/* Fullscreen / Details button */}
            <div className="absolute top-4 right-4">
              <button
                type="button"
                onClick={() => setSelectedRoomModal(suitePhotos[activeSuitePhotoIndex].room)}
                className="px-3 py-1.5 rounded-full bg-emerald-950/90 hover:bg-emerald-900 text-gold-300 text-xs font-bold border border-gold-500/40 backdrop-blur-sm shadow-md flex items-center space-x-1.5 transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </button>
            </div>

            {/* Bottom Title & Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
              <h5 className="font-serif text-lg sm:text-2xl font-bold text-gold-100 drop-shadow-sm">
                {suitePhotos[activeSuitePhotoIndex].title}
              </h5>
              <p className="text-xs sm:text-sm text-ivory-200/90 mt-1 max-w-2xl drop-shadow-sm font-light">
                {suitePhotos[activeSuitePhotoIndex].caption}
              </p>
            </div>

            {/* Left / Right Nav Arrows */}
            <button
              type="button"
              onClick={() => setActiveSuitePhotoIndex((prev) => (prev === 0 ? suitePhotos.length - 1 : prev - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all opacity-80 hover:opacity-100 shadow-lg cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSuitePhotoIndex((prev) => (prev === suitePhotos.length - 1 ? 0 : prev + 1))}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all opacity-80 hover:opacity-100 shadow-lg cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* 10 Thumbnails Row */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2 pt-1">
            {suitePhotos.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSuitePhotoIndex(idx)}
                className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all duration-200 cursor-pointer ${
                  activeSuitePhotoIndex === idx
                    ? 'border-gold-500 ring-2 ring-gold-400/50 scale-105 shadow-md'
                    : 'border-gold-500/30 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-emerald-950/20" />
                <span className="hidden md:block absolute bottom-0.5 inset-x-0.5 text-[8px] font-bold text-gold-200 truncate bg-emerald-950/90 px-0.5 py-0.5 rounded text-center">
                  {photo.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2 Suites Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Ground Floor Suite */}
          <div className="bg-ivory-200/90 rounded-2xl overflow-hidden border border-gold-500/30 shadow-md flex flex-col justify-between">
            <div>
              {/* Suite Image */}
              <div 
                onClick={() => setSelectedRoomModal(roomsData[1])}
                className="relative aspect-[16/10] overflow-hidden bg-emerald-950 cursor-pointer group"
              >
                <img
                  src={suiteExteriorPoolImg}
                  alt="Ground Floor Suite - Private Plunge Pool"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-950/90 text-gold-300 text-[10px] uppercase font-bold tracking-widest border border-gold-500/40">
                  Suite 01 · Ground Floor
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-emerald-950/90 text-ivory-200 text-[11px] font-semibold">
                  Private Pool & Garden
                </div>
              </div>

              {/* Suite Body */}
              <div className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-bold text-emerald-950">Ground Floor Suite</h4>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The Ground Floor Suite offers a generous private space designed for a relaxed stay surrounded by nature.
                </p>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The suite features its own <strong>private garden and plunge pool</strong>, creating a secluded setting where guests can spend time outdoors without leaving the comfort of their accommodation.
                </p>

                {/* Supporting Photo Thumbnails */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block mb-1.5">Suite Photo Highlights</span>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[1])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suiteExteriorPoolImg} alt="Private Pool" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">Pool & Patio</span>
                    </div>
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[1])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suitePalatialLayoutImg} alt="Palatial Layout" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">900 Sq. Ft.</span>
                    </div>
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[1])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suiteBedroomWindowImg} alt="Garden Window" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">Garden Nook</span>
                    </div>
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[1])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suiteBathroomTubImg} alt="Marble Bath" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">Marble Bath</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                type="button"
                onClick={() => setSelectedRoomModal(roomsData[1])}
                className="w-full py-2 rounded-lg bg-ivory-100 hover:bg-ivory-300 text-emerald-900 border border-gold-500/40 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-gold-600" />
                <span>Explore Suite Photos & Details</span>
              </button>
              <button
                type="button"
                onClick={() => handleBook(roomsData[1])}
                className="w-full py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                Reserve Ground Floor Suite
              </button>
            </div>
          </div>

          {/* First Floor Suite */}
          <div className="bg-ivory-200/90 rounded-2xl overflow-hidden border border-gold-500/30 shadow-md flex flex-col justify-between">
            <div>
              {/* Suite Image */}
              <div 
                onClick={() => setSelectedRoomModal(roomsData[2])}
                className="relative aspect-[16/10] overflow-hidden bg-emerald-950 cursor-pointer group"
              >
                <img
                  src={suiteDiningFireplaceImg}
                  alt="First Floor Suite - Private Dining & Fireplace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-950/90 text-gold-300 text-[10px] uppercase font-bold tracking-widest border border-gold-500/40">
                  Suite 02 · First Floor
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-emerald-950/90 text-ivory-200 text-[11px] font-semibold">
                  Terrace & Fireplace
                </div>
              </div>

              {/* Suite Body */}
              <div className="p-6 space-y-3">
                <h4 className="font-serif text-xl font-bold text-emerald-950">First Floor Suite</h4>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The First Floor Suite offers a different perspective of Kesar Bagh, with a <strong>private terrace</strong> overlooking the surrounding landscape.
                </p>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The suite also features a <strong>private dining space and fireplace</strong>, creating an intimate setting for a relaxed meal or an evening spent enjoying the quieter side of Rajasthan.
                </p>

                {/* Supporting Photo Thumbnails */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block mb-1.5">Suite Photo Highlights</span>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[2])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suiteDiningFireplaceImg} alt="Private Dining" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">Dining & Fire</span>
                    </div>
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[2])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suiteMuralDiningImg} alt="Mural Dining" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">Rajput Mural</span>
                    </div>
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[2])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suiteBedroomTeakImg} alt="Teak Bed" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">Teak Suite</span>
                    </div>
                    <div 
                      onClick={() => setSelectedRoomModal(roomsData[2])}
                      className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                    >
                      <img src={suiteBathtubViewImg} alt="Bathtub View" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute bottom-0 inset-x-0 bg-emerald-950/80 text-[7px] text-gold-200 text-center py-0.5 truncate">Window Bath</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
              <button
                type="button"
                onClick={() => setSelectedRoomModal(roomsData[2])}
                className="w-full py-2 rounded-lg bg-ivory-100 hover:bg-ivory-300 text-emerald-900 border border-gold-500/40 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-gold-600" />
                <span>Explore Suite Photos & Details</span>
              </button>
              <button
                type="button"
                onClick={() => handleBook(roomsData[2])}
                className="w-full py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                Reserve First Floor Suite
              </button>
            </div>
          </div>

        </div>

        {/* Suite Features List per PDF Page 8–9 */}
        <div className="bg-ivory-200/90 rounded-2xl p-6 border border-gold-500/30">
          <h4 className="font-serif text-base font-bold text-emerald-950 mb-3">
            Suite Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-charcoal-800 font-medium">
            {roomsData[1].features.map((feat, i) => (
              <div key={i} className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-charcoal-600 italic mt-3">
            * Additional features vary between the two suites (Private plunge pool & garden on Ground Floor; Private dining, terrace & fireplace on First Floor).
          </p>
        </div>
      </div>

      {/* 3. The Comforts of Kesar Bagh (Pages 9–10 of PDF) */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-12 border border-gold-500/40 shadow-2xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-400">Thoughtful Amenities</span>
          <h3 className="font-serif text-3xl font-bold text-ivory-100">
            {comfortsData.title}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-200/90">
            {comfortsData.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2">
            <Waves className="w-6 h-6 text-cyan-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-sm">Swimming Pool</h4>
            <p className="text-[11px] text-ivory-300 leading-snug">
              A shared swimming pool offers a refreshing place to unwind during the warmer months.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2">
            <Heart className="w-6 h-6 text-pink-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-sm">Spa</h4>
            <p className="text-[11px] text-ivory-300 leading-snug">
              Take time to relax and rejuvenate with our spa facilities.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2">
            <Compass className="w-6 h-6 text-gold-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-sm">Travel Desk</h4>
            <p className="text-[11px] text-ivory-300 leading-snug">
              Our travel desk can assist guests with arrangements and help plan excursions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2">
            <Shirt className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-sm">Laundry</h4>
            <p className="text-[11px] text-ivory-300 leading-snug">
              Laundry services are available for guests during their stay.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 sm:col-span-2 lg:col-span-1">
            <PhoneCall className="w-6 h-6 text-emerald-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-sm">Doctor on Call</h4>
            <p className="text-[11px] text-ivory-300 leading-snug">
              A doctor can be arranged on call when required.
            </p>
          </div>
        </div>

        {/* 4. A Slower Way to Stay (Page 10 of PDF) */}
        <div className="pt-6 border-t border-emerald-800 text-center max-w-3xl mx-auto space-y-3">
          <Feather className="w-6 h-6 text-gold-400 mx-auto" />
          <h4 className="font-serif text-2xl font-bold text-gold-200">
            {comfortsData.slowerWayToStay.heading}
          </h4>
          <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed font-light">
            {comfortsData.slowerWayToStay.p1}
          </p>
          <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed font-light">
            {comfortsData.slowerWayToStay.p2}
          </p>
          <p className="text-xs sm:text-sm text-gold-300 font-semibold italic">
            "{comfortsData.slowerWayToStay.p3}"
          </p>
        </div>

      </div>

      {/* Room & Suite Detail Modal with Multi-Photo Gallery */}
      <RoomDetailModal
        isOpen={Boolean(selectedRoomModal)}
        onClose={() => setSelectedRoomModal(null)}
        room={selectedRoomModal}
        onBookNow={handleBook}
      />

    </div>
  );
}
