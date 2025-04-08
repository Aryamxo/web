

import NavBar from "./components/NavBar";
import SocialIcons from "./components/SocialIcon";

import logo from "./assets/img/logo.jpeg";
import './App.css';
import React from "react";
import ContactForm from "./components/ContactForm";
import {  } from './config/firebase';  // تأكد من أن المسار صحيح


function App() {
  
  return (

    <div className="bg-light text-dark min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <NavBar />

      {/* Header Section */}
      <div className="pt-5 mt-5">
      <header className="text-center py-5 bg-white shadow-sm">
        <img
          src={logo}
          alt="Aryam"
          className="rounded-circle shadow mb-3"
          width="120"
          height="120"
        />
        <h1 className ="fw-bold display-5 typing-effect">Hi, It's Aryam! </h1>
        <p className="lead typing-effect">
          Welcome to my personal website .
        </p>
        <p className="text-muted">
          I'm a Computer & Network Engineering student eager to build impactful, innovative tech.
        </p>
      </header>
      </div>

      {/* About Section */}
      <section id="about" className="container py-5">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <p className="text-center">
          I'm passionate about technology and how systems, networks, and software shape the modern world. My journey is fueled by curiosity and a love for building things that matter.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Projects</h2>
          <p className="text-center">Here are some of my favorite creations:</p>
          <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: "500px" }}>
            <li className="list-group-item"> Students Grades Tracking System</li>
            <li className="list-group-item"> Arithmetic Logic Unit (Tinkercad)</li>
            <li className="list-group-item"> DBMS for a Coffee Shop using SQL</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-5">
        <h2 className="text-center fw-bold mb-4">Skills</h2>
        <ul className="list-group list-group-horizontal-md justify-content-center flex-wrap">
          <li className="list-group-item border-0"> Problem Solving</li>
          <li className="list-group-item border-0"> Programming</li>
          <li className="list-group-item border-0"> Collaboration</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Contact</h2>
          <p className="mb-4">Let’s connect on my social platforms:</p>
          <SocialIcons />
          
        </div>
      </section>
      <h1>Contact Me</h1>
      <ContactForm />

      {/* Footer */}
      <footer className="text-center py-3 bg-light text-muted">
        © {new Date().getFullYear()} Aryam. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
