import React from "react";
import "../../styles/App.scss";
import "../../styles/font.css";

import { Link } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const KingsGame = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Kings Game
      <br />
    </h3>

    <p className="quicksand-text blurb">
      Check out my android app
      <ul>
        <li>
          <Link to="/portfolio/kings-card-game/terms">Terms of Service</Link>
        </li>
        <li>
          <Link to="/portfolio/kings-card-game/privacy">Privacy Policy</Link>
        </li>
      </ul>
      <br />
      Or the <a href="https://elderj.github.io/Kings/">Web version</a>
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default KingsGame;
