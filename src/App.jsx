
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";

function App() {
    const isAdminPage = window.location.pathname.startsWith("/admin");

    const [token, setToken] = useState(
        () => sessionStorage.getItem("adminToken")
    );

    const handleLogin = (newToken) => {
        sessionStorage.setItem("adminToken", newToken);
        setToken(newToken);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("adminToken");
        setToken(null);
    };

    if (isAdminPage) {
        return token ? (
            <AdminDashboard
                token={token}
                onLogout={handleLogout}
            />
        ) : (
            <AdminLogin onLogin={handleLogin} />
        );
    }

    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;
