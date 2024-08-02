// src/screens/InitialScreen.js

import React from 'react';
import './InitialScreen.css'; // Assuming you use CSS for styling

const InitialScreen = () => {
  return (
    <div className="container">
      {/* Logo Image */}
      <img src="/assets/logo.png" alt="Meeting NOW Logo" className="logo" />

      {/* App Name */}
      <h1 className="app-name">Meeting NOW</h1>

      {/* Sign In Button */}
      <button className="sign-in-button">
        <span className="sign-in-button-text">Sign In</span></button>

      {/* Registration Button */}
      <p className="registration-message">Register</p>

      {/* Company Name and Copyright */}
      <p className="company-info">Sunshine Hughes © 2024</p>
    </div>
  );
};

export default InitialScreen;
