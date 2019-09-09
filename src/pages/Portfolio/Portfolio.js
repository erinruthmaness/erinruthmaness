import React from "react";
import Link from "../../components/PortfolioLink";
import links from "../../assets/portfolio.js";
import photo from "../../assets/erinruthmaness.jpg";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div id="portfolio-page">
            <div id="portfolio-top">
                <img alt="Erin Ruth Maness" src={photo} id="port-main-photo" />
                <div id="portfolio-name">
                    <h1>Erin Ruth Maness</h1>
                    <h3>Charlotte, North Carolina</h3>
                </div>
            </div>
            <div id="portfolio-body">
                {links.map(repo =>
                    <Link
                        key={repo.key}
                        id={repo.key}
                        name={repo.name}
                        link={repo.link}
                        img={repo.img}
                    />
                )}
            </div>
        </div>
    )
}

export default Portfolio;