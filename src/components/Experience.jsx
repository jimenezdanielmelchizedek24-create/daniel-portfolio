
import React from "react";
import "../styles/Experience.css";

const experiences = [
    {
        number: "01",
        role: "Creative Director",
        company: "Creative Studio / Organization",
        period: "2024 — Present",
        description:
            "Leading creative concepts, managing production workflows, and developing visual directions for creative projects.",
        type: "Creative"
    },
    {
        number: "02",
        role: "Photographer & Videographer",
        company: "Freelance / Independent",
        period: "2021 — Present",
        description:
            "Creating visual content through photography, cinematography, video production, and post-production.",
        type: "Production"
    },
    {
        number: "03",
        role: "Multimedia Designer",
        company: "Personal & Academic Projects",
        period: "2022 — Present",
        description:
            "Developing digital experiences, graphic materials, motion graphics, and multimedia concepts.",
        type: "Design"
    }
];

const achievements = [
    {
        title: "PhotoContest Champion",
        event: "LSPU Inter-Campus Championship",
        year: "Latest Recognition",
        description:
            "Named PhotoContest Champion among competing campuses of Laguna State Polytechnic University.",
        featured: true
    },
    {
        title: "STRASUC PhotoContest",
        event: "Regional Qualification",
        year: "Qualified",
        description:
            "Qualified to represent LSPU in the Southern Tagalog Regional Association of State Universities and Colleges PhotoContest.",
        featured: true
    },
    {
        title: "Champion",
        event: "Bandana Festival Photocontest",
        year: "2023",
        description:
            "Recognized for photographic creativity and visual storytelling."
    },
    {
        title: "Champion",
        event: "ICAC–CAF Photo Contest",
        year: "—",
        description:
            "Awarded Champion in the photography competition."
    },
    {
        title: "Winner",
        event: "Anilag Festival Photocontest",
        year: "2019",
        description:
            "Recognized for photographic work during the Anilag Festival."
    },
    {
        title: "Campus Champion",
        event: "TV and Radio Advertisement Competition",
        year: "—",
        description:
            "Recognized in a campus-level television and radio advertisement competition."
    },
    {
        title: "4th Placer",
        event: "Fleco Photocontest",
        year: "—",
        description:
            "Recognized for photographic creativity and composition."
    }
];

function Experience() {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">

                <div className="experience-heading">
                    <span className="section-label">04 / THE JOURNEY</span>
                    <h2>
                        Experience & <span>Recognition.</span>
                    </h2>
                    <p>
                        A collection of experiences, creative work, and milestones
                        that continue to shape my journey.
                    </p>
                </div>

                <div className="experience-content">

                    <div className="experience-column">
                        <div className="experience-column-heading">
                            <span>01</span>
                            <h3>Experience</h3>
                        </div>

                        <div className="experience-list">
                            {experiences.map((item) => (
                                <article className="experience-card" key={item.number}>
                                    <div className="experience-card-top">
                                        <span className="experience-number">
                                            {item.number}
                                        </span>
                                        <span className="experience-type">
                                            {item.type}
                                        </span>
                                    </div>

                                    <h4>{item.role}</h4>
                                    <div className="experience-company">
                                        {item.company}
                                    </div>
                                    <span className="experience-period">
                                        {item.period}
                                    </span>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="experience-column achievements-column">
                        <div className="experience-column-heading">
                            <span>02</span>
                            <h3>Achievements</h3>
                        </div>

                        <div className="achievement-list">
                            {achievements.map((item, index) => (
                                <article
                                    className={`achievement-card ${
                                        item.featured ? "featured-achievement" : ""
                                    }`}
                                    key={index}
                                >
                                    <div className="achievement-icon">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="achievement-details">
                                        <span className="achievement-year">
                                            {item.year}
                                        </span>
                                        <h4>{item.title}</h4>
                                        <span className="achievement-event">
                                            {item.event}
                                        </span>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="experience-footer">
                    <span>MORE TO CREATE. MORE TO DISCOVER.</span>
                    <span>THE JOURNEY CONTINUES <b>↗</b></span>
                </div>

            </div>
        </section>
    );
}

export default Experience;
