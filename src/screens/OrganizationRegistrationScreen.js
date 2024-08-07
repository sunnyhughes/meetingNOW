import React from 'react';
import OrganizationLogoUpload from './OrganizationLogoUpload';
import OrganizationBasicInformation from './OrganizationBasicInformation';
import TermsAndConditions from './TermsAndConditions';
import './OrganizationRegistrationScreen.css';

const OrganizationRegistrationScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="organization-registration-screen">
      <h2>Register Your Organization</h2>
      <form onSubmit={handleSubmit}>
        <OrganizationLogoUpload />
        <OrganizationBasicInformation />
        <TermsAndConditions />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default OrganizationRegistrationScreen;
