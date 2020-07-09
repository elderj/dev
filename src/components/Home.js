import React from "react";
import ReactGA from "react-ga";
import "../styles/App.scss";
import "../styles/font.css";

import { Link } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function initializeReactGA() {
  ReactGA.initialize("UA-172133710-1");
  ReactGA.pageview("/home");
}

const Home = () => (
  <div className="floating-content">
    {initializeReactGA()}
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Hi, my name is Joe Elder.
      <br />
    </h3>

    <p className="quicksand-text blurb">
      I have been doing web development for roughly 10 years. Read a little more{" "}
      <Link to="/about">about me</Link> or check out my{" "}
      <Link to="/portfolio">portfolio</Link> of web projects.
      <br />
      <br />I specialize in custom web/application development and design
      consulting. If you're interested in having a custom website made,{" "}
      <Link to="/contact">contact me</Link> and we can get started.
      <br />
      <br />
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default Home;
