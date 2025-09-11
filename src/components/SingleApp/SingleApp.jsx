import AppHeader from "./AppHeader/AppHeader";
import AppMeta from "./AppMeta/AppMeta";
import AppSections from "./AppSections/AppSections";
import AppRatings from "./AppRatings/AppRatings";
import AppPricing from "./AppPricing/AppPricing";
import { FreeBadge, PremiumBadge } from "../Badges/Badges";
import "./SingleApp.css";

export default function SingleApp({ app }) {
  return (
    <div className="single-app">
        <div className="single-app_header-section">
            <div className="single-app_header-app-data">
                <AppHeader
                    name={app.name}
                    version={app.version}
                    author={app.author}
                    authorProfile={app.author_profile}
                    image={ app.icons['2x'] ?? icons['1x'] }
                    homepage={app.homepage}
                    packageUrl={app.package}
                />

                <AppMeta
                    requires={app.requires}
                    tested={app.tested}
                    requiresPhp={app.requires_php}
                    dependences={app.requires_plugins}
                    added={app.added}
                    lastUpdated={app.last_updated}
                />
                
                <div className="single-app_short-description">
                    <p>{app.short_description}</p>
                </div>
                {app.is_monetized && (
                    <PremiumBadge/>
                ) || (
                    <FreeBadge/>
                )}
            </div>

            {app.is_monetized && (
                <AppPricing monetization={app.monetization} />
            )}
        </div>

        <AppSections
            sections={app.sections}
        />

        <AppRatings
            rating={app.rating}
            numRatings={app.num_ratings}
            ratingsBreakdown={app.ratings}
            activeInstalls={app.active_installs}
            supportUrl={app.support_url}
        />
    </div>
  );
}
