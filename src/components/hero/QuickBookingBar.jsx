import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, BedDouble, Search, Sparkles, Home } from 'lucide-react';
import { roomsData } from '../../data/hotelData';

export default function QuickBookingBar({ onCheckAvailability }) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [roomsCount, setRoomsCount] = useState('1');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('luxury-rooms');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      roomsCount: parseInt(roomsCount, 10) || 1,
      guests: parseInt(guests, 10) || 2,
      roomType
    });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-4 sm:-mt-12 mb-12">
      <div className="bg-ivory-200/98 backdrop-blur-md rounded-xl shadow-royal-lg border border-gold-500/40 p-4 sm:p-6 transition-all duration-300">
        
        {/* Concierge Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gold-500/20">
          <div className="flex items-center space-x-2 text-emerald-900 font-serif font-bold text-sm sm:text-base">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Direct Concierge Reservation & Best Rate Guarantee</span>
          </div>
          <span className="text-xs text-emerald-700 font-semibold hidden sm:inline-block">
            Instant Confirmation • No Booking Fees
          </span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-3.5 items-end">
          
          {/* Check-In */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center space-x-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-gold-600" />
              <span>Check-In</span>
            </label>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-charcoal-900 focus:ring-2 focus:ring-emerald-700 focus:border-gold-500 outline-none transition-all"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center space-x-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-gold-600" />
              <span>Check-Out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-charcoal-900 focus:ring-2 focus:ring-emerald-700 focus:border-gold-500 outline-none transition-all"
              required
            />
          </div>

          {/* Rooms */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center space-x-1.5">
              <Home className="w-3.5 h-3.5 text-gold-600" />
              <span>Rooms</span>
            </label>
            <input
              type="number"
              min="1"
              max="12"
              value={roomsCount}
              onChange={(e) => setRoomsCount(e.target.value)}
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-charcoal-900 focus:ring-2 focus:ring-emerald-700 focus:border-gold-500 outline-none transition-all"
              required
            />
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-gold-600" />
              <span>Guests</span>
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-charcoal-900 focus:ring-2 focus:ring-emerald-700 focus:border-gold-500 outline-none transition-all"
              required
            />
          </div>

          {/* Room Type */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center space-x-1.5">
              <BedDouble className="w-3.5 h-3.5 text-gold-600" />
              <span>Room Type</span>
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-charcoal-900 focus:ring-2 focus:ring-emerald-700 focus:border-gold-500 outline-none transition-all"
            >
              {roomsData.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} (from ₹{room.priceINR.toLocaleString()})
                </option>
              ))}
            </select>
          </div>

          {/* Submit Action */}
          <div>
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest border border-gold-500/50 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-gold-400" />
              <span>Check Rates</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
