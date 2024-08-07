import React from 'react';
import ProfilePicture from './ProfilePicture';
import BasicInformation from './BasicInformation';
import ContactInformation from './ContactInformation';
import EmergencyContactInformation from './EmergencyContactInformation';
import OtherDetails from './OtherDetails';
import HomeInformation from './HomeInformation';
import CleanDate from './CleanDate';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <ProfilePicture />
      <BasicInformation />
      <ContactInformation />
      <EmergencyContactInformation />
      <HomeInformation />
      <CleanDate />
      <OtherDetails />
    </div>
  );
};

export default ProfilePage;
