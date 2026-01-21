export default function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container site-header-inner">
          <div className="logo">Nadun<span>.dev</span></div>
          <nav className="nav-links">
            <button className="btn-link" onClick={() => scrollToSection("home")}>
              Home
            </button>
            <button className="btn-link" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className="btn-link" onClick={() => scrollToSection("skills")}>
              Skills
            </button>
            <button className="btn-link" onClick={() => scrollToSection("projects")}>
              Projects
            </button>
            <button className="btn-link" onClick={() => scrollToSection("roadmap")}>
              Roadmap
            </button>
            <button className="btn-link" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO / HOME */}
        <section className="hero" id="home">
          <div className="container">
            <h1 className="hero-title">
              Software Engineer &amp; AI / IoT Enthusiast
            </h1>
            <p className="hero-subtitle">
              Full-stack (MERN &amp; Spring Boot) • AI &amp; Python • Flutter UI
            </p>
            <p className="hero-text">
              I’m a software engineering student from Sri Lanka who loves building
              real-world systems: from full-stack web applications to AI-powered
              smart glasses for visually impaired users. I focus on learning by
              doing and continuously expanding my skills.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Projects
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I am a Software Engineering student and developer with experience in
              full-stack web development (MERN and Spring Boot), AI / Python, and
              IoT-style systems. I enjoy building projects that solve practical
              problems and help real users. My current focus is on improving my
              backend fundamentals, front-end engineering, and intelligent systems.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML, CSS, JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Responsive design</li>
                  <li>Flutter (companion app UI)</li>
                </ul>
              </div>
              <div className="skill-card">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js &amp; Express (MERN)</li>
                  <li>Spring Boot (REST APIs)</li>
                  <li>RESTful API design</li>
                  <li>Basic authentication &amp; validation</li>
                </ul>
              </div>
              <div className="skill-card">
                <h3>AI &amp; Systems</h3>
                <ul>
                  <li>Python programming</li>
                  <li>OpenCV, basic TTS</li>
                  <li>Edge devices (Raspberry Pi concepts)</li>
                  <li>Latency measurement &amp; pipeline design</li>
                </ul>
              </div>
              <div className="skill-card">
                <h3>Tools &amp; Workflow</h3>
                <ul>
                  <li>Git &amp; GitHub</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Basic Linux / CLI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="container">
            <h2>Projects</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              A selection of my work across AI, IoT, and full-stack web
              development.
            </p>
            <div className="projects-grid">
              {/* Smart Glasses project */}
              <article className="project-card">
                <h3>AI Smart Glasses for Visually Impaired (PP1)</h3>
                <p className="project-meta">
                  AI &amp; IoT • Python, Raspberry Pi (concept), OpenCV, TTS, Flutter UI
                </p>
                <p>
                  Assistive smart glasses concept that capture the environment
                  through a camera, process the scene, and provide audio feedback
                  to visually impaired users. I focused on the hardware &amp;
                  wearable integration, latency pipeline, and companion app UI.
                </p>
                <ul className="project-highlights">
                  <li>
                    Designed the camera → AI processing → TTS → audio pipeline with
                    latency breakdown (Tcam, Tproc, Ttts, Taudio).
                  </li>
                  <li>
                    Implemented Python scripts to simulate the processing pipeline
                    and measure performance.
                  </li>
                  <li>
                    Built a Flutter frontend-only companion app UI for monitoring
                    and configuration.
                  </li>
                </ul>
                <div className="project-links">
                  {/* Replace with your real repo links later */}
                  {/* <a href="https://github.com/your-username/smart-glasses" target="_blank">GitHub Repo</a> */}
                </div>
              </article>

              {/* MERN project */}
              <article className="project-card">
                <h3>MERN Stack Web Application</h3>
                <p className="project-meta">
                  Full-Stack • React, Node.js, Express, MongoDB
                </p>
                <p>
                  A full-stack web application built with the MERN stack, including
                  CRUD features and a clean responsive UI. This project helped me
                  practice connecting a React frontend with a REST API backend.
                </p>
                <ul className="project-highlights">
                  <li>
                    Implemented RESTful routes and MongoDB models with Express.
                  </li>
                  <li>
                    Created reusable React components and forms with validation.
                  </li>
                  <li>
                    Structured the project for future expansion and deployment.
                  </li>
                </ul>
                <div className="project-links">
                  {/* <a href="https://github.com/your-username/mern-project" target="_blank">GitHub Repo</a> */}
                </div>
              </article>

              {/* Spring Boot project */}
              <article className="project-card">
                <h3>Spring Boot REST API</h3>
                <p className="project-meta">
                  Backend • Spring Boot, REST, (MySQL/MongoDB)
                </p>
                <p>
                  A backend service built with Spring Boot using layered
                  architecture, exposing clean REST endpoints for a specific domain
                  (e.g. student management, tasks, or inventory).
                </p>
                <ul className="project-highlights">
                  <li>
                    Used controllers, services, and repositories with clear
                    separation of concerns.
                  </li>
                  <li>
                    Added validation and DTOs for safer data handling.
                  </li>
                  <li>
                    Documented endpoints for frontend integration and testing.
                  </li>
                </ul>
                <div className="project-links">
                  {/* <a href="https://github.com/your-username/springboot-project" target="_blank">GitHub Repo</a> */}
                </div>
              </article>

              {/* Flutter app (ongoing) */}
              <article className="project-card">
                <h3>Flutter Companion App (Ongoing)</h3>
                <p className="project-meta">
                  Mobile UI • Flutter, Material 3
                </p>
                <p>
                  A companion mobile app UI for configuring and monitoring the AI
                  smart glasses system. Frontend-only for now, designed with
                  accessibility and large touch targets in mind.
                </p>
                <ul className="project-highlights">
                  <li>Dashboard for device status, connection, and battery.</li>
                  <li>Settings screen for language, voice, and modes.</li>
                  <li>Logs / diagnostics view for latency and events.</li>
                </ul>
                <div className="project-links">
                  {/* <a href="https://github.com/your-username/flutter-companion" target="_blank">GitHub Repo</a> */}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="section" id="roadmap">
          <div className="container">
            <h2>Learning Roadmap</h2>
            <p style={{ marginBottom: "1rem" }}>
              I like to plan my learning with concrete goals. Here’s what I&apos;m
              focusing on next:
            </p>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>Deepening Existing Skills</h3>
                <ul>
                  <li>Stronger authentication (JWT, role-based access).</li>
                  <li>Better backend error handling and logging.</li>
                  <li>Cleaner React and Flutter architecture.</li>
                </ul>
              </div>
              <div className="skill-card">
                <h3>New Tools &amp; Concepts</h3>
                <ul>
                  <li>Deploying apps (Vercel, Render, etc.).</li>
                  <li>Basic Docker and containerization.</li>
                  <li>Intro to system design for small projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="container">
            <h2>Contact</h2>
            <p>
              I’m open to internships, collaborations, and interesting side
              projects. Feel free to reach out.
            </p>
            <ul className="contact-list">
              <li>
                Email:{" "}
                <a href="mailto:your.email@example.com">
                  your.email@example.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/your-username
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/your-profile
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <p>© 2026 Nadun. Built with React and a lot of learning.</p>
        </div>
      </footer>
    </>
  );
}
