import React, { useState } from 'react';

const OrganizationProfileInformation = ({ organization }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(organization);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save changes logic here
  };

  return (
    <div className="organization-profile-information">
      {isEditing ? (
        <>
          <label>Organization Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} /></label>
          <label>Business Address: <input type="text" name="address" value={formData.address} onChange={handleInputChange} /></label>
          <label>City: <input type="text" name="city" value={formData.city} onChange={handleInputChange} /></label>
          <label>State: <input type="text" name="state" value={formData.state} onChange={handleInputChange} /></label>
          <label>Zip Code: <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} /></label>
          <label>Business Phone Number: <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} /></label>
          <label>Email: <input type="email" name="email" value={formData.email} onChange={handleInputChange} /></label>
          <label>Representative Name: <input type="text" name="repName" value={formData.repName} onChange={handleInputChange} /></label>
          <label>Representative Phone Number: <input type="text" name="repPhoneNumber" value={formData.repPhoneNumber} onChange={handleInputChange} /></label>
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p>Organization Name: {formData.name}</p>
          <p>Business Address: {formData.address}</p>
          <p>City: {formData.city}</p>
          <p>State: {formData.state}</p>
          <p>Zip Code: {formData.zipCode}</p>
          <p>Business Phone Number: {formData.phoneNumber}</p>
          <p>Email: {formData.email}</p>
          <p>Representative Name: {formData.repName}</p>
          <p>Representative Phone Number: {formData.repPhoneNumber}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default OrganizationProfileInformation;
