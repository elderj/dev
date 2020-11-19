import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Fitbit from "./Fitbit";
import Contact from "./Contact";
import Questions from "./Questions";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/fitbit" component={Fitbit} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
