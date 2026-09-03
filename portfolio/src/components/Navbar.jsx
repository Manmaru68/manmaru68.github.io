import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const current = LANGUAGES.find((lang) => lang.code === language);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Desktop: fila de banderas */}
        <div className="language-switcher lang-desktop">
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

        {/* Móvil: dropdown */}
        <div className="language-dropdown lang-mobile" ref={dropdownRef}>
          <button
            className="language-dropdown-trigger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Cambiar idioma"
            aria-expanded={open}
          >
            <current.Flag className="flag-icon" />
            <span className="chevron">▾</span>
          </button>

          {open && (
            <div className="language-dropdown-menu">
              {LANGUAGES.map(({ code, Flag, label }) => (
                <button
                  key={code}
                  className={language === code ? "active" : ""}
                  onClick={() => {
                    setLanguage(code);
                    setOpen(false);
                  }}
                >
                  <Flag className="flag-icon" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="nav-status">
          <span></span>
          {t.footer.online}
        </div>

      </div>
    </nav>
  );
}