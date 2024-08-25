import React, { useState } from "react";
import "../Styles/navbar.css";
import contactlogo from "../Assets/contact.png";
import menu from "../Assets/menu.png";
import { Link } from "react-scroll";
function Navbar() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="harshilpatel">HARSHIL PATEL</div>
      <div className="menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu-item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
          className="menu-item"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="contact-btn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behaviour: "smooth" });
        }}
      >
        <div className="contact-logo">
          <img alt="contact-logo" src={contactlogo} />
        </div>
        <div className="contact-title">Contact me</div>
      </button>

      <img
        src={menu}
        alt="menu"
        className="menu-img"
        onClick={() => setshowMenu(!showMenu)}
      />

      <div className="nav-menu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => setshowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="list-item"
          onClick={() => setshowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
          className="list-item"
          onClick={() => setshowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => setshowMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
