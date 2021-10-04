import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-axpand-lg">
      <div className="navbar-brand ms-3">Github Search
      <ul className="navbar-nav">
        <li className="navbar-item">
          <NavLink exact to="/" className="nav-link">
            Main
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/about" className="nav-link">
            Information
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
