import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assests/profile.png";
import ResumePDF from "../assests/Suraj Goswami Resume.pdf";
import BackgroundVideo from "../assests/background video.mp4";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Left Section */}
      <div className="hero-left">
        <h4 className="mb-4">Welcome to my Profolio,</h4>
        <h2>
          Hello, I'm{" "}
          <b>
            {" "}
            <span className="highlight">
              <Typewriter
                words={[
                  "Suraj Goswami",
                  "a Full Stack Developer",
                  "a MERN Stack Developer",
                  "a Web Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </b>
        </h2>

        <p className="hero-desc">
          Hi there! My name is Suraj Goswami. I love to tinker with code and
          explore new technologies. As a lifelong learner, I'm always seeking
          opportunities to expand my knowledge and skills. When I'm not coding,
          you can find me hiking in the great outdoors or experimenting in the
          kitchen. I believe that a healthy balance between work and play is key
          to a fulfilling life. My ultimate goal is to make a positive impact
          through technology and contribute to the development of innovative
          solutions that benefit society.
        </p>

        <a href={ResumePDF} download="Suraj-Goswami-Resume.pdf" className="resume-btn">
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com/itx_suraj_programmer/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/suraj.goswami.1420">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/Suraj-1210">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/suraj-goswami-87515835b/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <img src={profile} alt="Profile" className="profile-img" />
      </div>

       {/* ✅ Background Video */}
      <video autoPlay loop muted playsInline className="hero-bg">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Hero;
