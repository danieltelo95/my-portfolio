import React from "react";
import { useIntl } from "react-intl";
import './Skills.scss'


const Skills:React.FC< {imageUrls: string[]}> = ({ imageUrls }) => {
    
    const intl = useIntl();
    const currentLocale = intl.locale;
    
    return (
        <div className="skills-container">
            <h2> {currentLocale === "en" ? "Skills" : "Tecnologías"} </h2>
            <div>
                {imageUrls.map((url, index) => (                    
              
                    <img className="skill-image" key={index} src={url} alt={`Image ${index}`} />

                ))}
                    
            </div>

        </div>
    )
    
}

export default Skills;
