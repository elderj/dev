import React, { Fragment } from "react";
import "../styles/App.scss";
import "../styles/font.css";

import logo from "../images/logo.png";

const Header = () => (
  <Fragment>
    <div className="header">
      <img className="headerImageLogo" alt="Diamond Logo" src={logo} />
      <h1 className="pacifico-text headerTitleText">jelder</h1>
    </div>
  </Fragment>
);

export default Header;
