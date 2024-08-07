import React from 'react';

const BasicInformation = () => {
  return (
    <div className="basic-information">
      <label>Full Name: <input type="text" /></label>
      <label>Email: <input type="email" /></label>
      <label>Birth Date: <input type="date" /></label>
    </div>
  );
};

export default BasicInformation;
