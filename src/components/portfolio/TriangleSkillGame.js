import React from "react";
import "../../styles/App.css";
import "../../styles/font.css";

import { Link } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const TriangleSkillGame = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Triangle Skill Game
      <br />
    </h3>

    <p className="quicksand-text blurb">
      Check out the{" "}
      <a href="https://play.google.com/store/apps/details?id=com.elderdesignconcepts.triangleskillgame">
        Android app
      </a>
      <br />
      Or the{" "}
      <a href="https://elderj.github.io/TriangleSkillGame">Web version</a>
      <ul>
        <li>
          <Link to="/portfolio/triangle-skill-game/terms">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/portfolio/triangle-skill-game/privacy">
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

export default TriangleSkillGame;
