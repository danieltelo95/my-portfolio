import React from "react";
import cv from '../../cv/cv_es.json'
import './Contact.scss';

const Contact:React.FC = () => {

    const correo = cv.correo
    const linkedin = cv.linkedin
    const github = cv.github

    return (
        <div className="contact-container">
            <p>¡Contáctame!</p>
            <div className="contact-item">
                <a href={`mailto:${correo}`} target="_blank">
                <img className="icon-image" src={require("../../assets/icons/gmail_icon.png")}></img>
                </a>
            </div>
            <div className="contact-item">
                <a href={linkedin} target="_blank">
                <img className="icon-image" src={require("../../assets/icons/linkedin_icon.png")}></img>
                </a>
            </div>
            <div className="contact-item">
                <a href={github} target="_blank">
                <img className="icon-image" src={require("../../assets/icons/github_icon.png")}></img>
                </a>
            </div>
        </div>
    )
}

export default Contact;