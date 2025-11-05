import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <ul style={styles.footerNav}>
            <li>
              <Link to="/" style={styles.link}>
                <i className="fa-regular fa-house"></i>
              </Link>
            </li>
            <li>
              <Link to="/about" style={styles.link}>
                <i className="fa-solid fa-address-card"></i>
              </Link>
            </li>

            <li>
              <Link to="/ProjectCard" style={styles.link}>
                <i className="fa-regular fa-envelope"></i>
              </Link>
            </li>
            <li>
              <Link to="/contact" style={styles.link}>
                <i className="fa-solid fa-address-book"></i>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;

// ✅ Inline CSS (JS object styles)
const styles = {
  footer: {
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    padding: "10px 35px",
    borderRadius: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: 999,
  },
  container: {
    textAlign: "center",
  },
  footerNav: {
    listStyle: "none",
    display: "flex",
    gap: "60px",
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#7d4c92",
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "color 0.3s, transform 0.3s ease",
  },
};

// ✅ Hover effects using JS (inline styles don’t support `:hover`)
document.addEventListener("mouseover", (e) => {
  if (e.target.closest("a") || e.target.closest("button.icon-btn")) {
    e.target.style.color = "#5e3373";
    e.target.style.transform = "scale(1.5) translateY(-4px)";
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest("a") || e.target.closest("button.icon-btn")) {
    e.target.style.color = "#7d4c92";
    e.target.style.transform = "scale(1) translateY(0)";
  }
});
