const projects = [
  {
    title: "AI Smart Glasses for Visually Impaired (PP1)",
    category: "AI · IoT · Assistive Tech",
    tech: ["Python", "OpenCV", "TTS", "Raspberry Pi (concept)", "Flutter UI"],
    description:
      "Assistive smart glasses concept that capture the environment through a camera, process scenes on an edge-style pipeline, and provide real-time audio feedback to visually impaired users.",
    highlights: [
      "Designed the camera → AI processing → TTS → audio pipeline with latency breakdown (Tcam, Tproc, Ttts, Taudio).",
      "Implemented Python scripts to simulate the pipeline and measure performance.",
      "Designed a Flutter companion app UI for configuration, status, and diagnostics."
    ],
    links: {
      github: "", // add later
      demo: "" // optional
    }
  },
  {
    title: "MERN Stack Web Application",
    category: "Full-Stack · Web",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "A full-stack web application with a clean responsive UI, RESTful backend, and basic authentication/CRUD features.",
    highlights: [
      "Built REST API with Express and MongoDB models using a clear folder structure.",
      "Developed reusable React components and forms with validation.",
      "Focused on clean separation between frontend and backend for future scaling."
    ],
    links: {
      github: "",
      demo: ""
    }
  },
  {
    title: "Spring Boot REST API",
    category: "Backend · Java",
    tech: ["Spring Boot", "REST", "MySQL / MongoDB"],
    description:
      "Backend service using layered architecture, exposing REST endpoints for a domain such as student management or tasks.",
    highlights: [
      "Implemented controllers, services, and repositories with proper separation of concerns.",
      "Used DTOs and validation for safer request/response handling.",
      "Documented endpoints to make frontend integration easier."
    ],
    links: {
      github: ""
    }
  },
  {
    title: "Flutter Companion App (Ongoing)",
    category: "Mobile · UI",
    tech: ["Flutter", "Material 3"],
    description:
      "A companion mobile UI for configuring and monitoring the AI smart glasses system. Focused on accessibility and large, clear controls.",
    highlights: [
      "Dashboard for device connection, status, and battery.",
      "Settings for language, voice, and modes.",
      "Diagnostics / logs views for events and latency metrics."
    ],
    links: {
      github: ""
    }
  }
];

const skills = {
  comfortable: [
    "HTML, CSS, JavaScript (ES6+)",
    "React.js",
    "Node.js & Express",
    "Spring Boot (REST APIs)",
    "MongoDB",
    "Git & GitHub"
  ],
  learning: [
    "Flutter UI architecture",
    "Python for AI / Computer Vision",
    "API security & better error handling",
    "Advanced React patterns"
  ],
  planned: [
    "Deploying apps (Vercel, Render, etc.)",
    "Docker & basic containerization",
    "Cloud basics",
    "Small-scale system design"
  ]
};

const roadmap = [
  {
    title: "Short Term (0–3 months)",
    items: [
      "Polish at least one MERN app with proper auth and validation.",
      "Stabilize the smart glasses Python pipeline and logging.",
      "Finish core screens of the Flutter companion app."
    ]
  },
  {
    title: "Mid Term (3–6 months)",
    items: [
      "Deploy a full-stack app publicly (MERN or Spring Boot + React).",
      "Learn JWT-based authentication and role-based access.",
      "Containerize a small project with Docker."
    ]
  },
  {
    title: "Long Term (6+ months)",
    items: [
      "Build a full, production-style project with logging & monitoring.",
      "Deepen AI / CV skills with one focused project.",
      "Prepare for junior software engineer / full-stack roles."
    ]
  }
];

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="page">
      {/* Gradient background shapes */}
      <div className="bg-blur bg-blur-1" />
      <div className="bg-blur bg-blur-2" />

      {/* MAIN WRAPPER */}
      <div className="shell">
        {/* NAVBAR */}
        <header className="site-header">
          <div className="header-inner">
            <div className="logo">
              Nadun<span></span>
            </div>
            <nav className="nav">
              {["home", "about", "skills", "projects", "roadmap", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    className="nav-link"
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </nav>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="section hero" id="home">
  <div className="section-inner hero-inner">
    <div className="hero-text-col">
      <p className="eyebrow">Software Engineer · Full-Stack · AI / IoT</p>
      <h1 className="hero-title">
        I build{" "}
        <span className="hero-highlight">
          practical, real-world systems
        </span>{" "}
        while learning in public.
      </h1>
      <p className="hero-subtitle">
        I&apos;m a software engineering student from Sri Lanka, working
        across MERN, Spring Boot, Python, and Flutter. I love building
        things that help real users – like AI-powered smart glasses for
        visually impaired people and full-stack web apps.
      </p>
      <div className="hero-actions">
        <button
          className="btn primary"
          onClick={() => scrollToSection("projects")}
        >
          View My Projects
        </button>

        <a
          className="btn ghost"
          href="/Nadun_Bandara_FullStack_Intern"
          download
        >
          Download CV
        </a>

        <button
          className="btn ghost"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </button>
      </div>
    </div>

    <div className="hero-photo-col">
      <div className="hero-photo-frame">
        <img src="/profile.jpg" alt="Portrait of Nadun" />
      </div>
    </div>
  </div>
</section>


          {/* ABOUT */}
          <section className="section" id="about">
            <div className="section-inner">
              <h2 className="section-title">About Me</h2>
              <p className="section-text">
                I learn best by building. My background combines full-stack web
                development (MERN, Spring Boot) with early-stage work in AI and
                IoT-style systems. I&apos;m especially interested in assistive
                technology and tools that make complex systems easier for people
                to use.
              </p>
              <p className="section-text">
                Right now I&apos;m strengthening my fundamentals in backend and
                front-end engineering, while continuing to explore AI pipelines,
                latency measurement, and accessibility-focused UI design.
              </p>
            </div>
          </section>

          {/* SKILLS */}
          <section className="section" id="skills">
            <div className="section-inner">
              <h2 className="section-title">Skills</h2>
              <div className="skills-layout">
                <SkillColumn
                  title="Comfortable With"
                  items={skills.comfortable}
                />
                <SkillColumn title="Currently Learning" items={skills.learning} />
                <SkillColumn title="Planning to Learn" items={skills.planned} />
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="section" id="projects">
            <div className="section-inner">
              <h2 className="section-title">Projects</h2>
              <p className="section-text">
                These are the projects that currently represent how I think and
                what I can build. Some are completed, others are still in
                progress.
              </p>
              <div className="projects-grid">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* ROADMAP */}
          <section className="section" id="roadmap">
            <div className="section-inner">
              <h2 className="section-title">Learning Roadmap</h2>
              <p className="section-text">
                I like to be honest about where I am now and where I’m heading.
                This is the current plan I’m following to grow as a developer.
              </p>
              <div className="roadmap-grid">
                {roadmap.map((phase) => (
                  <div key={phase.title} className="roadmap-card">
                    <h3>{phase.title}</h3>
                    <ul>
                      {phase.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="section" id="contact">
            <div className="section-inner">
              <h2 className="section-title">Contact</h2>
              <p className="section-text">
                I’m open to internships, collaborations, and any chance to work
                with teams where I can learn and contribute. If my profile
                matches what you&apos;re looking for, feel free to reach out.
              </p>
              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href="mailto:your.email@example.com">
                    Tharukanadun711@gmail.com
                  </a>
                </li>
                <li>
                  <span>GitHub</span>
                  <a
                    href="https://github.com/Nadun00"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/Nadun00
                  </a>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/nadun-bandara-3551aa348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/nadun-bandara-3551aa348
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Nadun. Learning in public.</p>
        </footer>
      </div>
    </div>
  );
}

function SkillColumn({ title, items }) {
  return (
    <div className="skill-column">
      <h3>{title}</h3>
      <ul>
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <ul className="project-highlights">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default App;
