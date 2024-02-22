import React from "react";
import './Projects.scss'
import cv from '../../cv/cv_es.json'
const Projects:React.FC< {videoId: string}> = ({videoId}) => {

    const projectName = cv.proyectos[1].nombre;
    const projectDate = cv.proyectos[1].fecha;
    const projectDescription = cv.proyectos[1].descripcion
    

    return (
        
            <><h2> Proyectos </h2>
            <div className="project-video-container ">
            <div className="project-video">
                <iframe
                    width="560" height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <div className="project-details">
                    <p className="project-title">{projectName}</p>
                    <p className="project-date">{projectDate}</p>
                    <p className="project-description">{projectDescription}</p>
                </div>
            </div>
        </div></>
    )
}

export default Projects;