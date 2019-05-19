import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import GitHubLogo from "../images/logoImages/GitHub-Mark-Light-120px-plus.png";
import LinkedInLogo from "../images/logoImages/In-White-72.png";

function App() {
  return (
    <div className="App">
      <div className="floating-content">
        <h1 className="pacifico-text">jelder</h1>

        <p className="quicksand-text blurb">
          I'm a software developer who is passionate about making really cool
          things, both digitally and in the real world.
          <br />
        </p>
        <br />
        <p className="quicksand-text blurb">
          Check out my <a href="">portfolio</a>, or <a href="">contact me</a> to
          make something for you.
        </p>
        <br />
        <br />
        <a href="https://github.com/elderj">
          <img className="logoImage" alt="Github logo" src={GitHubLogo} />
        </a>
        <a href="https://www.linkedin.com/in/elderj/">
          <img className="logoImage" alt="LinkedIn logo" src={LinkedInLogo} />
        </a>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
