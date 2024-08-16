import React, { useState } from 'react';
import RegistrationBasicInformation from '../components/RegistrationBasicInformation';
import ContactInformation from '../components/ContactInformation';
import EmergencyContactInformation from '../components/EmergencyContactInformation';
import HomeInformation from '../components/HomeInformation';
import CleanDate from '../components/CleanDate';
import OtherDetails from '../components/OtherDetails';
import TermsAndConditions from '../components/TermsAndConditions';
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
      <RegistrationBasicInformation user={user} onChange={handleChange} />
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
