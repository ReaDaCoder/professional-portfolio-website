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
          Reabetswe Makgabutla
          </a>
        </div>
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Expertise</a></li>
          <li><a href="#">Work</a></li>
          {/* <li><a href="#">Experience</a></li> */}
          <li><a href="#">Contact</a></li>
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
