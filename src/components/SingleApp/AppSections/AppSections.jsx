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

  const renderSection = (title, html) => {
    if (!html) return null;
    const cleanHtml = DOMPurify.sanitize(html);
    return (
      <div className="app-section">
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
        StringUtils.ucwords( activeSection ),
        sections[activeSection]
      )}
    </div>
  );
}
