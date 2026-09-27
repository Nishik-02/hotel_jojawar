import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ActivityCard from './ActivityCard';
import ActivityDetailModal from './ActivityDetailModal';
import { activitiesData } from '../../data/hotelData';
import { Compass, Clock, Sparkles } from 'lucide-react';

export default function ActivitiesSection({ onOpenBooking }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'SAFARIS & DRIVES', 'EQUESTRIAN & TRAILS', 'VILLAGE & CRAFTS', 'SUNSETS & DINING'];

  const filteredActivities = activitiesData.filter((act) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'SAFARIS & DRIVES') {
      return ['train-safari', 'jeep-safari', 'jungle-drive', 'vintage-car-sundowner'].includes(act.id);
    }
    if (activeFilter === 'EQUESTRIAN & TRAILS') {
      return ['horse-riding', 'trekking', 'bird-watching'].includes(act.id);
    }
    if (activeFilter === 'VILLAGE & CRAFTS') {
      return ['village-walk', 'photography'].includes(act.id);
    }
    if (activeFilter === 'SUNSETS & DINING') {
      return ['cooking-demo', 'hike-to-fort', 'vintage-car-sundowner'].includes(act.id);
    }
    return true;
  });

  const handleExplore = (activity) => {
    setSelectedActivity(activity);
  };

  const handleBookActivity = (activity) => {
    if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <section id="experiences" className="py-16 md:py-24 bg-ivory-200 relative overflow-hidden">
      
      {/* Background Jali Pattern */}
      <div className="absolute inset-0 bg-jali-pattern pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-700 mb-2">
            Experience Rural Rajasthan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 tracking-tight leading-tight">
            Experiences at Kesar Bagh
          </h2>
          <SectionHeader title="" align="center" className="my-2 mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            At Kesar Bagh, the countryside is part of the experience. From leisurely walks and nature experiences to exploring the countryside and discovering the traditions of the region, each experience offers a different way to connect with Rajasthan.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-emerald-700 text-gold-200 shadow-md border border-gold-500/50'
                  : 'bg-ivory-100 hover:bg-ivory-300 text-charcoal-800 border border-gold-500/25'
              }`}
            >
              {cat === 'ALL' ? 'All 11 Experiences' : cat}
            </button>
          ))}
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onExplore={handleExplore}
            />
          ))}
        </div>

      </div>

      {/* Activity Detail Modal */}
      <ActivityDetailModal
        isOpen={Boolean(selectedActivity)}
        onClose={() => setSelectedActivity(null)}
        activity={selectedActivity}
        onBookActivity={handleBookActivity}
      />
    </section>
  );
}
