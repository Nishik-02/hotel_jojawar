import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import RoomDetailModal from '../components/rooms/RoomDetailModal';
import { roomsData, comfortsData } from '../data/hotelData';
import { 
  CheckCircle2, 
  Waves, 
  Compass, 
  Shirt, 
  PhoneCall, 
  Feather, 
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
    { src: "/gallery/Suites/00 (1).jpg", room: roomsData[1] },
    { src: "/gallery/Suites/00 (11).jpg", room: roomsData[1] },
    { src: "/gallery/Suites/00 (2).jpg", room: roomsData[1] },
    { src: "/gallery/Suites/00 (4).jpg", room: roomsData[1] },
    { src: "/gallery/Suites/00 (9).jpg", room: roomsData[1] },
    { src: "/gallery/Suites/035.jpeg", room: roomsData[1] },
    { src: "/gallery/Suites/036.jpg", room: roomsData[1] },
    { src: "/gallery/Suites/037.jpg", room: roomsData[2] },
    { src: "/gallery/Suites/038.jpg", room: roomsData[2] },
    { src: "/gallery/Suites/039.jpg", room: roomsData[2] }
  ];

  const handleBook = (room) => {
    if (onSelectRoomForBooking) onSelectRoomForBooking(room);
  };

  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Page Header (Internal tag removed per screenshot) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          STAY AT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-emerald-900">
          Rooms & Suites Amidst the Aravalli Hills
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
          Kesar Bagh offers <strong>10 well appointed Luxury Rooms</strong> and <strong>2 spacious Suites</strong>, set amidst the peaceful landscape of the Aravalli Hills. Designed to make the most of their natural surroundings, the rooms combine the character of a countryside retreat with the comforts of a modern stay.
        </p>
      </div>

      {/* 1. Luxury Rooms Section */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <div className="border-b border-gold-500/20 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">Luxury Rooms</h3>
            </div>
            {/* Enlarged "Big" badge per screenshot */}
            <span className="px-5 py-2.5 rounded-2xl bg-emerald-900 text-gold-300 text-sm sm:text-base font-bold font-mono tracking-wide shadow-md border border-gold-500/40 self-start sm:self-auto">
              10 Rooms • Approximately 300 sq. ft.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              The ten Luxury Rooms at Kesar Bagh offer comfortable, thoughtfully designed spaces for a peaceful stay. At approximately 300 square feet, each room provides ample space to relax, with a spacious bathroom and a private balcony. The rooms are individually designed, so no two are quite alike, while all retain the calm character of the Bagh.
            </p>

            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed italic">
              Wake up to views of the Aravalli Hills and surrounding countryside, spend a quiet afternoon on your balcony, or return after a day of exploring the village to the comfort of your room.
            </p>

            <div className="flex items-center space-x-6 text-xs text-charcoal-700 font-semibold pt-1">
              <span>CP Plan: <strong className="text-emerald-900 font-bold">₹10,000</strong> / night</span>
              <span>•</span>
              <span>MAP Plan: <strong className="text-emerald-900 font-bold">₹13,000</strong> / night</span>
            </div>
          </div>

          <div 
            onClick={() => setSelectedRoomModal(roomsData[0])}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-gold-500/40 cursor-pointer group"
          >
            <img 
              src={roomsData[0].image} 
              alt="Luxury Room" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-emerald-950/80 text-gold-300 text-xs font-bold flex items-center space-x-1">
              <Images className="w-3.5 h-3.5" />
              <span>View Gallery</span>
            </div>
          </div>
        </div>

        {/* Room Features (Accurately filtered per annotated screenshot) */}
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
            className="px-7 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center space-x-2 border border-gold-500/40 cursor-pointer"
          >
            <span>Book Luxury Room</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>
      </div>

      {/* 2. Kesar Bagh Suites Section */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-royal space-y-6">
        <div className="border-b border-gold-500/20 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">Kesar Bagh Suites</h3>
            </div>
            {/* Enlarged "Big" badge per screenshot */}
            <span className="px-5 py-2.5 rounded-2xl bg-emerald-900 text-gold-300 text-sm sm:text-base font-bold font-mono tracking-wide shadow-md border border-gold-500/40 self-start sm:self-auto">
              2 Suites • Approximately 900 sq. ft. each
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
          For those looking for more space and privacy, the Suites offer approximately 900 square feet of accommodation, with each suite designed as a distinctive experience in its own right. Both suites share the same sense of space, comfort and connection with the surrounding landscape, while each has its own character and special features.
        </p>

        {/* Interactive Suite Visual Gallery (Overlays removed per screenshot) */}
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

          {/* Featured Image Display - Unobstructed without text overlays per screenshot */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-gold-500/40 shadow-royal bg-emerald-950 group">
            <img
              src={suitePhotos[activeSuitePhotoIndex].src}
              alt={`Suite view ${activeSuitePhotoIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102"
            />

            {/* Left / Right Nav Arrows */}
            <button
              type="button"
              onClick={() => setActiveSuitePhotoIndex((prev) => (prev === 0 ? suitePhotos.length - 1 : prev - 1))}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-950/70 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all shadow-lg cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSuitePhotoIndex((prev) => (prev === suitePhotos.length - 1 ? 0 : prev + 1))}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-950/70 hover:bg-emerald-900 text-gold-300 flex items-center justify-center border border-gold-500/40 transition-all shadow-lg cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails Row - Captions removed per screenshot */}
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
                <img src={photo.src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 2 Suites Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Ground Floor Suite */}
          <div className="bg-ivory-200/90 rounded-2xl overflow-hidden border border-gold-500/30 shadow-md flex flex-col justify-between">
            <div>
              <div 
                onClick={() => setSelectedRoomModal(roomsData[1])}
                className="relative aspect-[16/10] overflow-hidden bg-emerald-950 cursor-pointer group"
              >
                <img
                  src={roomsData[1].image}
                  alt="Ground Floor Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif text-xl font-bold text-emerald-950">Ground Floor Suite</h4>
                  <span className="text-xs font-bold text-gold-800 bg-gold-500/20 px-2.5 py-1 rounded-full">From ₹14,000/night</span>
                </div>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The Ground Floor Suite offers a generous private space designed for a relaxed stay surrounded by nature.
                </p>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The suite features its own <strong>private garden and plunge pool</strong>, creating a secluded setting where guests can spend time outdoors without leaving the comfort of their accommodation.
                </p>

                {/* Supporting Photo Thumbnails */}
                <div className="pt-2">
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {roomsData[1].gallery.slice(0, 4).map((img, i) => (
                      <div 
                        key={i}
                        onClick={() => setSelectedRoomModal(roomsData[1])}
                        className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                      >
                        <img src={img} alt={`Gallery view ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
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
              <div 
                onClick={() => setSelectedRoomModal(roomsData[2])}
                className="relative aspect-[16/10] overflow-hidden bg-emerald-950 cursor-pointer group"
              >
                <img
                  src={roomsData[2].image}
                  alt="First Floor Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif text-xl font-bold text-emerald-950">First Floor Suite</h4>
                  <span className="text-xs font-bold text-gold-800 bg-gold-500/20 px-2.5 py-1 rounded-full">From ₹14,000/night</span>
                </div>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The First Floor Suite offers a different perspective of Kesar Bagh, with a <strong>private terrace</strong> overlooking the surrounding landscape.
                </p>
                <p className="text-xs text-charcoal-800 leading-relaxed">
                  The suite also features a <strong>private dining space and fireplace</strong>, creating an intimate setting for a relaxed meal or an evening spent enjoying the quieter side of Rajasthan.
                </p>

                {/* Supporting Photo Thumbnails */}
                <div className="pt-2">
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {roomsData[2].gallery.slice(0, 4).map((img, i) => (
                      <div 
                        key={i}
                        onClick={() => setSelectedRoomModal(roomsData[2])}
                        className="cursor-pointer rounded-lg overflow-hidden aspect-[16/10] border border-gold-500/30 hover:border-gold-500 relative group"
                      >
                        <img src={img} alt={`Gallery view ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2">
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

        {/* Suite Features List (Corrected per screenshot) */}
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
        </div>
      </div>

      {/* 3. The Comforts of Kesar Bagh (Spa removed, relaxed stay copy per screenshot) */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-sm">
            <Waves className="w-7 h-7 text-cyan-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-base">Swimming Pool</h4>
            <p className="text-xs text-ivory-300 leading-snug">
              A shared swimming pool offers a refreshing place to unwind during the warmer months.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-sm">
            <Compass className="w-7 h-7 text-gold-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-base">Travel Desk</h4>
            <p className="text-xs text-ivory-300 leading-snug">
              Our travel desk can assist guests with arrangements and help plan excursions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-sm">
            <Shirt className="w-7 h-7 text-amber-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-base">Laundry</h4>
            <p className="text-xs text-ivory-300 leading-snug">
              Laundry services are available for guests during their stay.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-900/80 border border-gold-500/30 text-center space-y-2 shadow-sm">
            <PhoneCall className="w-7 h-7 text-emerald-400 mx-auto" />
            <h4 className="font-serif font-bold text-gold-200 text-base">Doctor on Call</h4>
            <p className="text-xs text-ivory-300 leading-snug">
              A doctor can be arranged on call when required.
            </p>
          </div>
        </div>

        {/* 4. A Slower Way to Stay */}
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
            {comfortsData.slowerWayToStay.p3}
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
