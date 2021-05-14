import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./home/Home";
import Recent from "./recent/Recent";
import Playlists from "./playlists/Playlists";
import Playlist from "./playlists/Playlist";

function Dashboard({ logout, headers }) {
  return (
    <Router>
      <Nav logout={logout} headers={headers} />
      <Switch>
        <Route exact path="/">
          <Home headers={headers} />
        </Route>
        <Route exact path="/recent">
          <Recent headers={headers} />
        </Route>
        <Route exact path="/playlists">
          <Playlists headers={headers} />
        </Route>
        <Route exact path="/playlists/:id">
          <Playlist headers={headers} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Dashboard;
