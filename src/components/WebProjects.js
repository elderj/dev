import React from "react";

import "../styles/App.css";
import "../styles/list.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const WebProjects = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <br />
    <h4 className="quicksand-text">Check out some of our projects</h4>

    <div className="niceLookingList">
      <ul>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://robertsstumpgrinding.com">
              Roberts Stumpgrinding & Tree Service
            </a>
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
        {/* <li className="portfolioListItem">
          <div className="tooltip">
            <a href="http://elderj.6te.net/Examples/Basic/">
              Responsive Website Template
            </a>
            <span className="tooltiptext">
              A simple example of a responsive website.
            </span>
          </div>
        </li> */}
        {/* <li className="portfolioListItem">
          <div className="tooltip">
            <a href="http://elderj.6te.net/Examples/StepsToCalorieConversion/index.html">
              Convert Steps to Calories
            </a>
            <span className="tooltiptext">How fitbit steps should work..</span>
          </div>
        </li> */}
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

export default WebProjects;
