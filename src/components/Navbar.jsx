// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar-container">
      
      {/* --- KELOMPOK KIRI: Logo Saja --- */}
      <div className="logo-custom">
        <span className="logo-text-plain">RIFQI</span>
        <span className="logo-text-box">SYEKHI</span>
      </div>

      {/* --- KELOMPOK KANAN: Menu & Tombol ID --- */}
      <div className="navbar-right">
        
        {/* Deretan Menu */}
        <div className="nav-links-clean">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
        
        {/* Tombol ID di ujung kanan */}
        <button className="btn-lang neo-box">ID</button>
        
      </div>
      
    </nav>
  );
}