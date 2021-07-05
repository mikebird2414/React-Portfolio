import React, { useEffect, useState } from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherLogosSplash from "../assets/images/otherLogos-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectLogo from "../components/ProjectLogo";
import API from "../utils/API";

export default function OtherLogos() {

    const [logos, setLogos] = useState([]);

    useEffect(() => {
        API.getGDLogos()
            .then(res => setLogos(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <Splash imgUrl={otherLogosSplash} />
            <ProjectInfo
                title="Other Logos"
                description="The following are logos I have designed in the past 4 years. I
                    started each by pencil and paper then vectorized them in Illustrator."
                services="Logo Designs"
            />
            {
                logos.map(logo => (
                    <ProjectLogo
                        key={logo.url}
                        url={logo.url}
                        alt={logo.alt}
                        shape={logo.shape}
                        background={logo.background}
                    />
                ))
            }
        </div>
    )
}
