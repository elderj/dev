import React from "react";
import { Link } from "react-router-dom";

import "../styles/App.css";
import "../styles/list.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Portfolio = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h4 className="quicksand-text">Check out some of existing web projects</h4>
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
            <Link to="/portfolio/random-name-generator">
              Random Name Generator App
            </Link>
            <span className="tooltiptext">
              Generate random names for usernames, funny team names, or just for
              fun.
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://play.google.com/store/apps/dev?id=9138247524963784910">
              Google Play Store Apps
            </a>
            <span className="tooltiptext">
              Elder Design Concepts' Developer Page
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://elderj.github.io/PalmettoDominion/">
              Palmetto Dominion Hot Sauce
            </a>
            <span className="tooltiptext">
              A project dedicated to making hot sauce from scratch and different
              types of peppers.
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="http://elderj.6te.net/Examples/Basic/">
              Responsive Website Template
            </a>
            <span className="tooltiptext">
              A simple example of a responsive website.
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="http://elderj.6te.net/Examples/StepsToCalorieConversion/index.html">
              Convert Steps to Calories
            </a>
            <span className="tooltiptext">How fitbit steps should work..</span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <Link to="/fitbit">Fitbit Clockfaces</Link>
            <span className="tooltiptext">Various Fitbit clockfaces.</span>
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

export default Portfolio;
