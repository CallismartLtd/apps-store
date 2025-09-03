/**
 * Error badge (red)
 */
export function ErrorBadge({ width = 32, height = 32, ariaLabel = "Error" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="12" fill="#DC3545" />
      <line x1="8" y1="8" x2="16" y2="16" stroke="#fff" strokeWidth="2" />
      <line x1="16" y1="8" x2="8" y2="16" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

/**
 * Warning badge (yellow/orange)
 */
export function WarningBadge({ width = 32, height = 32, ariaLabel = "Warning" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="12" fill="#FFC107" />
      <line x1="12" y1="6" x2="12" y2="14" stroke="#212529" strokeWidth="2" />
      <circle cx="12" cy="18" r="1" fill="#212529" />
    </svg>
  );
}

/**
 * Info badge (blue)
 */
export function InfoBadge({ width = 32, height = 32, ariaLabel = "Info" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="12" fill="#0D6EFD" />
      <line x1="12" y1="10" x2="12" y2="16" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="7" r="1" fill="#fff" />
    </svg>
  );
}

/**
 * Spanner icon
 */
export function SpannerIcon({ width = 40, height = 40 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -0.5 17 17"
      xmlns="http://www.w3.org/2000/svg"
      fill="#434343"
    >
      <title>Spanner</title>
      <path
        d="M6.838,11.784 L12.744,5.879 C13.916,6.484 15.311,6.372 16.207,5.477 C16.897,4.786 17.131,3.795 16.923,2.839 L15.401,4.358 L14.045,4.624 L12.404,2.999 L12.686,1.603 L14.195,0.113 C13.24,-0.095 12.248,0.136 11.557,0.827 C10.661,1.723 10.549,3.117 11.155,4.291 L5.249,10.197 C4.076,9.592 2.681,9.705 1.784,10.599 C1.096,11.29 0.862,12.281 1.069,13.236 L2.592,11.717 L3.947,11.452 L5.59,13.077 L5.306,14.473 L3.797,15.963 C4.752,16.17 5.744,15.94 6.434,15.249 C7.33,14.354 7.443,12.958 6.838,11.784 Z"
      />
    </svg>
  );
}


/**
 * Modern animated technician fixing an issue
 */
export function TechnicianIcon({ width = 140, height = 140 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Server Rack */}
      <rect x="80" y="50" width="60" height="80" fill="#374151" rx="4" />
      {/* Server panels */}
      <rect x="85" y="55" width="50" height="15" fill="#dcdcde" rx="2" />
      <rect x="85" y="75" width="50" height="15" fill="#dcdcde" rx="2" />
      <rect x="85" y="95" width="50" height="15" fill="#dcdcde" rx="2" />
      {/* Blinking server lights */}
      <circle cx="140" cy="62" r="8" fill="#ff0000ff">
        <animate
          attributeName="fill"
          values="red;transparent;red"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="140" cy="82" r="8" fill="red">
        <animate
          attributeName="fill"
          values="red;transparent;red"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="140" cy="102" r="8" fill="red">
        <animate
          attributeName="fill"
          values="red;transparent;red"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Technician */}
      <circle cx="70" cy="50" r="10" fill="#FCD34D" /> {/* Head */}
      <rect x="60" y="60" width="20" height="35" fill="#3B82F6" rx="4" /> {/* Body */}
      {/* Helmet */}
      <path
        d="M60 50 Q70 35 80 50 Z"
        fill="#F87171"
        stroke="#B91C1C"
        strokeWidth="1"
      />
      {/* Arms */}
      <rect x="50" y="62" width="10" height="25" fill="#374151" rx="2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 55 62;15 55 62;0 55 62"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="70" y="62" width="10" height="25" fill="#374151" rx="2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 75 62;-15 75 62;0 75 62"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Legs */}
      <rect x="60" y="95" width="6" height="20" fill="#1F2937" rx="2" /> {/* Left leg */}
      <rect x="74" y="95" width="6" height="20" fill="#1F2937" rx="2" /> {/* Right leg */}

      {/* Wrench */}
      <rect x="75" y="80" width="20" height="4" fill="#D97706" rx="1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 75 82;20 75 82;0 75 82"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

