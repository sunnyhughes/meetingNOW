// src/screens/InitialScreen.js
import React from 'react';
import Logo from './Logo';
import SignInButton from './SignInButton';
import RegisterButton from './RegisterButton';
import Footer from './Footer';

const InitialScreen = () => {
  return (
    <div className="initial-screen">
      <Logo />
      <h1>Meeting Now</h1>
      <SignInButton />
      <RegisterButton />
      <Footer />
    </div>
  );
};

export default InitialScreen;
