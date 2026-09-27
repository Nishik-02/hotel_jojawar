import React, { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import { roomsData, hotelInfo } from '../../data/hotelData';
import { Calendar, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const today = new Date().toISOString().split('T')[0];
  const defaultCheckOut = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialData.checkIn || today);
  const [checkOut, setCheckOut] = useState(initialData.checkOut || defaultCheckOut);
  const [selectedRoomId, setSelectedRoomId] = useState(initialData.roomType || initialData.id || 'luxury-rooms');
  const [guests, setGuests] = useState(initialData.guests || 2);
  const [mealPlan, setMealPlan] = useState('CP'); // CP by default
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
    if (initialData.guests) setGuests(initialData.guests);
  }, [initialData]);

  const selectedRoom = roomsData.find((r) => r.id === selectedRoomId) || roomsData[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.abs(d2 - d1);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))) || 1;

  // Meal plan addons
  const mealPlanAddons = {
    EP: 0,
    CP: 500, // Breakfast inclusion
    MAP: 1500 // Breakfast + Dinner
  };

  const roomBasePrice = selectedRoom.priceINR;
  const mealPrice = mealPlanAddons[mealPlan] || 0;
  const pricePerNight = roomBasePrice + mealPrice;
  const subtotal = pricePerNight * nights;
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + tax;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const bookingRef = 'KB-' + Math.floor(100000 + Math.random() * 900000);
    const bookingDetails = {
      ref: bookingRef,
      roomName: selectedRoom.name,
      checkIn,
      checkOut,
      nights,
      guests,
      mealPlan,
      fullName,
      email,
      phone,
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
      `Phone: ${confirmedBooking.phone}\n` +
      `Room: ${confirmedBooking.roomName}\n` +
      `Check-In: ${confirmedBooking.checkIn}\n` +
      `Check-Out: ${confirmedBooking.checkOut} (${confirmedBooking.nights} Night(s))\n` +
      `Guests: ${confirmedBooking.guests}\n` +
      `Meal Plan: ${confirmedBooking.mealPlan}\n` +
      `Est. Total: ₹${confirmedBooking.total.toLocaleString()} (incl. taxes)\n` +
      (confirmedBooking.specialRequests ? `Notes: ${confirmedBooking.specialRequests}\n` : '') +
      `Please confirm availability for our countryside retreat at Kesar Bagh. Thank you!`;

    const url = `https://wa.me/${hotelInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleResetAndClose} title="Reserve Your Stay at Kesar Bagh" maxWidth="max-w-3xl">
      {confirmedBooking ? (
        /* Confirmation Voucher Screen */
        <div className="py-4 space-y-6 text-charcoal-900">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-800 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900">
              Reservation Inquiry Confirmed
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-700">
              Booking Voucher Reference: <strong className="text-emerald-900 font-mono tracking-wider">{confirmedBooking.ref}</strong>
            </p>
          </div>

          {/* Voucher Summary Card */}
          <div className="p-5 rounded-xl bg-ivory-100 border-2 border-gold-500/40 shadow-md space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between border-b border-gold-500/20 pb-2">
              <span className="text-charcoal-600">Guest Name:</span>
              <span className="font-bold text-emerald-900">{confirmedBooking.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-gold-500/20 pb-2">
              <span className="text-charcoal-600">Accommodation:</span>
              <span className="font-bold text-emerald-900">{confirmedBooking.roomName}</span>
            </div>
            <div className="flex justify-between border-b border-gold-500/20 pb-2">
              <span className="text-charcoal-600">Duration:</span>
              <span className="font-bold text-emerald-900">
                {confirmedBooking.checkIn} to {confirmedBooking.checkOut} ({confirmedBooking.nights} Nights)
              </span>
            </div>
            <div className="flex justify-between border-b border-gold-500/20 pb-2">
              <span className="text-charcoal-600">Guests & Plan:</span>
              <span className="font-bold text-emerald-900">
                {confirmedBooking.guests} Guests • Plan {confirmedBooking.mealPlan}
              </span>
            </div>
            <div className="flex justify-between pt-1 text-base font-bold text-emerald-950">
              <span>Estimated Total (incl. GST):</span>
              <span className="text-gold-700 font-serif text-lg">₹{confirmedBooking.total.toLocaleString()}</span>
            </div>
          </div>

          {/* Instant WhatsApp Confirmation Button */}
          <div className="space-y-3">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md flex items-center justify-center space-x-2 transition-colors border border-gold-500/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Instant Confirmation via WhatsApp</span>
            </button>

            <button
              onClick={handleResetAndClose}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal-700 hover:bg-ivory-300 rounded-lg transition-colors"
            >
              Done & Return to Website
            </button>
          </div>
        </div>
      ) : (
        /* Reservation Input Form */
        <form onSubmit={handleBookingSubmit} className="space-y-4 text-charcoal-900">
          
          {/* Direct Booking Privilege Alert */}
          <div className="p-3 rounded-lg bg-emerald-900 text-ivory-100 text-xs flex items-center space-x-2 border border-gold-500/40">
            <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Direct booking guarantees complimentary estate nature walk and early check-in subject to availability.</span>
          </div>

          {/* Dates & Room Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                Guests *
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
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
              {roomsData.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} — ₹{r.priceINR.toLocaleString()} / night ({r.size})
                </option>
              ))}
            </select>
          </div>

          {/* Meal Plan Options */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1.5">
              Select Meal Plan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <label className={`p-3 rounded-lg border cursor-pointer transition-all ${mealPlan === 'EP' ? 'border-emerald-700 bg-emerald-50' : 'border-gold-500/30 bg-ivory-100'}`}>
                <input type="radio" name="mealPlan" value="EP" checked={mealPlan === 'EP'} onChange={() => setMealPlan('EP')} className="mr-2" />
                <span className="font-bold text-emerald-900 block">Room Only (EP)</span>
                <span className="text-[11px] text-charcoal-600">Base room rate</span>
              </label>

              <label className={`p-3 rounded-lg border cursor-pointer transition-all ${mealPlan === 'CP' ? 'border-emerald-700 bg-emerald-50' : 'border-gold-500/30 bg-ivory-100'}`}>
                <input type="radio" name="mealPlan" value="CP" checked={mealPlan === 'CP'} onChange={() => setMealPlan('CP')} className="mr-2" />
                <span className="font-bold text-emerald-900 block">Bed & Breakfast (CP)</span>
                <span className="text-[11px] text-gold-700 font-semibold">+₹500 / night</span>
              </label>

              <label className={`p-3 rounded-lg border cursor-pointer transition-all ${mealPlan === 'MAP' ? 'border-emerald-700 bg-emerald-50' : 'border-gold-500/30 bg-ivory-100'}`}>
                <input type="radio" name="mealPlan" value="MAP" checked={mealPlan === 'MAP'} onChange={() => setMealPlan('MAP')} className="mr-2" />
                <span className="font-bold text-emerald-900 block">Breakfast & Dinner (MAP)</span>
                <span className="text-[11px] text-gold-700 font-semibold">+₹1,500 / night</span>
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
          <div className="p-3.5 rounded-lg bg-ivory-300 border border-gold-500/30 text-xs space-y-1.5">
            <div className="flex justify-between">
              <span>{selectedRoom.name} x {nights} Night(s):</span>
              <span className="font-semibold">₹{(roomBasePrice * nights).toLocaleString()}</span>
            </div>
            {mealPrice > 0 && (
              <div className="flex justify-between text-gold-700">
                <span>Meal Plan Add-on ({mealPlan}):</span>
                <span className="font-semibold">₹{(mealPrice * nights).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-charcoal-600">
              <span>Applicable Luxury GST (12%):</span>
              <span>₹{tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gold-500/20 text-sm font-bold text-emerald-950">
              <span>Total Estimated Tariff:</span>
              <span className="font-serif text-base text-emerald-900">₹{total.toLocaleString()}</span>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase text-charcoal-700 hover:bg-ivory-300 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-7 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg flex items-center space-x-2 border border-gold-500/40 transition-all"
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
