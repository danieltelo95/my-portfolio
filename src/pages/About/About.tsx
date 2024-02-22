import React from "react";
import cv from '../../cv/cv_es.json'
import './About.scss'

const About:React.FC = () => {

    const descripcion = cv.descripcion;   

    return (
        <div className="about-container">
            <p>{descripcion}</p>            
        </div>
    )
}

export default About;