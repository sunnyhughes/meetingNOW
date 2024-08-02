import React, { useState } from 'react';

function ProfileAndBasicInfoPage() {
  // State for user information
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    emergencyContact: '',
    // Add other fields as needed
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user information logic here
  };

  return (
    <div>
      <h1>Profile & Basic Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
        </div>
        <div>
          <label>Emergency Contact:</label>
          <input
            type="text"
            value={user.emergencyContact}
            onChange={(e) => setUser({ ...user, emergencyContact: e.target.value })}
          />
        </div>
        {/* Add other fields as needed */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileAndBasicInfoPage;
