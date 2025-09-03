// src/components/Search/SearchNotFound.jsx
import { Link } from "react-router-dom";
import "./SearchNotFound.css";
import Icon from "../Badges/Badges";

export default function SearchNotFound({ term }) {
  return (
    <div className="search-notfound">
      <Icon name="search"/>
      <h2>No results found</h2>
      {term && <p>We couldn’t find anything matching <strong>"{term}"</strong>.</p>}
      <p>Try searching with different keywords, or explore all apps.</p>
      <Link to="/" className="search-notfound_btn">
        Browse All Apps
      </Link>
    </div>
  );
}
