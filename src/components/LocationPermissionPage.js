import React from 'react';
import './LocationPermissionPage.css'; // Import CSS file for styling

function LocationPermissionPage() {
  const requestLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        // Handle successful location access
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      error => {
        // Handle location access error
        console.error('Error:', error.message);
      }
    );
  };

  return (
    <div className="location-permission-container">
      <h1>Allow Access to Device Location</h1>
      <p>This app requires access to your device's location.</p>
      <button onClick={requestLocationPermission} className="grant-access-button">
        Grant Access
      </button>
    </div>
  );
}

export default LocationPermissionPage;
