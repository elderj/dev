import React from "react";
import "../../styles/App.css";
import "../../styles/font.css";

import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const KingsGameTOS = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Kings Game Terms &amp; Conditions
      <br />
    </h3>
    <p className="quicksand-text blurb">Terms will go here</p>

    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default KingsGameTOS;
