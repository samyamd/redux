import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Posts from "./components/Posts";
import Users from "./components/Users";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

function App() {
  // const token = localStorage.getItem("token");
  return (
    <Router>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts"><Posts /></Route>
      <Route exact path="/post/:id"><SinglePost /></Route>
      {/* <Route exact path="/users/:id" component={Profile} /> */}
    </Router>
  );
}

export default App;
