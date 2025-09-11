import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { FreeBadge, PremiumBadge } from "../Badges/Badges";
import "./AppCard.css";

/**
 * A single list component used to render each application data in the homepage.
 * 
 * @param {Object} app - An application object from our REST endpoint
 * @returns {JSX.Element}
 */
export default function AppCard({ app }) {
    return (
        <li className="app-card">
            <Link to={`/${app.type}/${encodeURIComponent(app.slug)}`} className="app-link">
                <div className="app-card_header">
                    <img
                        src={app.icons['2x'] || app.icons['1x'] || "/software-placeholder.svg"}
                        alt={app.name ? `${app.name} icon` : "App icon"}
                        loading="lazy"
                        className="app-card_header-image"
                    />
                    <div className="app-card_header-info">
                        <h2 className="app-card_app-name">{app.name}</h2>
                        <p className="app-card_app-author">
                        by: <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(app.author) }} />
                        </p>

                    </div>
                </div>

                <div
                    className="app-description"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(app.short_description),
                    }}
                />

                {app.is_monetized && (
                    <PremiumBadge/>
                )}
            </Link>
        </li>
    );
}
