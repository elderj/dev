import React, { Fragment } from "react";
import "../styles/App.scss";

import GitHubLogo from "../images/logoImages/GitHub-Mark-Light-120px-plus.png";
import LinkedInLogo from "../images/logoImages/In-White-72.png";

const Footer = () => (
  <Fragment>
    <a href="https://github.com/elderj">
      <img className="logoImage" alt="Github logo" src={GitHubLogo} />
    </a>
    <a href="https://www.linkedin.com/in/elderj/">
      <img className="logoImage" alt="LinkedIn logo" src={LinkedInLogo} />
    </a>
  </Fragment>
);

export default Footer;
