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
      "A web-based finance system built to replace manual bookkeeping in a tea factory and make daily sales and expense tracking faster and more reliable.",
    highlights: [
      "Built create, update, and delete flows for financial records.",
      "Organized sales and expenses with practical categories for day-to-day use.",
      "Presented transaction history in a simple table that is easy to review.",
      "Designed the workflow to be usable for non-technical staff."
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
      "A full-stack platform where users can create profiles, share skills, and interact through social features such as follows, likes, and comments.",
    highlights: [
      "Implemented like and unlike interactions for skill posts.",
      "Built follow and unfollow features between users.",
      "Developed a commenting flow to support engagement on posts.",
      "Connected the React frontend with Spring Boot APIs.",
      "Worked with MongoDB models for user activity and relationships."
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
      "A rule-based chatbot that helps identify common tea leaf diseases from visible symptoms and gives quick prevention guidance through a simple conversational interface.",
    highlights: [
      "Built the chatbot interface in React.",
      "Implemented rule-based diagnosis logic based on visible leaf symptoms.",
      "Returned instant suggestions for prevention and treatment.",
      "Kept the interaction simple and clear for non-technical users."
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
      "A full-stack inventory system for a dental clinic that improves how supplies and equipment are tracked, updated, and reviewed.",
    highlights: [
      "Built a single-page application using React and Material UI.",
      "Implemented CRUD operations for inventory items and stock records.",
      "Integrated frontend flows with backend REST APIs using Axios.",
      "Developed backend services with Node.js, Express, and MongoDB.",
      "Added PDF export support for reporting and record sharing."
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
    hint: "Tools I am most comfortable using in projects",
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
    hint: "How I think about usability, testing, and stability",
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
    hint: "Areas I am actively improving through practice",
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
    hint: "Topics I plan to strengthen next",
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
  { value: "API", label: "Backend work with Spring Boot and Node.js" }
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
                  Full-stack developer focused on building clean, useful
                  software for real-world problems.
                </h1>

                <p className="hero-subtitle">
                  I am Nadun Bandara, a software engineering student from Sri
                  Lanka with hands-on experience in React, Node.js, Spring Boot,
                  and MongoDB. I enjoy building web applications that are clear,
                  practical, and useful to the people who depend on them.
                </p>

                <div className="hero-actions">
                  <button
                    className="btn primary"
                    onClick={() => scrollToSection("projects")}
                  >
                    View Projects
                  </button>
                  <a
                    className="btn secondary"
                    href="/Nadun_Bandara_FullStack_Intern.pdf"
                    download
                  >
                    Download Resume
                  </a>
                  <button
                    className="btn ghost"
                    onClick={() => scrollToSection("contact")}
                  >
                    Let's Talk
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
                    <h2>Looking for full-stack internships and opportunities to build useful products</h2>
                    <ul>
                      <li>Frontend development with React</li>
                      <li>Backend APIs with Spring Boot and Node.js</li>
                      <li>Projects shaped around practical user needs</li>
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
                title="I enjoy building reliable software and learning by working on real projects."
                description="My strongest growth has come from turning ideas into working products, improving them through feedback, and learning what makes software genuinely useful."
              />

              <div className="about-grid">
                <div className="about-copy">
                  <p className="section-text">
                    I am currently looking for a{" "}
                    <strong>full-stack development internship</strong> where I
                    can contribute to real products and keep growing as an
                    engineer. I like working across both frontend and backend,
                    and I especially enjoy building complete systems that solve
                    a clear problem.
                  </p>
                  <p className="section-text">
                    I have hands-on experience with{" "}
                    <strong>
                      Java, Spring Boot, React, Node.js, Express, and MongoDB
                    </strong>
                    , and I am especially interested in REST APIs,
                    database-driven applications, and clean user interfaces. I
                    enjoy structuring backend logic just as much as I enjoy
                    building the frontend that people interact with.
                  </p>
                  <p className="section-text">
                    I learn best by building, testing, and improving through
                    practice. My goal is to join a team where I can contribute
                    to meaningful work, keep learning quickly, and become a
                    stronger software engineer through real experience.
                  </p>
                </div>

                <div className="about-panel">
                  <InfoCard
                    title="What I bring"
                    items={[
                      "Hands-on experience across frontend and backend development",
                      "A practical approach focused on real users and workflows",
                      "A strong willingness to learn and improve in collaborative teams"
                    ]}
                  />
                  <InfoCard
                    title="Best fit roles"
                    items={[
                      "Full-stack development internships",
                      "Junior software engineering roles",
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
                title="My work is centered on modern web development, with a strong focus on full-stack fundamentals."
                description="These are the tools I use most often, the habits I bring into projects, and the areas I am currently developing further."
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
                title="A selection of projects that reflect how I approach building software."
                description="Most of my learning has come from building end-to-end applications, solving practical problems, and improving how people use the final product."
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
                title="I care a lot about steady improvement and building depth over time."
                description="These are the areas I am actively working on as I move toward stronger full-stack and software engineering roles."
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
                title="If you think I could be a good fit for your team or project, I'd be glad to connect."
                description="I am open to internships, junior roles, and freelance opportunities where I can contribute, learn quickly, and keep growing through real work."
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
                    <p className="summary-label">Open to</p>
                    <h3>Internships, freelance work, and junior software opportunities</h3>
                    <p>
                      If you are looking for someone who can contribute across
                      the stack, communicate clearly, and keep improving through
                      hands-on work, feel free to reach out.
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
                          : "Start a conversation"}
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
          <p>{`(c) ${new Date().getFullYear()} Nadun Bandara. Designed and built with React.`}</p>
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
