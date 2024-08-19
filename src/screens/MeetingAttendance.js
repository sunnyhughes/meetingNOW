import React, { useState } from 'react';
import AttendanceTable from '../components/AttendanceTable';
import AttendanceFilters from '../components/AttendanceFilters';
import './MeetingAttendancePage.css';

const MeetingAttendancePage = () => {
  const [filters, setFilters] = useState({});
  const [attendanceRecords, setAttendanceRecords] = useState([
    // Example data
    { timeIn: '08:00', meetingName: 'AA Meeting', location: 'Community Center', timeOut: '09:00', type: 'AA' },
    { timeIn: '10:00', meetingName: 'NA Meeting', location: 'Church Hall', timeOut: '11:00', type: 'NA' },
  ]);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters({
      ...filters,
      [filterName]: filterValue,
    });
    // Update attendanceRecords based on filters
  };

  return (
    <div className="meeting-attendance-page">
      <h2>Meeting Attendance</h2>
      <AttendanceFilters onFilterChange={handleFilterChange} />
      <AttendanceTable attendanceRecords={attendanceRecords} />
    </div>
  );
};

export default MeetingAttendancePage;
