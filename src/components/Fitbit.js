import React from "react";
import { Link } from "react-router-dom";

import "../styles/App.css";
import "../styles/list.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import instagramLogo from "../images/linkLogoImages/instagram-logo.png";

const Fitbit = () => (
  <div className="floating-content">
    <Header />
    <NavBar />

    <p className="quicksand-text blurb">
      <h4>Fitbit Clock Faces</h4>
      You can view individual clockfaces below that catch your interest or can
      checkout my{" "}
      <a href="https://gallery.fitbit.com/developer/83781fbc-98a0-4eb7-9a7e-50dfbfcddb0e">
        full gallery
      </a>{" "}
      from Fitibit.
    </p>
    <div className="niceLookingList">
      <ul>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/a25c671b-a8c9-4391-9d1e-e5bd9f34323c">
              Fancy Modern Digital
            </a>
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/50e113f9-4922-4292-ad4c-1a19874e59a1">
              Digital American Flag
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/fe1d116e-d062-4c09-9f1e-0419d9e823c1">
              Digital Aesthetic
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/de89c68f-2da4-4846-b01c-ffc2ab4b12af">
              Beach
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/a59314f7-2ac1-4101-bc5d-a0c1240e2a99">
              Waves
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/90f64039-9928-4c8f-9320-2cc0e9ac922b">
              Beach Path
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/f5bdf5a2-ff5d-45c9-b3f9-7fc3f40587bd">
              Spooky Pumpkins
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/2b8dfbdf-a38a-4825-8f1b-6c4d54077bf5">
              Pride Heart
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/2abc7f14-73f2-4ffc-830f-80a02e8eeb05">
              Heart of Pride
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/c943e048-91de-4f08-8dd3-14d4813e6737">
              Ice Cream
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/584001dd-beca-426d-80b9-4e2b0cc069c1">
              Pineapples
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/e31e3d1a-0b7a-4b6c-a378-64d14e4e22fd">
              Summer Strawberries
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/67f1ff7f-9926-4a77-ac84-54e1ae4ec772">
              Fall Leaves
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/fd55d56a-4878-4202-9c46-de3cb3a03119">
              Simple Christmas Tree
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
        <li className="portfolioListItem">
          <div className="tooltip">
            <a href="https://gallery.fitbit.com/details/e659dcfd-888f-4996-b0e1-b833f3e3f479">
              America the Beautiful
            </a>{" "}
            <span className="tootipFitbitImage">
              <img
                className="linkLogoImage"
                alt="LinkedIn logo"
                src={instagramLogo}
              />
            </span>
          </div>
        </li>
      </ul>
    </div>
    <br />
    <p className="quicksand-text blurb">
      <h4>Need help Installing?</h4>
    </p>
    <p className="quicksand-text blurb">
      Fitbit uses a 3rd party system called "K-Pay" to handle purchases of
      clockfaces and apps for their smartwatches. If you are having trouble
      installing or reinstalling a clockface, please{" "}
      <Link to="/contact">contact me</Link> and I will walk you through any
      challenges you may have.
      <br />
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

export default Fitbit;
