import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Work() {
  return (
    <div id="work">
      <div className="mywork-title">
        <h2>Work</h2>
      </div>
      <div className="work-container">
        <div className="work">
          <h3>Weather App</h3>
          <img
            src="/src/assets/work-cover-img.jpg"
            alt="React Image"
            width="150"
            className="work-img"
          />
          <div className="work-tools">
            <ul className="tools-list">
              <li className="tool-item">Language:</li>
              <li className="tool-item">Framework:</li>
              <li className="tool-item">About:</li>
            </ul>
          </div>
          <div className="code-live">
            <div className="code"><a href="https://github.com/ReaDaCoder/my-react-weather-app.git"><FaGithub /></a></div>
            {/* <div className="live"><a href="#">Live</a></div> */}
          </div>
        </div>
        <div className="work">
          <h3>Guessing Game</h3>
          <img
            src="/src/assets/work-cover-img.jpg"
            alt="React Image"
            width="150"
            className="work-img"
          />
          <div className="work-tools">
            <ul className="tools-list">
              <li className="tool-item">Language:</li>
              <li className="tool-item">Framework:</li>
              <li className="tool-item">About:</li>
            </ul>
          </div>
          <div className="code-live">
            <div className="code"><a href="https://github.com/ReaDaCoder/game.git"><FaGithub /></a></div>
            <div className="live"><a href="#">Live</a></div>
          </div>
        </div>
        <div className="work">
          <h3>Recipe App</h3>
          <img
            src="/src/assets/work-cover-img.jpg"
            alt="React Image"
            width="150"
            className="work-img"
          />
          <div className="work-tools">
            <ul className="tools-list">
              <li className="tool-item">Language:</li>
              <li className="tool-item">Framework:</li>
              <li className="tool-item">About:</li>
            </ul>
          </div>
          <div className="code-live">
            <div className="code"><a href="https://github.com/ReaDaCoder/my-recipe-app-react.git"><FaGithub /></a></div>
            <div className="live"><a href="#">Live</a></div>
          </div>
        </div>
        <div className="work">
          <h3>Hotel Booking App</h3>
          <img
            src="/public/hotel-app.png"
            alt="React Image"
            width="150"
            className="work-img"
          />
          <div className="work-tools">
            <ul className="tools-list">
              <li className="tool-item">Language: JavaScript</li>
              <li className="tool-item">Framework: Reactjs</li>
              <li className="tool-item">About:</li>
            </ul>
          </div>
          <div className="code-live">
            <div className="code"><a href="https://github.com/ReaDaCoder/hotel-booking-app.git"><FaGithub /></a></div>
            <div className="live"><a href="https://hotel-booking-app-one-nu.vercel.app/">Live</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
