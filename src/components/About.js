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
      <br />
      I am passionate about making really cool things, both digitally and in the
      real world.
      <br />
      <br />I have a ton of hobbies outside of my profession including{" "}
      <i>(but not limited to)</i>
      <ul>
        <li>Cars 🏎</li>
        <li>Motorcycles 🏍</li>
        <li>Running 👟</li>
        <li>Bikes 🚲</li>
        <li>Beer 🍺</li>
        <li>DIY 🛠️</li>
        <li>Music 🎸</li>
      </ul>
      <br /> Currently located in Charleston South Carolina{" "}
      <img className="linkLogoImage" alt="South Carolina" src={palmetto} />
      <br />
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default About;
