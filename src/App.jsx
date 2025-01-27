import { useState } from 'react';
import './App.css';
import HomePage from '../public/Components/HomePage';
import Expertise from '../public/Components/Expertise';
import Work from '../public/Components/Work';
import About from '../public/Components/About';
import Contacts from '../public/Components/Contacts'

function App() {

  return (
    <>
    <div className="navigation">
    <nav className="navbar">
      <div className="navdiv">
        <div className="logo">
          <a href="#">
          RM
          </a>
        </div>
        <ul className="nav-menu">
  <li className="nav-item"><a href="#">Home</a></li>
  <li className="nav-item"><a href="#about">About Me</a></li>
  <li className="nav-item"><a href="#expertise">Expertise</a></li>
  <li className="nav-item"><a href="#work">Work</a></li>
  <li className="nav-item"><a href="#contacts">Contact</a></li>
</ul>
        <div className="nav-connect">Connect With Me</div>
      </div>
     </nav>
    </div>
    <HomePage/>
    <About/>
    <Expertise/>
    <Work/>
    <Contacts/>
    </>
  )
}

export default App
