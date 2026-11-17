
import React, { useState } from "react";
import "../styles/AdminLogin.css";

function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Login failed."
                );
            }

            sessionStorage.setItem("adminToken", result.token);

            onLogin(result.token);

        } catch (error) {
            setError(
                error.message || "Unable to connect to the server."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="admin-login">
            <div className="admin-login-container">

                <div className="admin-login-brand">
                    DANIEL<span>.</span>
                </div>

                <div className="admin-login-content">

                    <span className="admin-login-label">
                        PRIVATE ACCESS / 01
                    </span>

                    <h1>
                        Welcome<br />
                        <span>back.</span>
                    </h1>

                    <p>
                        Sign in to manage your portfolio inquiries
                        and creative opportunities.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <div className="admin-input-group">
                            <label htmlFor="admin-username">
                                USERNAME
                            </label>

                            <input
                                id="admin-username"
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                autoComplete="username"
                                required
                            />
                        </div>

                        <div className="admin-input-group">
                            <label htmlFor="admin-password">
                                PASSWORD
                            </label>

                            <input
                                id="admin-password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        {error && (
                            <p className="admin-login-error" role="alert">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "AUTHENTICATING..." : "SIGN IN"}
                            <span>↗</span>
                        </button>

                    </form>

                </div>

                <div className="admin-login-footer">
                    <span>© 2026 DANIEL JIMENEZ</span>
                    <span>AUTHORIZED ACCESS ONLY</span>
                </div>

            </div>
        </section>
    );
}

export default AdminLogin;
