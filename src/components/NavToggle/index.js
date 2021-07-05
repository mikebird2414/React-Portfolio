import React from "react";
import { Link } from "react-router-dom";
import "./navToggle.css";

function NavToggle({ handleOnClick, currentPath, active }) {
    return (
        <div id="navToggle" className="uk-position-absolute uk-position-right">
            <ul className="uk-navbar-nav uk-flex uk-flex-column">
                <li>
                    <Link 
                        className="navSmallLink" 
                        to="/" 
                        onClick={handleOnClick}
                        style={currentPath === "/" ? active : {}}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        className="navSmallLink" 
                        to="/portfolio" 
                        onClick={handleOnClick}
                        style={currentPath === "/portfolio" ? active : {}}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link 
                        className="navSmallLink" 
                        to="/graphic-design" 
                        onClick={handleOnClick}
                        style={currentPath.includes("/graphic-design") ? active : {}}
                    >
                        Design
                    </Link>
                </li>
                <li>
                    <Link 
                        className="navSmallLink" 
                        to="/posts" 
                        onClick={handleOnClick}
                        style={currentPath === "/posts" ? active : {}}
                    >
                        Posts
                    </Link>
                </li>
                <li>
                    <Link 
                        className="navSmallLink" 
                        to="/contact" 
                        onClick={handleOnClick}
                        style={currentPath === "/contact" ? active : {}}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavToggle;