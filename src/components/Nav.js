import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav id="nav" className="navbar navbar-expand-lg shadow-lg">
        <Link className="navbar-brand" to="/">
          Samyam
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
