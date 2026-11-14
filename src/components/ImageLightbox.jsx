import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useEscapeKey from "../hooks/useEscapeKey";

// Tampilan gambar diperbesar dengan navigasi prev/next di dalam satu galeri
export default function ImageLightbox({ images, index, onChange, onClose }) {
  useEscapeKey(onClose);

  const hasMultiple = images.length > 1;
  const go = (step) => (e) => {
    e.stopPropagation();
    onChange((index + step + images.length) % images.length);
  };

  return (
    <div className="modal-overlay modal-overlay-dark" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {hasMultiple && (
          <button type="button" className="neo-box lightbox-arrow lightbox-prev" onClick={go(-1)} aria-label="Previous image">
            <BsArrowLeft />
          </button>
        )}

        <button type="button" className="modal-close-btn neo-box" onClick={onClose} aria-label="Close">
          X
        </button>

        <img src={images[index]} alt="Enlarged view" className="lightbox-image neo-box" />

        {hasMultiple && (
          <button type="button" className="neo-box lightbox-arrow lightbox-next" onClick={go(1)} aria-label="Next image">
            <BsArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}
