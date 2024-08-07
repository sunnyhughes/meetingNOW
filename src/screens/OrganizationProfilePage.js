import React from 'react';
import OrganizationLogo from './OrganizationLogo';
import OrganizationProfileInformation from './OrganizationProfileInformation';
import './OrganizationProfilePage.css';

const OrganizationProfilePage = () => {
  // Example organization data
  const organization = {
    logoUrl: '/path/to/logo.png',
    name: 'Example Organization',
    address: '123 Business St',
    city: 'Business City',
    state: 'Business State',
    zipCode: '12345',
    phoneNumber: '123-456-7890',
    email: 'info@example.org',
    repName: 'John Doe',
    repPhoneNumber: '098-765-4321'
  };

  return (
    <div className="organization-profile-page">
      <h2>Organization Profile</h2>
      <OrganizationLogo logoUrl={organization.logoUrl} />
      <OrganizationProfileInformation organization={organization} />
    </div>
  );
};

export default OrganizationProfilePage;
