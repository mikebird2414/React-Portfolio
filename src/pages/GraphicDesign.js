import React, { useEffect, useState } from "react";
import "./pages.css";
import GDProjSection from "../components/GDProjSection";
import PageTitle from "../components/PageTitle";
import API from "../utils/API";

function GraphicDesign() {
    const [gdProjects, setGDProjects] = useState([]);

    useEffect(() => {
        API.getGDProjects()
            .then(res => setGDProjects(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="container">
            <PageTitle text="Graphic Design" color="light" />
            {
                gdProjects.map(project => (
                    <GDProjSection
                        key={project.title}
                        title={project.title}
                        type={project.type}
                        image={project.image}
                        link={project.link}
                    />
                ))
            }
        </div>
    )
}

export default GraphicDesign;