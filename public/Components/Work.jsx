import React from 'react';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default function Work(){
    return(
        <>
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
                    <ul>
                        <li>Language:</li>
                        <li>Framework:</li>
                        <li>About:</li>
                    </ul>
                </div>
                <FaBeer />
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
                    <ul>
                        <li>Language:</li>
                        <li>Framework:</li>
                        <li>About:</li>
                    </ul>
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
                    <ul>
                        <li>Language:</li>
                        <li>Framework:</li>
                        <li>About:</li>
                    </ul>
                </div> 
            </div>
            <div className="work">
                <h3>Hotel Booking App</h3>
                <img
            src="/src/assets/work-cover-img.jpg"
            alt="React Image"
            width="150"
            className="work-img"
          />
           <div className="work-tools">
                    <ul>
                        <li>Language:</li>
                        <li>Framework:</li>
                        <li>About:</li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}