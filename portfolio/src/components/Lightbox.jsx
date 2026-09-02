import { useEffect } from "react";

export default function Lightbox({ src, alt, onClose }) {

  useEffect(() => {
    if (!src) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>

      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      <img
        className="lightbox-image"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />

    </div>
  );
}