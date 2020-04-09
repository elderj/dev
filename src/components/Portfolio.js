import React from "react";
import "../styles/App.scss";
import "../styles/list.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Portfolio = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h4 className="quicksand-text">Web Projects</h4>
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
            <a href="http://htmlpreview.github.com/?https://github.com/elderj/dev/blob/master/src/basic/index.html">
              Responsive Website Example
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
            <a href="https://jmonman.github.io/HealthTrack/">Health Snapshot</a>
            <span className="tooltiptext">
              A Webapp which me and my brother worked on for his final project.
            </span>
          </div>
        </li>
      </ul>
    </div>
    <p className="quicksand-text blurb">
      <h4>Fitbit Clock Faces</h4>
    </p>
    <div className="niceLookingList">
      <ul>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/a25c671b-a8c9-4391-9d1e-e5bd9f34323c">
              Fancy Modern Digital
            </a>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/50e113f9-4922-4292-ad4c-1a19874e59a1">
              Digital American Flag
            </a>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/fe1d116e-d062-4c09-9f1e-0419d9e823c1">
              Digital Aesthetic
            </a>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/de89c68f-2da4-4846-b01c-ffc2ab4b12af">
              Beach
            </a>
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
