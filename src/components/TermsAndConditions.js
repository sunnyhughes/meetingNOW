import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="terms-and-conditions">
      <input 
        type="checkbox" 
        id="terms" 
        checked={accepted} 
        onChange={handleCheckboxChange} 
        required 
      />
      <label htmlFor="terms">
        I accept the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
      </label>
    </div>
  );
};

export default TermsAndConditions;
