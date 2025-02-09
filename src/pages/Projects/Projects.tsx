import React from "react";
import './Projects.scss'
import cv from '../../cv/cv_es.json'
import cv_eng from '../../cv/cv_en.json'
import { useIntl } from "react-intl";

const Projects: React.FC = () => {

    const intl = useIntl();
    const currentLocale = intl.locale;
    const projects = currentLocale === 'en' ? cv_eng.projects : cv.proyectos;

    return (
        <>
            <h2> {currentLocale === "en" ? "Projects" : "Proyectos"} </h2>
            <div className="project-video-container ">
                {projects.map((project, index) => (
                    <div className="project-details" key={index}>
                        <p className="project-title">{currentLocale === "en" ? project.name : project.nombre}</p>
                        <p>{currentLocale === "en" ? project.date : project.fecha}</p>
                        <p>{currentLocale === "en" ? project.description : project.descripcion}</p>
                        <a href={currentLocale === "en" ? project.link : project.enlace}
                            target="_blank" rel="noopener noreferrer">
                            {currentLocale === "en" ? "View project" : "Ver proyecto"}
                        </a>
                        <div className="project-video">
                            {project.videoId ? (
                                <iframe
                                    width="560" height="315"
                                    src={`https://www.youtube.com/embed/${project.videoId}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            ) : project.imagen ? (
                                <img src={project.imagen} alt={project.nombre || project.name} />
                            ) : (
                                <p>{currentLocale === "en" ? "No media available" : "No hay contenido multimedia"}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;