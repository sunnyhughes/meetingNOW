import React from 'react';
import '../styles/ClientAttendanceScreen.css';

const ClientAttendanceScreen = () => {

  // Placeholder data - replace with actual data fetching
  const attendanceData = [
      { date: "07/21/2024", timeIn: "10:00 AM", meetingName: "Meeting 1", meetingType: "NA", timeOut: "11:00 AM" },
      { date: "07/21/2024", timeIn: "02:00 PM", meetingName: "Meeting 2", meetingType: "AA", timeOut: "03:00 PM" },
      // More data for up to 14 slots
  ];

  const organizationName = "Organization Name"; // Replace with actual data
  const clientName = "Client Name"; // Replace with actual data

   return (
    <div className="attendance-container">
      <header className="attendance-header">
        <div className="logo">Meeting Now</div>
        <div className="organization-name">{organizationName}</div>
        <div className="client-name">{clientName}</div>
      </header>
      <h2>Week of 07/21/2024 to 07/27/2024</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time In</th>
            <th>Meeting Name</th>
            <th>Meeting Type</th>
            <th>Time Out</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.timeIn}</td>
              <td>{record.meetingName}</td>
              <td>{record.meetingType}</td>
              <td>{record.timeOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="attendance-footer">
        Your Company Name © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default ClientAttendanceScreen;