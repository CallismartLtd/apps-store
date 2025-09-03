import "./Error.css";
import {
  ErrorBadge,
  WarningBadge,
  InfoBadge,
  TechnicianIcon,
  SpannerIcon,
} from "../Badges/ErrorBages";

/**
 * Full-page error display with optional network info and custom message
 *
 * @param {Object} props
 * @param {Error} props.error - Error object
 * @param {Function} [props.onRetry] - Retry callback
 * @param {Function} [props.onReport] - Report callback
 */
export function Error({ error, onRetry, onReport }) {
  if (!error) return null;

  const getBadgeAndClass = () => {
    if (error.type === "warning" || error.code === "WARN")
      return { badge: <WarningBadge />, className: "warning" };
    if (error.type === "info" || error.code === "INFO")
      return { badge: <InfoBadge />, className: "info" };
    return { badge: <ErrorBadge />, className: "error" };
  };

  const { badge, className } = getBadgeAndClass();

  const friendlyMessage = `
    You can try the action again, or report this issue if it persists.
  `;

  // Detect network-related errors
  const isNetworkError =
    error.message?.toLowerCase().includes("network") ||
    error.message?.toLowerCase().includes("failed to fetch");

  // Optional custom message for non-network errors
  const userMessage = error?.message || "An unexpected error occurred. Please try again.";

  return (
    <div className={`fullpage-error ${className}`}>
      <div className="error-illustration">
        <TechnicianIcon />
        <SpannerIcon />
      </div>

      <div className="error-content">
        <h1>
          {badge} Something went wrong
        </h1>

        {isNetworkError ? (
          <div className="network-info">
            <h2>Network Issue Detected</h2>
            <p>
              It looks like there is a connectivity problem. Please check your
              internet connection and try again. If the problem persists, report
              the issue to our support team.
            </p>
          </div>
        ) : (
          <div className="error-message-section">
            <h2>Error Details</h2>
            <p>{userMessage}</p>
          </div>
        )}

        <p className="message">{friendlyMessage}</p>

        <div className="actions">
          {onRetry && (
            <button className="btn retry" onClick={onRetry}>
              Retry
            </button>
          )}
          {onReport && (
            <button className="btn report" onClick={onReport}>
              Report
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
