import React from "react";
import { Link } from "react-router-dom";

import "../styles/App.css";
import "../styles/list.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Android = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <br />
    <h4 className="quicksand-text">Check out our Android apps</h4>
    <p className="quicksand-text blurb">
      You can view our individual apps below that catch your interest or can
      checkout our Google Play Store{" "}
      <a href="https://play.google.com/store/apps/dev?id=9138247524963784910">
        Google Play Store
      </a>{" "}
      Developer Page.
    </p>
    <div className="niceLookingList">
      <ul>
        <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/portfolio/triangle-skill-game">Triangle Skill Game</Link>
            <span className="tooltiptext">
              The classic peg jumping solitaire game
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/portfolio/kings-card-game">Kings Drinking Game</Link>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/portfolio/dots-and-boxes">Dots and Boxes</Link>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/portfolio/would-you-rather">Would You Rather?</Link>
          </div>
        </li>

        {/* <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/portfolio/never-have-i-ever">Never Have I Ever</Link>
            <span className="tooltiptext">"Never Have I Ever Description</span>
          </div>
        </li> */}
        <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/portfolio/random-name-generator">
              Random Name Generator App
            </Link>
            <span className="tooltiptext">
              Generate random names for usernames, funny team names, or just for
              fun.
            </span>
          </div>
        </li>
      </ul>
    </div>

    <br />
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default Android;
