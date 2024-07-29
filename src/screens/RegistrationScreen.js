import React, { useState } from 'react';
import './RegistrationScreen.css';

const RegistrationScreen = () => {
  const [registrationType, setRegistrationType] = useState(null);

  const handleClientRegistration = () => {
    setRegistrationType('client');
  };

  const handleOrganizationRegistration = () => {
    setRegistrationType('organization');
  };

  return (
    <div className="background-image">
      <div className="overlay">
        <p className="logo-text">Meeting NOW. The one-stop meeting attendance app.</p>
        <h1 className="welcome-text">Welcome!</h1>
      </div>
      <div className="button-container">
        <button className="button" onClick={handleClientRegistration}>
          Client Registration
        </button>
        <button className="button" onClick={handleOrganizationRegistration}>
          Organization Registration
        </button>
      </div>
      <div className="footer">
        <p className="company-info">Your Company Name © 2024</p>
      </div>
      {registrationType && (
        <div className="selected-type">
          <p className="selected-type-text">
            You selected: {registrationType === 'client' ? 'Client' : 'Organization'}
          </p>
        </div>
      )}
    </div>
  );
};

export default RegistrationScreen;
