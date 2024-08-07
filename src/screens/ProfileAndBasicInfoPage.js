import React, { useState } from 'react';
import './styles/profile.css';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    password: '',
    facilityCode: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    cleanDate: '',
    emergencyContactName: '',
    emergencyContactPhoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Update Profile</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="text" name="facilityCode" placeholder="Facility Code" value={formData.facilityCode} onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="date" name="cleanDate" placeholder="Clean Date" value={formData.cleanDate} onChange={handleChange} />
          <input type="text" name="emergencyContactName" placeholder="Emergency Contact Name" value={formData.emergencyContactName} onChange={handleChange} />
          <input type="text" name="emergencyContactPhoneNumber" placeholder="Emergency Contact Phone Number" value={formData.emergencyContactPhoneNumber} onChange={handleChange} />
          <button type="submit">Save Changes</button>
        </form>
      </main>
      <footer>
        <p>Meeting Now © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default ProfilePage;
