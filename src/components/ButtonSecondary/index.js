import React from "react";
import "./buttonSecondary.css";

export default function ButtonSecondary({ text, path, newTab }) {
    return (
        <a className="btn-secondary" href={path} target={newTab && "_blank"} rel={newTab && "noopener noreferrer"}>{text}</a>
    )
}
