import React from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationChoice = () => {
  const history = useHistory();

  const handleClientRegister = () => {
    history.push('/register-client');
  };

  const handleOrganizationRegister = () => {
    history.push('/register-organization');
  };

  return (
    <div className="registration-choice">
      <button onClick={handleClientRegister}>Register as Client</button>
      <button onClick={handleOrganizationRegister}>Register as Organization</button>
    </div>
  );
};

export default RegistrationChoice;
