// OrganizationConfirmationScreen.js

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './OrganizationConfirmationScreenStyles'; // Import styles

const OrganizationConfirmationScreen = ({ route }) => {
  // Destructure the route params to get the organization information
  const { username, companyName, businessAddress, representativeName, phoneNumber, email } = route.params;

  // Generate company ID number (example)
  const companyId = Math.floor(Math.random() * 1000000);

  // Generate facility code (example)
  const facilityCode = Math.floor(Math.random() * 10000);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Confirmation</Text>

      <Text style={styles.confirmationText}>Thank you for creating an account!</Text>

      {/* Display organization information */}
      <Text style={styles.sectionHeading}>Organization Information:</Text>
      <Text>Username: {username}</Text>
      <Text>Company Name: {companyName}</Text>
      <Text>Business Address: {businessAddress}</Text>
      <Text>Representative Name: {representativeName}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Text>Email: {email}</Text>

      {/* Display company ID number and facility code */}
      <Text style={styles.sectionHeading}>Company ID Number: {companyId}</Text>
      <Text style={styles.sectionHeading}>Facility Code: {facilityCode}</Text>

      {/* Footer */}
      <Text style={styles.footerText}>Your Company Name © {new Date().getFullYear()}</Text>
    </ScrollView>
  );
};

export default OrganizationConfirmationScreen;
