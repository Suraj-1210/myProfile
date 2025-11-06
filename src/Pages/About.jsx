import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";
import "../CSS/about.css";

const About = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const skills = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "MySQL", img: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" },
    { name: "Vercel", img: "https://www.vectorlogo.zone/logos/vercel/vercel-ar21~bgwhite.svg" },
    { name: "Render", img: "https://images.seeklogo.com/logo-png/53/1/render-logo-png_seeklogo-532232.png" },
    { name: "Axios", img: "https://www.vectorlogo.zone/logos/axios/axios-ar21.svg" },
  ];

  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="about-textbox"
        >
          <h2 className="about-title">
            👋 Hi, I'm <span className="gradient-text">Suraj Goswami</span>
          </h2>
          <p className="about-text">
            I’m a <b>Full Stack Developer</b> who loves crafting elegant, high-performance web apps with clean UI/UX.
            My passion lies in combining creativity with technology — turning ideas into interactive digital experiences 🚀
          </p>
          <p className="about-text">
            I specialize in the <b>MERN Stack</b> and modern design frameworks like <b>Bootstrap</b> and <b>Framer Motion</b>.
            I enjoy building seamless and scalable web solutions that look beautiful and run efficiently.
          </p>

          <Link to="/ProjectCard">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="about-btn">
              View My Projects
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="avatar-box"
        >
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Developer Animation"
            className="avatar"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <h2 className="skills-title">
          My <span className="highlight">Skills</span>
        </h2>
        <div className="rotating-line"></div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div whileHover={{ scale: 1.1 }} key={index} className="skill-card">
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
