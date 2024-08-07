import React from 'react';

const OrganizationBasicInformation = () => {
  return (
    <div className="organization-basic-information">
      <label>
        Organization Name:
        <input type="text" name="organizationName" />
      </label>
      <label>
        Logo Upload:
        <input type="file" name="logo" />
      </label>
    </div>
  );
};

export default OrganizationBasicInformation;
