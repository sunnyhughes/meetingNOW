import React from 'react';

const OrganizationContactInformation = () => {
  return (
    <div className="organization-contact-information">
      <label>
        Business Phone:
        <input type="text" name="businessPhone" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Representative Name:
        <input type="text" name="representativeName" />
      </label>
      <label>
        Representative Phone:
        <input type="text" name="representativePhone" />
      </label>
    </div>
  );
};

export default OrganizationContactInformation;
