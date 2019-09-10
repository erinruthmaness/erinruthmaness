import React from "react";
import photo from "../../assets/erinruthmaness.jpg";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="page-body">
            <div id="wrong-page">
                <img alt="Erin Ruth Maness" src={photo} id="wrong-photo" />
                <h1 id="nope">There's nothing here!</h1>
            </div>
        </div>
    )
}

export default NotFound;