import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import SocialIcons from "./components/SocialIcon.js";

import ContactButton from "./components/ContactButton.js";
import logo from "./assets/img/logo.jpeg";

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Aryam" className="logo" />

      <h1 className="intro">Hi, It's Aryam ,Welcome To My Personal Website!<span></span></h1>
      <p className="description">
        I'm a student majoring in Computer & Network Engineering , eager to bring impactful projects to life with innovation and creativity.
      </p>
      <NavBar />
      
      <section id="about" style={{ paddingTop: '80px' }}>
        <h1>About Me:</h1>
        <p >This is where you can learn more about me. </p>
        <p> I'm passionate about engineering and computing applications, with a deep passion for technology and engineering. I've always been fascinated by how computer systems, networks, and software interact to shape the modern world.</p>
  
      </section>
      
      <section id="projects" style={{ paddingTop: '80px' }}>
  <h1>Projects:</h1>
  <p>Here are some of my projects:</p>
  


  <ul style={{ listStylePosition: 'inside', textAlign: 'left', }}>
    <li>Students Grades Tracking System</li>
    <li>Arithmetic Logic Unit By Tinkercad</li>
    <li>DBMS for a Coffee Shop using SQL</li>
  </ul>
</section>

      
      <section id="skills" style={{ paddingTop: '80px' }}>
        <h1>Skills:</h1>
        <p>These are my skills.</p>
        <ul style={{ listStylePosition: 'inside', textAlign: 'left', }}>
            <li>Problem Solving</li>
            <li>Programing</li>
            <li>Collaboration</li>
       </ul> 

      </section>
      <section id="Contact" style={{ paddingTop: '80px' }}>
        <h1>Contact:</h1>
        <p>My Social platforms</p>
        

      </section>
      
      
      <SocialIcons />
      <ContactButton />
    </div>
  );
}


export default App;
