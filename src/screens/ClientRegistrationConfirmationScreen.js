document.addEventListener('DOMContentLoaded', () => {
  // Extracting data from URL parameters or another source
  const params = new URLSearchParams(window.location.search);
  const username = params.get('username');
  const fullName = params.get('fullName');
  const address = params.get('address');
  const city = params.get('city');
  const state = params.get('state');
  const zipCode = params.get('zipCode');
  const phoneNumber = params.get('phoneNumber');
  const birthdate = params.get('birthdate');
  const email = params.get('email');
  const homeCity = params.get('homeCity');
  const homeState = params.get('homeState');
  const cleanDate = params.get('cleanDate');
  const emergencyContactName = params.get('emergencyContactName');
  const emergencyContactNumber = params.get('emergencyContactNumber');

  // Generate a random client ID number
  const clientId = Math.floor(Math.random() * 1000000);

  // Populate the HTML with the data
  document.getElementById('username').textContent = username;
  document.getElementById('fullName').textContent = fullName;
  document.getElementById('address').textContent = address;
  document.getElementById('city').textContent = city;
  document.getElementById('state').textContent = state;
  document.getElementById('zipCode').textContent = zipCode;
  document.getElementById('phoneNumber').textContent = phoneNumber;
  document.getElementById('birthdate').textContent = birthdate;
  document.getElementById('email').textContent = email;
  document.getElementById('homeCity').textContent = homeCity;
  document.getElementById('homeState').textContent = homeState;
  document.getElementById('cleanDate').textContent = cleanDate;
  document.getElementById('emergencyContactName').textContent = emergencyContactName;
  document.getElementById('emergencyContactNumber').textContent = emergencyContactNumber;
  document.getElementById('clientId').textContent = clientId;

  // Set the current year in the footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});
