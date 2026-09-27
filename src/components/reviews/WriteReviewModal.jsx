import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Star, Send, CheckCircle2 } from 'lucide-react';

export default function WriteReviewModal({ isOpen, onClose, onReviewSubmitted }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onReviewSubmitted) {
        onReviewSubmitted({
          id: Date.now(),
          name,
          location: location || 'Verified Guest',
          rating,
          date: 'Just now',
          review
        });
      }
      setSubmitted(false);
      setName('');
      setLocation('');
      setReview('');
      onClose();
    }, 1200);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Your Heritage Experience" maxWidth="max-w-lg">
      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-gold-500 mx-auto animate-bounce" />
          <h4 className="font-serif text-2xl font-bold text-emerald-900">Thank You!</h4>
          <p className="text-sm text-charcoal-700">
            Your review has been received and added to our guestbook.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-charcoal-900">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Eleanor & George"
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700 focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              Your City / Country
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. London, UK"
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-700 focus:border-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              Your Rating
            </label>
            <div className="flex items-center space-x-1.5 pt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 text-gold-500 hover:scale-125 transition-transform focus:outline-none"
                >
                  <Star className={`w-5 h-5 ${star <= rating ? 'fill-gold-500 text-gold-500' : 'text-gold-200'}`} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              Your Review / Memories *
            </label>
            <textarea
              required
              rows={4}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your stay, the hospitality, the food, the safaris, or your favorite moments..."
              className="w-full bg-ivory-100 border border-gold-500/30 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-emerald-700 focus:border-gold-500"
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
              className="px-6 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 border border-gold-500/40"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Review</span>
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
