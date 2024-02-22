import React from "react";
import About from "../About/About";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import './Home.scss'

const Home:React.FC = () => {

  const imageUrls = [
    require('../../assets/logos/javascript_logo.png'),
    require('../../assets/logos/typescript_logo.png'),
    require('../../assets/logos/flutter_logo_v3.png'),
    require('../../assets/logos/dart_logo.png'),
    require('../../assets/logos/react_logo.png'),
    require('../../assets/logos/redux_logo.png'),
    require('../../assets/logos/nodejs_logo.png'),
    require('../../assets/logos/postgre_logo.png'),
    require('../../assets/logos/git_logo.png'),
    require('../../assets/logos/github_logo.png'),
  ]
  
    return(
        <div>                
                <div>
                  <Intro />
                </div>             
                <About />
                <Skills imageUrls={imageUrls} />
                <Projects videoId="LREzajthtd8?si=xaJsmb_TZVA4OY4X"/>
                <Contact />
         </div>
    )
}

export default Home;