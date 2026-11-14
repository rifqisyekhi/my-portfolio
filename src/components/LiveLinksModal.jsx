import { MdArrowOutward } from "react-icons/md";
import useEscapeKey from "../hooks/useEscapeKey";

// Pop-up pilihan link untuk project yang punya lebih dari satu link Live
export default function LiveLinksModal({ links, onClose }) {
  useEscapeKey(onClose);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card neo-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn neo-box" onClick={onClose} aria-label="Close">
          X
        </button>

        <h3 className="modal-title">Select Project Experience</h3>

        <div className="modal-link-list">
          {links.map((liveItem) => (
            <a
              key={liveItem.url}
              href={liveItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="live-modal-link neo-box"
            >
              {liveItem.name} <MdArrowOutward size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
