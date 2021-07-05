import React from "react";
import "./projectPrint.css";

export default function ProjectPrint({ heading, description, image, orientation }) {
    return (
        <div className="proj-print uk-flex uk-flex-column uk-width-100 uk-flex-middle">
            <h4 className="uk-text-center">{heading}</h4>
            <p className="uk-text-center">{description}</p>
            <img 
                className={`print-${orientation}`} 
                src={image} 
                alt={description} 
            />
        </div>
    )
}
