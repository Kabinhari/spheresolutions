import React from "react";

// Custom Sphere IT Solution mark: a sphere built from connected nodes.
// Works in full color (default) and monochrome (pass mono).
export const Logo = ({ className = "", showText = true, mono = false }) => {
  const grad = mono ? "currentColor" : "url(#sphereGrad)";
  const ring = mono ? "currentColor" : "#0A438C";
  const accent = mono ? "currentColor" : "#00A3FF";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="sphereGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A438C" />
            <stop offset="1" stopColor="#00A3FF" />
          </linearGradient>
        </defs>
        {/* Outer sphere */}
        <circle cx="24" cy="24" r="20" stroke={grad} strokeWidth="2.5" />
        {/* Longitude / latitude lines suggesting a globe */}
        <ellipse cx="24" cy="24" rx="9" ry="20" stroke={ring} strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="4" y1="24" x2="44" y2="24" stroke={ring} strokeOpacity="0.4" strokeWidth="1.5" />
        {/* Connecting edges */}
        <path d="M24 4 L38 17 M24 44 L10 31 M10 17 L38 31" stroke={accent} strokeOpacity="0.5" strokeWidth="1.4" />
        {/* Nodes */}
        <circle cx="24" cy="4" r="3" fill={grad} />
        <circle cx="38" cy="17" r="3" fill={grad} />
        <circle cx="38" cy="31" r="3" fill={accent} />
        <circle cx="24" cy="44" r="3" fill={grad} />
        <circle cx="10" cy="31" r="3" fill={grad} />
        <circle cx="10" cy="17" r="3" fill={accent} />
        <circle cx="24" cy="24" r="3.5" fill={grad} />
      </svg>
      {showText && (
        <span className="font-heading font-bold text-[1.15rem] leading-none tracking-tight">
          Sphere<span className={mono ? "" : "text-brand"}> IT</span> Solution
        </span>
      )}
    </span>
  );
};

export default Logo;
