// ClientRegistrationConfirmationScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ClientRegistrationConfirmationScreenStyles'; // Import styles

const ClientRegistrationConfirmationScreen = ({ route }) => {
  // Extracting data from the route
  const { username, fullName, address, city, state, zipCode, phoneNumber, birthdate, email, homeCity, homeState, cleanDate, emergencyContactName, emergencyContactNumber } = route.params;

  // Generate a random client ID number (for demonstration purpose)
  const clientId = Math.floor(Math.random() * 1000000);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Client Registration Confirmation</Text>
      
      {/* Displaying user information */}
      <Text>Username: {username}</Text>
      <Text>Full Name: {fullName}</Text>
      <Text>Address: {address}</Text>
      <Text>City: {city}</Text>
      <Text>State: {state}</Text>
      <Text>Zip Code: {zipCode}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Text>Birth Date: {birthdate}</Text>
      <Text>Email: {email}</Text>
      <Text>Home City: {homeCity}</Text>
      <Text>Home State: {homeState}</Text>
      <Text>Clean Date: {cleanDate}</Text>
      <Text>Emergency Contact Name: {emergencyContactName}</Text>
      <Text>Emergency Contact Number: {emergencyContactNumber}</Text>
      
      {/* Displaying generated client ID */}
      <Text style={styles.clientId}>Client ID: {clientId}</Text>
      
      {/* Footer */}
      <Text style={styles.footerText}>Your Company Name © {new Date().getFullYear()}</Text>
    </View>
  );
};

export default ClientRegistrationConfirmationScreen;
