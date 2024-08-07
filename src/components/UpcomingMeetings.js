import React from 'react';

const UpcomingMeetings = ({ meetings }) => {
  return (
    <div className="upcoming-meetings">
      <h3>Upcoming Meetings</h3>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            {meeting.name} - {meeting.date} at {meeting.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMeetings;
