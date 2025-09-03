import { Link } from "react-router-dom";
import { SearchInput } from "../SearchInput/SearchInput";
import "./Header.css";

export default function Header() {
  return (
    <header className="store-header">
      <div className="header-left">
        <Link to="/" className="logo">
          Callismart App Store
        </Link>
      </div>

      <SearchInput/>

    </header>
  );
}
