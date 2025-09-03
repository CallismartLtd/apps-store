// src/components/SearchInput/SearchInput.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SearchInput.css";

export function SearchInput({ placeholder = "Search..." }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState("");

    // Populate input from URL query
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get("q") || "";
        setQuery(q);
    }, [location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return; // Prevent empty searches
        navigate(`/search/?q=${encodeURIComponent(query.trim())}`);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="search"
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
            />
            <button type="submit" className="search-btn">
                Search
            </button>
        </form>
    );
}
