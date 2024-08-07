import React from 'react';
import OrganizationBasicInformation from './OrganizationBasicInformation';
import OrganizationAddressInformation from './OrganizationAddressInformation';
import OrganizationContactInformation from './OrganizationContactInformation';
import './OrganizationProfile.css';

const OrganizationProfile = () => {
  return (
    <div className="organization-profile">
      <h2>Organization Profile</h2>
      <OrganizationBasicInformation />
      <OrganizationAddressInformation />
      <OrganizationContactInformation />
    </div>
  );
};

export default OrganizationProfile;
