import React from "react";
import { Link } from "react-router-dom";
import { hover, motion } from "framer-motion";
import { loadFull } from "tsparticles";

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
    <section style={styles.section}>

      {/* 🌟 Modern About Section */}
      <div style={styles.aboutWrapper}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.aboutTextBox}
        >
          <h2 style={styles.aboutTitle}>
            👋 Hi, I'm <span style={styles.gradientText}>Suraj Goswami</span>
          </h2>
          <p style={styles.aboutText}>
            I’m a <b>Full Stack Developer</b> who loves crafting elegant, high-performance web apps with clean UI/UX.
            My passion lies in combining creativity with technology — turning ideas into interactive digital experiences 🚀
          </p>
          <p style={styles.aboutText}>
            I specialize in the <b>MERN Stack</b> and modern design frameworks like <b>Bootstrap</b> and <b>Framer Motion</b>.
            I enjoy building seamless and scalable web solutions that look beautiful and run efficiently.
          </p>

          <Link to="/ProjectCard">
          <motion.button
            whileHover={{ scale: 1.1, color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            style={styles.btn}
          >
            View My Projects
          </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.avatarBox}
        >
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Developer Animation"
            style={styles.avatar}
          />
        </motion.div>
      </div>

      {/* ✅ Skills Section */}
      <div style={styles.container}>
        <h2 style={styles.title}>
          My <span style={styles.highlight}>Skills</span>
        </h2>
        <div style={styles.lineWrapper}>
          <div className="rotating-line" style={styles.rotatingLine}></div>
        </div>
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.15, rotateY: 10 }}
              transition={{ duration: 0.3 }}
              key={index}
              style={styles.card}
            >
              <img src={skill.img} alt={skill.name} style={styles.icon} />
              <p style={styles.text}>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e1b29, #3a2b4c)",
    color: "#fff",
    overflow: "hidden",
    padding: "60px 0",
  },
  aboutWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10%",
    gap: "60px",
  },
  aboutTextBox: {
    flex: 1,
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 8px 30px rgba(168,85,247,0.3)",
  },
  aboutTitle: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  gradientText: {
    background: "linear-gradient(90deg, #a855f7, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  aboutText: {
    fontSize: "1.1rem",
    color: "#ddd",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  btn: {
    background: "linear-gradient(90deg, #a855f7, #3b82f6)",
    border: "none",
    color: "#fff",
    padding: "12px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
  },
  avatarBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: "400px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(59,130,246,0.4)",
  },
  container: {
    textAlign: "center",
    marginTop: "80px",
    padding: "0 80px 100px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#a855f7",
    marginBottom: "20px",
  },
  highlight: { color: "#3b82f6" },
  lineWrapper: { display: "flex", justifyContent: "center" },
  rotatingLine: {
    width: "180px",
    height: "5px",
    borderRadius: "5px",
    background: "linear-gradient(90deg, #a855f7, #7d4c92, #3b82f6)",
    animation: "rotateLine 2s linear infinite",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "40px",
    marginTop: "40px",
    justifyItems: "center",
  },
  card: {
    width: "150px",
    height: "140px",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  text: { fontWeight: 600, color: "#333" },
};
