
import React from "react";
import "../styles/About.css";

function About() {
    return (
        <section className="about-section" id="about">

            <div className="about-header">
                <p className="about-label">01 / GET TO KNOW ME</p>

                <h2>
                    BEHIND THE
                    <span> CREATIVE.</span>
                </h2>
            </div>

            <div className="about-container">

                <div className="about-left">

                    <p className="about-intro">
                        MORE THAN JUST
                        <span> WHAT I CREATE.</span>
                    </p>

                    <h3>
                        I'm a creative mind
                        with a passion for
                        <span> turning ideas into experiences.</span>
                    </h3>

                    <div className="about-quote">
                        <span className="quote-mark">“</span>

                        <p>
                            Creativity is not just about making
                            things look good. It's about making
                            ideas meaningful.
                        </p>
                    </div>

                </div>

                <div className="about-right">

                    <p className="about-description">
                        I'm Daniel Melchizedek A. Jimenez, a
                        multimedia creative and Bachelor of
                        Science in Information Technology student
                        majoring in Animation and Motion Graphics.

                        <br /><br />

                        With over five years of experience in
                        photography, cinematography, videography,
                        and multimedia production, I've developed
                        a strong appreciation for visual storytelling
                        and creative direction.

                        <br /><br />

                        Beyond the creative field, I explore
                        technology, system development, and
                        digital solutions. I believe that combining
                        creativity with technical thinking allows
                        me to approach challenges from different
                        perspectives.
                    </p>

                    <div className="about-divider"></div>

                    <div className="about-specialties">

                        <p>WHAT I BRING TO THE TABLE</p>

                        <div className="specialty-list">
                            <span>PHOTOGRAPHY</span>
                            <span>CINEMATOGRAPHY</span>
                            <span>VIDEOGRAPHY</span>
                            <span>CREATIVE DIRECTION</span>
                            <span>ANIMATION & MOTION GRAPHICS</span>
                            <span>WEB & SYSTEM DEVELOPMENT</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="about-stats">

                <div className="stat-item">
                    <h3>05<span>+</span></h3>
                    <p>YEARS OF EXPERIENCE</p>
                </div>

                <div className="stat-item">
                    <h3>02</h3>
                    <p>CREATIVE VENTURES</p>
                </div>

                <div className="stat-item">
                    <h3>∞</h3>
                    <p>IDEAS TO EXPLORE</p>
                </div>

            </div>

        </section>
    );
}

export default About;
