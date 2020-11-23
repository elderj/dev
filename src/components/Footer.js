import React, { Fragment } from "react";
import "../styles/App.scss";
import "../styles/font.css";

import instagramLogo from "../images/linkLogoImages/instagram-logo.png";

const Footer = () => (
  <Fragment>
    <a href="https://www.instagram.com/elderdesignconcepts/">
      <img className="linkLogoImage" alt="LinkedIn logo" src={instagramLogo} />
    </a>
    <br/>
    <h6 className="quicksand-text">© 2020 Elder Design Concepts</h6>
  </Fragment>
);

export default Footer;
