import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./home/Home";
import Recent from "./recent/Recent";

//done
function Dashboard({ logout }) {
  return (
    <Router>
      <Nav logout={logout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recent">
          <Recent />
        </Route>
      </Switch>
    </Router>
  );
}

export default Dashboard;
