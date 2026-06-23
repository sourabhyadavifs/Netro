import React from "react";

interface NetroLogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export default function NetroLogo({ className = "", showText = true, size = 40 }: NetroLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="netro-logo-container">
      {/* SVG Emblem representing the exact orange circular network/globe logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-6"
        aria-hidden="true"
        id="netro-logo-svg"
      >
        {/* Crisp Orange-Red Circle Background */}
        <circle cx="250" cy="250" r="230" fill="#f95716" />

        {/* Delicate white network orbit lines */}
        <ellipse cx="250" cy="250" rx="160" ry="80" stroke="#ffffff" strokeWidth="4" strokeDasharray="8 8" opacity="0.4" transform="rotate(30 250 250)" />
        <ellipse cx="250" cy="250" rx="160" ry="80" stroke="#ffffff" strokeWidth="4" strokeDasharray="8 8" opacity="0.4" transform="rotate(-30 250 250)" />

        {/* Global grid of longitude & latitude */}
        <circle cx="250" cy="250" r="140" stroke="#ffffff" strokeWidth="5" strokeOpacity="0.25" />
        <circle cx="250" cy="250" r="100" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.15" />

        {/* Dark atomic/orbital loops (representing the networks) */}
        <ellipse cx="250" cy="250" rx="190" ry="90" stroke="#111827" strokeWidth="7" transform="rotate(45 250 250)" strokeLinecap="round" />
        <ellipse cx="250" cy="250" rx="190" ry="90" stroke="#111827" strokeWidth="7" transform="rotate(-45 250 250)" strokeLinecap="round" />

        {/* Curved hand-like connection nodes on the globe */}
        <path d="M 120 180 Q 150 140 200 130" stroke="#111827" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M 380 320 Q 350 360 300 370" stroke="#111827" strokeWidth="8" strokeLinecap="round" fill="none" />
        
        {/* Hand node dots */}
        <circle cx="200" cy="130" r="10" fill="#111827" />
        <circle cx="300" cy="370" r="10" fill="#111827" />

        {/* Bold NETRO typography tilted exactly like the attached logo */}
        <g transform="rotate(-18 250 250)">
          {/* Subtle drop shadow/glow behind the text to separate it from lines */}
          <text
            x="250"
            y="280"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="102"
            fill="#111827"
            textAnchor="middle"
            stroke="#ffffff"
            strokeWidth="16"
            strokeLinejoin="round"
            letterSpacing="2"
          >
            NETRO
          </text>
          {/* Core Crisp Text */}
          <text
            x="250"
            y="280"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="102"
            fill="#111827"
            textAnchor="middle"
            letterSpacing="2"
          >
            NETRO
          </text>
        </g>
      </svg>

      {showText && (
        <span 
          className="font-display font-bold tracking-tight text-xl text-gray-900"
          id="netro-brand-text"
        >
          Netro
        </span>
      )}
    </div>
  );
}
