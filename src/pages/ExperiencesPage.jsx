import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ActivityDetailModal from '../components/activities/ActivityDetailModal';
import { activitiesData } from '../data/hotelData';
import { 
  Clock, 
  Sparkles, 
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
  Car,
  Eye,
  ArrowRight,
  Calendar
} from 'lucide-react';

const renderExperienceIcon = (iconKey) => {
  switch (iconKey) {
    case 'train': return <Train className="w-5 h-5 text-gold-400" />;
    case 'jeep': return <Compass className="w-5 h-5 text-gold-400" />;
    case 'jungle': return <Trees className="w-5 h-5 text-gold-400" />;
    case 'village': case 'town': return <Footprints className="w-5 h-5 text-gold-400" />;
    case 'horse': return <Award className="w-5 h-5 text-gold-400" />;
    case 'trekking': return <Mountain className="w-5 h-5 text-gold-400" />;
    case 'bird': return <Feather className="w-5 h-5 text-gold-400" />;
    case 'camera': return <Camera className="w-5 h-5 text-gold-400" />;
    case 'culinary': return <UtensilsCrossed className="w-5 h-5 text-gold-400" />;
    case 'fort': return <Castle className="w-5 h-5 text-gold-400" />;
    case 'vintage': return <Car className="w-5 h-5 text-gold-400" />;
    default: return <Sparkles className="w-5 h-5 text-gold-400" />;
  }
};

export default function ExperiencesPage({ onOpenBooking }) {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-700">
          PAGE 4 – EXPERIENCES
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          EXPERIENCES AT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="text-xs sm:text-base text-charcoal-700 leading-relaxed max-w-2xl mx-auto font-light">
          At Kesar Bagh, the countryside is part of the experience. From leisurely walks and nature experiences to exploring the countryside and discovering the traditions of the region, each experience offers a different way to connect with Rajasthan.
        </p>
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-xs font-serif italic text-gold-900">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Click any visual card or symbol below to read the complete experience story</span>
        </div>
      </div>

      {/* 11 Experiences Visual Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {activitiesData.map((act, index) => (
          <div 
            key={act.id}
            onClick={() => setSelectedActivity(act)}
            className="group cursor-pointer bg-ivory-100 rounded-3xl overflow-hidden border border-gold-500/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Thumbnail with Symbol & Badges */}
            <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
              <img 
                src={act.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'} 
                alt={act.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/20 to-black/20" />
              
              {/* Symbol / Icon Badge */}
              <div className="absolute top-3 left-3 flex items-center space-x-2">
                <div className="p-2.5 rounded-xl bg-emerald-950/85 backdrop-blur-md border border-gold-500/40 shadow-lg">
                  {renderExperienceIcon(act.iconKey || act.type)}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-900/80 backdrop-blur-md text-gold-300 text-[10px] font-bold uppercase tracking-wider border border-gold-500/30">
                  {act.category}
                </span>
              </div>

              {/* Duration Pill */}
              <div className="absolute top-3 right-3">
                <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-gold-500 text-emerald-950 text-[11px] font-bold shadow-md">
                  <Clock className="w-3 h-3" />
                  <span>{act.duration}</span>
                </div>
              </div>

              {/* Number Tag & Title */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400">
                  Experience {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory-100 drop-shadow-sm group-hover:text-gold-300 transition-colors">
                  {act.title}
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-normal line-clamp-3">
                {act.shortDesc || act.fullDesc}
              </p>

              <div className="pt-3 border-t border-gold-500/20 flex items-center justify-between">
                <span
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 group-hover:text-gold-700 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenBooking) onOpenBooking({ specialRequests: `Inquiry for ${act.title}` });
                  }}
                  className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-gold-300 hover:text-white transition-colors shadow-sm"
                  title="Inquire this experience"
                >
                  <Calendar className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Detail Modal Dialog */}
      <ActivityDetailModal 
        isOpen={Boolean(selectedActivity)}
        onClose={() => setSelectedActivity(null)}
        activity={selectedActivity}
        onBookActivity={(act) => {
          if (onOpenBooking) onOpenBooking({ specialRequests: `Booking Inquiry: ${act.title} (${act.duration})` });
        }}
      />

    </div>
  );
}
