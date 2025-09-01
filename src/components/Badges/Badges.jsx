// src/components/Badges/Badges.jsx

/**
 * Ribbon-style badge for "SALE"
 */
export function SaleBadge({
  width = 100,
  height = 100,
  ariaLabel = "Sale",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, right: 0 }}
    >
      <title>{ariaLabel}</title>
      <defs>
        <linearGradient id="saleRibbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
      </defs>

      <polygon points="100,0 100,40 60,0" fill="url(#saleRibbon)" />

      <text
        x="82"
        y="18"
        transform="rotate(45, 82, 18)"
        fill="#fff"
        fontSize="12"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Helvetica Neue, sans-serif"
        fontWeight="700"
        textAnchor="middle"
      >
        SALE
      </text>
    </svg>
  );
}

/**
 * Ribbon-style badge for "FREE"
 */
export function FreeBadge({
  width = 100,
  height = 100,
  ariaLabel = "Free",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, right: 0 }}
    >
      <title>{ariaLabel}</title>
      <defs>
        <linearGradient id="freeRibbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>

      <polygon points="100,0 100,40 60,0" fill="url(#freeRibbon)" />

      <text
        x="82"
        y="18"
        transform="rotate(45, 82, 18)"
        fill="#fff"
        fontSize="12"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Helvetica Neue, sans-serif"
        fontWeight="700"
        textAnchor="middle"
      >
        FREE
      </text>
    </svg>
  );
}

/**
 * Ribbon-style badge for "PREMIUM"
 */
export function PremiumBadge({
  width = 120,
  height = 120,
  ariaLabel = "Premium",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, right: 0 }}
    >
      <title>{ariaLabel}</title>
      <defs>
        <linearGradient id="premiumRibbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FACC15" />   {/* Bright gold */}
          <stop offset="100%" stopColor="#CA8A04" /> {/* Deep gold */}
        </linearGradient>
      </defs>

      {/* Bigger ribbon area */}
      <polygon points="120,0 120,50 70,0" fill="url(#premiumRibbon)" />

      {/* Adjusted text position */}
      <text
        x="100"
        y="22"
        transform="rotate(45, 95, 22)"
        fill="#fff"
        fontSize="11"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Helvetica Neue, sans-serif"
        fontWeight="700"
        textAnchor="middle"
      >
        PREMIUM
      </text>
    </svg>
  );
}
