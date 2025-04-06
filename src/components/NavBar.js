import React from "react";
import "./NavBar.css"; 

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#Contact">Contact me</a>
    </nav>
  );
}

export default NavBar;
