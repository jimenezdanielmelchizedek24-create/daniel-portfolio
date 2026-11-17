
import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

// PHOTOGRAPHY — AMBER HOURS
import amber1 from "../assets/projects/amber-hours/MProduction-2.webp";
import amber2 from "../assets/projects/amber-hours/MProduction-12.webp";
import amber3 from "../assets/projects/amber-hours/MProduction-5.webp";

// PHOTOGRAPHY — ETHEREAL
import ethereal1 from "../assets/projects/ethereal/MVisionary-6.webp";
import ethereal2 from "../assets/projects/ethereal/MVisionary-14.webp";
import ethereal3 from "../assets/projects/ethereal/MVisionary-9.webp";

// PHOTOGRAPHY — RAW FRAMES
import raw1 from "../assets/projects/raw-frames/M Visionary-4.webp";
import raw2 from "../assets/projects/raw-frames/M Visionary-3.webp";
import raw3 from "../assets/projects/raw-frames/M Visionary-17.webp";

// PHOTOGRAPHY — THROUGH THE GREEN
import green1 from "../assets/projects/through-the-green/MVisionary-7.webp";
import green2 from "../assets/projects/through-the-green/MVisionary-11.webp";
import green3 from "../assets/projects/through-the-green/MVisionary-13.webp";

const projects = [
    {
        title: "Amber Portraits",
        category: "Photography",
        type: "Editorial Portraits",
        image: amber1
    },
    {
        title: "Golden Hour Studies",
        category: "Photography",
        type: "Portrait Photography",
        image: amber2
    },
    {
        title: "The Warmth of Light",
        category: "Photography",
        type: "Editorial Photography",
        image: amber3
    },
    {
        title: "Ethereal",
        category: "Photography",
        type: "Outdoor Portraits",
        image: ethereal1
    },
    {
        title: "A Quiet Moment",
        category: "Photography",
        type: "Portrait Photography",
        image: ethereal2
    },
    {
        title: "Into the Light",
        category: "Photography",
        type: "Outdoor Portraits",
        image: ethereal3
    },
    {
        title: "Raw Frames",
        category: "Photography",
        type: "Fashion Editorial",
        image: raw1
    },
    {
        title: "Unfiltered",
        category: "Photography",
        type: "Conceptual Portraits",
        image: raw2
    },
    {
        title: "The Human Frame",
        category: "Photography",
        type: "Editorial Portraits",
        image: raw3
    },
    {
        title: "Through the Green",
        category: "Photography",
        type: "Lifestyle Photography",
        image: green1
    },
    {
        title: "Color in Motion",
        category: "Photography",
        type: "Lifestyle Portraits",
        image: green2
    },
    {
        title: "A Different Perspective",
        category: "Photography",
        type: "Lifestyle Portraits",
        image: green3
    },
    {
        title: "Film Production",
        category: "Film & Videography",
        type: "Short Film / Cinematography",
        placeholder: true
    },
    {
        title: "Wedding Stories",
        category: "Film & Videography",
        type: "Wedding Film",
        placeholder: true
    },
    {
        title: "Visual Identity",
        category: "Design & Creative",
        type: "Brand Identity / Graphic Design",
        placeholder: true
    },
    {
        title: "Digital Experience",
        category: "Development",
        type: "Web & System Development",
        placeholder: true
    }
];

const filters = [
    "All",
    "Photography",
    "Film & Videography",
    "Design & Creative",
    "Development"
];

function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(
                project => project.category === activeFilter
            );

    // Close lightbox with Escape key
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = event => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <section className="projects-section" id="projects">

            <div className="projects-container">

                {/* SECTION HEADING */}
                <div className="projects-heading">

                    <div>
                        <p className="projects-label">
                            04 — SELECTED WORKS
                        </p>

                        <h2>
                            MY CREATIVE <span>PORTFOLIO.</span>
                        </h2>
                    </div>

                    <p className="projects-intro">
                        A collection of visual stories, creative
                        explorations, and digital experiences shaped
                        by imagination and purpose.
                    </p>

                </div>

                {/* CATEGORY FILTERS */}
                <div className="projects-filters">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            type="button"
                            className={
                                activeFilter === filter ? "active" : ""
                            }
                            aria-pressed={activeFilter === filter}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* PROJECT COUNT */}
                <div className="projects-count">
                    <span>
                        SHOWING {String(filteredProjects.length).padStart(2, "0")} PROJECTS
                    </span>
                    <span>{activeFilter.toUpperCase()}</span>
                </div>

                {/* PROJECT GALLERY */}
                <div className="projects-grid">

                    {filteredProjects.map((project, index) => (
                        <article
                            className={`project-card ${
                                project.placeholder ? "placeholder-card" : ""
                            }`}
                            key={project.title}
                        >

                            <button
                                type="button"
                                className="project-card-button"
                                disabled={project.placeholder}
                                onClick={() => setSelectedProject(project)}
                                aria-label={`View ${project.title}`}
                            >

                                <div className="project-image">

                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <div className="project-placeholder">
                                            <span>PROJECT PREVIEW</span>
                                            <strong>{project.category}</strong>
                                        </div>
                                    )}

                                    <div className="project-overlay">
                                        <span>
                                            {project.placeholder
                                                ? "COMING SOON"
                                                : "VIEW PROJECT ↗"}
                                        </span>
                                    </div>

                                </div>

                                <div className="project-info">

                                    <div className="project-info-main">
                                        <h3>{project.title}</h3>
                                        <p>{project.type}</p>
                                    </div>

                                    <span className="project-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                            </button>

                        </article>
                    ))}

                </div>

                {/* SECTION FOOTER */}
                <div className="projects-footer">

                    <span>
                        MORE STORIES. MORE IDEAS. MORE TO CREATE.
                    </span>

                    <span>© DANIEL JIMENEZ</span>

                </div>

            </div>

            {/* IMAGE LIGHTBOX */}
            {selectedProject && (
                <div
                    className="project-lightbox"
                    onClick={() => setSelectedProject(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedProject.title} image preview`}
                >

                    <button
                        type="button"
                        className="lightbox-close"
                        onClick={() => setSelectedProject(null)}
                        aria-label="Close image preview"
                    >
                        ×
                    </button>

                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        onClick={event => event.stopPropagation()}
                    />

                    <div className="lightbox-caption">
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.type}</p>
                    </div>

                </div>
            )}

        </section>
    );
}

export default Projects;
