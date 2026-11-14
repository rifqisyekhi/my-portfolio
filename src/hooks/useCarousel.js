import { useRef } from "react";

// Menggeser carousel horizontal sejauh lebar satu kartu + gap
export default function useCarousel() {
  const ref = useRef(null);

  const scroll = (direction) => {
    const container = ref.current;
    const card = container?.children[0];
    if (!card) return;

    const gap = parseInt(window.getComputedStyle(container).gap) || 30;
    const amount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return [ref, scroll];
}
