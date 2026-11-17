
import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState({
        loading: false,
        message: "",
        success: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({
            loading: true,
            message: "",
            success: false
        });

        try {
            const response = await fetch(
                "http://localhost:5000/api/messages",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Submission failed.");
            }

            setStatus({
                loading: false,
                message: result.message,
                success: true
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {
            setStatus({
                loading: false,
                message: error.message || "Something went wrong. Please try again.",
                success: false
            });
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <div className="contact-top">
                    <span className="section-label">05 / GET IN TOUCH</span>

                    <span className="contact-availability">
                        <span className="availability-dot"></span>
                        OPEN TO CREATIVE OPPORTUNITIES
                    </span>
                </div>

                <div className="contact-main">

                    <div className="contact-heading">
                        <h2>
                            Have a project
                            <br />
                            in <span>mind?</span>
                        </h2>

                        <p>
                            Whether it's a creative collaboration, a production,
                            a digital project, or simply an idea worth exploring,
                            let's make something meaningful together.
                        </p>

                        <div className="contact-details">

                            <div className="contact-detail-group">
                                <span className="contact-detail-label">EMAIL</span>

                                <a href="mailto:jimenezdanielmelchizedek24@gmail.com">
                                    jimenezdanielmelchizedek24@gmail.com
                                </a>
                            </div>

                            <div className="contact-detail-group">
                                <span className="contact-detail-label">LOCATION</span>
                                <p>Pangil, Laguna, Philippines</p>
                            </div>

                            <div className="contact-detail-group">
                                <span className="contact-detail-label">SOCIALS</span>

                                <div className="contact-socials">
                                    <a
                                        href="https://www.instagram.com/magnus_snaps/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram ↗
                                    </a>

                                    <a
                                        href="https://www.facebook.com/profile.php?id=61564513921698"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook ↗
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/your-name/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn ↗
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="name">FULL NAME</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    maxLength={100}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    maxLength={255}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">SUBJECT</label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="What would you like to discuss?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    maxLength={150}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">YOUR MESSAGE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project or inquiry..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    maxLength={5000}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={status.loading}
                            >
                                {status.loading ? "SENDING..." : "SEND INQUIRY"}
                                <span>↗</span>
                            </button>

                            {status.message && (
                                <p
                                    className={`form-feedback ${
                                        status.success ? "success" : "error"
                                    }`}
                                    role="status"
                                >
                                    {status.message}
                                </p>
                            )}

                        </form>
                    </div>

                </div>

                <div className="contact-bottom">
                    <span>CREATIVE IDEAS START WITH A CONVERSATION.</span>
                    <span>AVAILABLE FOR SELECT PROJECTS</span>
                </div>

            </div>
        </section>
    );
}

export default Contact;
