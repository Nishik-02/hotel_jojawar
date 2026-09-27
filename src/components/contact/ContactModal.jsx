import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Send, CheckCircle2, Phone, Mail } from 'lucide-react';
import { hotelInfo } from '../../data/hotelData';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Hotel Concierge" maxWidth="max-w-xl">
      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-gold-500 mx-auto animate-bounce" />
          <h4 className="font-serif text-2xl font-bold text-emerald-900">Message Received</h4>
          <p className="text-sm text-charcoal-700">
            Thank you for reaching out. Our front desk manager will contact you promptly.
          </p>
        </div>
      ) : (
        <div className="space-y-5 text-charcoal-900">
          
          {/* Direct Contacts Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-lg bg-ivory-100 border border-gold-500/30 text-xs">
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <div>
                <span className="font-bold text-emerald-900 block">Reservations:</span>
                <a href={hotelInfo.phones[0].link} className="hover:underline text-charcoal-800">{hotelInfo.phones[0].display}</a>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <div>
                <span className="font-bold text-emerald-900 block">Email:</span>
                <a href={`mailto:${hotelInfo.email}`} className="hover:underline text-charcoal-800">{hotelInfo.email}</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full Name"
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
                  placeholder="name@email.com"
                  className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option>Room Reservations</option>
                  <option>Train / Jeep Safari Booking</option>
                  <option>Marwari Stables & Riding</option>
                  <option>Destination Weddings</option>
                  <option>Airport Transfers</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                Your Message *
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How may our royal concierge assist your upcoming visit?"
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
                className="px-7 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 border border-gold-500/40 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Inquiries</span>
              </button>
            </div>
          </form>

        </div>
      )}
    </Modal>
  );
}
