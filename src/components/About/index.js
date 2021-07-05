import React from "react";
import "./about.css";
import PageTitle from "../PageTitle";

function About() {
    return (
        <div className="aboutWrapper uk-width-expand uk-margin-large-bottom">
            <div className="black-box"></div>
            <div className="gray-box"></div>
            <div className="white-box uk-flex uk-flex-center" uk-scrollspy="cls:uk-animation-slide-bottom; delay:300">
                <div className="about-box">
                    <PageTitle text="About" color="dark" />
                    <p className="aboutMeText uk-text-justify uk-padding">
                    I am currently seeking opportunities for web development. I have graduated 
                    from Florida State with my BS in information technology and gained an internship 
                    for web development at American University of Integrative Sciences. Currently I am 
                    enrolled at Georgia Tech Coding Bootcamp to expand my knowledge. I look forward to 
                    hearing more about this opportunity


                    </p>
                    <p className="aboutMeText uk-text-justify uk-padding uk-padding-remove-top">
                    My favorite hobbies includes just about anything outside. While growing up I have 
                    attended many race car events, basketball games, and football games. I am big on 
                    fitness so much that i was a member of a crossfit gym for 3 years. keeping a healthy 
                    body allows a healthy mind to funchtion.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;