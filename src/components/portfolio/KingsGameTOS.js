import React from "react";
import "../../styles/App.css";
import "../../styles/font.css";

import Header from "../Header";
import NavBar from "../NavBar";
import Footer from "../Footer";

const KingsGameTOS = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      Terms of Service for Kings Drinking Game
      <br />
    </h3>
    <br />
    <h3 className="quicksand-text blurb">1. Acceptance of Terms</h3>
    <p className="quicksand-text blurb">
      By downloading, installing, or using the Kings Drinking Game application
      ("the App"), you agree to be bound by these Terms of Service ("Terms"). If
      you do not agree to these Terms, please refrain from using the App.
    </p>{" "}
    <h3 className="quicksand-text blurb">2. Description of the App</h3>
    <p className="quicksand-text blurb">
      The Kings Drinking Game app, developed by Elder Design Concepts LLC, is a
      digital version of the popular drinking game. It provides a virtual deck
      of cards and associated rules for players to enjoy the game on their
      mobile devices. The App is intended for entertainment purposes only and
      should be used responsibly.
    </p>{" "}
    <h3 className="quicksand-text blurb">3. User Conduct</h3>
    <p className="quicksand-text blurb">
      When using the App, you agree to: a) Use the App solely for personal and
      non-commercial purposes. b) Comply with all applicable laws and
      regulations while using the App. c) Refrain from engaging in any activity
      that may disrupt, interfere with, or harm the functionality of the App or
      its associated services. d) Not use the App to promote or engage in any
      illegal, harmful, or offensive activities.
    </p>{" "}
    <h3 className="quicksand-text blurb">4. Drinking Responsibly</h3>
    <p className="quicksand-text blurb">
      The Kings Drinking Game app involves the consumption of alcoholic
      beverages as part of the game. It is essential that you drink responsibly
      and in accordance with legal drinking age requirements and applicable
      laws. Elder Design Concepts LLC is not responsible for any misuse or
      consequences resulting from the consumption of alcohol while using the
      App. Please drink responsibly and in moderation.
    </p>{" "}
    <h3 className="quicksand-text blurb">5. Intellectual Property Rights</h3>
    <p className="quicksand-text blurb">
      The App, including its design, graphics, text, and other content, is the
      property of Elder Design Concepts LLC and is protected by copyright and
      other intellectual property laws. You agree not to copy, modify,
      distribute, or reproduce any part of the App without prior written consent
      from Elder Design Concepts LLC.
    </p>{" "}
    <h3 className="quicksand-text blurb">6. Limitation of Liability</h3>
    <p className="quicksand-text blurb">
      Elder Design Concepts LLC shall not be held liable for any damages,
      losses, or liabilities arising out of or related to the use of the App.
      This includes, but is not limited to, any direct, indirect, incidental,
      consequential, or punitive damages, regardless of whether Elder Design
      Concepts LLC has been advised of the possibility of such damages.
    </p>{" "}
    <h3 className="quicksand-text blurb">7. Indemnification</h3>
    <p className="quicksand-text blurb">
      You agree to indemnify and hold Elder Design Concepts LLC and its
      affiliates, officers, directors, employees, and agents harmless from any
      claims, liabilities, damages, losses, costs, or expenses (including
      attorney's fees) arising out of or related to your use of the App or any
      violation of these Terms.
    </p>{" "}
    <h3 className="quicksand-text blurb">
      8. Modifications to the App and Terms
    </h3>
    <p className="quicksand-text blurb">
      Elder Design Concepts LLC reserves the right to modify, suspend, or
      discontinue the App, or any part thereof, at any time without prior
      notice. We also reserve the right to update or modify these Terms at any
      time. It is your responsibility to review the Terms periodically for any
      changes. Continued use of the App after modifications to the Terms
      constitutes your acceptance of the revised Terms.
    </p>{" "}
    <h3 className="quicksand-text blurb">9. Governing Law</h3>
    <p className="quicksand-text blurb">
      These Terms shall be governed by and construed in accordance with the laws
      of [Jurisdiction], without regard to its conflict of law principles.
    </p>{" "}
    <h3 className="quicksand-text blurb">10. Contact Information</h3>
    <p className="quicksand-text blurb">
      If you have any questions, concerns, or feedback regarding these Terms or
      the Kings Drinking Game app, please contact us at
      ElderDesignConcepts@gmail.com
    </p>
    Effective Date: 5/21/2023
    {/* <div>
      {" "}
      <p className="quicksand-text blurb">
        The app does use third party services that declare their own Terms and
        Conditions.
      </p>{" "}
      <p className="quicksand-text blurb">
        Link to Terms and Conditions of third party service providers used by
        the app
      </p>{" "}
      <ul>
        <li>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play Services
          </a>
        </li>
        <li>
          <a
            href="https://developers.google.com/admob/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            AdMob
          </a>
        </li>
        <li>
          <a
            href="https://expo.io/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expo
          </a>
        </li>
      </ul>
    </div> */}
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default KingsGameTOS;
