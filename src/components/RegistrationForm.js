import React, { useState } from 'react';
import BasicInformation from './BasicInformation';
import ContactInformation from './ContactInformation';
import EmergencyContactInformation from './EmergencyContactInformation';
import HomeInformation from './HomeInformation';
import CleanDate from './CleanDate';
import OtherDetails from './OtherDetails';
import TermsAndConditions from './TermsAndConditions';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    organizationCode: '',
    homeCity: '',
    homeState: '',
    cleanDate: '',
    profilePicture: '',
    password: '',
    termsAccepted: false,
  });

  const handleChange = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>User Registration</h2>
      <BasicInformation user={user} onChange={handleChange} />
      <ContactInformation user={user} onChange={handleChange} />
      <EmergencyContactInformation user={user} onChange={handleChange} />
      <HomeInformation user={user} onChange={handleChange} />
      <CleanDate user={user} onChange={handleChange} />
      <OtherDetails user={user} onChange={handleChange} />
      <TermsAndConditions user={user} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
