import React from "react";
import ReactGA from "react-ga";
import "../styles/App.scss";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function initializeReactGA() {
  ReactGA.initialize("UA-172133710-1");
  ReactGA.pageview("/contact");
}

const Contact = () => (
  <div className="floating-content">
    {initializeReactGA()}
    <Header />
    <NavBar />
    <p className="quicksand-text blurb">
      <h4>Have some questions?</h4>
      <br />
      <a
        href="mailto:elderdevelopmentcompany@gmail.com?Subject=In Need of a Website"
        target="_top"
      >
        Send me an email
      </a>{" "}
      with some details or contact info and I'll get back to you.
      <br />
      <br />
      <h5>ElderDevelopmentCompany@gmail.com</h5>
    </p>

    <br />
    <Footer />
  </div>
);

export default Contact;
