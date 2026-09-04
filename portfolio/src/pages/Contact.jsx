import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n";

const EMAILJS_SERVICE_ID = "service_t6yrvn3";
const EMAILJS_TEMPLATE_ID = "template_sh5eqsh";
const EMAILJS_PUBLIC_KEY = "7YjgHqEI4DpG35Bgb";

export default function Contact() {
  const { t } = useLanguage();

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="page contact-page">

      <section className="contact-hero">
        <div className="eyebrow">// {t.contact.title.toUpperCase()}</div>

        <h1>
          {t.contact.heading1}
          <br />
          {t.contact.heading2}
        </h1>

        <p>{t.contact.text}</p>
      </section>

      <section className="contact-links">

        <a
          href="https://github.com/Manmaru68"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>01</span>
          <strong>GITHUB</strong>
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/adrian-margarit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>02</span>
          <strong>LINKEDIN</strong>
          <span>↗</span>
        </a>

        <a
          href="#email"
          className={showEmailForm ? "expanded" : ""}
          onClick={(e) => {
            e.preventDefault();
            setShowEmailForm((prev) => !prev);
          }}
        >
          <span>03</span>
          <strong>EMAIL</strong>
          <span>{showEmailForm ? "×" : "↗"}</span>
        </a>

        {showEmailForm && (
          <form className="email-form" onSubmit={handleSubmit}>
            <div className="email-form-row">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="email-form-row">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="email-form-row">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="email-form-actions">
              <button type="submit" className="button button-primary" disabled={status === "sending"}>
                {status === "sending" ? t.contact.form.sending : t.contact.form.send}
              </button>

              {status === "sent" && (
                <span className="email-form-status success">{t.contact.form.success}</span>
              )}
              {status === "error" && (
                <span className="email-form-status error">{t.contact.form.error}</span>
              )}
            </div>
          </form>
        )}

      </section>

    </div>
  );
}