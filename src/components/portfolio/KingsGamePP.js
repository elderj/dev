import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";
import "../../styles/font.css";

import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const KingsGamePP = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Privacy Policy for Kings Drinking Game
      <br />
    </h3>
    <p className="quicksand-text blurb">
      <p>
        Elder Design Concepts LLC built the Kings Drinking Game app as a free,
        ad-supported Android application. This Privacy Policy is designed to
        inform you about the collection, use, and disclosure of personal
        information when you use our app.
      </p>{" "}
      <p>
        <strong>Information Collection and Use</strong>
      </p>{" "}
      <p>
        We do not collect any personally identifiable information (PII) from
        users of the Kings Drinking Game app. We respect your privacy and do not
        require you to provide any personal information while using our app.
      </p>{" "}
      <div>
        <p>
          <strong>Third-Party Services</strong>
        </p>{" "}
        <p>
          The Kings Drinking Game app utilizes third-party services to enhance
          its functionality and provide a better user experience. These services
          may collect information that is used to identify you. We want to make
          you aware of the following third-party service providers and encourage
          you to review their respective privacy policies:
        </p>{" "}
        <ul>
          <li>
            <a
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Services
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/admob/answer/6128543?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              AdMob
            </a>
          </li>
          <li>
            <a
              href="https://expo.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expo
            </a>
          </li>
        </ul>
        <p>
          Please note that these third-party services are independent entities,
          and their collection and use of information are governed by their
          respective privacy policies. We do not have control over their
          practices or policies.
        </p>{" "}
        <p>
          <strong>Log Data</strong>
        </p>{" "}
        <p>
          We may collect non-personal information in the form of log data when
          you use the Kings Drinking Game app. This data may include your
          device's Internet Protocol (IP) address, device name, operating system
          version, app configuration, timestamps, and other statistics. This
          information is collected for the purpose of identifying and
          troubleshooting app errors and improving our services.
        </p>{" "}
        <p>
          <strong>Cookies</strong>
        </p>{" "}
        <p>
          The Kings Drinking Game app does not use cookies to collect
          information or track user activity.
        </p>{" "}
        <p>
          <strong>Changes to This Privacy Policy</strong>
        </p>{" "}
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or legal requirements. We will notify you of any
          significant updates by posting the revised Privacy Policy within the
          app or on our website. We encourage you to review this Privacy Policy
          periodically for any changes.
        </p>{" "}
        <p>
          <strong>Contact Us</strong>
        </p>{" "}
        <p>
          If you have any questions, concerns, or suggestions regarding this
          Privacy Policy or the Kings Drinking Game app, please contact us at
          ElderDesignConcepts@gmail.com We will be happy to assist you
        </p>{" "}
        Effective Date: 5/21/2023
      </div>{" "}
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default KingsGamePP;
