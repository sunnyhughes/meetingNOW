// src/screens/SignInScreen.js

import React from 'react';
import './SignInScreen.css'; // Import the CSS file for styles

const SignInScreen = () => {
  return (
    <div className="container">
      {/* Welcome Message */}
      <h1 className="welcome-message">Welcome to Meeting NOW!</h1>

      {/* Logo */}
      <img src="/assets/logo_smaller.png" alt="Logo" className="logo-small" />

      {/* Username Input */}
      <input type="text" className="input" placeholder="Username" />

      {/* Password Input */}
      <input type="password" className="input" placeholder="Password" />

      {/* Submit Button */}
      <button className="button">
        <span className="button-text">Submit</span>
      </button>

      {/* Other Organization Logos */}
      <div className="other-logos-container">
        <img src="/assets/logo1.png" alt="Other Logo 1" className="other-logo" />
        <img src="/assets/logo2.png" alt="Other Logo 2" className="other-logo" />
        <img src="/assets/logo3.png" alt="Other Logo 3" className="other-logo" />
      </div>

      {/* Company Name and Copyright */}
      <p className="company-info">Your Company Name © 2024</p>
    </div>
  );
};

export default SignInScreen;
