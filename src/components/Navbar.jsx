export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo-custom">
        <span className="logo-text-plain">RIFQI</span>
        <span className="logo-text-box">SYEKHI</span>
      </div>
      <div className="navbar-right">
        <div className="nav-links-clean">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn-lang neo-box">ID</button>
      </div>
    </nav>
  );
}
