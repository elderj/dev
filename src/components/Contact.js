import React from "react";
import "../styles/App.scss";
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
      <h4>Want me to build you an awesome website?</h4>
      <br />
      <a
        href="mailto:elderdevelopmentcompany@gmail.com?Subject=In Need of a Website"
        target="_top"
      >
        Send me an email
      </a>{" "}
      with some details or contact info and we can get started.
      <br />
      <br />
      <h5>ElderDevelopmentCompany@gmail.com</h5>
      <h5>(843)-888-3211</h5>
    </p>

    <br />
    <Footer />
  </div>
);

export default Contact;
