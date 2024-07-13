import React from "react";
import "../Styles/intro.css";
import bgimage from "../Assets/image.png";
import hiremebtn from "../Assets/hireme.png";
function Intro() {
  return (
    <section id="intro">
      <div className="Description">
        <span className="hello">Hello,</span>
        <span className="Iam">
          I'm <span className="name">Harshil</span>
          <br />
          Web Developer
        </span>
        <p className="detail">
          I am a skilled and passionate web designer with experience in creating
          <br /> visually appealing and user-friendly websites.
        </p>
        <a
          href="https://www.linkedin.com/in/harshil-patel-hnp2605/"
          target="_blank"
          rel="noopener noreferrer"
          className="hire-me-link"
        >
          <button className="hire-me-button">
            <img alt="hire-me" src={hiremebtn} className="hire-me-img" />
            <div className="hire-me-text">Hire Me</div>
          </button>
        </a>
      </div>
      <img className="bg" alt="bg" src={bgimage} />
    </section>
  );
}

export default Intro;
