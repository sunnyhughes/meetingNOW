import React from 'react';
import OrganizationSummary from '../components/OrganizationSummary';
import OrganizationMeetings from '../components/OrganizationMeetings';
import OrganizationClients from '../components/OrganizationClients';
import OrganizationSettings from '../components/OrganizationSettings';
import './OrganizationDashboard.css';

const OrganizationDashboard = () => {
  return (
    <div className="organization-dashboard">
      <h2>Organization Dashboard</h2>
      <OrganizationSummary />
      <OrganizationMeetings />
      <OrganizationClients />
      <OrganizationSettings />
    </div>
  );
};

export default OrganizationDashboard;
