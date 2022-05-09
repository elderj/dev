import React, { Fragment } from "react";
import "../styles/App.scss";
import "../styles/font.css";

import instagramLogo from "../images/linkLogoImages/instagram-logo.png";
import twitterLogo from "../images/linkLogoImages/twit.png";

const Footer = () => (
  <Fragment>
    <a href="https://twitter.com/ElderDesignCo">
      <img className="linkLogoImage" alt="Twitter logo" src={twitterLogo} />
    </a>
    <a href="https://www.instagram.com/elderdesignconcepts/">
      <img className="linkLogoImage" alt="Instagram Logo" src={instagramLogo} />
    </a>

    <br />
    <h6 className="quicksand-text">© 2022 Elder Design Concepts</h6>
  </Fragment>
);

export default Footer;
