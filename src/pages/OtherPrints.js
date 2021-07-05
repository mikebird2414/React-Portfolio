import React, { useEffect, useState } from "react";
import "./pages.css";
import Splash from "../components/Splash";
import otherPrintsSplash from "../assets/images/otherPrints-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import API from "../utils/API";
import ProjectContent from "../components/ProjectContent";
import ProjectPrint from "../components/ProjectPrint";

export default function OtherPrints() {

    const [firstPrint, setFirstPrint] = useState({});
    const [prints, setPrints] = useState([]);

    useEffect(() => {
        API.getGDPrints()
            .then(res => {
                setFirstPrint(() => {
                    let tempFirstPrint = res[0];
                    tempFirstPrint.images = [{
                        url: res[0].image,
                        alt: res[0].description
                    }]
                    return tempFirstPrint;
                })
                setPrints(() => {
                    let tempPrints = [];
                    for (let i = 1; i < res.length; i++) {
                        tempPrints.push(res[i]);
                    }
                    return tempPrints;
                });
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <Splash imgUrl={otherPrintsSplash} />
            <ProjectInfo
                title="Other Print Designs"
                description="The following are various prints I designed in the last four years."
                services="Print Designs"
            />
            <ProjectContent
                heading={firstPrint.heading}
                description={firstPrint.description}
                images={firstPrint.images}
            />
            {
                prints.map(print => (
                    <ProjectPrint
                        key={print.heading}
                        heading={print.heading}
                        description={print.description}
                        image={print.image}
                        orientation={print.orientation}
                    />
                ))
            }

        </div>
    )
}
