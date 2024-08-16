import React from 'react';
import UserProfileSummary from '../components/UserProfileSummary';
import UpcomingMeetings from '../components/UpcomingMeetings';
import './UserDashboardPage.css';

const UserDashboardPage = () => {
  const user = {
    profilePicture: '/path/to/profile.jpg',
    fullName: 'John Doe', // Changed to fullName instead of username
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  const meetings = [
    { name: 'AA Meeting', date: '2024-08-10', time: '08:00' },
    { name: 'NA Meeting', date: '2024-08-11', time: '10:00' },
  ];

  return (
    <div className="user-dashboard-page">
      <h2>User Dashboard</h2>
      <UserProfileSummary user={user} />
      <UpcomingMeetings meetings={meetings} />
    </div>
  );
};

export default UserDashboardPage;
