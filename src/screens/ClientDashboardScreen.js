document.addEventListener('DOMContentLoaded', () => {
  // Placeholder data - replace with actual data fetching
  const clientData = {
      name: "John Doe",
      organization: {
          name: "Organization Name",
          details: "Basic info about the organization",
      },
      profile: {
          address: "123 Main St",
          city: "Louisville",
          state: "KY",
          zip: "40202",
          phone: "123-456-7890",
          email: "john.doe@example.com",
      },
      attendanceHistory: [
          "Meeting 1 - July 1, 2024",
          "Meeting 2 - July 10, 2024"
      ],
      upcomingMeetings: [
          "Meeting 3 - July 15, 2024",
          "Meeting 4 - July 20, 2024"
      ]
  };

  document.getElementById('client-name').innerText = clientData.name;
  document.getElementById('organization-name').innerText = clientData.organization.name;
  document.getElementById('organization-details').innerText = clientData.organization.details;

  const profileDetails = `
      Address: ${clientData.profile.address}<br>
      City: ${clientData.profile.city}<br>
      State: ${clientData.profile.state}<br>
      Zip Code: ${clientData.profile.zip}<br>
      Phone Number: ${clientData.profile.phone}<br>
      Email: ${clientData.profile.email}
  `;
  document.getElementById('profile-details').innerHTML = profileDetails;

  const attendanceList = clientData.attendanceHistory.map(item => `<li>${item}</li>`).join('');
  document.getElementById('attendance-list').innerHTML = attendanceList;

  const meetingsList = clientData.upcomingMeetings.map(item => `<li>${item}</li>`).join('');
  document.getElementById('meetings-list').innerHTML = meetingsList;
});
