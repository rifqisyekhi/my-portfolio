// src/components/About.jsx
export default function About() {
  return (
    <section className="about-container" id="about">
      {/* Judul Section */}
      <div className="section-title neo-box">About Me</div>

      {/* --- BARIS ATAS (2 Kartu Besar) --- */}
      <div className="grid-top">
        {/* Kartu Kiri: My Journey */}
        <div className="card neo-box card-pale-green">
          <h3>My Journey</h3>
          <p>
            As a recent fresh gradute from <strong>UIN Sunan Gunung DJati Bandung S1 Informatics Engineering</strong>, i've worked on various projects during my studies and though freelance work-ranging from simple website to comlplex appllications.
          </p>
          <p>
            I enjoy combining technical skills with creative problem solving to deliver effective and engaging solutions.
          </p>
        </div>

        {/* Kartu Kanan: What I Do */}
        <div className="card neo-box card-pale-yellow">
          <h3>What I Do</h3>
          <ul className="todo-list">
            <li>Build responsive, accessible web applications</li>
            <li>Design and implement RESTful APIs</li>
            <li>Optimize performance and user experience</li>
            <li>Collaborate with designers and product teams</li>
          </ul>
        </div>
      </div>

      {/* --- BARIS BAWAH (3 Kartu Kecil) --- */}
      <div className="grid-bottom">
        {/* Kartu 1: Clean Code */}
        <div className="card neo-box card-cyan">
          <div className="icon-box neo-box">&lt;/&gt;</div>
          <h4>Clean Code</h4>
          <p>Writing maintainable, scalable code that stands the test of time.</p>
        </div>

        {/* Kartu 2: Fast Learner */}
        <div className="card neo-box card-pink">
          <div className="icon-box neo-box">🚀</div>
          <h4>Fast Learner</h4>
          <p>Always exploring new technologies and best practices.</p>
        </div>

        {/* Kartu 3: Team Player */}
        <div className="card neo-box card-yellow">
          <div className="icon-box neo-box">👥</div>
          <h4>Team Player</h4>
          <p>Collaborative approach to building great products together.</p>
        </div>
      </div>
    </section>
  );
}