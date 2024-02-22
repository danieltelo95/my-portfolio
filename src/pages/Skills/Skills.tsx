import React from "react";
import './Skills.scss'


const Skills:React.FC< {imageUrls: string[]}> = ({ imageUrls }) => {
    
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div>
                {imageUrls.map((url, index) => (                    
              
                    <img className="skill-image" key={index} src={url} alt={`Image ${index}`} />

                    ))}
                    
            </div>

        </div>
    )
    
}

export default Skills;
