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
    const getAuthor   = ( app ) => {
        if ( app?.type === 'theme' ) {
            const appauthor = app.author;
            let author  = `<a href="${appauthor.author_url}">${appauthor.author}</a>`;

            return author;
        }

        return app.author;

    }

    const handleNavClick    = e => {
        const target    = e.target;

        if ( target.classList.contains( 'app-link' ) ) {
            return;
        }

        if ( target.closest( 'a') ) {
            let url = target.href;

            if ( ! url ) return;
            e.preventDefault();
            
            window.open( url, '_blank' );
        }
        
    }
    
    return (
        <li className="app-card">
            <Link to={`/${app.type}/${encodeURIComponent(app.slug)}`} className="app-link" onClick={handleNavClick}>
                <div className="app-card_header">
                    <img
                        src={app?.icon ?? "/software-placeholder.svg"}
                        alt={app.name ? `${app.name} icon` : "App icon"}
                        loading="lazy"
                        className="app-card_header-image"
                    />
                    <div className="app-card_header-info">
                        <h2 className="app-card_app-name">{app.name}</h2>
                        <p className="app-card_app-author">
                        by: <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(getAuthor(app)) }} />
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
