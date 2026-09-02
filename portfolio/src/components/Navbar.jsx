import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n";
import { FlagES, FlagCA, FlagGB } from "./Flags";

const LANGUAGES = [
  { code: "es", Flag: FlagES, label: "Español" },
  { code: "ca", Flag: FlagCA, label: "Català" },
  { code: "en", Flag: FlagGB, label: "English" },
];

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="nav-logo">
          ADRIÁN<span> MARGARIT ESPIN</span>
        </Link>

        <div className="nav-links">
          <Link to="/projects" className={isActive("/projects") ? "active" : ""}>
            {t.nav.projects}
          </Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            {t.nav.about}
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            {t.nav.contact}
          </Link>
        </div>

        <div className="language-switcher">
          {LANGUAGES.map(({ code, Flag, label }) => (
            <button
              key={code}
              className={language === code ? "active" : ""}
              onClick={() => setLanguage(code)}
              aria-label={label}
              title={label}
            >
              <Flag className="flag-icon" />
            </button>
          ))}
        </div>

        <div className="nav-status">
          <span></span>
          {t.footer.online}
        </div>

      </div>
    </nav>
  );
}