import React from "react";
import { NavLink } from "react-router-dom";
import "./Navber.css"; // Import the CSS file

const Navber = () => {
  return (
    <>
      <header className="navbar-header">
        <div className="container">
          <div className="brand-logo">
            <NavLink to="/" className="nav-logo">
              Hassan-Nadeem
            </NavLink>
          </div>
          <nav className="nav-menu">
            <ul>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navber;
