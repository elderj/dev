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
      Kings Game Terms &amp; Conditions
      <br />
    </h3>
    <p className="quicksand-text blurb">
      TERMS OF SERVICE Welcome to the Kings Drinking Game app (the "App"), which
      is owned and operated by Elder Design Concepts LLC ("we," "us," or "our").
      These Terms of Service ("Terms") govern your access to and use of the App,
      and constitute a binding legal agreement between you and us. ACCEPTANCE OF
      TERMS By downloading, accessing, or using the App, you agree to be bound
      by these Terms. If you do not agree to these Terms, you may not use the
      App. AGE REQUIREMENT The App is intended for use by individuals who are of
      legal drinking age in their jurisdiction. By using the App, you represent
      and warrant that you are of legal drinking age in your jurisdiction.
      DISCLAIMER OF LIABILITY The App is intended to be used as a fun and
      entertaining drinking game. However, we do not endorse excessive or
      irresponsible drinking. By using the App, you acknowledge and agree that
      you assume all risks associated with consuming alcohol, and we disclaim
      all liability for any damages, injuries, or other harm that may result
      from your use of the App. INTELLECTUAL PROPERTY All content and materials
      in the App, including but not limited to text, graphics, logos, images,
      and software, are the property of Elder Design Concepts LLC or its
      licensors and are protected by copyright, trademark, and other
      intellectual property laws. You may not reproduce, distribute, or create
      derivative works based on the App or its content without our prior written
      permission. DISCLAIMER OF WARRANTIES The App is provided "as is" and "as
      available," without warranties of any kind, either express or implied,
      including but not limited to warranties of merchantability, fitness for a
      particular purpose, or non-infringement. We do not warrant that the App
      will meet your requirements, be uninterrupted, or be error-free.
      LIMITATION OF LIABILITY To the fullest extent permitted by law, we will
      not be liable to you for any indirect, incidental, special, or
      consequential damages arising out of or in connection with your use of the
      App, including but not limited to damages for lost profits, loss of data,
      or loss of goodwill. CHANGES TO TERMS We reserve the right to modify these
      Terms at any time without notice. Your continued use of the App following
      any such modifications constitutes your acceptance of the revised Terms.
      GOVERNING LAW These Terms are governed by and construed in accordance with
      the laws of [jurisdiction]. Any dispute arising out of or in connection
      with these Terms shall be subject to the exclusive jurisdiction of the
      courts of [jurisdiction]. If you have any questions or concerns about
      these Terms, please contact us at [contact email address]. By clicking "I
      Agree" or using the App, you acknowledge that you have read, understood,
      and agree to these Terms.
    </p>

    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default KingsGameTOS;
