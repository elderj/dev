import React from "react";
import "../styles/App.scss";
import "../styles/list.css";
import "../styles/font.css";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Portfolio = () => (
  <div className="floating-content">
    <h1 className="pacifico-text">jelder</h1>
    <NavBar />
    <div class="niceLookingList">
      <ul>
        <li>
          <a href="https://elderj.github.io/PalmettoDominion/">
            Palmetto Dominion Hot Sauce
            {/* <span class="more-info">Description</span> */}
          </a>
        </li>
        <li>
          <a href="../basic/index.html">
            Basic Responsive Website Template
            <span class="more-info">Description</span>
          </a>
        </li>
        <li>
          <a href="">
            List Item 3<span class="more-info">Description</span>
          </a>
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
