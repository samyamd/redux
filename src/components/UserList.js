export function UserList() {
  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load users</button>
        </div>
        <div className="two columns">
          <button className="button-primary">Add user</button>
        </div>
      </div>
      <div className="row">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dave Gamache</td>
              <td>dave@gmail.com</td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { UserList } from "./components/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <UserList />
          </Route>
          <Route path="/add-user">
            <h1>Add user</h1>
          </Route>
          <Route path="/edit-user">
            <h1>Edit user</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
