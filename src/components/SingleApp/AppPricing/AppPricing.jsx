import { useState } from "react";
import { renderPriceHtml } from "../../../utils/priceHelper";
import { SaleBadge } from "../../Badges/Badges";
import "./AppPricing.css";

/**
 * Pricing & License Component
 *
 * @param {Object} props
 * @param {Object} props.monetization - Monetization object from API
 * @returns {JSX.Element}
 */
export default function AppPricing({ monetization }) {
  if (!monetization || !monetization.tiers?.length) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTier = monetization.tiers[activeIndex];

  return (
    <div className="app-pricing">
      <h3>Pricing & Licenses</h3>

      {/* Switcher Tabs */}
      <div className="tier-selection-container">
        <select
          className="tier-switcher"
          id="tier-switcher"
          value={activeIndex}
          onChange={(e) => setActiveIndex(Number(e.target.value))}
        >
          {monetization.tiers.map((tier, index) => (
            <option key={tier.id} value={index}>
              {tier.name}
            </option>
          ))}
        </select>
      </div>

      {/* Active Tier Card */}
      <div className="pricing-card">
        <h4 className="tier-name">{activeTier.name}</h4>

        <p className="tier-price">
          {renderPriceHtml(
            activeTier.product,
            activeTier.product.currency,
            activeTier.billing_cycle
          )}
        </p>

        {activeTier.features?.length > 0 && (
          <ul className="tier-features">
            {activeTier.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}

        <a
          href={activeTier.product.checkout_url}
          target="_blank"
          rel="n"
          className="buy-button"
        >
          Purchase
        </a>

        {activeTier.product.pricing.is_on_sale && <SaleBadge />}
      </div>
    </div>
  );
}
