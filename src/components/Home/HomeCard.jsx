import AppCard from "../AppCard/AppCard";
import { storeConfig } from "../../../config";
import Pagination from "../Pagination/Pagination";
import "./Home.css";

/**
 * The home card component.
 * 
 * @param {Object} apps - The applications(plugins, themes, web app) fetched from our repository.
 * @return {JSX.Element}
 */
function HomeCard( {apps, title, pagination} ) {
    return (
        <div className="home-container">
            <h1 className="store-title">{ title || storeConfig.appName}</h1>
            <ul className="apps-grid">
                {apps.map( ( app ) => (
                <AppCard key={app.slug} app={app} />
                ))}
            </ul>
            {pagination && (
                <Pagination pagination={pagination} />
            )}
        </div>
    );
}

export default HomeCard;