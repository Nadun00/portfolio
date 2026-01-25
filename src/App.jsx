const projects = [
  {
    title: "Tea Factory Financial Management System",
    category: "Full-Stack · Web Application",
    tech: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    description:
      "A financial management web application designed for a tea factory to record, manage, and monitor sales and expenses. The system replaces manual bookkeeping with a simple digital workflow.",
    highlights: [
      "Implemented add, edit, and delete functionality for financial transactions.",
      "Managed both sales and expense records with categorization.",
      "Displayed transaction history in a clean tabular interface.",
      "Focused on usability for non-technical users in a factory environment."
    ],
    links: {
      github: "https://github.com/Nadun00/tea-factory-finance-management/tree/master",
      demo: "" 
    }
  },
  {
    title: "Skill Sharing Platform (Group Project)",
    category: "Full-Stack · Web Application",
    tech: ["React", "Spring Boot", "MongoDB", "REST API"],
    description:
      "A full-stack skill sharing platform where users can create profiles, share skills, and interact with content through social features. The system focuses on enabling collaboration and engagement between users.",
    highlights: [
      "Implemented like and unlike functionality for skill posts.",
      "Implemented follow and unfollow functionality between users.",
      "Built a commenting system for user interactions on posts.",
      "Integrated frontend interactions with backend REST APIs.",
      "Worked with MongoDB data models related to user engagement."
    ],
    links: {
      github: "https://github.com/Nadun00/task-hive-learning-platform",
      demo: ""
    }
  },
  {
    title: "Rule-Based AI Chatbot for Tea Disease Diagnosis",
    category: "Frontend · Rule-Based AI",
    tech: ["React",
    "JavaScript (ES6)",
    "Axios",
    "HTML5",
    "CSS3",
    "Font Awesome"],
    description:
      "A rule-based AI chatbot that helps diagnose common tea leaf diseases based on visual symptoms such as leaf color. The system provides instant disease identification and basic prevention tips through an interactive chatbot interface.",
    highlights: [
      "Designed an interactive chatbot UI using React.",
      "Implemented rule-based logic to diagnose tea leaf diseases.",
      "Provided instant prevention and treatment suggestions.",
      "Focused on usability for farmers and non-technical users."
    ],
    links: {
      github: "https://github.com/Nadun00/simple-rule_based-AI/tree/main"
    }
  },
  {
    title: "Inventory Management System for Dental Clinic",
    category: "Full-Stack · Web Application",
    tech: ["React.js",
    "JavaScript (ES6+)",
    "Material UI",
    "React Router",
    "Axios",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose"],
    description:
      "A full-stack inventory management system developed for a dental clinic to track medical supplies and equipment. The system replaces manual inventory tracking with a clean, digital workflow.",
    highlights: [
      "Built a Single Page Application (SPA) using React and Material UI.",
      "Implemented CRUD operations for inventory items.",
      "Integrated frontend with backend REST APIs using Axios.",
      "Developed backend services using Node.js, Express, and MongoDB.",
      "Added PDF export functionality using html2canvas and jsPDF."
    ],
    links: {
      github: "https://github.com/Nadun00/InventoryManagement/tree/main"
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
          href="/Nadun_Bandara_FullStack_Intern.pdf"
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
                I am a Software Engineering student currently seeking a
                <strong> Full-Stack Development Internship</strong>.
                I enjoy working across both frontend and backend, and I find real
                satisfaction in building complete web applications where everything
                comes together and actually works.
              </p>

              <p className="section-text">
                I have hands-on experience developing full-stack systems using
                <strong> Java, Spring Boot, React, Node.js, Express, and MongoDB</strong>,
                with a strong focus on REST API development and database-driven
                applications. I enjoy designing backend logic, structuring APIs, and
                connecting them to clean and interactive user interfaces.
              </p>

              <p className="section-text">
                What motivates me most is the process of turning an idea into a
                working system — from writing backend logic to seeing the frontend
                respond correctly. I learn best by building real projects, experimenting,
                and improving through practice, and I am eager to grow by contributing
                to real-world applications in a collaborative environment.
              </p>

            </div>
          </section>

          {/* SKILLS */}
          <section className="section" id="skills">
  <div className="section-inner">
    <h2 className="section-title">Skills</h2>

    <div className="skills-layout">
      <div className="skill-column">
        <h3>Comfortable With</h3>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>REST API Development</li>
          <li>Git & GitHub</li>
          <li>Axios</li>
          <li>Postman</li>
        </ul>
      </div>

      <div className="skill-column">
        <h3>Testing & Quality (QA)</h3>
        <ul>
          <li>Manual Testing</li>
          <li>Test Case Design</li>
          <li>Functional Testing</li>
          <li>Bug Reporting & Validation</li>
          <li>UI / Usability Testing</li>
        </ul>
      </div>

      <div className="skill-column">
        <h3>Currently Learning</h3>
        <ul>
          <li>Flutter (UI architecture)</li>
          <li>Python for AI / Computer Vision</li>
          <li>API security & authentication</li>
          <li>Advanced full-stack patterns</li>
        </ul>
      </div>

      <div className="skill-column">
        <h3>Planning to Learn</h3>
        <ul>
          <li>Docker & containerization basics</li>
          <li>Cloud fundamentals</li>
          <li>System design basics</li>
        </ul>
      </div>
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
