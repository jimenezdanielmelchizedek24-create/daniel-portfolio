
import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            <a href="#home" className="navbar-logo" onClick={closeMenu}>
                DANIEL<span>.</span>
            </a>

            <button
                className={`navbar-toggle ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="navbar-menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div
                id="navbar-menu"
                className={`navbar-menu ${menuOpen ? "open" : ""}`}
            >
                <div className="navbar-links">
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                </div>

                <a
                    href="#contact"
                    className="navbar-contact"
                    onClick={closeMenu}
                >
                    LET'S TALK <span>↗</span>
                </a>
            </div>

        </nav>
    );
}

export default Navbar;
