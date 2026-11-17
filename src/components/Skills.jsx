
import React from "react";
import "../styles/Skills.css";

const skillCategories = [
    {
        number: "01",
        icon: "◈",
        title: "VISUAL PRODUCTION",
        subtitle: "Capturing stories through visuals.",
        description:
            "Creating compelling visual narratives through photography, filmmaking, and multimedia production.",
        skills: [
            "Photography",
            "Cinematography",
            "Videography",
            "Camera Operation",
            "Drone Operation",
            "Gimbal Operation",
            "Photo Editing",
            "Video Editing",
            "Creative Direction"
        ]
    },
    {
        number: "02",
        icon: "✳",
        title: "DESIGN & ANIMATION",
        subtitle: "Turning imagination into visuals.",
        description:
            "Combining visual communication, design principles, and motion to create engaging digital experiences.",
        skills: [
            "Animation",
            "Motion Graphics",
            "Graphic Design",
            "UI/UX Design",
            "Brand Identity",
            "Visual Storytelling",
            "Layout & Composition"
        ]
    },
    {
        number: "03",
        icon: "</>",
        title: "TECHNOLOGY & DEVELOPMENT",
        subtitle: "Building ideas into solutions.",
        description:
            "Exploring web technologies, software development, and system architecture to create functional digital solutions.",
        skills: [
            "Frontend Development",
            "Backend Development",
            "Full-Stack Development",
            "System Analysis",
            "Database Design",
            "Requirements Gathering",
            "Project Planning",
            "Documentation"
        ]
    }
];

const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MySQL",
    "Lua"
];

function Skills() {
    return (
        <section className="skills-section" id="skills">

            {/* SECTION HEADER */}
            <div className="skills-header">

                <div>
                    <p className="skills-label">
                        02 / WHAT I BRING
                    </p>

                    <h2>
                        SKILLS &
                        <span> EXPERTISE.</span>
                    </h2>
                </div>

                <p className="skills-intro">
                    A multidisciplinary approach to creativity,
                    visual storytelling, and technology.
                </p>

            </div>

            {/* SKILL CATEGORY CARDS */}
            <div className="skills-grid">

                {skillCategories.map((category) => (
                    <article
                        className="skill-card"
                        key={category.number}
                    >

                        <div className="skill-card-top">

                            <span className="skill-number">
                                {category.number}
                            </span>

                            <span className="skill-icon" aria-hidden="true">
                                {category.icon}
                            </span>

                        </div>

                        <div className="skill-card-content">

                            <h3>{category.title}</h3>

                            <h4>{category.subtitle}</h4>

                            <p>{category.description}</p>

                        </div>

                        <div className="skill-tags">

                            {category.skills.map((skill) => (
                                <span key={skill}>
                                    {skill}
                                </span>
                            ))}

                        </div>

                        <div className="skill-card-footer">
                            <span>AREA OF EXPERTISE</span>
                            <span aria-hidden="true">↗</span>
                        </div>

                    </article>
                ))}

            </div>

            {/* TECHNOLOGY STACK */}
            <div className="tech-stack-section">

                <div className="tech-stack-header">

                    <div>
                        <p className="skills-label">
                            THE TOOLS I WORK WITH
                        </p>

                        <h3>
                            MY TECHNOLOGY
                            <span> STACK.</span>
                        </h3>
                    </div>

                    <p>
                        Technologies and languages I use
                        to develop digital experiences.
                    </p>

                </div>

                <div className="tech-stack-grid">

                    {technologies.map((tech, index) => (
                        <div
                            className="tech-item"
                            key={tech}
                        >

                            <span className="tech-index">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="tech-name">
                                {tech}
                            </span>

                            <span className="tech-arrow" aria-hidden="true">
                                ↗
                            </span>

                        </div>
                    ))}

                </div>

            </div>

            {/* CLOSING STATEMENT */}
            <div className="skills-closing">

                <p>
                    DIFFERENT DISCIPLINES.
                    <span> ONE CREATIVE MIND.</span>
                </p>

            </div>

        </section>
    );
}

export default Skills;
