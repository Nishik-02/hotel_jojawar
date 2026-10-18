import React, { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import { roomsData, hotelInfo } from '../../data/hotelData';
import { Calendar, CheckCircle2, MessageSquare, Printer } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const today = new Date().toISOString().split('T')[0];
  const defaultCheckOut = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialData.checkIn || today);
  const [checkOut, setCheckOut] = useState(initialData.checkOut || defaultCheckOut);
  const [selectedRoomId, setSelectedRoomId] = useState(initialData.roomType || initialData.id || 'luxury-rooms');
  const [roomsCount, setRoomsCount] = useState(initialData.roomsCount || 1);
  const [guests, setGuests] = useState(initialData.guests || 2);
  const [mealPlan, setMealPlan] = useState('CP'); // CP by default, strictly CP & MAP only
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (initialData.roomType) setSelectedRoomId(initialData.roomType);
    if (initialData.id) setSelectedRoomId(initialData.id);
    if (initialData.checkIn) setCheckIn(initialData.checkIn);
    if (initialData.checkOut) setCheckOut(initialData.checkOut);
    if (initialData.roomsCount) setRoomsCount(initialData.roomsCount);
    if (initialData.guests) setGuests(initialData.guests);
  }, [initialData]);

  const selectedRoom = roomsData.find((r) => r.id === selectedRoomId) || roomsData[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.abs(d2 - d1);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))) || 1;

  // Rate per room per night: Luxury = CP 10k / MAP 13k; Suites = CP 14k / MAP 17k
  const ratePerRoomPerNight = mealPlan === 'MAP'
    ? (selectedRoom.priceMAP || 13000)
    : (selectedRoom.priceCP || 10000);

  const subtotal = ratePerRoomPerNight * nights * roomsCount;
  const tax = Math.round(subtotal * 0.18); // 18% Luxury GST per client markup
  const total = subtotal + tax;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const bookingRef = 'KB-' + Math.floor(100000 + Math.random() * 900000);
    const bookingDetails = {
      ref: bookingRef,
      roomName: selectedRoom.name,
      roomsCount,
      ratePerRoomPerNight,
      checkIn,
      checkOut,
      nights,
      guests,
      mealPlan,
      fullName,
      email,
      phone,
      subtotal,
      tax,
      total,
      specialRequests
    };
    setConfirmedBooking(bookingDetails);
  };

  const handleSendWhatsApp = () => {
    if (!confirmedBooking) return;
    const msg = `*KESAR BAGH - RESERVATION REQUEST*\n` +
      `Booking Ref: ${confirmedBooking.ref}\n` +
      `Guest Name: ${confirmedBooking.fullName}\n` +
      `Contact: ${confirmedBooking.phone}${confirmedBooking.email ? ` | ${confirmedBooking.email}` : ''}\n` +
      `Room Type: ${confirmedBooking.roomName}\n` +
      `No. of Rooms: ${confirmedBooking.roomsCount}\n` +
      `Check-In: ${confirmedBooking.checkIn}\n` +
      `Check-Out: ${confirmedBooking.checkOut} (${confirmedBooking.nights} Night${confirmedBooking.nights > 1 ? 's' : ''})\n` +
      `Guests: ${confirmedBooking.guests}\n` +
      `Meal Plan: ${confirmedBooking.mealPlan === 'MAP' ? 'MAP (Breakfast & Dinner)' : 'CP (Bed & Breakfast)'}\n` +
      `Tariff: ₹${confirmedBooking.ratePerRoomPerNight.toLocaleString()} × ${confirmedBooking.roomsCount} Room(s) × ${confirmedBooking.nights} Night(s) = ₹${confirmedBooking.subtotal.toLocaleString()}\n` +
      `GST (18%): ₹${confirmedBooking.tax.toLocaleString()}\n` +
      `Estimated Total: ₹${confirmedBooking.total.toLocaleString()} (incl. 18% GST)\n` +
      (confirmedBooking.specialRequests ? `Special Requests: ${confirmedBooking.specialRequests}\n` : '') +
      `\nPlease confirm availability for our countryside retreat at Kesar Bagh. Thank you!`;

    const url = `https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleResetAndClose} title="Reserve Your Stay at Kesar Bagh" maxWidth="max-w-3xl">
      {confirmedBooking ? (
        /* Confirmation Voucher Screen */
        <div className="py-2 space-y-5 text-charcoal-900 print:text-black">
          <div className="text-center space-y-1.5">
            <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-800 shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900">
              Reservation Inquiry Voucher
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-700">
              Booking Voucher Reference: <strong className="text-emerald-900 font-mono tracking-wider">{confirmedBooking.ref}</strong>
            </p>
          </div>

          {/* Voucher Summary Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-ivory-100 border-2 border-gold-500/40 shadow-royal space-y-3.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-2.5">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-charcoal-500 block">Voucher Ref</span>
                <span className="font-mono font-bold text-emerald-950 text-base">{confirmedBooking.ref}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase font-bold tracking-wider text-charcoal-500 block">Date</span>
                <span className="font-medium text-charcoal-800">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-b border-gold-500/20 pb-2.5">
              <div>
                <span className="text-charcoal-500 block text-[11px] uppercase font-semibold">Guest Name:</span>
                <span className="font-bold text-emerald-950 text-sm sm:text-base">{confirmedBooking.fullName}</span>
              </div>
              <div>
                <span className="text-charcoal-500 block text-[11px] uppercase font-semibold">Contact:</span>
                <span className="font-bold text-emerald-950">{confirmedBooking.phone} {confirmedBooking.email ? `• ${confirmedBooking.email}` : ''}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-b border-gold-500/20 pb-2.5">
              <div>
                <span className="text-charcoal-500 block text-[11px] uppercase font-semibold">Accommodation:</span>
                <span className="font-bold text-emerald-950">{confirmedBooking.roomName}</span>
                <span className="block text-xs text-charcoal-600 font-medium">{confirmedBooking.roomsCount} {confirmedBooking.roomsCount > 1 ? 'Rooms' : 'Room'}</span>
              </div>
              <div>
                <span className="text-charcoal-500 block text-[11px] uppercase font-semibold">Stay Duration:</span>
                <span className="font-bold text-emerald-950">
                  {confirmedBooking.checkIn} to {confirmedBooking.checkOut}
                </span>
                <span className="block text-xs text-charcoal-600 font-medium">{confirmedBooking.nights} {confirmedBooking.nights > 1 ? 'Nights' : 'Night'}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-b border-gold-500/20 pb-2.5">
              <div>
                <span className="text-charcoal-500 block text-[11px] uppercase font-semibold">Number of Guests:</span>
                <span className="font-bold text-emerald-950">{confirmedBooking.guests} {confirmedBooking.guests > 1 ? 'Guests' : 'Guest'}</span>
              </div>
              <div>
                <span className="text-charcoal-500 block text-[11px] uppercase font-semibold">Meal Plan:</span>
                <span className="font-bold text-emerald-950">
                  {confirmedBooking.mealPlan === 'MAP' ? 'MAP (Breakfast & Dinner)' : 'CP (Bed & Breakfast)'}
                </span>
              </div>
            </div>

            {confirmedBooking.specialRequests && (
              <div className="border-b border-gold-500/20 pb-2.5">
                <span className="text-charcoal-500 block text-[11px] uppercase font-semibold">Special Requests:</span>
                <p className="font-medium text-charcoal-800 italic mt-0.5">{confirmedBooking.specialRequests}</p>
              </div>
            )}

            {/* Detailed Tariff Calculation */}
            <div className="pt-1.5 space-y-1.5 bg-ivory-200/80 p-3.5 rounded-xl border border-gold-500/20">
              <div className="flex justify-between text-xs text-charcoal-700">
                <span>Room Tariff (₹{confirmedBooking.ratePerRoomPerNight.toLocaleString()} × {confirmedBooking.roomsCount} {confirmedBooking.roomsCount > 1 ? 'Rooms' : 'Room'} × {confirmedBooking.nights} {confirmedBooking.nights > 1 ? 'Nights' : 'Night'}):</span>
                <span className="font-semibold text-emerald-950">₹{confirmedBooking.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-charcoal-700">
                <span>Applicable GST (18%):</span>
                <span className="font-semibold text-emerald-950">₹{confirmedBooking.tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gold-500/20 text-sm font-bold text-emerald-950">
                <span>Total Estimated Tariff (incl. GST):</span>
                <span className="text-gold-800 font-serif text-lg font-bold">₹{confirmedBooking.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 print:hidden">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center space-x-2 transition-colors border border-gold-500/40 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Instant Confirmation via WhatsApp</span>
            </button>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 py-2.5 px-4 rounded-xl border border-gold-500/40 text-xs font-bold uppercase tracking-wider text-emerald-900 hover:bg-ivory-200 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-gold-600" />
                <span>Print Voucher</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="flex-1 py-2.5 px-4 rounded-xl bg-ivory-200 text-xs font-bold uppercase tracking-wider text-charcoal-700 hover:bg-ivory-300 transition-colors cursor-pointer"
              >
                Done & Return
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Reservation Input Form */
        <form onSubmit={handleBookingSubmit} className="space-y-4 text-charcoal-900">
          
          {/* Dates & Capacity Selection (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Check-In Date *
              </label>
              <input
                type="date"
                required
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Check-Out Date *
              </label>
              <input
                type="date"
                required
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                No. of Rooms *
              </label>
              <input
                type="number"
                required
                min="1"
                max="12"
                value={roomsCount}
                onChange={(e) => setRoomsCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700 font-medium"
                placeholder="1"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Guests *
              </label>
              <input
                type="number"
                required
                min="1"
                max="50"
                value={guests}
                onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700 font-medium"
                placeholder="2"
              />
            </div>
          </div>

          {/* Room Category Select */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              Select Room or Suite *
            </label>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3.5 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-emerald-700"
            >
              {roomsData.map((r) => {
                const displayPrice = mealPlan === 'MAP' ? (r.priceMAP || 13000) : (r.priceCP || 10000);
                return (
                  <option key={r.id} value={r.id}>
                    {r.name} — ₹{displayPrice.toLocaleString()} / night ({r.size})
                  </option>
                );
              })}
            </select>
          </div>

          {/* Meal Plan Options: Strictly CP and MAP only */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1.5">
              Select Meal Plan *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <label
                onClick={() => setMealPlan('CP')}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-start space-x-3 ${
                  mealPlan === 'CP'
                    ? 'border-emerald-700 bg-emerald-50/80 shadow-sm'
                    : 'border-gold-500/30 bg-ivory-100 hover:border-gold-500/60'
                }`}
              >
                <input
                  type="radio"
                  name="mealPlan"
                  value="CP"
                  checked={mealPlan === 'CP'}
                  onChange={() => setMealPlan('CP')}
                  className="mt-1 text-emerald-700 focus:ring-emerald-700"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-emerald-950 text-sm">Bed & Breakfast (CP)</span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                      {selectedRoomId === 'luxury-rooms' ? '₹10,000 / night' : '₹14,000 / night'}
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal-700 leading-snug">
                    Includes accommodation and lavish daily buffet breakfast in the dining hall.
                  </p>
                </div>
              </label>

              <label
                onClick={() => setMealPlan('MAP')}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-start space-x-3 ${
                  mealPlan === 'MAP'
                    ? 'border-emerald-700 bg-emerald-50/80 shadow-sm'
                    : 'border-gold-500/30 bg-ivory-100 hover:border-gold-500/60'
                }`}
              >
                <input
                  type="radio"
                  name="mealPlan"
                  value="MAP"
                  checked={mealPlan === 'MAP'}
                  onChange={() => setMealPlan('MAP')}
                  className="mt-1 text-emerald-700 focus:ring-emerald-700"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-emerald-950 text-sm">Breakfast & Dinner (MAP)</span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                      {selectedRoomId === 'luxury-rooms' ? '₹13,000 / night' : '₹17,000 / night'}
                    </span>
                  </div>
                  <p className="text-[11px] text-charcoal-700 leading-snug">
                    Includes accommodation, daily breakfast, and authentic multi-course evening dinner.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Guest Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Guest Name"
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                WhatsApp / Phone *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 / Country Code"
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              Special Requests (Train Safari, Airport Pickup, Birdwatching)
            </label>
            <input
              type="text"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="e.g. Vegetarian cuisine, train safari inquiries, private plunge pool setup..."
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Pricing Breakdown */}
          <div className="p-4 rounded-xl bg-ivory-300 border border-gold-500/30 text-xs space-y-2">
            <div className="flex justify-between text-charcoal-900 font-medium">
              <span>
                {selectedRoom.name} ({mealPlan === 'MAP' ? 'MAP: Breakfast & Dinner' : 'CP: Bed & Breakfast'}) × {roomsCount} {roomsCount > 1 ? 'Rooms' : 'Room'} × {nights} {nights > 1 ? 'Nights' : 'Night'}:
              </span>
              <span className="font-semibold text-emerald-950">₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-charcoal-700">
              <span>Applicable Luxury GST (18%):</span>
              <span className="font-medium">₹{tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gold-500/20 text-sm font-bold text-emerald-950">
              <span>Total Estimated Tariff:</span>
              <span className="font-serif text-lg text-emerald-900 font-bold">₹{total.toLocaleString()}</span>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase text-charcoal-700 hover:bg-ivory-300 rounded-lg cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-7 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg flex items-center space-x-2 border border-gold-500/40 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Generate Booking Voucher</span>
            </button>
          </div>

        </form>
      )}
    </Modal>
  );
}
