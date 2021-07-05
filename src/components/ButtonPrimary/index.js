import React from "react";
import "./buttonPrimary.css";

export default function ButtonPrimary({ text, path, newTab }) {
    return (
        <a className="btn-primary" href={path} target={newTab && "_blank"} rel={newTab && "noopener noreferrer"}>{text}</a>
    )
}
