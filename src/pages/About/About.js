import React from "react";
import photo from "../../assets/erinruthmaness.jpg";
import "./About.css";

function About() {
    return (
        <div className="page-body">
            <div id="about-top">
                <img alt="Erin Ruth Maness" src={photo} id="main-photo" />
                <h1>Erin Ruth Maness</h1>
                <h3>Charlotte, North Carolina</h3>
            </div>
            <div id="about-text">
                <p>Full Stack Web Developer drawing on a background in customer service to build a
                    more intuitive user experience on the web. An optimistic, enthusiastic learner
                    with experience in studying languages and adapting to new environments. Recently
                    earned a certificate in Full Stack Development from the University of North
                    Carolina at Charlotte, with newly-developed skills in React.js, jQuery, ES5/ES6,
                    CSS, Bootstrap, Node.js, Express, SQL, Mongo, and responsive web design.  Excited
                    to leverage organizational and conflict-resolution skills as part of a team in
            order to build better web applications for clients.</p>
            </div>
        </div>
    )
}

export default About;