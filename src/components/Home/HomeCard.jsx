import AppCard from "../AppCard/AppCard";
import "./Home.css";

/**
 * The home card component.
 * 
 * @param {Object} apps - The applications(plugins, themes, web app) fetched from our repository.
 * @return {JSX.Element}
 */
function HomeCard( {apps} ) {
    return (
        <div className="home-container">
            <h1 className="store-title">Official Callismart App Store</h1>
            <ul className="apps-grid">
                {apps.map( ( app ) => (
                <AppCard key={app.slug} app={app} />
                ))}
            </ul>
        </div>
    );
}

export default HomeCard;