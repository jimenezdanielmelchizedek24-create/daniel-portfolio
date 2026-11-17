
import React from "react";
import "../styles/Hero.css";
import heroPortrait from "../assets/daniel-hero.png";

function Hero() {
    return (
        <section className="hero-section" id="home">

            {/* LEFT SIDE - INTRODUCTION */}
            <div className="hero-content">

                <p className="hero-label">
                    MULTIMEDIA CREATIVE & IT STUDENT
                </p>

                <h1>
                    DANIEL
                    <br />
                    <span>JIMENEZ.</span>
                </h1>

                <h2>
                    CREATING WITH PURPOSE.
                    <br />
                    BUILDING WITH CREATIVITY.
                </h2>

                <p className="hero-description">
                    I'm Daniel Melchizedek A. Jimenez, a multimedia
                    creative and IT student exploring the intersection
                    of visual storytelling, design, and technology.
                </p>

                <div className="hero-buttons">

                    <a href="#projects" className="hero-primary-btn">
                        EXPLORE MY WORK <span>↗</span>
                    </a>

                    <a href="#about" className="hero-secondary-btn">
                        MORE ABOUT ME
                    </a>

                </div>

                <div className="hero-location">
                    <span className="location-dot"></span>
                    LAGUNA, PHILIPPINES
                </div>

            </div>

            {/* RIGHT SIDE - PORTRAIT */}
            <div className="hero-visual">

                <div className="hero-image-placeholder">

                    <img
                        src={heroPortrait}
                        alt="Portrait of Daniel Melchizedek Jimenez"
                        className="hero-portrait"
                    />

                    <div className="hero-image-overlay"></div>

                    <span className="hero-image-mark">DMJ.</span>

                </div>

                <div className="hero-image-caption">
                    <span>CREATIVE MIND.</span>
                    <span>TECHNICAL PERSPECTIVE.</span>
                </div>

            </div>

        </section>
    );
}

export default Hero;
