export default function Skills() {
  return (
    <section className="skills-container" id="skills">
      <div className="section-title-green neo-box">Skills & Technologies</div>
      <div className="skills-grid">
        {/* Kategori 1: Frontend */}
        <div className="skill-category neo-box">
          <div className="category-header pink">Frontend</div>
          <div className="category-body">
            <span className="skill-tag neo-box">HTML</span>
            <span className="skill-tag neo-box">CSS</span>
            <span className="skill-tag neo-box">JavaScript</span>
          </div>
        </div>

        {/* Kategori 2: Backend */}
        <div className="skill-category neo-box">
          <div className="category-header cyan">Backend</div>
          <div className="category-body">
            <span className="skill-tag neo-box">Node.js</span>
            <span className="skill-tag neo-box">Python</span>
            <span className="skill-tag neo-box">MongoDB</span>
            <span className="skill-tag neo-box">REST APIs</span>
            <span className="skill-tag neo-box">MySQL</span>
          </div>
        </div>

        {/* Kategori 3: Tools & Others */}
        <div className="skill-category neo-box">
          <div className="category-header yellow">Tools & Others</div>
          <div className="category-body">
            <span className="skill-tag neo-box">Git</span>
            <span className="skill-tag neo-box">Figma</span>
            <span className="skill-tag neo-box">Design Graphics</span>
            <span className="skill-tag neo-box">Editing</span>
          </div>
        </div>
      </div>
      <div className="stats-banner neo-box">
        <div className="stat-item">
          <div className="stat-number neo-box">1+</div>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <div className="stat-number neo-box">10+</div>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <div className="stat-number neo-box">5+</div>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
}
