
"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Palette,
  Smartphone,
  Database,
  Send,
} from "lucide-react";

const navItems = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript",
  "React", "Next.js", "Node.js", "MySQL",
  "Python", "Git & GitHub", "Figma", "Responsive Design",
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites and full-stack web applications.",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Clean and attractive user interfaces with great user experience.",
  },
  {
    icon: Database,
    title: "Database Development",
    description: "Database design, MySQL integration and backend functionality.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Websites that work smoothly across desktop, tablet and mobile.",
  },
];

const projects = [
  {
    number: "01",
    title: "Digital Products Marketplace",
    category: "Full Stack Development",
    description: "A marketplace concept for browsing, purchasing and managing digital products.",
    tech: "Next.js · TypeScript · MySQL",
  },
  {
    number: "02",
    title: "Employee Management System",
    category: "Web Application",
    description: "An application concept for managing employee information and workplace records.",
    tech: "Next.js · MySQL · CSS",
  },
  {
    number: "03",
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    description: "A responsive portfolio showcasing development skills, services and projects.",
    tech: "HTML · CSS · JavaScript",
  },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <main>
      <div className="background-grid" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="header">
        <a className="logo" href="#home" onClick={() => scrollTo("home")}>
          MUSH<span>[RIFA]</span><b>.</b>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`navigation ${menuOpen ? "show-menu" : ""}`}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(id);
                }}
              >
                {item}
              </a>
            );
          })}
        </nav>

        <a href="#contact" className="header-button">
          Hire Me <ArrowRight size={16} />
        </a>
      </header>

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
          </span>

          <p className="intro-text">HELLO, I'M</p>
          <h1>
            FATHIMA
            <br />
            <span>MUSHRIFA.</span>
          </h1>

          <h2>
            Freelancer & <span>Full Stack</span>
            <br /> Web Developer
          </h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly digital experiences
            using creative design and powerful web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button-primary">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="button-outline">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Mushrifa99" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://linkedin.com/in/fathima-mushrifa" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:mushrifa09999@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-card">
            <div className="card-top">
              <span>PORTFOLIO / 2026</span>
              <span className="card-dot">●</span>
            </div>

            <div className="profile-symbol">
              <Code2 size={72} strokeWidth={1.3} />
            </div>

            <h3>BUILDING</h3>
            <h3 className="gradient-text">DIGITAL IDEAS</h3>
            <p>DESIGN · DEVELOP · CREATE</p>

            <div className="card-bottom">
              <span>FULL STACK DEVELOPER</span>
              <span>01 / 04</span>
            </div>
          </div>

          <div className="floating-tag tag-one">{"<"} Code / {">"}</div>
          <div className="floating-tag tag-two">React + Next.js</div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="section-container section-block" id="about">
        <div className="section-heading">
          <span className="section-label">01 / ABOUT ME</span>
          <h2>Turning Ideas Into <span>Digital Reality.</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-number">01</div>
          <div>
            <h3>Creative Developer & Problem Solver</h3>
            <p>
              I'm Fathima Mushrifa, a freelancer and Full Stack Web Developer
              passionate about creating beautiful, functional and responsive
              websites. I enjoy learning new technologies and transforming
              ideas into useful digital solutions.
            </p>
            <a href="#contact" className="text-link">
              Let's work together <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-container section-block" id="services">
        <div className="section-heading">
          <span className="section-label">02 / WHAT I DO</span>
          <h2>My <span>Services.</span></h2>
          <p>Creative solutions designed to bring your ideas to life.</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <span className="card-number">0{index + 1}</span>
                <Icon size={34} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ArrowRight className="service-arrow" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-container section-block" id="skills">
        <div className="section-heading">
          <span className="section-label">03 / MY EXPERTISE</span>
          <h2>Technical <span>Skills.</span></h2>
          <p>Technologies and tools I use to build digital experiences.</p>
        </div>

        <div className="skills-panel">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span className="skill-index">0{index + 1}</span>
              <span>{skill}</span>
              <span className="skill-check">✦</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container section-block" id="projects">
        <div className="section-heading">
          <span className="section-label">04 / SELECTED WORK</span>
          <h2>Featured <span>Projects.</span></h2>
          <p>A selection of projects and development concepts.</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tech">{project.tech}</span>
              </div>
              <ArrowUpRightIcon />
            </article>
          ))}
        </div>
      </section>

      <section className="section-container section-block" id="contact">
        <div className="contact-panel">
          <span className="section-label">05 / LET'S CONNECT</span>
          <h2>Have an Idea?</h2>
          <h2 className="gradient-text">Let's Build It Together.</h2>
          <p>
            Have a project in mind or looking for a developer?
            Send me an email and let's discuss your idea.
          </p>

          <a
            className="button-primary"
            href="mailto:mushrifa09999@gmail.com"
          >
            <Send size={18} /> Send Me an Email
          </a>

          <a className="contact-email" href="mailto:mushrifa09999@gmail.com">
            mushrifa09999@gmail.com
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="logo" href="#home">
          MUSH<span>[RIFA]</span><b>.</b>
        </a>
        <p>{"\u00A9"} {new Date().getFullYear()} Fathima Mushrifa. All rights reserved.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight className="project-arrow" size={24} />;
}
