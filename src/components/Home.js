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
      Hi, my name is Joe Elder.
      <br />
    </h3>

    <p className="quicksand-text blurb">
      Read a little <Link to="/about">about me</Link> and check <br /> out my{" "}
      <Link to="/portfolio">portfolio</Link> of web projects.
      <br />
      <br />
      If you're interested, <Link to="/contact">Contact me</Link>
      <br /> to make a website for you.
      <br />
      <br />
      Thanks for checking out my website!
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default Home;
