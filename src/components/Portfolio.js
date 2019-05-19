import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import NavBar from "./NavBar";
// import GitHubLogo from "../images/logoImages/GitHub-Mark-Light-120px-plus.png";
// import LinkedInLogo from "../images/logoImages/In-White-72.png";

const Portfolio = () => (
  <div className="floating-content">
    <h1 className="pacifico-text">jelder</h1>
    <NavBar />
    <p className="quicksand-text blurb">
      About
      <br />
    </p>
    <table className="table-content ">
      <tr>
        <td className="tblr">
          <a href="http://elderj.6te.net/HotSauce/index.html">
            Palmetto Dominion Hot Sauce
          </a>
        </td>
        <td className="tbll">
          "A website dedicated to hot sauce making and peppers"
        </td>
      </tr>
      <tr>
        <td className="tblr">
          <a href="https://elderj.github.io/Kings/">Kings</a>
        </td>
        <td className="tbll">"The Classic "Kings" drinking game"</td>
      </tr>
      <tr>
        <td className="tblr">
          <a href="https://jmonman.github.io/HealthTrack/">"Health Snapshot"</a>
        </td>
        <td className="tbll">
          A School project I helped my brother with which gives insight into how
          factors relate to health
        </td>
      </tr>
    </table>

    <br />
    <br />
    <br />
    {/* <a href="https://github.com/elderj">
      <img className="logoImage" alt="Github logo" src={GitHubLogo} />
    </a>
    <a href="https://www.linkedin.com/in/elderj/">
      <img className="logoImage" alt="LinkedIn logo" src={LinkedInLogo} />
    </a> */}
    <br />
    <br />
  </div>
);

export default Portfolio;
