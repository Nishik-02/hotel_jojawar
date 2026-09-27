import React from 'react';
import Modal from '../common/Modal';
import { aboutData, hotelInfo } from '../../data/hotelData';
import { Crown, Trees, Sparkles, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import heroPoolImg from '../../assets/images/hero-pool.jpg';

export default function HeritageStoryModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="The Story of Kesar Bagh"
      subtitle="A Family Story, Reimagined in Nature • Jojawar, Rajasthan"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8 p-1 sm:p-2">
        
        {/* Banner Image */}
        <div className="relative rounded-xl overflow-hidden aspect-[21/9] border border-gold-500/40 shadow-md">
          <img
            src={heroPoolImg}
            alt="Kesar Bagh Estate and Aravalli Countryside"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <span className="text-[11px] uppercase font-bold tracking-widest text-gold-300 block">
              The Living Landscape
            </span>
            <h3 className="font-serif text-2xl font-bold text-ivory-100">
              Kesar Bagh & The Aravalli Hills
            </h3>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-6 text-charcoal-800">
          {aboutData.sections.map((sec) => (
            <div key={sec.id} className="p-5 rounded-xl bg-ivory-100 border border-gold-500/25 space-y-3">
              <h4 className="font-serif text-xl font-bold text-emerald-900 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 inline-block"></span>
                <span>{sec.heading}</span>
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-charcoal-800/90">
                {sec.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {sec.linkUrl && (
                <div className="pt-2">
                  <a
                    href={sec.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-800 hover:text-emerald-600 underline"
                  >
                    <span>{sec.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>



      </div>
    </Modal>
  );
}
