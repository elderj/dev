import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import { Link } from "react-router-dom";
import NavBar from "./NavBar";

import GitHubLogo from "../images/logoImages/GitHub-Mark-Light-120px-plus.png";
import LinkedInLogo from "../images/logoImages/In-White-72.png";

const Home = () => (
  <div className="floating-content">
    <h1 className="pacifico-text">jelder</h1>
    <NavBar />
    <p className="quicksand-text blurb">
      I'm a software developer who is passionate about making really cool
      things, both digitally and in the real world.
      <br />
    </p>
    <br />
    <p className="quicksand-text blurb">
      Check out my <Link to="/portfolio">portfolio</Link>.
      <br />
      <Link to="/contact">Contact me</Link> to make something for you.
      <br />
      {/* Read more <Link to="/about">about me</Link>. */}
    </p>
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

export default Home;
