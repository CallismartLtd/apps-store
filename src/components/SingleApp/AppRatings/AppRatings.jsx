import DOMPurify from "dompurify";
import "./AppRatings.css";

/**
 * Application Ratings & Reviews Component
 *
 * @param {Object} props
 * @param {number} props.rating - Average rating (0–5).
 * @param {number} props.numRatings - Total number of ratings.
 * @param {Object} props.ratingsBreakdown - Ratings count per star (keys 1–5).
 * @param {number} props.activeInstalls - Active installs count.
 * @param {string} props.supportUrl - Support URL.
 * @returns {JSX.Element}
 */
export default function AppRatings({
  rating,
  numRatings,
  ratingsBreakdown,
  activeInstalls,
  supportUrl,
}) {
  const renderStars = (value) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= Math.round(value) ? "filled" : ""}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="app-ratings">
      <h3>Ratings & Reviews</h3>

      <div className="rating-summary">
        <div className="average-rating">
          <div className="stars">{renderStars(rating)}</div>
          <strong>{rating.toFixed(1)} / 5</strong>
          <span>({numRatings} ratings)</span>
        </div>

        <div className="active-installs">
          <strong>{activeInstalls.toLocaleString()}</strong> Active Installs
        </div>
      </div>

      <div className="ratings-breakdown">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = ratingsBreakdown?.[star] || 0;
          const percent =
            numRatings > 0 ? Math.round((count / numRatings) * 100) : 0;

          return (
            <div key={star} className="rating-row">
              <span className="star-label">{star}★</span>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <span className="count">{count}</span>
            </div>
          );
        })}
      </div>

      {supportUrl && (
        <div className="support-link">
          <a
            href={DOMPurify.sanitize(supportUrl)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Support →
          </a>
        </div>
      )}
    </div>
  );
}
