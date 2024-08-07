import React from 'react';

const ContactInformation = () => {
  return (
    <div className="contact-information">
      <label>Phone Number: <input type="text" /></label>
      <label>Address: <input type="text" /></label>
      <label>City: <input type="text" /></label>
      <label>State: <input type="text" /></label>
      <label>Zip Code: <input type="text" /></label>
    </div>
  );
};

export default ContactInformation;
