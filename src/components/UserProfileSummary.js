import React from 'react';

const UserProfileSummary = ({ user }) => {
  return (
    <div className="user-profile-summary">
      <img src={user.profilePicture} alt="User Profile" />
      <h3>{user.fullName}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserProfileSummary;
