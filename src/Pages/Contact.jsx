import React, { useRef, useState } from "react";
import "../CSS/contact.css";
import contactVideo from "../assests/contactVideo.mp4";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm("service_z3vszus", "template_lw55utb", form.current, {
        publicKey: "4Yrulr1LaTuOuyW_8",
      })
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      {/* ✅ Header */}
      <div className="contact-header">
        <h2>
          <i className="fa-solid fa-headset"></i> Get in <span>Touch</span>
        </h2>
        <div className="underline"></div>
      </div>

      {/* ✅ Contact Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>+91 XXXX - XXXX - XX</p>
        </div>
        <div className="info-card">
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>sg0600775@gmail.com</p>
        </div>
        <div className="info-card">
          <i className="fa-solid fa-location-dot"></i>
          <h4>Address</h4>
          <p>Kolkata, West Bengal, India</p>
        </div>
      </div>

      {/* ✅ Main Container */}
      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form glass-form">
            <h3>Send Me a Message ✉️</h3>

            <div className="input-group">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="text" name="user_phone" placeholder="Enter your phone number" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Type your message..." required></textarea>
            </div>

            <button type="submit" className="glow-btn">
              Send Message
            </button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>

        {/* Right Side - Video */}
        <div className="contact-video-container">
          <video autoPlay loop muted playsInline className="contact-video">
            <source src={contactVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* ✅ Footer */}
      <footer className="contact-footer">
        <p>
          Designed ❤️ By <span>Suraj Goswami</span>
        </p>
      </footer>
    </section>
  );
}

export default Contact;
