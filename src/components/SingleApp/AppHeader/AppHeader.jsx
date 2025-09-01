import DOMPurify from "dompurify";
import "./AppHeader.css";

/**
 * Header section of Single App page.
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.version
 * @param {string} props.author - HTML string (sanitized)
 * @param {string} props.authorProfile
 * @param {string} props.image
 * @param {string} props.homepage
 * @param {string} props.packageUrl
 * @returns {JSX.Element}
 */
export default function AppHeader({
  name,
  version,
  author,
  authorProfile,
  image,
  homepage,
  packageUrl,
}) {
  return (
    <div className="app-header">
      <img
        src={image}
        alt={name}
        className="app-header_logo"
      />

      <div className="app-header_info">
        <h1 className="app-header_name">
          {name} <span className="app-header_version">v{version}</span>
        </h1>

        <p
          className="app-header_author"
          dangerouslySetInnerHTML={{
            __html: "By: " + DOMPurify.sanitize(author),
          }}
        />

        <div className="app-header_links">
          {homepage && (
            <a href={homepage} target="_blank" rel="noopener noreferrer">
              Homepage
            </a>
          )}
          {packageUrl && (
            <a href={packageUrl} download={true}>
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
