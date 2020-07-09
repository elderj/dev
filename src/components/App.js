import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Questions from "./Questions";

import { Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-172133710-1");
  ReactGA.pageview("/homepage");
}

function App() {
  initializeReactGA();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
