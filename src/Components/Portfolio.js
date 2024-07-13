import React from "react";
import "../Styles/portfolio.css";
import portfolio1 from "../Assets/portfolio-1.png";
import portfolio2 from "../Assets/portfolio-2.png";
import portfolio3 from "../Assets/portfolio-3.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="myportfolio">My Portfolio</div>
      <div className="content">
        "I take pride in paying attention to the smallest details and making
        sure that my work is pixel perfect. I am excited to bring my skills and
        experience to help busineses achieve their goals and create a strong
        online presence."
      </div>
      <div className="images">
        <a
          href="https://harshilpatel2605.github.io/React-Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="portfolio-1" src={portfolio1} className="portfolio-img" />
        </a>
        <a
          href="https://harshilpatel2605.github.io/React-Dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        ><img alt="portfolio-2" src={portfolio2} className="portfolio-img"  /></a>
        
        <a
          href="https://harshilpatel2605.github.io/WebD_LampStore/"
          target="_blank"
          rel="noopener noreferrer"
        ><img alt="portfolio-3" src={portfolio3} className="portfolio-img"  /></a>

      </div>
    </div>
  );
}

export default Portfolio;
