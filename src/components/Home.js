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
      Welcome to our professional development hub, where expertise meets
      innovation!
      <br />
      <br />
    </h3>

    <p className="quicksand-text blurb">
      Explore our <Link to="/portfolio">showcase</Link> of remarkable projects
      that exemplify our commitment to excellence and ingenuity.
      <br />
      <br />
      If you're interested in our unique Fitbit clockfaces, Android apps, or web
      applications, and would like to discuss your digital needs or collaborate
      with us, we invite you to contact us via email.
      <br />
      <br />
      Let's embark on an exciting journey together and bring your vision to life
      in the most remarkable way possible.
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default Home;
