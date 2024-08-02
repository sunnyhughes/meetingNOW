document.addEventListener('DOMContentLoaded', () => {
  // Placeholder data - replace with actual data fetching
  const attendanceData = [
      { date: "07/21/2024", timeIn: "10:00 AM", meetingName: "Meeting 1", meetingType: "NA", timeOut: "11:00 AM" },
      { date: "07/21/2024", timeIn: "02:00 PM", meetingName: "Meeting 2", meetingType: "AA", timeOut: "03:00 PM" },
      // More data for up to 14 slots
  ];

  const organizationName = "Organization Name"; // Replace with actual data
  const clientName = "Client Name"; // Replace with actual data

  document.getElementById('organization-name').innerText = organizationName;
  document.getElementById('client-name').innerText = clientName;

  // Generate table rows from the attendance data
  const attendanceList = attendanceData.map(record => `
      <tr>
          <td>${record.date}</td>
          <td>${record.timeIn}</td>
          <td>${record.meetingName}</td>
          <td>${record.meetingType}</td>
          <td>${record.timeOut}</td>
      </tr>
  `).join('');

  document.getElementById('attendance-list').innerHTML = attendanceList;
});
