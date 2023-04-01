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
      Kings Drinking Game TERMS OF SERVICE
      <br />
    </h3>
    <p className="quicksand-text blurb">
      Welcome to the Kings Drinking Game app (the "App"), which is owned and
      operated by Elder Design Concepts LLC ("we," "us," or "our"). These Terms
      of Service ("Terms") govern your access to and use of the App, and
      constitute a binding legal agreement between you and us.
    </p>
    <h3 className="quicksand-text blurb">ACCEPTANCE OF TERMS</h3>
    <p className="quicksand-text blurb">
      By downloading, accessing, or using the App, you agree to be bound by
      these Terms. If you do not agree to these Terms, you may not use the App.
    </p>
    <h3 className="quicksand-text blurb">AGE REQUIREMENT</h3>
    <p className="quicksand-text blurb">
      The App is intended for use by individuals who are of legal drinking age
      in their jurisdiction. By using the App, you represent and warrant that
      you are of legal drinking age in your jurisdiction.
    </p>
    <h3 className="quicksand-text blurb">DISCLAIMER OF LIABILITY</h3>
    <p className="quicksand-text blurb">
      The App is intended to be used as a fun and entertaining drinking game.
      However, we do not endorse excessive or irresponsible drinking. By using
      the App, you acknowledge and agree that you assume all risks associated
      with consuming alcohol, and we disclaim all liability for any damages,
      injuries, or other harm that may result from your use of the App.
    </p>
    <h3 className="quicksand-text blurb">PERSONAL DATA</h3>
    <p className="quicksand-text blurb">
      The Kings Drinking Game app stores and processes personal data that you
      have provided to us, in order to provide our Service. It’s your
      responsibility to keep your phone and access to the app secure. We
      therefore recommend that you do not jailbreak or root your phone, which is
      the process of removing software restrictions and limitations imposed by
      the official operating system of your device. It could make your phone
      vulnerable to malware/viruses/malicious programs, compromise your phone’s
      security features and it could mean that the Kings Drinking Game app won’t
      work properly or at all.
    </p>{" "}
    <div>
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
    </div>
    <h3 className="quicksand-text blurb">INTELLECTUAL PROPERTY</h3>
    <p className="quicksand-text blurb">
      All content and materials in the App, including but not limited to text,
      graphics, logos, images, and software, are the property of Elder Design
      Concepts LLC or its licensors and are protected by copyright, trademark,
      and other intellectual property laws. You may not reproduce, distribute,
      or create derivative works based on the App or its content without our
      prior written permission.
    </p>
    <h3 className="quicksand-text blurb">DISCLAIMER OF WARRANTIES</h3>
    <p className="quicksand-text blurb">
      The App is provided "as is" and "as available," without warranties of any
      kind, either express or implied, including but not limited to warranties
      of merchantability, fitness for a particular purpose, or non-infringement.
      We do not warrant that the App will meet your requirements, be
      uninterrupted, or be error-free.
    </p>
    <h3 className="quicksand-text blurb">LIMITATION OF LIABILITY</h3>
    <p className="quicksand-text blurb">
      To the fullest extent permitted by law, we will not be liable to you for
      any indirect, incidental, special, or consequential damages arising out of
      or in connection with your use of the App, including but not limited to
      damages for lost profits, loss of data, or loss of goodwill.
    </p>
    <h3 className="quicksand-text blurb">CHANGES TO TERMS</h3>
    <p className="quicksand-text blurb">
      We reserve the right to modify these Terms at any time without notice.
      Your continued use of the App following any such modifications constitutes
      your acceptance of the revised Terms.
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default KingsGameTOS;
