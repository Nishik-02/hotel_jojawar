import React, { useState } from 'react';
import { hotelInfo } from '../../data/hotelData';
import { MessageSquare, Sparkles, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = hotelInfo.whatsapp.replace('+', '');
  const message = encodeURIComponent("Hello! I am planning a visit to Kesar Bagh and would like to inquire about room reservations & experiences.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center select-none">
      
      {/* Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 mr-3 px-3.5 py-1.5 rounded-lg bg-ivory-100 text-emerald-950 border border-gold-500/50 shadow-royal text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Chat with Royal Concierge</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-0.5 rounded text-charcoal-700 hover:text-charcoal-900 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Circular Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white flex items-center justify-center shadow-royal-lg hover:shadow-gold transition-all duration-300 transform hover:scale-105 animate-pulse-subtle border-2 border-gold-400"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.769.814 2.797.814 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.769-5.771-5.77zm3.376 8.209c-.14.394-.813.729-1.127.777-.314.047-.723.08-2.128-.482-1.688-.675-2.774-2.39-2.859-2.502-.084-.113-.687-.914-.687-1.743 0-.829.434-1.238.588-1.408.154-.17.337-.212.449-.212.112 0 .225.002.323.007.104.005.244-.04.382.292.14.338.477 1.166.519 1.251.042.085.07.184.014.296-.056.113-.084.183-.168.282-.085.099-.178.221-.254.297-.085.084-.173.176-.075.344.099.169.439.724.942 1.172.648.577 1.194.756 1.363.841.169.085.267.071.366-.042.099-.113.422-.493.535-.662.113-.169.225-.141.379-.084.155.056.984.464 1.153.549.169.085.281.127.323.197.042.07.042.408-.098.802z" />
          <path d="M12.016 2.001C6.49 2.001 2 6.492 2 12.018c0 1.954.561 3.784 1.536 5.34L2 22l4.821-1.503c1.5 1.01 3.284 1.521 5.195 1.521 5.526 0 10.016-4.49 10.016-10.018 0-5.526-4.49-10.017-10.016-10.017zm0 18.232c-1.637 0-3.178-.475-4.489-1.298l-.322-.202-2.87.893.905-2.798-.21-.334c-.889-1.41-1.36-3.037-1.36-4.71 0-4.606 3.747-8.354 8.346-8.354 4.6 0 8.346 3.748 8.346 8.354 0 4.606-3.746 8.349-8.346 8.349z" />
        </svg>

        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-gold-400 border-2 border-emerald-950 rounded-full"></span>
      </a>

    </div>
  );
}
