import React from 'react';

const AttendanceTable = ({ attendanceRecords }) => {
  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Time In</th>
          <th>Meeting Name</th>
          <th>Location</th>
          <th>Time Out</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {attendanceRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.timeIn}</td>
            <td>{record.meetingName}</td>
            <td>{record.location}</td>
            <td>{record.timeOut}</td>
            <td>{record.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
