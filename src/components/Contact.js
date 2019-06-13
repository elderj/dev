import React from "react";
import "../styles/App.scss";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { Link } from "react-router-dom";

const Contact = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <p className="quicksand-text blurb">
      Want me to build you an awesome website?
      <br />
      Have some <Link to="/questions">questions</Link>? <br />
      <br />
      <a
        href="mailto:jelde010@gmail.com?Subject=In Need of a Website"
        target="_top"
      >
        Send me an email
      </a>{" "}
      with some details or contact info and we can get started.
      <br />
    </p>
    <br />

    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default Contact;
