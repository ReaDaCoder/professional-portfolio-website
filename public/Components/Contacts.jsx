import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export default function Contacts(){
    return(
        <>
        <div className="contact-heading">
        <h2>Contact Details</h2>
        </div>
        <div className="contact-container">
            <div className="contact-link">
                <div className="icon"><FaPhone /></div>
                072 079 6065
                </div>
            <div className="contact-link">
            <div className="icon"><MdEmail /></div>
                reabetswemakgabutla0@gmail.com
                </div>
            <div className="contact-link">
            <div className="icon"><GrLinkedin /></div>
                <a href="#">Reabetswe Makgabutla</a>
                </div>
            <div className="contact-link">
            <div className="icon"><FaGithub /></div>
                <a href="#">Reabetswe Makgabutla</a>
                </div>
        </div>
        </>
    )
}