import React from "react";
import "../pages/Portfolio/Portfolio.css";

function PortfolioLink(props) {
    return (
        <div className="portfolio-piece">
            <img alt={props.id} src={props.img} />
            <div className="portfolio-link">
                <a href={props.link}>{props.name}</a>
            </div>
        </div>
    )
}

export default PortfolioLink;