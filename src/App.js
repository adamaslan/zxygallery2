import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Layouts/Nav";
import Landing from "./Pages/Landing";
import Gallery from "./Pages/Gallery";
import Currentshow from "./Pages/Currentshow";
import Artists from "./Pages/Artists";
import Pastshows from "./Pages/Pastshows";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/Artists">
            <Artists />
          </Route>
          <Route path="/Pastshows">
            <Pastshows />
          </Route>
          <Route path="/Currentshow">
            <Currentshow />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
