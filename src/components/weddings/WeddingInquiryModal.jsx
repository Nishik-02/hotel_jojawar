import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function WeddingInquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Royal Destination Wedding',
    approxGuests: '100-150',
    preferredDate: '',
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Plan Your Heritage Wedding & Celebration" maxWidth="max-w-xl">
      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-gold-500 mx-auto animate-bounce" />
          <h4 className="font-serif text-2xl font-bold text-emerald-900">Proposal Request Received</h4>
          <p className="text-sm text-charcoal-700 max-w-md mx-auto">
            Our dedicated royal wedding concierge will connect with you via WhatsApp & Email within 24 hours to craft your tailored celebration itinerary.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-charcoal-900">
          
          <div className="p-3.5 rounded-lg bg-emerald-900 text-ivory-100 text-xs flex items-center space-x-2 border border-gold-500/40">
            <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Exclusive courtyard & entire palace buyout options available for bespoke royal celebrations.</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Bride / Groom / Organizer"
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 / Country Code"
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@domain.com"
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Event Type
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option>Royal Destination Wedding</option>
                <option>Sangeet & Mehendi Gala</option>
                <option>Anniversary / Milestone Birthday</option>
                <option>Corporate Executive Retreat</option>
                <option>Intimate Family Reunion</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Approx Guests
              </label>
              <select
                value={formData.approxGuests}
                onChange={(e) => setFormData({ ...formData, approxGuests: e.target.value })}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option>Intimate (20 - 50 Guests)</option>
                <option>Mid-sized (50 - 100 Guests)</option>
                <option>Grand (100 - 250 Guests)</option>
                <option>Palace Buyout (Entire Resort)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Tentative Date
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              Celebration Vision & Special Requests
            </label>
            <textarea
              rows={3}
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Specify theme, folk musicians, elephant/horse welcome, royal feast preferences..."
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase text-charcoal-700 hover:bg-ivory-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-7 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 border border-gold-500/40 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Wedding Proposal</span>
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
