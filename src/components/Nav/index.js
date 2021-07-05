import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

// import NavToggle from "../NavToggle";

function Nav() {

    const location = useLocation();
    const currentPath = location.pathname;

    const active = {
        color: "#B7D437",
        fontWeight: 500
    };

    // For smaller screens navbar
    // const [toggle, setToggle] = useState(false);

    // function handleOnClick() {
    //     setToggle(false);
    // }

    return (
        <div>
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">

                <div className="uk-navbar-left">
                    <Link className="uk-navbar-item uk-logo myLogo" to="/">Michael Birdsong</Link>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav navLink">
                        <li><Link to="/" style={currentPath === "/" ? active : {}}>About</Link></li>
                        <li><Link to="/portfolio" style={currentPath === "/portfolio" ? active : {}}>Portfolio</Link></li>
                        <li><Link to="/graphic-design" style={currentPath.includes("/graphic-design") ? active : {}}>Design</Link></li>
                        <li><Link to="/posts" style={currentPath === "/posts" ? active : {}}>Posts</Link></li>
                        <li><Link to="/contact" style={currentPath === "/contact" ? active : {}}>Contact</Link></li>
                    </ul>
                    {/* <div className="navMenuSmall" onClick={() => setToggle(!toggle)}>
                        <span id="navMenuIcon" uk-icon={`icon: ${toggle ? "close" : "menu"}; ratio: 1.7`}></span>
                    </div> */}
                </div>
            </nav>
            {
                // toggle && (
                //     <NavToggle
                //         handleOnClick={handleOnClick}
                //         currentPath={currentPath}
                //         active={active}
                //     />
                // )
            }
        </div>
    );
}

export default Nav;