import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-3xl" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with subtle blur */}
      <div 
        className="fixed inset-0 bg-charcoal-900/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className={`relative w-full ${maxWidth} bg-ivory-200 rounded-xl shadow-2xl border border-gold-500/40 overflow-hidden z-10 my-8 transition-all duration-300 transform`}>
        {/* Modal Header */}
        <div className="bg-emerald-800 px-6 py-4 flex items-center justify-between border-b border-gold-500/30 text-white">
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gold-200">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gold-300/80 hover:text-white hover:bg-emerald-700 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto bg-ivory-200">
          {children}
        </div>
      </div>
    </div>
  );
}
