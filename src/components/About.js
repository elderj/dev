import React from "react";
import "../styles/App.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import palmetto from "../images/sc.png";

const About = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h4 className="quicksand-text">A little more about E.D.C.</h4>
    <p className="quicksand-text blurb">
      We are passionate about making really cool things, both digitally and in
      the real world.
      <br />
      <br />
      Currently based out of Charleston, South Carolina{" "}
      <img className="linkLogoImage" alt="South Carolina" src={palmetto} />
      <br />
      {/* <br />I have a ton of hobbies outside of my profession including:
      <h5>Cars & Motorcycles</h5>
      <h5>Bicycles</h5>
      <h5>Running & Lifting</h5>
      <h5>Beer & Brewing</h5>
      <h5>DIY</h5>
      <h5>Music</h5>
      <br /> */}
    </p>

    <Footer />
    <br />
    <br />
  </div>
);

export default About;
