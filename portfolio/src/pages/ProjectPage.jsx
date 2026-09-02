import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS, colorFor } from "../data/projects";
import { useLanguage, localize } from "../i18n";
import Lightbox from "../components/Lightbox";

export default function ProjectPage() {
  const { t, language } = useLanguage();
  const { slug } = useParams();
  const [lightboxImage, setLightboxImage] = useState(null);

  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="project-page">
        <h1>{t.projects.notFoundTitle}</h1>
        <p>{t.projects.notFoundText}</p>
        <Link to="/" className="text-link">
          {t.notFound.backHome}
        </Link>
      </main>
    );
  }

  const title = localize(project.title, language);
  const description = localize(project.description, language);
  const category = localize(project.category, language);

  return (
    <main className="project-page">

      <Link to="/projects" className="back-link">
        {t.projects.backToProjects}
      </Link>

      <header className="project-header">
        <span
          className="project-category"
          style={{ color: colorFor(project.categoryKey) }}
        >
          {category}
        </span>

        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <section className="project-content">

        <div className="project-info-block">
          <span className="data-label">{t.projects.technologies}</span>

          <div className="p2-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {project.repo ? (
          <a
            className="github-link"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.projects.viewSourceCode}
          </a>
        ) : (
          <a disabled
            className="github-link"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {localize(project.noRepo, language)}
          </a>
        )}
      </section>
      <br></br>

      {project.details && project.details.length > 0 && (
        <section className="project-details">
          {project.details.map((section, index) => (
            <div className="project-detail-block" key={index}>
              <h2>{localize(section.title, language)}</h2>
              <p>{localize(section.text, language)}</p>
            </div>
          ))}
        </section>
      )}


      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery">

          <span className="data-label">{t.projects.gallery}</span>

          <div className="project-gallery-grid">
            {project.gallery.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${title} ${index + 1}`}
                loading="lazy"
                onClick={() => setLightboxImage(src)}
              />
            ))}
          </div>

        </section>
      )}

      <Lightbox
        src={lightboxImage}
        alt={title}
        onClose={() => setLightboxImage(null)}
      />

    </main>
  );
}