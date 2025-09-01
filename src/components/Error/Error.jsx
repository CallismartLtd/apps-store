import "./Error.css";

/**
 * This component displays an error message with an optional retry button.
 * @param {String} message - Error message to display.
 * @param {Function} onRetry - Optional callback function to retry the action.
 * @return {JSX.Element}
 */
export function Error({ message = "Something went wrong", onRetry }) {
    return (
        <div className="error">
            <p>{message}</p>
            {onRetry && (
                <button className="retry-btn" onClick={onRetry}>
                    Retry
                </button>
            )}
        </div>
    );
}
