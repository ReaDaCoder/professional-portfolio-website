import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export default function Contacts(){
    return(
        <div id="contacts">
        <div className="contact-heading">
        <h2>Connect With Me!</h2>
        </div>
        <div className="contact-container">
            <div className="contact-link">
                <div className="icon"><FaPhone /></div>
                072 079 6065
                </div>
            <div className="contact-link">
            <div className="icon">
            <a href="mailto:reabetswemakgabutla0@gmail.com"><MdEmail /></a></div>
                reabetswemakgabutla0@gmail.com
                </div>
            <div className="contact-link">
            <div className="icon"><a href="https://www.linkedin.com/in/reabetswe-makgabutla-b1ab6a195/"><GrLinkedin /></a></div>
                <a href="#">Reabetswe Makgabutla</a>
                </div>
            <div className="contact-link">
            <div className="icon"><a href="https://github.com/ReaDaCoder"><FaGithub /></a></div>
                <a href="#">Reabetswe Makgabutla</a>
                </div>
        </div>
        </div>
    )
}