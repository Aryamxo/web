import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-light fixed-top shadow-sm py-3">
      <div className="container justify-content-center">
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link fw-bold text-dark" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold text-dark" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold text-dark" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold text-dark" href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;