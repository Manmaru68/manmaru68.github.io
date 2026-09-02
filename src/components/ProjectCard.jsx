import { Link } from "react-router-dom";
import { colorFor, labelFor } from "../data/projects";
import { useLanguage } from "../i18n";

export default function ProjectCard({ project }) {
  const { t, language } = useLanguage();

  const isPending = project.status === "próximamente";
  const isFinished = project.status === "finalizado";

  return (
    <article
      className={`p2-tile ${isPending ? "empty-tile" : ""}`}
      style={{
        "--tile-color": isPending ? "#687586" : colorFor(project.category),
      }}
    >

      <div className="project-index">{labelFor(project.category, language)}</div>

      <div className="p2-tile-top">
        <h3>{project.title[language]}</h3>

        <span className={`status ${isPending ? "pending" : isFinished ? "finished" : ""}`}>
          {isPending ? t.projects.soon : isFinished ? t.projects.finished : t.projects.active}
        </span>
      </div>

      <p className="desc">{project.description[language]}</p>

      {project.tags.length > 0 && (
        <div className="p2-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      {!isPending && (
        <Link className="link" to={`/projects/${project.slug}`}>
          {t.projects.repository}
        </Link>
      )}

    </article>
  );
}