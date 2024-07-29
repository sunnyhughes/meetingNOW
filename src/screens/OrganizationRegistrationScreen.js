import React, { useState } from 'react';
import './OrganizationRegistrationScreen.css'; // Import styles

const OrganizationRegistrationScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [representativeName, setRepresentativeName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [logo, setLogo] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <h1 className="heading">Organization Registration</h1>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {/* Username and Password Section */}
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        {/* Organization Information Section */}
        <h2 className="section-heading">Organization Information</h2>
        <input
          className="input"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
        />
        <input
          className="input"
          type="text"
          value={businessAddress}
          onChange={(e) => setBusinessAddress(e.target.value)}
          placeholder="Business Address"
        />
        <input
          className="input"
          type="text"
          value={representativeName}
          onChange={(e) => setRepresentativeName(e.target.value)}
          placeholder="Representative Name"
        />
        <input
          className="input"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />

        {/* Logo Upload Section */}
        <h2 className="section-heading">Logo Upload</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
        />

        {/* Terms and Conditions Section */}
        <h2 className="section-heading">Terms and Conditions</h2>
        <div className="terms-container">
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            I agree to the terms and conditions
          </label>
        </div>

        {/* Captcha Section */}
        <h2 className="section-heading">Captcha</h2>
        <input
          className="input"
          type="text"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          placeholder="Enter Captcha"
        />

        {/* Submit Button Section */}
        <button
          className="submit-button"
          type="submit"
          style={{ backgroundColor: termsAccepted ? 'blue' : 'gray' }}
          disabled={!termsAccepted}
        >
          Submit
        </button>
      </form>

      {/* Footer */}
      <footer className="footer-text">Your Company Name © {new Date().getFullYear()}</footer>
    </div>
  );
};

export default OrganizationRegistrationScreen;
