// BasicInfoPage.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import saveDataToFile from './DataStorage';

function BasicInfoPage() {
  const history = useHistory();

  const handleSubmit = () => {
    // Save basic information to local storage
    saveDataToFile(/* basic information data */);

    // Navigate to the attendance screen
    history.push('/attendance');
  };

  return (
    <div>
      {/* Basic information form */}
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}

export default BasicInfoPage;
