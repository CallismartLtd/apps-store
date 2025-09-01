import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import "./AppCard.css";

export default function AppCard({ app }) {
    return (
        <li className="app-card">
        <Link to={`/${app.type}/${encodeURIComponent(app.slug)}`} className="app-link">
            <div className="app-card_header">
            <img
                src={app.banners?.low || "/placeholder.png"}
                alt={app.name}
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
        </Link>
        </li>
    );
}
