import React, { Component } from "react";
import "../styles/App.css";
import "../styles/font.css";
import "../styles/questions.css";

// import { Link } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

import Accordion from "./Accordion";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
    };
  }
  render() {
    return (
      <div className="floating-content">
        <Header />
        <NavBar />
        <p className="quicksand-text blurb">Questions?</p>

        <Accordion
          className="accordion"
          selectedIndex={this.state.selectedIndex}
          onChange={(index, expanded, selectedIndex) =>
            console.log(
              `#${index} ${
                expanded ? "expanded" : "collapsed"
              } (selectedIndex: ${selectedIndex})`
            )
          }
        >
          <div
            data-header="What are the costs associated with a website?"
            className="accordion-item"
          >
            <p className="questionText">
              Owning a website doesn't have to be expensive
              <br />
              There are 4 main things to consider:
            </p>
            <ol className="pacifico-text">
              <li>
                <p className="questionText quicksand-text">
                  <strong>Domain Name</strong>: Mine is elderj.com for example.
                  Think of this as the public address for people to find your
                  site online. There is typically a small annual fee which I
                  have no control of to register a domain and this cost will
                  vary depending on the name you choose, typically can be had
                  for less than $10 per year.
                  <br />
                  <br />
                </p>
              </li>
              <li>
                <p className="questionText quicksand-text">
                  <strong>Hosting</strong>: Where the content for your website
                  will live. There are many options when hosting a website. Some
                  options require a monthly fee usually less than $10, but there
                  are free options for web hosting as well.
                  <br />
                  <br />
                </p>
              </li>
              <li>
                <p className="questionText quicksand-text">
                  <strong>Development</strong>: A one time cost for me to work
                  with you to design a custom website or application. This will
                  vary depending on the complexity of your needs, but I aim to
                  build affordable products for people. Message me with some
                  details and I can give you an estimate.
                  <br />
                  <br />
                </p>
              </li>
              <li>
                <p className="questionText quicksand-text">
                  <strong>Maintenance</strong>: If your site needs updates or a
                  revamp I can help with that too. Typically maintenance costs
                  on a website are similar to development costs but are
                  completely optional depending on your needs.
                </p>
              </li>
            </ol>
          </div>
          <div
            data-header="I want a website, how do I get one?"
            className="accordion-item"
          >
            <p className="questionText">
              Send me a message with what you need for your project or send me
              some contact details and we can work on designing a solution that
              will work for you.
            </p>
          </div>
        </Accordion>

        <br />
        <br />
        <Footer />
        <br />
        <br />
      </div>
    );
  }
}

export default Questions;
