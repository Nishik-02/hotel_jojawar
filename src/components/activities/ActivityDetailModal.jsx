import React from 'react';
import Modal from '../common/Modal';
import { 
  Clock, 
  Sparkles, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function ActivityDetailModal({ isOpen, onClose, activity }) {
  if (!activity) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={activity.title}
      subtitle={`Duration: ${activity.duration}`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6 p-1 sm:p-2">
        
        {/* Visual Hero Banner without category badge overlay */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-gold-500/40 shadow-royal">
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-gold-500 text-emerald-950 text-xs font-bold shadow-md">
              <Clock className="w-3.5 h-3.5" />
              <span>{activity.duration}</span>
            </div>
            <div className="text-xs text-ivory-200 font-light flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Jojawar, Aravalli Hills</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        {activity.highlights && activity.highlights.length > 0 && (
          <div className="bg-ivory-100 rounded-2xl p-5 border border-gold-500/30 space-y-3">
            <h4 className="font-serif text-sm font-bold text-emerald-950 uppercase tracking-wider flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span>Experience Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-charcoal-800">
              {activity.highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Narrative */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg font-bold text-emerald-950 border-b border-gold-500/20 pb-2">
            The Complete Story & Details
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-normal whitespace-pre-line">
            {activity.fullDesc}
          </p>
        </div>

        {/* Gallery - All images in folder */}
        {activity.gallery && activity.gallery.length > 0 && (
          <div className="space-y-3 mt-6">
            <h4 className="font-serif text-lg font-bold text-emerald-950 border-b border-gold-500/20 pb-2">
              Experience Gallery
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activity.gallery.map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3] border border-gold-500/30 shadow-sm">
                  <img src={img} alt={`${activity.title} view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </Modal>
  );
}
