import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">

      <div className="footer-inner">

        <div>
          <Link to="/" className="footer-logo">
            ADRIÁN MARGARIT
          </Link>

          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer-right">
          <span>© {new Date().getFullYear()} ADRIÁN MARGARIT</span>

          <span className="footer-status">
            <i></i>
            {t.footer.online}
          </span>
        </div>

      </div>

    </footer>
  );
}