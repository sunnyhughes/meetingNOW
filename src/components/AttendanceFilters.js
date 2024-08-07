import React from 'react';

const AttendanceFilters = ({ onFilterChange }) => {
  return (
    <div className="attendance-filters">
      <label>
        Date:
        <input type="date" onChange={(e) => onFilterChange('date', e.target.value)} />
      </label>
      <label>
        Type:
        <select onChange={(e) => onFilterChange('type', e.target.value)}>
          <option value="">All</option>
          <option value="NA">NA</option>
          <option value="AA">AA</option>
          <option value="Parenting">Parenting</option>
          {/* Add other types as needed */}
        </select>
      </label>
    </div>
  );
};

export default AttendanceFilters;
