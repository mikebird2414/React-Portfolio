import React from "react";
import "./contactInfo.css";

function ContactInfo() {
    return (
        <div className="contactInfo uk-flex uk-flex-column uk-margin-bottom">
            <span className="contactLabel uk-text-muted uk-form-label">Email</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: mail"></span>mikebird2414@yahoo.com</span>
            <span className="contactLabel uk-text-muted uk-form-label">Phone</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: phone"></span>404.918.9065</span>
            <span className="contactLabel uk-text-muted uk-form-label">LinkedIn</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: linkedin"></span><a href="https://www.linkedin.com/in/michaelbirdsongjr/"
                    target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/michaelbirdsongjr/</a></span>
            <span className="contactLabel uk-text-muted uk-form-label">GitHub</span>
            <span className="contactDesc uk-flex uk-flex-middle"><span className="contactIcon"
                uk-icon="icon: github"></span><a href="https://github.com/mikebird2414"
                    target="_blank" rel="noopener noreferrer">https://github.com/mikebird2414</a></span>
            <hr className="uk-divider-small" />
        </div>
    );
}

export default ContactInfo;