import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar" id="navbar">
      <div className="logo">
        <a href="#logo">Bahar.</a>
      </div>

      <div className="links__theme__container">
        <ul className={`links__container ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#home">About Me</a>
          </li>

          <li>
            <a href="#home">Achievments</a>
          </li>

          <li>
            <a href="#home">My Skills</a>
          </li>

          <li>
            <a href="#home">My Projects</a>
          </li>
        </ul>

        <div className="theme__container">
          <i className="bx bxs-sun"></i>
        </div>

        <div className="btn__container">
          <a href="#contact" className="btn__contact">
            Contact Me
          </a>
        </div>

        <span className="menu__toggle" onClick={toggleMenu}>
          <i className="bx bx-menu-alt-right menu__icon"></i>
        </span>
      </div>
    </div>
  );
}
