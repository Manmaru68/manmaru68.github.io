import { useMemo, useState } from "react";
import { PROJECTS } from "../data/projects";
import Filters from "../components/Filters";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../i18n";

export default function Projects() {
  const { t } = useLanguage();

  const categories = useMemo(() => {
    const set = new Set(PROJECTS.map((project) => project.category));
    return ["ALL", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState("ALL");

  const visibleProjects =
    active === "ALL"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === active);

  return (
    <div className="page">

      <section className="page-header">
        <div className="eyebrow">{t.projects.eyebrow}</div>
        <h1>{t.projects.title.toUpperCase()}</h1>
        <p>{t.projects.description}</p>
      </section>

      <Filters
        categories={categories}
        active={active}
        setActive={setActive}
      />

      <section className="project-grid archive-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

    </div>
  );
}