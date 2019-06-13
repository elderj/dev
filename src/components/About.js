import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <p className="quicksand-text blurb">
      <br />
      I'm a software developer who is passionate about making really cool
      things, both digitally and in the real world.
      <br />
      <br />I have been doing web development for about 10 years and I enjoy all
      things software development and have many interesting hobbies outside of
      my profession including
      <ul>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Bikes</li>
        <li>Beer</li>
        <li>DIY</li>
        <li>Music</li>
      </ul>
      <br /> Currently located in Charleston South Carolina
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
