import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="store-header">
      <div className="header-left">
        <Link to="/" className="logo">
          Callismart App Store
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
      </nav>

    </header>
  );
}
