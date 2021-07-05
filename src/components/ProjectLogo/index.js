import React from "react";
import "./projectLogo.css";

export default function ProjectLogo({ url, alt, shape, background }) {
    return (
        <div
            className={`proj-logo uk-flex uk-flex-center uk-flex-middle ${shape}-shape`}
            style={{ backgroundColor:  background  }}
        >
            <img src={url} alt={alt} />
        </div>
    )
}
