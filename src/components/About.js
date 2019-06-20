import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import palmetto from "../images/sc.png";

const About = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <p className="quicksand-text blurb">
      I am passionate about making really cool things, both digitally and in the
      real world.
      <br />
      <br />
      Currently located in Charleston South Carolina{" "}
      <img className="linkLogoImage" alt="South Carolina" src={palmetto} />
      <br />
      <br />I have a ton of hobbies outside of my profession including:
      <ul>
        <li>Cars & Motorcycles</li>
        <li>Bicycles</li>
        <li>Running & Lifting</li>
        <li>Beer & Brewing</li>
        <li>DIY</li>
        <li>Music</li>
      </ul>
      <br />
    </p>

    <Footer />
    <br />
    <br />
  </div>
);

export default About;
