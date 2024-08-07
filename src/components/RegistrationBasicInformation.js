import React from 'react';

const RegistrationBasicInformation = () => {
  return (
    <div className="basic-information">
      <label>Full Name: <input type="text" required /></label>
      <label>Email: <input type="email" required /></label>
      <label>Password: <input type="password" required /></label>
      <label>Confirm Password: <input type="password" required /></label>
      <label>Birth Date: <input type="date" required /></label>
    </div>
  );
};

export default RegistrationBasicInformation;
