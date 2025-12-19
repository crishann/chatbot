// import type { CSSProperties } from "react";

type Project = {
  title: string;
  description: string;
  url: string;
  github: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Pet Feeder Monitor",
    description: "IoT-based pet feeder monitoring system with real-time updates.",
    url: "#",
    github: "#",
    tech: ["React", "IoT", "Firebase"]
  },
  {
    title: "Game Calculator",
    description: "Built a game calulator for players to easily calculate their items in game.",
    url: "gagcalculator.vercel.app",
    github: "https://github.com/crishann/gagcalculator.git",
    tech: ["React", "NO SQL", "TailwindCSS", ]
  },
  {
    title: "POS System for Small bakeries",
    description: "A POS Sytem built using React and PHP with sql database.",
    url: "#",
    github: "https://github.com/crishann/Cadz_BakeShop-main.git",
    tech: ["React", "PHP", "SQL"]
  },
  {
    title: "MVC Car Dealership Website",
    description: "A car dealership website built using ASP.NET Core MVC.",
    url: "#",
    github: "https://github.com/crishann/WheelDeal.git",
    tech: ["React", "PHP", "SQL"]
  }
  
];



export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-actions">
                
                <a href={project.github} className="btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
