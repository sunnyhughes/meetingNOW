import React, { useState } from 'react';
import OrganizationBasicInformation from './OrganizationBasicInformation';
import OrganizationAddressInformation from './OrganizationAddressInformation';
import OrganizationContactInformation from './OrganizationContactInformation';
import TermsAndConditions from './TermsAndConditions';
import './OrganizationRegistrationForm.css';

const OrganizationRegistrationForm = () => {
  const [organization, setOrganization] = useState({
    name: '',
    businessAddress: '',
    businessCity: '',
    businessState: '',
    businessZip: '',
    businessPhone: '',
    email: '',
    representativeName: '',
    representativePhone: '',
    logo: '',
    termsAccepted: false,
  });

  const handleChange = (field, value) => {
    setOrganization({
      ...organization,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <form onSubmit={handleSubmit} className="organization-registration-form">
      <h2>Organization Registration</h2>
      <OrganizationBasicInformation organization={organization} onChange={handleChange} />
      <OrganizationAddressInformation organization={organization} onChange={handleChange} />
      <OrganizationContactInformation organization={organization} onChange={handleChange} />
      <TermsAndConditions organization={organization} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default OrganizationRegistrationForm;
