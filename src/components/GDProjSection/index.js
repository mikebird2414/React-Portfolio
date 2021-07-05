import React from "react";
import "./gdProjSection.css";
import ButtonPrimary from "../ButtonPrimary";

export default function GDProjSection({ title, type, image, link }) {
    return (
        <section className="gd-proj-section uk-flex uk-position-relative">
            <img src={image} alt={title} />
            <div className="uk-position-absolute">
                <p className="uk-light uk-text-small uk-margin-remove">
                    {type.join(", ")}
                </p>
                <h3 className="uk-light uk-margin-remove-top">{title}</h3>
                <ButtonPrimary text="See project" path={link} />
            </div>
        </section>
    )
}
