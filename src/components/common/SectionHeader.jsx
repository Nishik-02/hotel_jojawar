import React from 'react';
import HeritageDivider from './HeritageDivider';

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className={`inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 ${light ? 'text-gold-300' : 'text-emerald-700'}`}>
          {subtitle}
        </span>
      )}
      
      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${light ? 'text-ivory-200' : 'text-emerald-900'}`}>
          {title}
        </h2>
      )}

      <HeritageDivider light={light} className={isCenter ? 'mx-auto' : 'mr-auto'} />

      {description && (
        <p className={`mt-3 text-sm md:text-base leading-relaxed ${light ? 'text-ivory-300/90' : 'text-charcoal-700'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
