import React from 'react';
import RegistrationChoice from './RegistrationChoice';
import './RegistrationChoicePage.css';

const RegistrationChoicePage = () => {
  return (
    <div className="registration-choice-page">
      <h2>Choose Registration Type</h2>
      <RegistrationChoice />
    </div>
  );
};

export default RegistrationChoicePage;
