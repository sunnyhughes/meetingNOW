import React from 'react';
import ProfilePictureUpload from './ProfilePictureUpload';
import RegistrationBasicInformation from './RegistrationBasicInformation';
import ContactInformation from './ContactInformation';
import EmergencyContactInformation from './EmergencyContactInformation';
import HomeInformation from './HomeInformation';
import CleanDate from './CleanDate';
import OtherDetails from './OtherDetails';
import TermsAndConditions from './TermsAndConditions';
import './RegistrationScreen.css';

const RegistrationScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="registration-screen">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <ProfilePictureUpload />
        <RegistrationBasicInformation />
        <ContactInformation />
        <EmergencyContactInformation />
        <HomeInformation />
        <CleanDate />
        <OtherDetails />
        <TermsAndConditions />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationScreen;

