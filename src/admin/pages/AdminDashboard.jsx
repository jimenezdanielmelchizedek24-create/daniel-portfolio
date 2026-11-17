
import React, { useEffect, useState } from "react";
import "../styles/AdminDashboard.css";

const API_URL = "http://localhost:5000/api/messages";

function AdminDashboard({ token, onLogout }) {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchMessages = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(API_URL, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const result = await response.json();

            if (response.status === 401 || response.status === 403) {
                onLogout();
                return;
            }

            if (!response.ok) {
                throw new Error(result.message || "Unable to load inquiries.");
            }

            setMessages(result.data);
        } catch (err) {
            setError(err.message || "Unable to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const updateStatus = async (id, status) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Update failed.");
            }

            await fetchMessages();

            if (selectedMessage?.id === id) {
                setSelectedMessage(result.data);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteMessage = async (id) => {
        if (!window.confirm("Are you sure you want to delete this inquiry?")) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Delete failed.");
            }

            setSelectedMessage(null);
            await fetchMessages();
        } catch (err) {
            setError(err.message);
        }
    };

    const newCount = messages.filter(m => m.status === "NEW").length;
    const readCount = messages.filter(m => m.status === "READ").length;
    const archivedCount = messages.filter(m => m.status === "ARCHIVED").length;

    return (
        <div className="admin-dashboard">

            <aside className="dashboard-sidebar">
                <div className="dashboard-logo">
                    DANIEL<span>.</span>
                </div>

                <div className="sidebar-section-label">WORKSPACE</div>

                <div className="sidebar-link active">
                    <span>▤</span> Inquiries
                </div>

                <div className="sidebar-bottom">
                    <div className="admin-profile">
                        <div className="admin-avatar">D</div>
                        <div>
                            <strong>Daniel Jimenez</strong>
                            <small>Administrator</small>
                        </div>
                    </div>

                    <button className="logout-button" onClick={onLogout}>
                        ↗ SIGN OUT
                    </button>
                </div>
            </aside>

            <main className="dashboard-content">

                <header className="dashboard-header">
                    <div>
                        <span className="dashboard-eyebrow">ADMINISTRATION / 01</span>
                        <h1>Inquiries<span>.</span></h1>
                        <p>Manage your creative opportunities and messages.</p>
                    </div>

                    <button className="refresh-button" onClick={fetchMessages}>
                        ↻ REFRESH
                    </button>
                </header>

                <section className="dashboard-stats">

                    <div className="stat-card">
                        <span>TOTAL INQUIRIES</span>
                        <strong>{messages.length}</strong>
                    </div>

                    <div className="stat-card">
                        <span>NEW MESSAGES</span>
                        <strong>{newCount}</strong>
                    </div>

                    <div className="stat-card">
                        <span>READ</span>
                        <strong>{readCount}</strong>
                    </div>

                    <div className="stat-card">
                        <span>ARCHIVED</span>
                        <strong>{archivedCount}</strong>
                    </div>

                </section>

                <section className="messages-section">

                    <div className="messages-heading">
                        <div>
                            <span className="dashboard-eyebrow">COMMUNICATIONS</span>
                            <h2>Recent inquiries</h2>
                        </div>

                        <span className="message-count">
                            {messages.length} RECORDS
                        </span>
                    </div>

                    {error && (
                        <p className="dashboard-error">{error}</p>
                    )}

                    {loading ? (
                        <div className="dashboard-empty">Loading inquiries...</div>
                    ) : messages.length === 0 ? (
                        <div className="dashboard-empty">
                            No inquiries received yet.
                        </div>
                    ) : (
                        <div className="messages-table-wrapper">
                            <table className="messages-table">
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>SUBJECT</th>
                                        <th>DATE</th>
                                        <th>STATUS</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {messages.map(message => (
                                        <tr
                                            key={message.id}
                                            onClick={() => setSelectedMessage(message)}
                                        >
                                            <td>
                                                <strong>{message.name}</strong>
                                                <small>{message.email}</small>
                                            </td>

                                            <td>{message.subject}</td>

                                            <td>
                                                {new Date(message.createdAt).toLocaleDateString()}
                                            </td>

                                            <td>
                                                <span className={`status-badge ${message.status.toLowerCase()}`}>
                                                    {message.status}
                                                </span>
                                            </td>

                                            <td>
                                                <button
                                                    className="view-button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedMessage(message);
                                                    }}
                                                >
                                                    VIEW ↗
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                </section>

                {selectedMessage && (
                    <div className="message-overlay" onClick={() => setSelectedMessage(null)}>
                        <div className="message-panel" onClick={e => e.stopPropagation()}>

                            <div className="message-panel-header">
                                <span className="dashboard-eyebrow">INQUIRY DETAILS</span>
                                <button onClick={() => setSelectedMessage(null)}>✕</button>
                            </div>

                            <h2>{selectedMessage.subject}</h2>

                            <div className="message-information">
                                <span>FROM</span>
                                <strong>{selectedMessage.name}</strong>
                                <a href={`mailto:${selectedMessage.email}`}>
                                    {selectedMessage.email}
                                </a>
                            </div>

                            <div className="message-information">
                                <span>RECEIVED</span>
                                <p>{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                            </div>

                            <div className="message-body">
                                <span>MESSAGE</span>
                                <p>{selectedMessage.message}</p>
                            </div>

                            <div className="message-actions">
                                <label>UPDATE STATUS</label>

                                <select
                                    value={selectedMessage.status}
                                    onChange={e => updateStatus(
                                        selectedMessage.id,
                                        e.target.value
                                    )}
                                >
                                    <option value="NEW">NEW</option>
                                    <option value="READ">READ</option>
                                    <option value="ARCHIVED">ARCHIVED</option>
                                </select>

                                <a href={`mailto:${selectedMessage.email}`}>
                                    REPLY VIA EMAIL ↗
                                </a>

                                <button
                                    className="delete-message-button"
                                    onClick={() => deleteMessage(selectedMessage.id)}
                                >
                                    DELETE INQUIRY
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}

export default AdminDashboard;
