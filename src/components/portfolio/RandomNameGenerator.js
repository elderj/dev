import React from "react";
import "../../styles/App.css";
import "../../styles/font.css";

import { Link } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const RandomNameGenerator = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Random Name Generator App
      <br />
    </h3>

    <p className="quicksand-text blurb">
      Check out my{" "}
      <a href="https://play.google.com/store/apps/details?id=com.elderdesignconcepts.randomnamegenerator">
        Android app.
      </a>
      <br />
      <br />
      There will be a web version coming shortly also!
      <ul>
        <li>
          <Link to="/portfolio/random-name-generator/terms">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/portfolio/random-name-generator/privacy">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default RandomNameGenerator;
