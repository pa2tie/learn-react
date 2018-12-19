import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MercuryHomeScreen from "./components/MercuryHomeScreen/MercuryHomeScreen";

ReactDOM.render(
  <Router>
    <Route path="/" component={MercuryHomeScreen} />
  </Router>,
  document.getElementById("root")
);
