import React from "react";
import "../CSS/projectCard.css";
import fullStack from "../assests/experience in fullStack Development.jpg";
import mernStack from "../assests/mernStack development course.jpg";
import QrcodeGenerator from "../assests/qrcode.jpg";
import Tictactoe from "../assests/Tic-tac-toe.jpg";
import SimonSays from "../assests/Simon Says.jpg";
import TodoList from "../assests/todo-list.jpg";
import ProfileImg from "../assests/profile image.jpg";
import HotelProjectImg from "../assests/hotelProject.jpg";
import Gemini from "../assests/Gemini Certificate.jpeg";

const achievements = [
  {
    id: 1,
    title: "Full Stack Developer Certificate",
    img: fullStack,
    description:
      "Certified Full Stack Developer — mastering React, Node.js, Express, MongoDB and deployment pipelines.",
    link: "https://drive.google.com/file/d/1I0a7QuvVEl3IKF1bmbOLJH9FO9Hy1a6B/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "MERN Stack Course Certificate",
    img: mernStack,
    description:
      "Completed professional MERN stack development training focusing on modern web application building.",
    link: "https://drive.google.com/file/d/1ksLO5aKwV-yFvJg7dmhYw4v6wj8DUt7I/view?usp=drivesdk",
  },
   {
    id: 3,
    title: "Google Gemini Certificate",
    img: Gemini,
    description:
      "Completed professional MERN stack development training focusing on modern web application building.",
    link: "https://drive.google.com/file/d/1wGUaG0Reno29TxgvEp7yEDa6_W6E1Zx0/view?usp=drivesdk",
  },
];

const projects = [
  {
    id: 1,
    title: "QR Code Generator App",
    img: QrcodeGenerator,
    github: "https://github.com/Suraj-1210/QR-Code-generator.git",
    live: "https://suraj-1210.github.io/QR-Code-generator/",
  },
  {
    id: 2,
    title: "My Profile",
    img: ProfileImg,
    github: "https://github.com/Suraj-1210/myProfile.git",
    live: "https://my-profile-ashen-beta.vercel.app/",
  },
  {
    id: 3,
    title: "Hotel Booking Software",
    img: HotelProjectImg,
    github: "https://github.com/yourname/chatit",
    live: "https://chatit.vercel.app",
  },
  {
    id: 4,
    title: "Todo-List",
    img: TodoList,
    github: "https://github.com/Suraj-1210/Todo-List.git",
    live: "https://todo-list-eight-zeta-81.vercel.app/",
  },
  {
    id: 5,
    title: "Simon-Says Game",
    img: SimonSays,
    github: "https://github.com/Suraj-1210/Simon-Says-Game.git",
    live: "https://suraj-1210.github.io/Simon-Says-Game/",
  },
  {
    id: 6,
    title: "Tic Tac Toe Game",
    img: Tictactoe,
    github: "https://github.com/Suraj-1210/Tic-tac-Toe-game.git",
    live: "https://suraj-1210.github.io/Tic-tac-Toe-game/",
  },
];

function ProjectCard() {
  return (
    <section id="projects" className="project-section">
      {/* 🌟 Achievements Section */}
      <h2 className="section-title">
        My <span>Achievements</span>
      </h2>
      <div className="underline"></div>

      <div className="achievements-grid">
        {achievements.map((a) => (
          <div className="achievement-card" key={a.id}>
            <div className="card-inner">
              <div className="card-front">
                <img src={a.img} alt={a.title} className="achievement-img" />
              </div>
              <div className="card-back">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn text-white"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 Projects Section */}
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>
      <div className="underline"></div>

      <p className="project-intro">
        A collection of my most creative and functional work. From{" "}
        <strong>Full Stack Apps</strong> to <strong>Modern UI Designs</strong>,
        each project reflects my passion for building interactive, scalable, and
        beautiful experiences 🚀
      </p>

      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <div className="project-img-container">
              <img src={p.img} alt={p.title} className="project-img" />
            </div>
            <h3>{p.title}</h3>
            <div className="project-buttons">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github-btn"
              >
                Github
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn live-btn"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;
