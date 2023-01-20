import React from "react";
import "../styles/App.css";
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
      <br />
      Professional development with a touch of fun!
      <br />
      <br />
    </h3>

    <p className="quicksand-text blurb">
      There is nothing cooler than building something awesome, whether digitally
      or in the real world <i>(or both!)</i>
      <br />
      <br />
      Read a little more <Link to="/about">about E.D.C.</Link> or check out the{" "}
      <Link to="/portfolio">portfolio</Link> to see some of our projects.
      <br />
      <br />
      If you're interested in having a custom website or app made, need some
      technical help, or have questions, send an{" "}
      <Link to="/contact">email</Link> so we can work on building something
      awesome together.
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
