import React from "react";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Fitbit from "./Fitbit";
import Contact from "./Contact";
import Questions from "./Questions";

import KingsGame from "./portfolio/KingsGame";
import KingsGameTOS from "./portfolio/KingsGameTOS";
import KingsGamePP from "./portfolio/KingsGamePP";

import WouldYouRatherTOS from "./portfolio/WouldYouRatherTOS";
import WouldYouRatherPP from "./portfolio/WouldYouRatherPP";

import NeverHaveIEver from "./portfolio/NeverHaveIEver";
import NeverHaveIEverTOS from "./portfolio/NeverHaveIEverTOS";
import NeverHaveIEverPP from "./portfolio/NeverHaveIEverPP";

import TriangleSkillGame from "./portfolio/TriangleSkillGame";
import TriangleSkillGameTOS from "./portfolio/TriangleSkillGameTOS";
import TriangleSkillGamePP from "./portfolio/TriangleSkillGamePP";
import RandomNameGenerator from "./portfolio/RandomNameGenerator";
import RandomNameGeneratorTOS from "./portfolio/RandomNameGeneratorTOS";
import RandomNameGeneratorPP from "./portfolio/RandomNameGeneratorPP";

import { Switch, Route } from "react-router-dom";
import WouldYouRather from "./portfolio/WouldYouRather";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Portfolio Items */}
        <Route exact path="/portfolio" component={Portfolio} />
        {/* Kings */}
        <Route exact path="/portfolio/kings-card-game" component={KingsGame} />
        <Route
          exact
          path="/portfolio/kings-card-game/terms"
          component={KingsGameTOS}
        />
        <Route
          exact
          path="/portfolio/kings-card-game/privacy"
          component={KingsGamePP}
        />

        {/* Would You Rather */}
        <Route
          exact
          path="/portfolio/would-you-rather"
          component={WouldYouRather}
        />
        <Route
          exact
          path="/portfolio/would-you-rather/terms"
          component={WouldYouRatherTOS}
        />
        <Route
          exact
          path="/portfolio/would-you-rather/privacy"
          component={WouldYouRatherPP}
        />

        {/* Never Have I Ever */}
        <Route
          exact
          path="/portfolio/never-have-i-ever"
          component={NeverHaveIEver}
        />
        <Route
          exact
          path="/portfolio/never-have-i-ever/terms"
          component={NeverHaveIEverTOS}
        />
        <Route
          exact
          path="/portfolio/never-have-i-ever/privacy"
          component={NeverHaveIEverPP}
        />

        {/* Random Name Generator */}
        <Route
          exact
          path="/portfolio/random-name-generator"
          component={RandomNameGenerator}
        />
        <Route
          exact
          path="/portfolio/random-name-generator/terms"
          component={RandomNameGeneratorTOS}
        />
        <Route
          exact
          path="/portfolio/random-name-generator/privacy"
          component={RandomNameGeneratorPP}
        />
        <Route
          exact
          path="/portfolio/triangle-skill-game"
          component={TriangleSkillGame}
        />
        <Route
          exact
          path="/portfolio/triangle-skill-game/terms"
          component={TriangleSkillGameTOS}
        />
        <Route
          exact
          path="/portfolio/triangle-skill-game/privacy"
          component={TriangleSkillGamePP}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/fitbit" component={Fitbit} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
