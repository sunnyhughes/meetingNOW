import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientAttendanceScreen from './components/ClientAttendanceScreen';
import ClientDashboardScreen from './components/ClientDashboardScreen';
// Import other components...

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/attendance" element={<ClientAttendanceScreen />} />
        <Route path="/dashboard" element={<ClientDashboardScreen />} />
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
