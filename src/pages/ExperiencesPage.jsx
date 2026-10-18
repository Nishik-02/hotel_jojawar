import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ActivityDetailModal from '../components/activities/ActivityDetailModal';
import { activitiesData } from '../data/hotelData';
import { 
  Clock, 
  Sparkles, 
  Eye,
  ArrowRight
} from 'lucide-react';

export default function ExperiencesPage() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Page Header (Internal tag removed per screenshot) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
          EXPERIENCES AT KESAR BAGH
        </h1>
        <SectionHeader title="" align="center" className="my-2 mb-4" />
        <p className="text-xs sm:text-base text-charcoal-700 leading-relaxed max-w-2xl mx-auto font-light">
          At Kesar Bagh, the countryside is part of the experience. From leisurely walks and nature experiences to exploring the countryside and discovering the traditions of the region, each experience offers a different way to connect with Rajasthan.
        </p>
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-xs font-serif italic text-gold-900">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Click any card below to view photos and details</span>
        </div>
      </div>

      {/* 12 Experiences Grid (Badges and numbers removed per annotated screenshot) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {activitiesData.map((act) => (
          <div 
            key={act.id}
            onClick={() => setSelectedActivity(act)}
            className="group cursor-pointer bg-ivory-100 rounded-3xl overflow-hidden border border-gold-500/30 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
              <img 
                src={act.image} 
                alt={act.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/20 to-black/10" />

              {/* Duration Pill */}
              <div className="absolute top-3 right-3">
                <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-gold-500 text-emerald-950 text-[11px] font-bold shadow-md">
                  <Clock className="w-3 h-3" />
                  <span>{act.duration}</span>
                </div>
              </div>

              {/* Title on image bottom */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
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
      />

    </div>
  );
}
