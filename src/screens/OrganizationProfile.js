import React from 'react';
import OrganizationBasicInformation from '../components/OrganizationBasicInformation';
import OrganizationAddressInformation from '../components/OrganizationAddressInformation';
import OrganizationContactInformation from '../components/OrganizationContactInformation';
import 'src/styles/OrganizationProfile.css';

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
