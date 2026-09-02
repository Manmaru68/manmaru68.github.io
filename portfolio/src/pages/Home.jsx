import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../i18n";

export default function Home() {
  const { t } = useLanguage();

  const featuredProjects = PROJECTS.filter(
    (project) => project.status !== "próximamente"
  ).slice(0, 3);

  return (
    <div className="page">

      <section className="hero">
        <div className="hero-content">

          <div className="eyebrow">
            COMPUTER SCIENCE · AI · GAME DEVELOPMENT
          </div>

          <h1>
            ADRIÁN<span> MARGARIT</span>
          </h1>

          <p className="hero-description">
            {t.home.description}
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">
              {t.home.viewProjects}
              <span>↗</span>
            </Link>
            <Link to="/about" className="button button-secondary">
              {t.home.aboutMe}
            </Link>
          </div>

        </div>

        <div className="hero-decoration">
          <div className="hero-orbit"></div>
          <div className="hero-orbit orbit-2"></div>
          <div className="hero-core"></div>
        </div>
      </section>


      <section className="intro-section">
        <div className="section-label">
          <span>01</span>
          {t.home.selectedWork}
        </div>

        <div className="intro-grid">
          <h2>
            {t.home.introLine1}
            <br />
            <span>{t.home.introHighlight}</span>
          </h2>
          <p>{t.home.introText}</p>
        </div>
      </section>


      <section className="featured-projects">
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="center-action">
          <Link to="/projects" className="text-link">
            {t.home.viewAll}
            <span>→</span>
          </Link>
        </div>
      </section>


      <section className="currently-section">
        <div className="section-label">
          <span>02</span>
          {t.home.currentlyLabel}
        </div>

        <div className="currently-grid">
          <div>
            <span className="data-label">{t.home.building}</span>
            <h3>{t.home.buildingTitle}</h3>
            <p>{t.home.buildingDesc}</p>
          </div>

          <div>
            <span className="data-label">{t.home.exploring}</span>
            <h3>{t.home.exploringTitle}</h3>
            <p>{t.home.exploringDesc}</p>
          </div>

          <div>
            <span className="data-label">{t.home.learning}</span>
            <h3>{t.home.learningTitle}</h3>
            <p>{t.home.learningDesc}</p>
          </div>
        </div>
      </section>

    </div>
  );
}