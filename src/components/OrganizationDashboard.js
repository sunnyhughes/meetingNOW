import React from 'react';
import OrganizationSummary from './OrganizationSummary';
import OrganizationMeetings from './OrganizationMeetings';
import OrganizationClients from './OrganizationClients';
import OrganizationSettings from './OrganizationSettings';
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
