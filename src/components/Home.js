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
      Explore our <Link to="/portfolio">showcase</Link> of interesting projects.
      <br />
      <br />
      If you're interested in our unique Fitbit clockfaces, Android apps, or web
      applications, and have questions or need a custom website or application
      built send us an email and let's get started!
      <br />
      <h5>ElderDesignConcepts@gmail.com</h5>
      <br />
    </p>
    <h2 className="pacifico-text blurb">Let's Make Something Cool Together!</h2>
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default Home;
