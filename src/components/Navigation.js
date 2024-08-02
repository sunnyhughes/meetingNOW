import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Meeting Now</Link> {/* Link to the home page */}
      </div>
      <ul className="nav-links">
        <li><Link to="/profile">Profile</Link></li> {/* Link to the profile page */}
        <li><Link to="/basic-info">Enter Basic Information</Link></li> {/* Link to basic info page */}
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
