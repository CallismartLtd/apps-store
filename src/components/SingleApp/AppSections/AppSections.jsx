import DOMPurify from "dompurify";
import { useState } from "react";
import StringUtils from "../../../utils/formater";
import "./AppSections.css";

/**
 * Renders the various content sections of an app (description, installation, changelog)
 * with dynamic tab switching.
 *
 * @param {Object} props
 * @param {Object} props.sections
 * @returns {JSX.Element}
 */
export default function AppSections({ sections }) {
  if (!sections || Object.keys(sections).length === 0) return null;

  const sectionKeys = Object.keys(sections);
  const [activeSection, setActiveSection] = useState(sectionKeys[0]);

  const renderSection = (key, title, html) => {
    if (!html) return null;

    // Parse raw HTML string into a DOM tree
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // If it's the screenshots section, add a selector to <ol>
    if (key === "screenshots") {
      const ol = doc.querySelector("ol");
      if (ol) {
        ol.classList.add("screenshot-list");
      }
    }

    // Serialize modified DOM back to string
    const modifiedHtml = doc.body.innerHTML;

    // Sanitize before rendering
    const cleanHtml = DOMPurify.sanitize(modifiedHtml);

    return (
      <div className={`app-section app-section-${key}`}>
        <h2 className="app-section_title">{title}</h2>
        <div
          className="app-section_content"
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
      </div>
    );
  };


  return (
    <div className="app-sections">
      {/* Navigation Tabs */}
      <div className="app-sections_nav">
        {sectionKeys.map((key) => (
          <button
            key={key}
            className={`app-section_nav-button button ${activeSection === key ? 'active' : ''}`}
            onClick={() => setActiveSection(key)}
            title={StringUtils.ucfirst( key )}
          >
            {StringUtils.ucfirst( key )}
          </button>
        ))}
      </div>

      {/* Active Section */}
      {renderSection(
        activeSection,
        StringUtils.ucwords( activeSection ),
        sections[activeSection]
      )}
    </div>
  );
}
