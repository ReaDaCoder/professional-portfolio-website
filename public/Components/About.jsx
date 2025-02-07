import React from "react";

export default function About() {
  return (
    <div id="about">
      <div className="about-box">
        <div className="about-one">
        <img
            src="/images/profile-image.png"
            alt="React Image"
            width="350"
            className="profile-img"
          />
        </div>
        <div className="about-two">
          <h2 className="hero-intro">Hi I'm,</h2>
          <h3 className="hero-name">Reabetswe Makgabutla</h3>
          <div className="about-paragraph">
            <p>Passionate and detail-oriented junior developer with experience in
          creating responsive web applications using HTML, CSS, JavaScript,
          React and Node.js. Skiled in problem-solving, teamwork, and delivering
          user-focused solutions.</p>
          <p> Currently honing my full-stack development
          skills, I'm driven by a love for coding, continuous learning, and
          building impactful digital skills.</p>
          </div>
          <div className="about-skills">
            <div className="skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
            <div className="skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="skill"><p>React JS</p><hr style={{width:"65%"}}/></div>
            <div className="skill"><p>React Native</p><hr style={{width:"40%"}}/></div>
            <div className="skill"><p>Mongo DB</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
