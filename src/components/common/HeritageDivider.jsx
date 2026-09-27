import React from 'react';

export default function HeritageDivider({ className = "", light = false }) {
  const goldColor = light ? "#EAD9A8" : "#C6A15B";
  const centerColor = light ? "#D8BD78" : "#174A35";

  return (
    <div className={`flex items-center justify-center my-3 select-none ${className}`} aria-hidden="true">
      {/* Royal Rajasthani Scroll Flourish Divider in Antique Gold */}
      <svg 
        className="w-48 sm:w-64 md:w-72 h-7 text-gold-500" 
        viewBox="0 0 300 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Horizontal Line with Taper */}
        <line x1="10" y1="15" x2="70" y2="15" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Left Flourish Scrolls */}
        <path d="M70 15 C85 6, 95 6, 110 15 C120 21, 130 20, 140 15" stroke={goldColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M80 15 C85 22, 100 22, 108 15" stroke={goldColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <circle cx="75" cy="11" r="1.5" fill={goldColor} />
        <circle cx="105" cy="19" r="1.5" fill={goldColor} />

        {/* Center Diamond / Gemstone Motif */}
        <path d="M150 6 L158 15 L150 24 L142 15 Z" fill={centerColor} stroke={goldColor} strokeWidth="1" />
        <circle cx="150" cy="15" r="2.5" fill={goldColor} />
        
        {/* Right Flourish Scrolls */}
        <path d="M160 15 C170 20, 180 21, 190 15 C205 6, 215 6, 230 15" stroke={goldColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M192 15 C200 22, 215 22, 220 15" stroke={goldColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <circle cx="195" cy="19" r="1.5" fill={goldColor} />
        <circle cx="225" cy="11" r="1.5" fill={goldColor} />

        {/* Right Horizontal Line */}
        <line x1="230" y1="15" x2="290" y2="15" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
