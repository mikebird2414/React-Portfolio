import React from "react";
import "./pages.css";
import Splash from "../components/Splash";
import indigoBallSplash from "../assets/images/indigoBall-splash.jpg";
import ProjectInfo from "../components/ProjectInfo";
import ProjectContent from "../components/ProjectContent";
import indigoBallSketch1 from "../assets/images/indigoBall-sketch-1.jpg";
import indigoBallSketch2 from "../assets/images/indigoBall-sketch-2.jpg";
import indigoBallSketch3 from "../assets/images/indigoBall-sketch-3.jpg";
import indigoBallVectorize from "../assets/images/indigoBall-vectorize.jpg";
import indigoBallLogo from "../assets/images/indigoBall-logoVersions.jpg";
import indigoBallInvite1 from "../assets/images/indigoBall-invite-1.jpg";
import indigoBallInvite2 from "../assets/images/indigoBall-invite-2.jpg";
import indigoBallInvite3 from "../assets/images/indigoBall-invite-3.jpg";
import indigoBallSaveTheDate from "../assets/images/indigoBall-saveTheDate.jpg";

export default function IndigoBall() {

    // Brainstorm words
    const brainstormNote = {
        name: "Indigo Ball",
        notes: ["a fundraiser event for the LGBTQ Center OC"]
    };

    const words = [
        {
            word: "indigo",
            graphics: ["color", "plant"]
        },
        {
            word: "ball",
            graphics: ["circle", "disco ball", "moon", "black tie"]
        },
        {
            word: "fundraiser",
            graphics: ["heart", "hands", "money"]
        }
    ];

    const combinations = [
        ["color", "circle", "heart"],
        ["color", "disco ball", "heart"],
        ["color", "moon", "heart"],
        ["color", "disco ball"],
        ["color", "circle"]
    ];

    const sketches = [
        {
            url: indigoBallSketch1,
            alt: "Logo sketches"
        },
        {
            url: indigoBallSketch2,
            alt: "Logo sketches"
        },
        {
            url: indigoBallSketch3,
            alt: "Logo sketches"
        }
    ];

    const vectors = [
        {
            url: indigoBallVectorize,
            alt: "Vectors"
        }
    ];

    const finalLogo = [
        {
            url: indigoBallLogo,
            alt: "Final logo"
        }
    ];

    const cards = [
        {
            url: indigoBallInvite1,
            alt: "Indigo Ball invite front cover"
        },
        {
            url: indigoBallInvite2,
            alt: "Indigo Ball invite outside"
        },
        {
            url: indigoBallInvite3,
            alt: "Indigo Ball invite inside"
        },
        {
            url: indigoBallSaveTheDate,
            alt: "Indigo Ball Save-the-Date card"
        }
    ];

    return (
        <div className="container">
            <Splash imgUrl={indigoBallSplash} />
            <ProjectInfo 
                title="Indigo Ball Fundraiser Event" 
                description="I was tasked to design the LGBTQ Center OC's (a gay and lesbian
                    non-profit organization) logo for their annual Indigo Ball black-tie
                    fundraiser event. The logo was to be classy and clever that would
                    work well on print and on the website."
                services="Logo Design, Print Design"
            />
            <ProjectContent 
                heading="1 brainstorm"
                description="To design the logo, I first did a brainstorm on the words
                    associated with the event to come up with ideas for the preliminary
                    sketches."
                name={brainstormNote.name}
                notes={brainstormNote.notes}
                words={words}
                combinations={combinations}
            />
            <ProjectContent
                heading="2 sketches"
                description="After I have brainstormed some ideas, I do some sketches."
                images={sketches}
            />
            <ProjectContent
                heading="3 vectors"
                description="Once I've shared the sketches with the center, I take the
                    few they've chosen into Adobe Illustrator to vectorize them."
                images={vectors}
            />
            <ProjectContent
                heading="4 final"
                description="The center chose one logo from the vectorized set. Then, I
                finalized it with colors, during which more back and forth took place.
                Below is the final logo showing two versions: one against a light colored
                background and the other against a dark colored background. Staying true
                to the name, I chose the color indigo to represent the theme of the event."
                images={finalLogo}
            />
            <ProjectContent
                heading="5 print designs"
                description="Below are my designs for the invitation and save the date card."
                images={cards}
            />
        </div>
    )
}
