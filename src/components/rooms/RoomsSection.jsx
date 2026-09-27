import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import RoomCard from './RoomCard';
import RoomDetailModal from './RoomDetailModal';
import { roomsData, comfortsData } from '../../data/hotelData';
import { Sparkles, CheckCircle2, Waves, Heart, Compass, Shirt, PhoneCall, Feather } from 'lucide-react';

export default function RoomsSection({ onSelectRoomForBooking }) {
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'LUXURY ROOMS', 'SUITES'];

  const filteredRooms = selectedCategory === 'ALL'
    ? roomsData
    : roomsData.filter((r) => r.category.toUpperCase().includes(selectedCategory) || (selectedCategory === 'SUITES' && r.category === 'Suites'));

  const handleKnowMore = (room) => {
    setSelectedRoomModal(room);
  };

  const handleBookNow = (room) => {
    if (onSelectRoomForBooking) {
      onSelectRoomForBooking(room);
    }
  };

  return (
    <section id="rooms" className="py-16 md:py-24 bg-ivory-300 relative overflow-hidden">
      
      {/* Background Subtle Jali Pattern */}
      <div className="absolute inset-0 bg-jali-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-2">
            Stay Amidst the Aravallis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight leading-tight">
            Stay at Kesar Bagh
          </h2>
          <SectionHeader title="" align="center" className="my-2 mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            Kesar Bagh offers <strong>10 luxury rooms</strong> and <strong>2 Kesar Bagh Suites</strong>, each designed to make the most of its peaceful setting with private balconies, spacious bathrooms, and views across the Aravalli Hills.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-gold-200 shadow-md border border-gold-500/50'
                  : 'bg-ivory-100 hover:bg-ivory-200 text-charcoal-800 border border-gold-500/25'
              }`}
            >
              {cat === 'ALL' ? 'All Accommodations (10 Rooms + 2 Suites)' : cat}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onKnowMore={handleKnowMore}
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        {/* The Comforts of Kesar Bagh */}
        <div className="mt-16 bg-ivory-100 rounded-2xl p-6 sm:p-10 border border-gold-500/30 shadow-royal">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-600">Thoughtful Hospitality</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900 mt-1">
              The Comforts of Kesar Bagh
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-700 mt-2">
              While the landscape is at the heart of a stay at Kesar Bagh, thoughtful comforts ensure that guests have everything they need for a relaxed visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-ivory-200/80 border border-gold-500/20 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-emerald-950 text-sm">Swimming Pool</h4>
              <p className="text-[11px] text-charcoal-700 leading-snug">
                A shared swimming pool offers a refreshing place to unwind during warmer months.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-200/80 border border-gold-500/20 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-emerald-950 text-sm">Spa</h4>
              <p className="text-[11px] text-charcoal-700 leading-snug">
                Take time to relax and rejuvenate with our serene spa facilities.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-200/80 border border-gold-500/20 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-emerald-950 text-sm">Travel Desk</h4>
              <p className="text-[11px] text-charcoal-700 leading-snug">
                Assistance with excursions, train safaris, and local experiences.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-200/80 border border-gold-500/20 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
                <Shirt className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-emerald-950 text-sm">Laundry</h4>
              <p className="text-[11px] text-charcoal-700 leading-snug">
                Prompt laundry services available for guests during their stay.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-200/80 border border-gold-500/20 text-center space-y-2 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-gold-300 mx-auto flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-emerald-950 text-sm">Doctor on Call</h4>
              <p className="text-[11px] text-charcoal-700 leading-snug">
                A qualified medical doctor can be arranged on call when required.
              </p>
            </div>
          </div>

          {/* A Slower Way to Stay Callout */}
          <div className="mt-8 p-6 rounded-xl bg-emerald-950 text-ivory-100 border border-gold-500/30 text-center">
            <Feather className="w-6 h-6 text-gold-400 mx-auto mb-2" />
            <h4 className="font-serif text-lg sm:text-xl font-bold text-gold-200 mb-2">
              A Slower Way to Stay
            </h4>
            <p className="text-xs sm:text-sm text-ivory-200/90 max-w-3xl mx-auto leading-relaxed font-light">
              Days can be spent exploring the estate, watching birds, discovering the Aravalli countryside or simply enjoying the quiet from your private balcony or terrace. Here, there is room to pause, breathe and experience Rajasthan away from the bustle of the cities.
            </p>
          </div>

        </div>

      </div>

      {/* Room Detail Modal */}
      <RoomDetailModal
        isOpen={Boolean(selectedRoomModal)}
        onClose={() => setSelectedRoomModal(null)}
        room={selectedRoomModal}
        onBookNow={handleBookNow}
      />
    </section>
  );
}
