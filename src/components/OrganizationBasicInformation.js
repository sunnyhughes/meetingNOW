import React from 'react';

const OrganizationBasicInformation = () => {
  return (
    <div className="organization-basic-information">
      <label>Organization Name: <input type="text" required /></label>
      <label>Business Address: <input type="text" required /></label>
      <label>City: <input type="text" required /></label>
      <label>State: <input type="text" required /></label>
      <label>Zip Code: <input type="text" required /></label>
      <label>Business Phone Number: <input type="text" required /></label>
      <label>Email: <input type="email" required /></label>
      <label>Representative Name: <input type="text" required /></label>
      <label>Representative Phone Number: <input type="text" required /></label>
    </div>
  );
};

export default OrganizationBasicInformation;
