import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import NavBar from "./NavBar";

import GitHubLogo from "../images/logoImages/GitHub-Mark-Light-120px-plus.png";
import LinkedInLogo from "../images/logoImages/In-White-72.png";

const Contact = () => (
  <div className="floating-content">
    <h1 className="pacifico-text">jelder</h1>
    <NavBar />
    <p className="quicksand-text blurb">
      Have some questions or want me to build you an awesome website?
      <br />
      <br />
      <a
        href="mailto:jelde010@gmail.com?Subject=In Need of a Website"
        target="_top"
      >
        Send me an email
      </a>{" "}
      with some details or contact info and we can get started.
      <br />
    </p>
    <br />

    <br />
    <br />
    <a href="https://github.com/elderj">
      <img className="logoImage" alt="Github logo" src={GitHubLogo} />
    </a>
    <a href="https://www.linkedin.com/in/elderj/">
      <img className="logoImage" alt="LinkedIn logo" src={LinkedInLogo} />
    </a>
    <br />
    <br />
  </div>
);

export default Contact;
