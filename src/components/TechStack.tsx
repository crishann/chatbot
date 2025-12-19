const stack = [
  "React",
  "JavaScript",
  "ASP.NET Core",
  "SQL Server",
  "Node.js",
  "PHP",
  "C#",
  "Git & GitHub"
];

export default function TechStack() {
  return (
    <section id="stack" className="tech-section">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>

        <div className="tech-grid">
          {stack.map((tech) => (
            <div key={tech} className="tech-card">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
