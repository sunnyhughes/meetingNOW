import React from 'react';
import ProfilePicture from '../components/ProfilePicture';
import BasicInformation from '../components/BasicInformation';
import ContactInformation from '../components/ContactInformation';
import EmergencyContactInformation from '../components/EmergencyContactInformation';
import OtherDetails from '../components/OtherDetails';
import HomeInformation from '../components/HomeInformation';
import CleanDate from '../components/CleanDate';
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
