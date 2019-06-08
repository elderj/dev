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
    <p className="quicksand-text blurb">
      I'm a software developer who is passionate about making really cool
      things, both digitally and in the real world.
    </p>
    <p className="quicksand-text blurb">
      Check out my <Link to="/portfolio">portfolio</Link>.
      <br />
      <Link to="/contact">Contact me</Link> to make something for you.
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
