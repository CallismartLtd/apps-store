import { storeConfig } from "../../../config";
import "./Loading.css";

/**
 * Skeleton loader for homepage grid and single app detail.
 *
 * @param {number} count - Number of skeleton cards to render in grid.
 * @param {"grid" | "single"} variant - Which skeleton layout to use.
 * @param {boolean} showTitle - Show store title (homepage only).
 * @param {boolean} monetized - Show pricing panel in single view.
 * @returns {JSX.Element}
 */
export default function Loading( { count = 20, variant = "grid", showTitle = true, monetized = false } ) {
  if (variant === "single") {
    return (
      <div className="single-loading">
        {/* header section: main app data + technical meta + optional pricing */}
        <div className="single-app_header-section">
          <div className="single-app_header-app-data">
            {/* === AppHeader skeleton === */}
            <div className="app-header">
              <div className="skeleton skeleton-logo" />
              <div className="app-header_info">
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-version" />
                <div className="skeleton skeleton-author" />
                <div className="app-header_links">
                  <div className="skeleton skeleton-link" />
                  <div className="skeleton skeleton-link" />
                </div>
              </div>
            </div>

            {/* === AppMeta skeleton === */}
            <div className="app-meta loader">
              <div className="skeleton skeleton-meta-title" />
              <ul className="app-meta_list">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i}>
                    <div className="skeleton skeleton-meta-item" />
                  </li>
                ))}
              </ul>
            </div>

            {/* === Short description === */}
            <div className="single-app_short-description">
              <div className="skeleton skeleton-short-desc" />
              <div className="skeleton skeleton-short-desc short" />
            </div>

          </div>

          {/* === Pricing Panel (if monetized) === */}
          {monetized && (
            <aside className="skeleton-pricing-panel">
              <div className="skeleton skeleton-price-badge" />
              <div className="skeleton skeleton-price-row" />
              <div className="skeleton skeleton-price-row short" />
              <div className="skeleton skeleton-price-cta" />
            </aside>
          )}
        </div>

        {/* Tabs */}
        <div className="skeleton-tabs">
          <div className="skeleton skeleton-tab" />
          <div className="skeleton skeleton-tab" />
          <div className="skeleton skeleton-tab" />
        </div>

        <div className="app-sections_nav loader">
          <button className="app-section_nav-button button active">Description</button>
          <button className="app-section_nav-button button">Installation</button>
          <button className="app-section_nav-button button">Changelog</button>
        </div>
        <div className="skeleton skeleton-section app-section" />

        {/* Ratings area */}
        <div className="skeleton skeleton-ratings" />
      </div>
    );
  }

  // default = grid (homepage)
  return (
    <div>
      {showTitle && <h1 className="store-title">{storeConfig.appName}</h1>}
      <ul className="loading-grid" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i} className="skeleton-card">
            <div className="skeleton-header">
              <div className="skeleton skeleton-logo" />
              <div className="skeleton-header-info">
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-author" />
              </div>
            </div>
            <div className="skeleton skeleton-description" />
          </li>
        ))}
      </ul>
    </div>
  );
}
