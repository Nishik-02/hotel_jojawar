import React from 'react';
import Modal from '../common/Modal';
import { 
  Clock, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Compass, 
  Train, 
  Trees, 
  Footprints, 
  Award, 
  Mountain, 
  Feather, 
  Camera, 
  UtensilsCrossed, 
  Castle, 
  Car
} from 'lucide-react';

const renderIcon = (iconKey) => {
  switch (iconKey) {
    case 'train': return <Train className="w-5 h-5" />;
    case 'jeep': return <Compass className="w-5 h-5" />;
    case 'jungle': return <Trees className="w-5 h-5" />;
    case 'village': return <Footprints className="w-5 h-5" />;
    case 'horse': return <Award className="w-5 h-5" />;
    case 'trekking': return <Mountain className="w-5 h-5" />;
    case 'bird': return <Feather className="w-5 h-5" />;
    case 'camera': return <Camera className="w-5 h-5" />;
    case 'culinary': return <UtensilsCrossed className="w-5 h-5" />;
    case 'fort': return <Castle className="w-5 h-5" />;
    case 'vintage': return <Car className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
};

export default function ActivityDetailModal({ isOpen, onClose, activity, onBookActivity }) {
  if (!activity) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={activity.title}
      subtitle={`${activity.category} • Duration: ${activity.duration}`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6 p-1 sm:p-2">
        
        {/* Visual Hero Banner with Symbol */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-gold-500/40 shadow-royal">
          <img 
            src={activity.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop'} 
            alt={activity.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <span className="p-2.5 rounded-xl bg-emerald-900/90 backdrop-blur-md text-gold-300 border border-gold-500/40 shadow-lg">
              {renderIcon(activity.iconKey || activity.type)}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-gold-300 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
              {activity.category}
            </span>
          </div>

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

        {/* Gallery */}
        {activity.gallery && activity.gallery.length > 0 && (
          <div className="space-y-3 mt-6">
            <h4 className="font-serif text-lg font-bold text-emerald-950 border-b border-gold-500/20 pb-2">
              Experience Gallery
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {activity.gallery.map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3] border border-gold-500/30 shadow-sm">
                  <img src={img} alt={`${activity.title} view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-charcoal-600 italic text-center sm:text-left">
            Arranged and guided on-demand by Kesar Bagh Travel Desk
          </span>

          <button
            onClick={() => {
              onClose();
              if (onBookActivity) onBookActivity(activity);
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-gold-200 hover:text-white font-bold text-xs uppercase tracking-widest shadow-gold transition-all flex items-center justify-center space-x-2 border border-gold-500/50 group"
          >
            <Calendar className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
            <span>INQUIRE / BOOK THIS EXPERIENCE</span>
          </button>
        </div>

      </div>
    </Modal>
  );
}
