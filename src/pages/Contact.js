import React from "react";
import "./pages.css";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";

function Contact() {
    return (
        <div className="container">
            <div className="contact-wrapper">
                <PageTitle text="Contact" color="light" />
                <div className="contactWrapper uk-child-width-1-2@m" uk-grid="true">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;