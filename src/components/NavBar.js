import React, { Fragment } from "react";
import "../styles/App.scss";
import "../styles/font.css";

import { Link } from "react-router-dom";

const NavBar = () => (
  <Fragment>
    <p>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/portfolio">Portfolio</Link>
      {" | "}
      {/* <Link to="/">About</Link> {" | "} */}
      <Link to="/contact">Contact</Link>
    </p>
  </Fragment>
);

export default NavBar;
