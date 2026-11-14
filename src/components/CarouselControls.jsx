import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function CarouselControls({ onScroll }) {
  return (
    <div className="carousel-controls">
      <button type="button" onClick={() => onScroll("left")} className="neo-box arrow-btn" aria-label="Previous">
        <BsArrowLeft />
      </button>
      <button type="button" onClick={() => onScroll("right")} className="neo-box arrow-btn" aria-label="Next">
        <BsArrowRight />
      </button>
    </div>
  );
}
