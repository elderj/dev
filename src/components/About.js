import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import NavBar from "./NavBar";
// import GitHubLogo from "../images/logoImages/GitHub-Mark-Light-120px-plus.png";
// import LinkedInLogo from "../images/logoImages/In-White-72.png";

const About = () => (
  <div className="floating-content">
    <h1 className="pacifico-text">jelder</h1>
    <NavBar />
    <p className="quicksand-text blurb">
      About
      <br />
    </p>
    <br />

    <br />
    <br />
    {/* <a href="https://github.com/elderj">
      <img className="logoImage" alt="Github logo" src={GitHubLogo} />
    </a>
    <a href="https://www.linkedin.com/in/elderj/">
      <img className="logoImage" alt="LinkedIn logo" src={LinkedInLogo} />
    </a> */}
    <br />
    <br />
  </div>
);

export default About;
