import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import { Trees, Sun, Users, Bird, Heart, Compass, ShieldCheck, Feather, ExternalLink } from 'lucide-react';
import { hotelInfo } from '../../data/hotelData';

function AnimatedNumber({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const steps = 30;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gold-300 tracking-tight">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const statsList = [
    {
      target: 150,
      suffix: " Acres",
      label: "Returned to Nature",
      desc: "Former farmland given the opportunity to breathe & regenerate"
    },
    {
      target: 12,
      suffix: " Units",
      label: "Rooms & Suites",
      desc: "10 Luxury Rooms and 2 Kesar Bagh Suites with plunge pools & terraces"
    },
    {
      target: 100,
      suffix: "%",
      label: "Solar Hot Water",
      desc: "Renewable energy & responsible ecological stewardship"
    },
    {
      target: 170,
      suffix: "+",
      label: "Bird Species",
      desc: "Diverse resident & migratory bird sanctuary near Rainia Dam"
    }
  ];

  const pillars = [
    {
      title: "150-Acre Nature Regeneration",
      desc: "Surrounded by native vegetation, seasonal water bodies, and the scenic landscapes of the Aravalli Hills.",
      icon: Trees
    },
    {
      title: "Recreated by Maharaj Singh Ji",
      desc: "Thoughtfully recreated by the present Rao Sahib of Jojawar to preserve family heritage and Rajasthan's natural character.",
      icon: Heart
    },
    {
      title: "An Unhurried Pace of Life",
      desc: "No crowded streets to navigate. Ample time to walk the estate, watch birds, sit under a tree, and breathe deeply.",
      icon: Feather
    },
    {
      title: "Rich Aravalli Biodiversity",
      desc: "An ecotone of Dhok & Flame of the Forest trees supporting wildlife including leopards, sloth bears, sambar deer, and rare four-horned antelopes.",
      icon: Bird
    },
    {
      title: "11 Curated Countryside Safaris",
      desc: "Historic 1930s metre-gauge train safari, vintage Chevrolet rides, Marwari horse treks, and Rabari village walks.",
      icon: Compass
    },
    {
      title: "Deeply Rooted in Jojawar",
      desc: "Generations of family history dating back to 18th-century garrison commanders, connected with sister heritage hotel Rawla Jojawar.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-emerald-900 text-white relative overflow-hidden">
      
      {/* Background Gold Grid / Jali */}
      <div className="absolute inset-0 bg-gold-jali opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-transparent to-emerald-950/80 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-2">
            The Kesar Bagh Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-100 tracking-tight leading-tight">
            Why Choose Kesar Bagh
          </h2>
          <SectionHeader title="" align="center" light={true} className="my-2 mb-4" />
        </div>

        {/* Animated Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {statsList.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-emerald-950/80 border border-gold-500/30 backdrop-blur-sm text-center flex flex-col items-center justify-center shadow-royal hover:border-gold-400/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <AnimatedNumber target={stat.target} suffix={stat.suffix} />
              
              <h3 className="font-serif text-base sm:text-lg font-bold text-ivory-100 mt-2">
                {stat.label}
              </h3>
              <p className="text-[11px] text-ivory-300/80 mt-1 max-w-[200px] leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 6 Core Sanctuary Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-emerald-950/60 border border-gold-500/25 hover:border-gold-400/60 transition-all duration-300 flex items-start space-x-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-800 border border-gold-500/40 flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-emerald-950 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-gold-200 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-ivory-300/80 mt-1.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sister Heritage Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-emerald-950/90 border border-gold-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-[10px] text-gold-400 uppercase font-bold tracking-widest block">Part of the Jojawar Family</span>
            <h4 className="font-serif text-lg font-bold text-ivory-100">
              Discover Rawla Jojawar Heritage Hotel
            </h4>
            <p className="text-xs text-ivory-300 mt-0.5">
              For those wishing to discover another side of our heritage, visit our historic family home in Jojawar village.
            </p>
          </div>
          <a
            href={hotelInfo.rawlaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Explore Rawla Jojawar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
