import React from "react";
import Image from "../components/Image";
import HeadingText from "../components/HeadingText";
import About from "../components/About";
import "./pages.css";
import Skills from "../components/Skills";

function Home() {
    return (
        <div className="container">
            <div className="heading-wrapper uk-child-width-expand@m uk-text-center uk-grid-collapse" uk-grid="true">
                <HeadingText />
                <Image />
            </div>
            <About />
            <Skills />
        </div>
    );
}

export default Home;