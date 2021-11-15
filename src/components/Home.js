import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import { Link } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Professional development with a touch of fun!
      <br />
      <br />
    </h3>

    <p className="quicksand-text blurb">
      My name is Joe Elder and I really enjoy software development, building
      custom websites and applications amongst many other things.
      <br />
      <br />
      Read a little more <Link to="/about">about me</Link> or check out my{" "}
      <Link to="/portfolio">portfolio</Link> to see some of my projects.
      <br />
      <br />
      If you're interested in having a custom website made, need some technical
      help, or have questions, send me an <Link to="/contact">email</Link> and
      we can work on building something awesome together.
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
