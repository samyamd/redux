import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav id="nav" className="navbar navbar-brand">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/posts">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
