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
    <p className="quicksand-text blurb">
      <h4>Google Play Store Apps</h4>
      You can view our individual apps below that catch your interest or can
      checkout our Google Play Store{" "}
      <a href="https://gallery.fitbit.com/developer/83781fbc-98a0-4eb7-9a7e-50dfbfcddb0e">
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
            <span className="tooltiptext">The classic drinking game</span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/portfolio/would-you-rather">Would You Rather?</Link>
            <span className="tooltiptext">
              "The 'Would You Rather' scenario game offers challenging choices
              and fun discussions for users"
            </span>
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