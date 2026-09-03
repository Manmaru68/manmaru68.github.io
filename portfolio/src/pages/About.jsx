import { useLanguage } from "../i18n";

const PROFILE_PHOTO = `${import.meta.env.BASE_URL}images/perfil/adrian.jpg`;

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="page">

      <section className="page-header">
        <div className="eyebrow">
          // {t.about.title.toUpperCase()}
        </div>

        <h1>{t.about.title.toUpperCase()}</h1>

        <p>{t.about.subtitle}</p>
      </section>


      {/* ABOUT */}
      <section className="about-section">

        <div className="section-label">
          <span>01</span>
          {t.about.introLabel}
        </div>

        <div className="about-grid">

          <div className="about-photo">
            <img src={PROFILE_PHOTO} alt={t.about.foto.alt} />
          </div>

          <div className="about-text">
            <p className="large-text">{t.about.largeText}</p>
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
          </div>

        </div>

      </section>


      {/* Experience */}
      <section className="about-section">

        <div className="section-label">
          <span>02</span>
          {t.about.experienceLabel}
        </div>

        <div className="timeline">
          {t.about.companies.map((company) => (
            <div className="timeline-item">
              <div className="timeline-date">{company.duration}</div>

              <div>
                <h2>{company.name}</h2>
                <p className="timeline-place">{company.position}</p>
                <p>{company.description}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* EDUCATION */}
      <section className="about-section">

        <div className="section-label">
          <span>02</span>
          {t.about.educationLabel}
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-date">2022 — PRESENT</div>

            <div>
              <h2>{t.about.university}</h2>
              <p className="timeline-place">{t.about.universityName}</p>
              <p>{t.about.universityDesc}</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2026</div>

            <div>
              <h2>{t.about.exchangeTitle}</h2>
              <p className="timeline-place">{t.about.exchangePlace}</p>
              <p>{t.about.exchangeDesc}</p>
            </div>
          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section className="about-section">

        <div className="section-label">
          <span>03</span>
          {t.about.techStackLabel}
        </div>

        <div className="skills-grid">

          <div className="skill-group">
            <span className="data-label">LANGUAGES</span>
            <div className="skill-list">
              <span>Python</span>
              <span>C++</span>
              <span>Java</span>
              <span>C#</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="data-label">AI / COMPUTER VISION</span>
            <div className="skill-list">
              <span>OpenCV</span>
              <span>TensorFlow</span>
              <span>Machine Learning</span>
              <span>SIFT</span>
              <span>CSP</span>
              <span>MNE</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="data-label">GAME DEVELOPMENT</span>
            <div className="skill-list">
              <span>Unity</span>
              <span>Blender</span>
              <span>C#</span>
              <span>3D Development</span>
            </div>
          </div>

          <div className="skill-group">
            <span className="data-label">WEB</span>
            <div className="skill-list">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

        </div>

      </section>


      {/* LANGUAGES */}
      <section className="about-section">

        <div className="section-label">
          <span>04</span>
          {t.about.languagesLabel}
        </div>

        <div className="languages-grid">

          {t.about.languages.map((lang) => (
            <div className="language-item" key={lang.name}>
              <span>{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}