import React from 'react';

const OrganizationAddressInformation = () => {
  return (
    <div className="organization-address-information">
      <label>
        Address:
        <input type="text" name="address" />
      </label>
      <label>
        City:
        <input type="text" name="city" />
      </label>
      <label>
        State:
        <input type="text" name="state" />
      </label>
      <label>
        Zip Code:
        <input type="text" name="zip" />
      </label>
    </div>
  );
};

export default OrganizationAddressInformation;
