import "./Loading.css";

/**
 * This component displays a loading spinner with an optional message.
 * @param {String} message - Message to display below the spinner.
 * @returns {JSX.Element}
 */
export default function Loading({ message = "Loading..." }) {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
}
