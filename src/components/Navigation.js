import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Meeting Now</Link> {/* Link to the home page */}
      </div>
      <ul className="nav-links">
        <li><Link to="/profile-and-basic-info">Profile & Basic Info</Link></li>
        <li><Link to="/client-dashboard">Client Dashboard</Link></li> {/* Link to client dashboard */}
        <li><Link to="/client-attendance">Client Attendance</Link></li> {/* Link to client attendance */}
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
