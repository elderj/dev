import React, { Fragment } from "react";
import "../styles/App.scss";
import "../styles/font.css";

import GitHubLogo from "../images/linkLogoImages/GitHub-Mark-Light-120px-plus.png";
import LinkedInLogo from "../images/linkLogoImages/In-White-72.png";

const Footer = () => (
  <Fragment>
    <a href="https://github.com/elderj">
      <img className="linkLogoImage" alt="Github logo" src={GitHubLogo} />
    </a>
    <a href="https://www.linkedin.com/in/elderj/">
      <img className="linkLogoImage" alt="LinkedIn logo" src={LinkedInLogo} />
    </a>

    <br />

    <h6 className="quicksand-text">© 2020 Elder Development Company</h6>
  </Fragment>
);

export default Footer;
