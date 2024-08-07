import React, { useState } from 'react';
import './ClientRegistrationScreen.css'; // Import CSS file for styling

const ClientRegistrationScreen = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [facilityCode, setFacilityCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [homeCity, setHomeCity] = useState('');
  const [homeState, setHomeState] = useState('');
  const [cleanDate, setCleanDate] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captcha, setCaptcha] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="registration-container">
      <h1 className="heading">Client Registration</h1>

      {/* Username and Password Section */}
      <input
        type="text"
        className="input-field"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {/* Facility Code Section */}
      <input
        type="text"
        className="input-field"
        value={facilityCode}
        onChange={(e) => setFacilityCode(e.target.value)}
        placeholder="Facility Code"
      />

      {/* Personal Information Section */}
      <h2 className="section-heading">Personal Information</h2>
      <input
        type="text"
        className="input-field"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
      />
      <input
        type="text"
        className="input-field"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <input
        type="text"
        className="input-field"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <input
        type="text"
        className="input-field"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="State"
      />
      <input
        type="text"
        className="input-field"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Zip Code"
      />
      <input
        type="text"
        className="input-field"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        type="text"
        className="input-field"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        placeholder="Birth Date"
      />
      <input
        type="email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        className="input-field"
        value={homeCity}
        onChange={(e) => setHomeCity(e.target.value)}
        placeholder="Home City"
      />
      <input
        type="text"
        className="input-field"
        value={homeState}
        onChange={(e) => setHomeState(e.target.value)}
        placeholder="Home State"
      />
      <input
        type="text"
        className="input-field"
        value={cleanDate}
        onChange={(e) => setCleanDate(e.target.value)}
        placeholder="Clean Date"
      />
      <input
        type="text"
        className="input-field"
        value={emergencyContactName}
        onChange={(e) => setEmergencyContactName(e.target.value)}
        placeholder="Emergency Contact Name"
      />
      <input
        type="text"
        className="input-field"
        value={emergencyContactNumber}
        onChange={(e) => setEmergencyContactNumber(e.target.value)}
        placeholder="Emergency Contact Number"
      />

      {/* Terms and Conditions Section */}
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
      <input
        type="text"
        className="input-field"
        value={captcha}
        onChange={(e) => setCaptcha(e.target.value)}
        placeholder="Enter Captcha"
      />

      {/* Submit Button Section */}
      <button
        className={`submit-button ${termsAccepted ? 'enabled' : 'disabled'}`}
        onClick={handleSubmit}
        disabled={!termsAccepted}
      >
        Register Now
      </button>

      {/* Footer */}
      <footer className="footer">
        <p>Your Company Name © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default ClientRegistrationScreen;
