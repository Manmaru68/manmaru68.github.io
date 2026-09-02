import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="project-page">

      <div className="eyebrow">{t.notFound.eyebrow}</div>

      <h1>{t.notFound.title}</h1>

      <p>{t.notFound.text}</p>

      <Link to="/" className="text-link">
        {t.notFound.backHome}
      </Link>

    </main>
  );
}