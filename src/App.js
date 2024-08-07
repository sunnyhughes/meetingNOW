import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InitialScreen from './components/InitialScreen';
import SignInForm from './components/SignInForm';
import RegistrationChoice from './components/RegistrationChoice';
import RegistrationForm from './components/RegistrationForm';
import OrganizationRegistrationForm from './components/OrganizationRegistrationForm';
import ProfilePage from './components/ProfilePage';
import OrganizationProfile from './components/OrganizationProfile';
import MeetingAttendance from './components/MeetingAttendance';
import UserDashboard from './components/UserDashboard';
import OrganizationDashboard from './components/OrganizationDashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={InitialScreen} />
        <Route path="/sign-in" component={SignInForm} />
        <Route path="/register-choice" component={RegistrationChoice} />
        <Route path="/register-client" component={RegistrationForm} />
        <Route path="/register-organization" component={OrganizationRegistrationForm} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/organization-profile" component={OrganizationProfile} />
        <Route path="/meeting-attendance" component={MeetingAttendance} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/organization-dashboard" component={OrganizationDashboard} />
      </Switch>
    </Router>
  );
};

export default App;
