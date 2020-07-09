import React from "react";
import ReactGA from "react-ga";
import "../styles/App.scss";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import palmetto from "../images/sc.png";

function initializeReactGA() {
  ReactGA.initialize("UA-172133710-1");
  ReactGA.pageview("/about");
}

const About = () => (
  <div className="floating-content">
    {initializeReactGA()}
    <Header />
    <NavBar />
    <h4 className="quicksand-text">A little more about me</h4>
    <p className="quicksand-text blurb">
      I am passionate about making really cool things, both digitally and in the
      real world.
      <br />
      <br />
      Currently located in Charleston South Carolina{" "}
      <img className="linkLogoImage" alt="South Carolina" src={palmetto} />
      <br />
      <br />I have a ton of hobbies outside of my profession including:
      <h5>Cars & Motorcycles</h5>
      <h5>Bicycles</h5>
      <h5>Running & Lifting</h5>
      <h5>Beer & Brewing</h5>
      <h5>DIY</h5>
      <h5>Music</h5>
      <br />
    </p>

    <Footer />
    <br />
    <br />
  </div>
);

export default About;
