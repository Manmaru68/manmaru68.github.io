import { colorFor, labelFor } from "../data/projects";
import { useLanguage } from "../i18n";

export default function Filters({ categories, active, setActive }) {
  const { t, language } = useLanguage();

  return (
    <nav className="p2-filters">

      {categories.map((category) => (
        <button
          key={category}
          className={active === category ? "active" : ""}
          style={{
            "--dot": category === "ALL" ? "#5ce1e6" : colorFor(category),
          }}
          onClick={() => setActive(category)}
        >
          {category === "ALL" ? t.projects.all : labelFor(category, language)}
        </button>
      ))}

    </nav>
  );
}