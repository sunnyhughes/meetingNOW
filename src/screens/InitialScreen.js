// src/screens/InitialScreen.js
import React from 'react';
import Logo from './Logo';
import SignInButton from '../components/SignInButton';
import RegisterButton from '../components/RegisterButton';
import Footer from '../components/Footer';

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
