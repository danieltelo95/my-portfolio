import React from "react";
import cv from '../../cv/cv_es.json';
import cv_eng from '../../cv/cv_en.json';
import './About.scss';
import { useIntl } from 'react-intl';

const About: React.FC = () => {
    
    const intl = useIntl();
    const currentLocale = intl.locale;
    const descripcion = cv.descripcion;   
    const description = cv_eng.description

    return (
        <div>
            <div className="about-container">
                <p>
                    {currentLocale === "en" ? description : descripcion}
                </p>
                <img className="photo" src={require("../../assets/images/me_photo.jpeg")} alt="Mi foto" />

            </div>
        </div>
    );
}

export default About;
