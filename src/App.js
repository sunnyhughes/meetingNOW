import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ClientAttendanceScreen from './components/ClientAttendanceScreen';
import ClientDashboardScreen from './components/ClientDashboardScreen';
import ClientRegistrationConfirmationScreen from './components/ClientRegistrationConfirmationScreen';
import ClientRegistrationScreen from './components/ClientRegistrationScreen';
import InitialScreen from './components/InitialScreen';
import LocationPermissionPage from './components/LocationPermissionPage';
import OrganizationDashboardScreen from './components/OrganizationDashboardScreen';
import OrganizationRegistrationScreen from './components/OrganizationRegistrationScreen';
import RegistrationScreen from '/components/RegistrationScreen';
import SignInScreen from '.components/SignInScreen';

// Import other components...

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/initial" element={<InitialScreen />} />
        <Route path="/attendance" element={<ClientAttendanceScreen />} />
        <Route path="/dashboard" element={<ClientDashboardScreen />} />
        <Route path="/client registration confirmation" element={<ClientRegistrationConfirmationScreen />} />
        <Route path="/client registration" element={<ClientRegistrationScreen />} />
        <Route path="/location" element={<LocationPermissionPage />} />
        <Route path="/organization dashboard" element={<OrganizationDashboardScreen />} />
        <Route path="/organization registration" element={<OrganizationRegistrationScreen />} />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="/sign in" element={<SignInScreen />} />

        {/* Add other routes... */}
      </Routes>
    </Router>
  );
};

export default App;









import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
