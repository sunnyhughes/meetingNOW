// LocationPermissionPage.js
import React from 'react';

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
    <div>
      <h1>Allow Access to Device Location</h1>
      <p>This app requires access to your device's location.</p>
      <button onClick={requestLocationPermission}>Grant Access</button>
    </div>
  );
}

export default LocationPermissionPage;