import React from "react";
import { NavLink, Link } from "react-router-dom";
import './nav.css';


const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
        <Link className="navbar-brand" to="/">
          Angelo Ungos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/aboutMe">
              About Me <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
