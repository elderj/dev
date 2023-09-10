import React from "react";
import "../../styles/App.css";
import "../../styles/font.css";

import { Link } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const NeverHaveIEver = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Would You Rather?
      <br />
    </h3>

    <p className="quicksand-text blurb">
      Check out the{" "}
      <a href="https://play.google.com/store/apps/details?id=com.elderdesignconcepts.kingsdrinkinggame">
        Android app
      </a>
      <br />
      <ul>
        <li>
          <Link to="/portfolio/never-have-i-ever/terms">Terms of Service</Link>
        </li>
        <li>
          <Link to="/portfolio/never-have-i-ever/privacy">Privacy Policy</Link>
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

export default NeverHaveIEver;
