import "./AppMeta.css";

/**
 * Meta information about the application.
 *
 * @param {Object} props
 * @param {string} props.requires
 * @param {string} props.tested
 * @param {string} props.requiresPhp
 * @param {string} props.dependences
 * @param {string} props.added
 * @param {string} props.lastUpdated
 * @param {number} props.activeInstalls
 * @param {string} props.supportUrl
 * @returns {JSX.Element}
 */
export default function AppMeta({
  requires,
  tested,
  requiresPhp,
  dependences,
  added,
  lastUpdated,
  activeInstalls,
  supportUrl,
}) {
  return (
    <div className="app-meta">
      <h2 className="app-meta_title">Technical Details</h2>
      <ul className="app-meta_list">
        <li>
          <strong>Requires WordPress:</strong> {requires || "N/A"}
        </li>
        <li>
          <strong>Tested up to:</strong> {tested || "N/A"}
        </li>
        <li>
          <strong>Requires PHP:</strong> {requiresPhp || "N/A"}
        </li>
        {dependences && (
          <li>
            <strong>Requires:</strong> {dependences}
          </li>
        )}
        <li>
          <strong>First Added:</strong>{" "}
          {added ? new Date(added).toLocaleDateString() : "N/A"}
        </li>
        <li>
          <strong>Last Updated:</strong>{" "}
          {lastUpdated ? new Date(lastUpdated).toLocaleDateString() : "N/A"}
        </li>
        <li>
          <strong>Active Installs:</strong>{" "}
          {activeInstalls ? activeInstalls.toLocaleString() : "0"}
        </li>
        {supportUrl && (
          <li>
            <strong>Support:</strong>{" "}
            <a href={supportUrl} target="_blank" rel="noopener noreferrer">
              Visit Support
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
