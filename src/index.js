import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker to enable PWA features
serviceWorkerRegistration.register({
  onSuccess: (registration) => {
    console.log('Service Worker registered successfully:', registration);
  },
  onUpdate: (registration) => {
    console.log('New content available, please refresh.');
    // Optionally, notify the user about the update
 
    // Example of a simple notification system
    const updateNotification = document.createElement('div');
    updateNotification.innerText = 'New content is available. Please refresh the page.';
    updateNotification.style.position = 'fixed';
    updateNotification.style.bottom = '0';
    updateNotification.style.left = '0';
    updateNotification.style.backgroundColor = '#333';
    updateNotification.style.color = '#fff';
    updateNotification.style.padding = '10px';
    updateNotification.style.zIndex = '1000';

    document.body.appendChild(updateNotification);

    // Optionally, you could provide a button to refresh
    const refreshButton = document.createElement('button');
    refreshButton.innerText = 'Refresh';
    refreshButton.onclick = () => window.location.reload();
    updateNotification.appendChild(refreshButton);
  }
});


// Report web vitals to the console
reportWebVitals(console.log);
