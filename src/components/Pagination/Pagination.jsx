// src/components/Pagination/Pagination.jsx
import "./Pagination.css";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Pagination component that updates query params in the URL.
 *
 * @param {Object} pagination - Pagination object from REST API.
 */
export default function Pagination({ pagination }) {
  const navigate = useNavigate();
  const location = useLocation();

  if (!pagination || pagination.total_pages <= 1) return null;

  const { page, total_pages } = pagination;

  const updatePage = (newPage) => {
    if (newPage < 1 || newPage > total_pages || newPage === page) return;

    const params = new URLSearchParams(location.search);
    params.set("page", newPage); // set new page
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <nav className="pagination">
      <button
        className="pagination-btn"
        disabled={page === 1}
        onClick={() => updatePage(page - 1)}
      >
        Prev
      </button>

      <span className="pagination-info">
        Page {page} of {total_pages}
      </span>

      <button
        className="pagination-btn"
        disabled={page === total_pages}
        onClick={() => updatePage(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}
