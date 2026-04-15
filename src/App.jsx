import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

const projectsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projectItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  }
};

const navItems = ["home", "about", "skills", "projects", "roadmap", "contact"];

const projects = [
  {
    title: "Tea Factory Financial Management System",
    category: "Full-Stack Web Application",
    tech: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    description:
      "A financial management platform for a tea factory that digitizes sales and expense tracking and replaces manual bookkeeping with a cleaner operational workflow.",
    highlights: [
      "Implemented add, edit, and delete flows for financial transactions.",
      "Managed both sales and expense records with clear categorization.",
      "Displayed transaction history in a clean tabular interface.",
      "Focused on usability for non-technical users in a factory environment."
    ],
    links: {
      github: "https://github.com/Nadun00/tea-factory-finance-management/tree/master",
      demo: ""
    }
  },
  {
    title: "Skill Sharing Platform",
    category: "Full-Stack Group Project",
    tech: ["React", "Spring Boot", "MongoDB", "REST APIs"],
    description:
      "A collaborative skill sharing platform where users create profiles, publish skills, and interact through follow, like, and commenting features.",
    highlights: [
      "Implemented like and unlike functionality for skill posts.",
      "Built follow and unfollow flows between users.",
      "Created a commenting system for post engagement.",
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
    category: "Frontend + Rule-Based AI",
    tech: ["React", "JavaScript", "Axios", "HTML5", "CSS3", "Font Awesome"],
    description:
      "An interactive chatbot that helps identify common tea leaf diseases from visible symptoms and provides quick prevention and treatment guidance.",
    highlights: [
      "Designed a conversational chatbot UI in React.",
      "Implemented rule-based logic to diagnose tea leaf diseases.",
      "Provided instant prevention and treatment suggestions.",
      "Focused on usability for farmers and non-technical users."
    ],
    links: {
      github: "https://github.com/Nadun00/simple-rule_based-AI/tree/main",
      demo: ""
    }
  },
  {
    title: "Inventory Management System for Dental Clinic",
    category: "Full-Stack Web Application",
    tech: [
      "React.js",
      "JavaScript",
      "Material UI",
      "React Router",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose"
    ],
    description:
      "A full-stack inventory platform for a dental clinic that modernizes stock tracking for supplies and equipment through a simple digital workflow.",
    highlights: [
      "Built a single-page application with React and Material UI.",
      "Implemented CRUD operations for inventory items.",
      "Integrated frontend flows with backend REST APIs using Axios.",
      "Developed backend services with Node.js, Express, and MongoDB.",
      "Added PDF export functionality using html2canvas and jsPDF."
    ],
    links: {
      github: "https://github.com/Nadun00/InventoryManagement/tree/main",
      demo: ""
    }
  }
];

const skillGroups = [
  {
    title: "Core Stack",
    hint: "Technologies I build with most confidently",
    tone: "primary",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Java & Spring Boot",
      "Node.js & Express.js",
      "MongoDB",
      "REST API development",
      "Git & GitHub",
      "Axios & Postman"
    ]
  },
  {
    title: "Quality Mindset",
    hint: "How I approach reliability and usability",
    tone: "neutral",
    items: [
      "Manual testing",
      "Functional test case design",
      "Bug reporting and validation",
      "UI and usability testing",
      "Incremental product improvement"
    ]
  },
  {
    title: "Currently Learning",
    hint: "Areas I am actively sharpening",
    tone: "neutral",
    items: [
      "Flutter UI architecture",
      "Python for AI and computer vision",
      "API security and authentication",
      "Advanced full-stack patterns"
    ]
  },
  {
    title: "Next Growth Areas",
    hint: "What I want to add to my toolkit next",
    tone: "subtle",
    items: [
      "Docker and containerization basics",
      "Cloud deployment fundamentals",
      "Monitoring and logging basics",
      "System design for small applications"
    ]
  }
];

const roadmap = [
  {
    title: "Short Term",
    timeline: "0-3 months",
    items: [
      "Polish at least one MERN app with proper authentication and validation.",
      "Stabilize the smart glasses Python pipeline and logging.",
      "Finish core screens of the Flutter companion app."
    ]
  },
  {
    title: "Mid Term",
    timeline: "3-6 months",
    items: [
      "Deploy a full-stack app publicly using MERN or Spring Boot with React.",
      "Learn JWT-based authentication and role-based access control.",
      "Containerize a small project with Docker."
    ]
  },
  {
    title: "Long Term",
    timeline: "6+ months",
    items: [
      "Build a more production-style project with logging and monitoring.",
      "Deepen AI and computer vision skills through one focused project.",
      "Prepare for junior software engineer and full-stack roles."
    ]
  }
];

const highlights = [
  { value: "4+", label: "Hands-on full-stack projects" },
  { value: "MERN", label: "Primary development stack" },
  { value: "Spring", label: "Backend API experience" }
];

const contactLinks = [
  {
    label: "Email",
    value: "Tharukanadun711@gmail.com",
    href: "mailto:Tharukanadun711@gmail.com"
  },
  {
    label: "GitHub",
    value: "github.com/Nadun00",
    href: "https://github.com/Nadun00"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nadun-bandara-3551aa348",
    href: "https://www.linkedin.com/in/nadun-bandara-3551aa348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

function App() {
  const [status, setStatus] = useState("idle");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionElements = navItems
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5]
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_kgy0czv",
        "template_qw23yee",
        event.target,
        "MRPxaWUoaq7Dy8vUO"
      )
      .then(() => {
        setStatus("success");
        event.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <div className="page">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />
      <div className="bg-grid" />

      <div className="shell">
        <header className="site-header">
          <div className="header-inner">
            <button className="brand" onClick={() => scrollToSection("home")}>
              <span className="brand-mark">NB</span>
              <span className="brand-copy">
                <strong>Nadun Bandara</strong>
                <small>Full-Stack Developer</small>
              </span>
            </button>

            <nav className="nav" aria-label="Primary">
              {navItems.map((section) => (
                <button
                  key={section}
                  className={`nav-link ${
                    activeSection === section ? "is-active" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <main>
          <section className="section hero" id="home">
            <div className="section-inner hero-panel">
              <div className="hero-copy">
                <div className="hero-intro">
                  <span className="eyebrow">Software Engineering Student</span>
                  <span className="availability-badge">
                    Open to internships and freelance work
                  </span>
                </div>

                <h1 className="hero-title">
                  Building full-stack products that feel useful, thoughtful, and
                  ready for real users.
                </h1>

                <p className="hero-subtitle">
                  I am a software engineering student from Sri Lanka focused on
                  React, Node.js, Spring Boot, MongoDB, and practical product
                  development. I enjoy turning ideas into working systems,
                  especially projects that solve clear real-world problems.
                </p>

                <div className="hero-actions">
                  <button
                    className="btn primary"
                    onClick={() => scrollToSection("projects")}
                  >
                    Explore Projects
                  </button>
                  <a
                    className="btn secondary"
                    href="/Nadun_Bandara_FullStack_Intern.pdf"
                    download
                  >
                    Download CV
                  </a>
                  <button
                    className="btn ghost"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Me
                  </button>
                </div>

                <div className="hero-highlights">
                  {highlights.map((item) => (
                    <div key={item.label} className="hero-stat">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-side">
                <div className="hero-photo-card">
                  <div className="hero-photo-frame">
                    <img src="/profile.jpg" alt="Portrait of Nadun Bandara" />
                  </div>

                  <div className="hero-card-summary">
                    <p className="summary-label">Current focus</p>
                    <h2>Full-stack internships and production-ready project work</h2>
                    <ul>
                      <li>Frontend interfaces with React</li>
                      <li>Backend APIs with Spring Boot and Node.js</li>
                      <li>Real projects that solve practical problems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <motion.section
            className="section"
            id="about"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="section-inner">
              <SectionHeading
                eyebrow="About"
                title="A developer focused on practical systems, steady growth, and clear product thinking."
                description="Your portfolio already had good substance. The redesign now gives that substance stronger structure, clearer hierarchy, and a more trustworthy presentation for recruiters and clients."
              />

              <div className="about-grid">
                <div className="about-copy">
                  <p className="section-text">
                    I am currently seeking a{" "}
                    <strong>full-stack development internship</strong> where I
                    can contribute to real products and continue growing as an
                    engineer. I enjoy working across frontend and backend and I
                    get the most satisfaction from building complete systems that
                    actually solve a user need.
                  </p>
                  <p className="section-text">
                    I have hands-on experience with{" "}
                    <strong>
                      Java, Spring Boot, React, Node.js, Express, and MongoDB
                    </strong>
                    , with a strong interest in REST APIs, database-driven
                    applications, and clean interface development. I like
                    structuring backend logic just as much as I enjoy shaping
                    frontend experiences.
                  </p>
                  <p className="section-text">
                    What drives me most is the process of taking an idea from
                    concept to working product. I learn best by building,
                    testing, iterating, and improving through practice, and I am
                    excited by opportunities to work with teams that value
                    thoughtful software and continuous learning.
                  </p>
                </div>

                <div className="about-panel">
                  <InfoCard
                    title="What I bring"
                    items={[
                      "Full-stack project experience across frontend and backend",
                      "A practical mindset focused on real users and workflows",
                      "Strong willingness to learn quickly in collaborative teams"
                    ]}
                  />
                  <InfoCard
                    title="Best fit roles"
                    items={[
                      "Full-stack development internships",
                      "Frontend-heavy software engineering roles",
                      "Freelance web application work for small businesses"
                    ]}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="section"
            id="skills"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="section-inner">
              <SectionHeading
                eyebrow="Skills"
                title="A balanced stack with strong frontend foundations and growing backend depth."
                description="The section is now organized by confidence level and growth direction so recruiters can quickly understand what you use today and where you are heading next."
              />

              <div className="skills-layout">
                {skillGroups.map((group) => (
                  <motion.article
                    key={group.title}
                    className={`skill-card ${group.tone}`}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    <div className="skill-card-header">
                      <h3>{group.title}</h3>
                      <p className="skill-hint">{group.hint}</p>
                    </div>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="section"
            id="projects"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="section-inner">
              <SectionHeading
                eyebrow="Projects"
                title="Projects that show product thinking, full-stack execution, and problem-solving."
                description="The project cards now emphasize outcome, stack, and credibility first, with cleaner scanning, stronger hover feedback, and better visual separation."
              />

              <motion.div
                className="projects-grid"
                variants={projectsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="section"
            id="roadmap"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="section-inner">
              <SectionHeading
                eyebrow="Roadmap"
                title="A transparent growth plan that shows direction, discipline, and ambition."
                description="Including a roadmap works well for internships when it feels intentional. This version is more concise, more readable, and framed as a professional growth narrative."
              />

              <div className="roadmap-grid">
                {roadmap.map((phase) => (
                  <article key={phase.title} className="roadmap-card">
                    <div className="roadmap-card-top">
                      <span>{phase.timeline}</span>
                      <h3>{phase.title}</h3>
                    </div>
                    <ul>
                      {phase.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="section"
            id="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="section-inner">
              <SectionHeading
                eyebrow="Contact"
                title="Let's connect about internships, freelance work, or collaborative opportunities."
                description="The contact area is now split into clear connection options and a more polished message form so it feels credible and easy to use."
              />

              <div className="contact-grid">
                <div className="contact-panel">
                  <div className="contact-stack">
                    {contactLinks.map((item) => (
                      <a
                        key={item.label}
                        className="contact-item"
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </a>
                    ))}
                  </div>

                  <div className="contact-note">
                    <p className="summary-label">What I am open to</p>
                    <h3>Internships, freelance collaborations, and junior software roles</h3>
                    <p>
                      If your team needs someone who can learn quickly, build
                      responsibly, and contribute across the stack, I would love
                      to hear from you.
                    </p>
                  </div>
                </div>

                <motion.form
                  className="contact-form"
                  onSubmit={sendEmail}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="form-row">
                    <label className="field">
                      <span>Name</span>
                      <input type="text" name="name" placeholder="Your name" required />
                    </label>
                    <label className="field">
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                      />
                    </label>
                  </div>

                  <label className="field">
                    <span>Message</span>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell me a little about the opportunity or project."
                      required
                    />
                  </label>

                  <div className="form-footer">
                    <button
                      type="submit"
                      className="btn primary"
                      disabled={status === "sending"}
                    >
                      {status === "sending"
                        ? "Sending..."
                        : status === "success"
                          ? "Message sent"
                          : "Send message"}
                    </button>

                    <p
                      className={`form-status ${
                        status === "error" ? "is-error" : ""
                      }`}
                    >
                      {status === "success" &&
                        "Thanks for reaching out. Your message was sent successfully."}
                      {status === "error" &&
                        "Something went wrong while sending. Please try again."}
                    </p>
                  </div>
                </motion.form>
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="site-footer">
          <p>{`(c) ${new Date().getFullYear()} Nadun Bandara. Built with focus, clarity, and continuous improvement.`}</p>
        </footer>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-lead">{description}</p>
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      variants={projectItem}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tech.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
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
            View code
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Live demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default App;
