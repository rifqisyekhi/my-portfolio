import { skillCategories, stats } from "../data/skills";

export default function Skills() {
  return (
    <section className="skills-container" id="skills">
      <div className="section-title-green neo-box">Skills & Technologies</div>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category neo-box" key={category.title}>
            <div className={`category-header ${category.color}`}>{category.title}</div>
            <div className="category-body">
              {category.skills.map((skill) => (
                <span className="skill-tag neo-box" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="stats-banner neo-box">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-number neo-box">{stat.value}</div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
