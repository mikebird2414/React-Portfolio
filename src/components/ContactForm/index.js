import React, { useRef, useState } from "react";
import "./contactForm.css";
import emailjs from "emailjs-com";
import dotenv from "dotenv";
dotenv.config();

function ContactForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [messageSent, setMessageSent] = useState(false);
    const [misingFields, setMissingFields] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let message = messageRef.current.value;

        const messageInfo = {
            name: name,
            email: email,
            message: message
        }

        if (name && email && message) {
            setMissingFields(false);
            console.log("Form submitting...");
            emailjs.send("default_service", "portfolio_contact", messageInfo, process.env.REACT_APP_EMAILJS_USERID)
                .then(res => {
                    console.log("Form submitted...", res);
                })
                .catch(err => {
                    console.log("Something went wrong while trying to send the form...", err);
                });
            setMessageSent(true);
        } else {
            console.log("Empty fields...")
            setMissingFields(true);
        }

        setTimeout(() => {
            setMessageSent(false);
            setMissingFields(false);
        }, 3000);

    }

    return (
        <form className="uk-form-stacked uk-position-relative" uk-height-viewport="expand: true" onSubmit={handleSubmit}>
            <div className="uk-margin">
                <label className="uk-form-label uk-text-muted" htmlFor="name">Name</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="name" type="text" placeholder="John Doe" ref={nameRef} />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label uk-text-muted" htmlFor="email">Email</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="email" type="text" placeholder="johndoe@email.com" ref={emailRef} />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label uk-text-muted" htmlFor="message">Message</label>
                <div className="uk-form-controls">
                    <textarea className="uk-textarea" id="message" rows="5"
                        placeholder="Your message..." ref={messageRef} ></textarea>
                </div>
                {
                    messageSent && (
                        <div className="success-alert-container uk-alert-success" uk-alert="true">
                            <span className="uk-alert-close" uk-close="true"></span>
                            <p>Your message was sent successfully!</p>
                        </div>
                    )
                }
                {
                    misingFields && (
                        <div className="danger-alert-container uk-alert-danger" uk-alert="true">
                            <span className="uk-alert-close" uk-close="true"></span>
                            <p>Please fill in all the fields and try again.</p>
                        </div>
                    )
                }
            </div>
            <button id="submitBtn" className="uk-button" type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;