// src/App.jsx
import { useEffect, useRef, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

// 🔁 Update these with your real asset paths
import resumePdf from "./assets/Mithun_Kumar_GS_Frontend_Developer.pdf";
import githubLogo from "./assets/my-github.png";
import linkedinLogo from "./assets/my-linkedin.png";
import instagramLogo from "./assets/my-instagram.png";
import whatsappLogo from "./assets/my-whatsapp.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageColor, setFormMessageColor] = useState("");
  const contactFormRef = useRef(null);

  // Scroll reveal + skills animation
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const circles = document.querySelectorAll(".skill-circle");

    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      // Reveal sections
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("show");
        }
      });

      // Animate skills
      circles.forEach((circle) => {
        const top = circle.getBoundingClientRect().top;
        const percent = circle.getAttribute("data-percent");
        const progressCircle = circle.querySelector("circle:last-child");

        if (top < triggerBottom && progressCircle) {
          const offset = 440 - (440 * percent) / 100;
          progressCircle.style.strokeDashoffset = offset;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Run on mount to show hero immediately
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode body class sync
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // EmailJS init (optional style – you can also pass publicKey in sendForm)
  useEffect(() => {
    emailjs.init("kqatAfBTDZfEOIGZS"); // ✅ your public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactFormRef.current) return;

    emailjs
      .sendForm(
        "service_dqbjbgb",      // ✅ your service ID
        "template_0e6uv98",     // ✅ your template ID
        contactFormRef.current
        // { publicKey: "kqatAfBTDZfEOIGZS" } // alternative way
      )
      .then(
        () => {
          setFormMessageColor("green");
          setFormMessage("✅ Thank you! Your message has been sent.");
          contactFormRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setFormMessageColor("red");
          setFormMessage("❌ Failed to send. Please try again.");
        }
      );
  };

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNavOnLinkClick = () => {
    setNavOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav>
        <h2 className="underline-hover">Mithun Kumar G S</h2>

        <ul id="nav-links" className={navOpen ? "show" : ""}>
          <li>
            <a href="#hero" onClick={closeNavOnLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeNavOnLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeNavOnLinkClick}>
              Education
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeNavOnLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeNavOnLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNavOnLinkClick}>
              Contact
            </a>
          </li>
        </ul>

        <button
          className="theme-toggle"
          id="theme-toggle"
          type="button"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div
          className={`hamburger ${navOpen ? "active" : ""}`}
          id="hamburger"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero show">
        <h1>Hi, I'm Mithun Kumar G S</h1>
        <p>
          <span className="typing">Front-End Developer</span>
        </p>
        <a href={resumePdf} className="resume-btn" target="_blank" rel="noreferrer">
          📄 Download / View Resume
        </a>

        {/* Social Links */}
        <div className="socials">
          <a
            className="socials-text"
            href="https://github.com/mithungsmithungs-maker"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-logos" src={githubLogo} alt="Github" />
          </a>
          <a
            className="socials-text"
            href="https://linkedin.com/in/mithun-kumargs"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-logos" src={linkedinLogo} alt="Linkedin" />
          </a>
          <a
            className="socials-text"
            href="https://instagram.com/mithun._369"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-logos" src={instagramLogo} alt="Instagram" />
          </a>
          <a
            className="socials-text"
            href="https://wa.me/918217458779"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social-logos" src={whatsappLogo} alt="Whatsapp" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div>
          <h2 className="underline-hover">About Me</h2>
        </div>
        <div className="edu-card" style={{ marginTop: "30px" }}>
        <p>
          I'm a passionate and detail-oriented Frontend Developer eager to start my
          career. I have strong foundation in building responsive, user-friendly,
          and visually appealing web applications. As a fresher, I bring enthusiasm,
          curiosity, and a constant drive to learn modern technologies to deliver
          clean and efficient code.
        </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="underline-hover">Education</h2>
        <div className="education" style={{ marginTop: "30px" }}>
          <div className="edu-card">
            <h3>
              Bachelor Of Engineering in Information Science & Engineering (BE in
              ISE)
            </h3>
            <p>Visvesvaraya Technological University (VTU), Belagavi, Karnataka</p>
            <p>
              Dr.Sri Sri Sri Shivakumara Mahaswamy College Of Engineering,
              Nelamangala, 2019 - 2023
            </p>
          </div>
          <div className="edu-card">
            <h3>Intermediate (PUC/12th)</h3>
            <p>Shanthiniketan PU College, 2017 - 2019</p>
            <p>Chikkaballapur - 562101</p>
          </div>
          <div className="edu-card">
            <h3>High School (SSLC/10th)</h3>
            <p>Govt.Junior College, 2017</p>
            <p>Gudibande, Chikkaballapur - 561209</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="underline-hover">Skills</h2>
        <div className="skills-container" style={{ marginTop: "30px" }}>

        {/* HTML */}
          <div className="skill-circle expert" 
          data-percent="90" 
          data-level="Advanced">
            <svg>
              <circle cx="75" cy="75" r="70"></circle>
              <circle cx="75" cy="75" r="70"></circle>
            </svg>
            <div className="skill-inner">
              <h3>HTML</h3>
              <p>90%</p>
            </div>
          </div>

          {/* CSS */}
          <div
            className="skill-circle advanced"
            data-percent="85"
            data-level="Advanced"
          >
            <svg>
              <circle cx="75" cy="75" r="70"></circle>
              <circle cx="75" cy="75" r="70"></circle>
            </svg>
            <div className="skill-inner">
              <h3>CSS</h3>
              <p>85%</p>
            </div>
          </div>

          {/* JavaScript */}
          <div
            className="skill-circle intermediate"
            data-percent="75"
            data-level="Intermediate"
          >
            <svg>
              <circle cx="75" cy="75" r="70"></circle>
              <circle cx="75" cy="75" r="70"></circle>
            </svg>
            <div className="skill-inner">
              <h3>JavaScript</h3>
              <p>75%</p>
            </div>
          </div>

          {/* React */}
          <div
            className="skill-circle intermediate"
            data-percent="60"
            data-level="Learning"
          >
            <svg>
              <circle cx="75" cy="75" r="70"></circle>
              <circle cx="75" cy="75" r="70"></circle>
            </svg>
            <div className="skill-inner">
              <h3>React</h3>
              <p>60%</p>
            </div>
          </div>

          {/* Java */}
          <div
            className="skill-circle average"
            data-percent="50"
            data-level="Learning"
          >
            <svg>
              <circle cx="75" cy="75" r="70"></circle>
              <circle cx="75" cy="75" r="70"></circle>
            </svg>
            <div className="skill-inner">
              <h3>Java</h3>
              <p>50%</p>
            </div>
          </div>

          {/* MySQL */}
          <div
            className="skill-circle intermediate"
            data-percent="60"
            data-level="Intermediate"
          >
            <svg>
              <circle cx="75" cy="75" r="70"></circle>
              <circle cx="75" cy="75" r="70"></circle>
            </svg>
            <div className="skill-inner">
              <h3>MySQL</h3>
              <p>70%</p>
            </div>
          </div>

          {/* Springboot */}
          <div
            className="skill-circle average"
            data-percent="10"
            data-level="Started Learning"
          >
            <svg>
              <circle cx="75" cy="75" r="70"></circle>
              <circle cx="75" cy="75" r="70"></circle>
            </svg>
            <div className="skill-inner">
              <h3>Springboot</h3>
              <p>10%</p>
            </div>
          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="underline-hover">Projects</h2>
        
        <div className="projects" style={{ marginTop: "30px" }}>
        <a href="https://mithungsmithungs-maker.github.io/To-Do-List/" target="_blank" >
          <div className="project-card">
            <h3>To-Do List App</h3>
            <p>A simple to-do list app using HTML, CSS, JavaScript and React</p>
          </div>
          </a>

          <a href="https://mithungsmithungs-maker.github.io/weatherly-app/" target="_blank">
          <div className="project-card">
            <h3>Weatherly App</h3>
            <p>Real-time weather app using Weather API with Responsive and clean UI.</p>
          </div>
          </a>
          <a href="https://mithungsmithungs-maker.github.io/word-guess-grid/" target="_blank">
          <div className="project-card">
            <h3>Word Guess App</h3>
            <p>Developed a 5×6 alphabet grid game, it will reveal the word user think of.</p>
          </div>
          </a>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Portfolio website (this one!) showcasing my work.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ marginTop: "100px" }}>
        <h2 className="underline-hover">Contact Me</h2>
        <br />

        <form style={{ marginTop: "40px" }}>
          <a className="contact-list" href="mailto:mithungsmithungs@gmail.com">
            📧 mithungsmithungs@gmail.com
          </a>
          <a className="contact-list" href="tel:+918217458779">
            📞 +91 8217458779
          </a>
        </form>

        <form id="contactForm" ref={contactFormRef} onSubmit={handleSubmit}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input type="text" name="Subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p
          id="formMessage"
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: formMessageColor,
          }}
        >
          {formMessage}
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h2 className="logo">
              Mithun<span>Dev</span>
            </h2>
            <p>
              Passionate Frontend Developer crafting beautiful & responsive web
              experiences.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>
              Email:{" "}
              <a href="mailto:mithungsmithungs@gmail.com">
                mithungsmithungs@gmail.com
              </a>
            </p>
            <p>
              Mobile: <a href="tel:+918217458779">+91 8217458779</a>
            </p>
            <p>Location: Bangalore, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Mithun kumar G S. Crafted with ❤️ by <strong>Mithun Dev</strong>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;