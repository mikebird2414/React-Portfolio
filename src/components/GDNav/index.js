import React, { useState } from "react";
import "./gdNav.css";
import { Link, useLocation } from "react-router-dom";

export default function GDNav() {

    const location = useLocation();
    const currentPath = location.pathname;

    const [isScrolling, setIsScrolling] = useState(false);

    window.addEventListener("scroll", onScroll);
  
    let resetTimeout;
    function onScroll() {
      clearTimeout(resetTimeout);
      setIsScrolling(true);
  
      resetTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500)
    }

    return (
        <div className="gd-nav uk-position-fixed uk-flex uk-flex-between">
            <Link to={currentPath === "/graphic-design/other-prints" ? "/graphic-design/other-logos" : currentPath === "/graphic-design/other-logos" ? "/graphic-design/hypermock" : "/graphic-design/indigo-ball"}>
                <span
                    uk-icon="chevron-left"
                    className={`gd-nav-left ${(currentPath === "/graphic-design/indigo-ball" || isScrolling === false) && "hidden"}`}
                />
            </Link>
            <Link to={currentPath === "/graphic-design/indigo-ball" ? "/graphic-design/hypermock" : currentPath === "/graphic-design/hypermock" ? "/graphic-design/other-logos" : "/graphic-design/other-prints"}>
                <span uk-icon="chevron-right"
                    className={`gd-nav-right ${(currentPath === "/graphic-design/other-prints" || isScrolling === false) && "hidden"}`}
                />
            </Link>
        </div>
    )
}
