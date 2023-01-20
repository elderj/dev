import React from "react";
import "../styles/App.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <p className="quicksand-text blurb">
      <h4>Have some questions?</h4>
      <br />
      <a
        href="mailto:elderdesignconcepts@gmail.com?Subject=Elder Design Concepts:Contact"
        target="_top"
      >
        Send an email
      </a>{" "}
      <br />
      <br />
      <h5>ElderDesignConcepts@gmail.com</h5>
      <br />
      Follow me on Instagram{" "}
      <a href="https://www.instagram.com/elderdesignconcepts/">
        @ElderDesignConcepts
      </a>{" "}
      to check out some more designs and interests.
    </p>

    <br />
    <Footer />
  </div>
);

export default Contact;
