import React from "react";
import './Intro.css'

const Intro:React.FC = ( )=> {
    return (
        <div>
            <main className="container">
                <p>Hello 👋 I'm</p>
                <section className="animation">
                    <div className="first"><div>Daniel Tello</div></div>
                    <div className="second"><div>A Web Developer</div></div>
                    <div className="third"><div>A Front end Developer</div></div>
                </section>
                </main>
        </div>
    )
}

export default Intro;