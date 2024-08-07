import React from 'react';

const OrganizationProfileSummary = ({ organization }) => {
  return (
    <div className="organization-profile-summary">
      <img src={organization.logoUrl} alt="Organization Logo" />
      <h3>{organization.name}</h3>
      <p>Email: {organization.email}</p>
      <p>Phone: {organization.phoneNumber}</p>
    </div>
  );
};

export default OrganizationProfileSummary;
