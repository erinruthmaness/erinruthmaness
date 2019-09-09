import React from "react";
import photo from "../../assets/erinruthmaness.jpg";
import "./Contact.css";

function Contact() {
    return (
        <div id="contact-top">
            <img alt="Erin Ruth Maness" src={photo} id="contact-main-photo" />
            <div id="contact-name">
                <h1>Erin Ruth Maness</h1>
                <h3>Charlotte, North Carolina</h3>
            </div>
            <div id="contact-body">
            </div>
        </div >

    )
}

export default Contact;