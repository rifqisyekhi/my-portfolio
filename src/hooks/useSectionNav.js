import { useLocation, useNavigate } from "react-router-dom";

// Scroll ke section di halaman utama; jika sedang di halaman lain, pulang dulu baru scroll
export default function useSectionNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (e, targetId) => {
    e.preventDefault();
    const scrollToSection = () =>
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });

    if (location.pathname === "/") {
      scrollToSection();
    } else {
      // Halaman utama yang akan scroll ke section setelah selesai dirender (lihat App.jsx)
      navigate("/", { state: { scrollTo: targetId } });
    }
  };
}
