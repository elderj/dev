import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";

import "../styles/App.scss";
import "../styles/list.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function initializeReactGA() {
  ReactGA.initialize("UA-172133710-1");
  ReactGA.pageview("/portfolio");
}

const Portfolio = () => (
  <div className="floating-content">
    {initializeReactGA()}
    <Header />
    <NavBar />
    <h4 className="quicksand-text">Check out some of my web projects</h4>
    <div className="niceLookingList">
      <ul>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://elderj.github.io/TriangleSkillGame">
              Triangle Skill Game
            </a>
            <span className="tooltiptext">The classic peg jumping game</span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://elderj.github.io/Kings/">Kings Drinking Game</a>
            <span className="tooltiptext">The classic drinking game</span>
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
          <Link to="/fitbit">
              Fitbit Clockfaces
          </Link>
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
