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
    <div class="niceLookingList">
      <ul>
        <li>
          <a href="https://elderj.github.io/PalmettoDominion/">
            Palmetto Dominion Hot Sauce
            <span class="more-info">
              A project focussed on making hot sauce from scratch and the
              different types of peppers.
            </span>
          </a>
        </li>
        <li>
          <a href="http://htmlpreview.github.com/?https://github.com/elderj/dev/blob/master/src/basic/index.html">
            Responsive Website Example<span class="more-info">Description</span>
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
