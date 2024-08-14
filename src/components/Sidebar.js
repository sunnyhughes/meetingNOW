// src/screens/Sidebar.js

import React from "react";

function Sidebar () {
    return (
        <aside className="sidebar">
            <div className="organization-info">
                <h2>Organization</h2>
                <p id="organization-name">Organization Name</p>
                <p id="organization-details">Basic information about the organization</p>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#meetings">Meetings</a></li>
                    <li><a href="#settings"></a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
