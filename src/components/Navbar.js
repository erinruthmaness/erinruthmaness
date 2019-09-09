import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/about" className="nav-tab">
            About
            </Link>
            <Link to="/portfolio" className="nav-tab">
            Portfolio
            </Link>
            <Link to="/contact" className="nav-tab">
            Contact
            </Link>
        </div>
    )
}

export default Navbar;