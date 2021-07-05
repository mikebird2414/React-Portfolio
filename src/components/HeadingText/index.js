import React from "react";
import { useSpring, animated } from "react-spring";
import "./headingText.css";
import resumePdf from "../../assets/images/Michael A Birdsong Resume 2021.pdf";
import ButtonPrimary from "../ButtonPrimary";

function HeadingText() {

    const propsHello = useSpring({
        from: {
            opacity: 0,
            transform: "translateY(-80px)"
        },
        to: {
            opacity: 1,
            transform: "translateY(0)"
        },
        config: {
            duration: 750
        }
    });

    const propsName = useSpring({
        from: {
            opacity: 0,
            transform: "translateY(-60px)"
        },
        to: {
            opacity: 1,
            transform: "translateY(0)"
        },
        config: {
            duration: 500
        },
        delay: 250
    });

    const propsSub = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 500
        },
        delay: 750
    });

    const propsResume = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 250
        },
        delay: 1000
    });

    return (
        <div>
            <div className="uk-tile headingText uk-text-left" uk-height-viewport="expand: true">
                <div className="greeting">
                    <animated.div style={propsHello} className="hello">Hello! I'm</animated.div>
                    <animated.div style={propsName} className="name">Michael<span>.</span></animated.div>
                </div>
                <animated.p style={propsSub} className="subHeading">Cloud Platform Support Engineer</animated.p>
                <animated.div style={propsResume}>
                    <ButtonPrimary text="Resume" path={resumePdf} newTab />
                </animated.div>
                {/* <Link to={resumePdf} target="_blank">
                    <animated.button style={propsResume} className="ctaBtn uk-button uk-button-default uk-margin">Resume</animated.button>
                </Link> */}
            </div>
        </div>
    );
}

export default HeadingText;