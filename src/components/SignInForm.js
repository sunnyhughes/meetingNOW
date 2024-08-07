import React from 'react';

const SignInForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <label>Email: <input type="email" required /></label>
      <label>Password: <input type="password" required /></label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
