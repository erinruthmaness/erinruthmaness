import React from "react";
import photo from "../../assets/erinruthmaness.jpg";
import "./Contact.css";

function Contact() {
    return (
        <div id="contact-page">
            <div id="contact-top">
                <img alt="Erin Ruth Maness" src={photo} id="contact-main-photo" />
                <div id="contact-name">
                    <h1>Erin Ruth Maness</h1>
                    <h3>Charlotte, North Carolina</h3>
                </div>
            </div >
            <div id="contact-body">
                <h2>LinkedIn: <a
                    href="https://www.linkedin.com/in/erin-maness-619286127/">Erin Ruth Maness</a></h2>
                <h2>Email: erinruthmaness@gmail.com</h2>
            </div>
        </div>

    )
}

export default Contact;