import React, { Fragment } from "react";
import "../styles/App.css";
import "../styles/font.css";

import { Link } from "react-router-dom";

const NavBar = () => (
  <Fragment>
    <p>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/about">About</Link>
      {" | "}
      <Link to="/web-projects">Web</Link>
      {" | "}
      <Link to="/portfolio">Android</Link>
      {" | "}
      <Link to="/fitbit">Fitbit</Link>
      {" | "}
      <Link to="/contact">Contact</Link>
    </p>
  </Fragment>
);

export default NavBar;
