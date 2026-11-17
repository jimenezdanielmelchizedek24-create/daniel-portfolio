
import React from "react";
import "../styles/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-main">
                    <a href="#home" className="footer-brand">
                        DANIEL<span>.</span>
                    </a>

                    <p>
                        Multimedia Creative
                        <br />
                        Photographer · Videographer · Cinematographer
                    </p>

                    <a href="#home" className="back-to-top">
                        BACK TO TOP <span>↑</span>
                    </a>
                </div>

                <div className="footer-bottom">
                    <span>
                        © {currentYear} Daniel Jimenez. All rights reserved.
                    </span>

                    <span>
                        DESIGNED & DEVELOPED WITH INTENTION.
                    </span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
