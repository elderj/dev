import React from "react";
import Home from "./Home";
import About from "./About";
import WebProjects from "./WebProjects";
import Android from "./Android";
import Fitbit from "./Fitbit";
import Contact from "./Contact";
import Questions from "./Questions";

import TriangleSkillGame from "./portfolio/TriangleSkillGame";
import TriangleSkillGameTOS from "./portfolio/TriangleSkillGameTOS";
import TriangleSkillGamePP from "./portfolio/TriangleSkillGamePP";

import KingsGame from "./portfolio/KingsGame";
import KingsGameTOS from "./portfolio/KingsGameTOS";
import KingsGamePP from "./portfolio/KingsGamePP";

import DotsAndBoxes from "./portfolio/DotsAndBoxes";
import DotsAndBoxesTOS from "./portfolio/DotsAndBoxesTOS";
import DotsAndBoxesPP from "./portfolio/DotsAndBoxesPP";

import WouldYouRatherTOS from "./portfolio/WouldYouRatherTOS";
import WouldYouRatherPP from "./portfolio/WouldYouRatherPP";

import NeverHaveIEver from "./portfolio/NeverHaveIEver";
import NeverHaveIEverTOS from "./portfolio/NeverHaveIEverTOS";
import NeverHaveIEverPP from "./portfolio/NeverHaveIEverPP";

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
        <Route exact path="/about" component={About} />
        <Route exact path="/web-projects" component={WebProjects} />
        {/* Android Items */}
        <Route exact path="/portfolio" component={Android} />

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

        {/* Dots and Boxes */}
        <Route
          exact
          path="/portfolio/dots-and-boxes"
          component={DotsAndBoxes}
        />
        <Route
          exact
          path="/portfolio/dots-and-boxes/terms"
          component={DotsAndBoxesTOS}
        />
        <Route
          exact
          path="/portfolio/dots-and-boxes/privacy"
          component={DotsAndBoxesPP}
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
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/fitbit" component={Fitbit} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
