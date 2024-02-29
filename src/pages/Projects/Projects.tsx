import React from "react";
import './Projects.scss'
import cv from '../../cv/cv_es.json'
import cv_eng from '../../cv/cv_en.json'
import { useIntl } from "react-intl";

const Projects:React.FC< {videoId: string}> = ({videoId}) => {

    const intl = useIntl();
    const currentLocale = intl.locale;
    const nombreProyecto = cv.proyectos[1].nombre;
    const fechaProyecto = cv.proyectos[1].fecha;
    const descripcionProyecto = cv.proyectos[1].descripcion
    const projectName = cv_eng.projects[1].name;
    const projectDate = cv_eng.projects[1].date;
    const projectDescription = cv_eng.projects[1].description
    
    return (
        
            <><h2> {currentLocale === "en" ? "Projects" : "Proyectos"} </h2>
            <div className="project-video-container ">
            <div className="project-video">
                <iframe
                    width="560" height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div className="project-details">
                    <p>{currentLocale === "en" ? projectName : nombreProyecto}</p>
                    <p>{currentLocale === "en" ? projectDate : fechaProyecto}</p>
                    <p>{currentLocale === "en" ? projectDescription : descripcionProyecto}</p>                                                            
                </div>
            </div>
        </div></>
    )
}

export default Projects;