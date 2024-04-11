import React from "react";
import "../../styles/App.css";
import "../../styles/font.css";

import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const DotsAndBoxesTOS = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Terms of Service for Dots and Boxes
      <br />
    </h3>
    <p className="quicksand-text blurb">
      <p>
        Elder Design Concepts LLC built the Dots and Boxes app as a free,
        ad-supported Android application. This Terms of Service agreement is
        designed to inform you about the use and limitations of the app.
      </p>{" "}
      <p>
        <strong>1. Acceptance of Terms</strong>
      </p>{" "}
      <p>
        By using the Dots and Boxes app, you agree to these Terms of Service and
        our Privacy Policy. If you do not agree to these terms, please do not
        use the app.
      </p>{" "}
      <p>
        <strong>2. License</strong>
      </p>{" "}
      <p>
        Elder Design Concepts LLC grants you a limited, non-exclusive,
        non-transferable, revocable license to use the Dots and Boxes app for
        your personal, non-commercial use.
      </p>{" "}
      <div>
        <p>
          <strong>3. Third-Party Services</strong>
        </p>{" "}
        <p>
          The Dots and Boxes app may utilize third-party services to enhance its
          functionality and provide a better user experience. These services may
          collect information that is used to identify you. We want to make you
          aware of the following third-party service providers and encourage you
          to review their respective terms of service:
        </p>{" "}
        <ul>
          <li>
            <a
              href="https://expo.io/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expo Terms of Service
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/admob/answer/6128543"
              target="_blank"
              rel="noopener noreferrer"
            >
              AdMob Program Policies
            </a>
          </li>
        </ul>
        <p>
          Please note that these third-party services are independent entities,
          and their collection and use of information are governed by their
          respective terms of service. We do not have control over their
          practices or policies.
        </p>{" "}
        <p>
          <strong>4. Changes to Terms</strong>
        </p>{" "}
        <p>
          Elder Design Concepts LLC reserves the right to update or modify these
          Terms of Service at any time. Your continued use of the Dots and Boxes
          app after any changes constitutes acceptance of those changes.
        </p>{" "}
        <p>
          <strong>5. Contact Us</strong>
        </p>{" "}
        <p>
          If you have any questions or concerns about these Terms of Service,
          please contact us at{" "}
          <a href="mailto:contact@elderdesignconcepts.com">
            contact@elderdesignconcepts.com
          </a>
          .
        </p>{" "}
        Effective Date: 4/11/2024
      </div>{" "}
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default DotsAndBoxesTOS;
