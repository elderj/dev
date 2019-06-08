import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";

import GitHubLogo from "../images/linkLogoImages/GitHub-Mark-Light-120px-plus.png";
import LinkedInLogo from "../images/linkLogoImages/In-White-72.png";

const Contact = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <p className="quicksand-text blurb">
      Want me to build you an awesome website?
      <br />
      Have some questions? <br />
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
      <img className="linkLogoImage" alt="Github logo" src={GitHubLogo} />
    </a>
    <a href="https://www.linkedin.com/in/elderj/">
      <img className="linkLogoImage" alt="LinkedIn logo" src={LinkedInLogo} />
    </a>
    <br />
    <br />
  </div>
);

export default Contact;
