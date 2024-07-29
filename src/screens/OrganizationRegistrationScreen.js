// OrganizationRegistrationScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './OrganizationRegistrationScreenStyles'; // Import styles

const OrganizationRegistrationScreen = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [representativeName, setRepresentativeName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [logo, setLogo] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captcha, setCaptcha] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Organization Registration</Text>

      {/* Username and Password Section */}
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />

      {/* Organization Information Section */}
      <Text style={styles.sectionHeading}>Organization Information</Text>
      <TextInput
        style={styles.input}
        value={companyName}
        onChangeText={setCompanyName}
        placeholder="Company Name"
      />
      <TextInput
        style={styles.input}
        value={businessAddress}
        onChangeText={setBusinessAddress}
        placeholder="Business Address"
      />
      <TextInput
        style={styles.input}
        value={representativeName}
        onChangeText={setRepresentativeName}
        placeholder="Representative Name"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
      />

      {/* Logo Upload Section */}
      <Text style={styles.sectionHeading}>Logo Upload</Text>
      {/* Add input field for logo upload */}

      {/* Terms and Conditions Section */}
      <Text style={styles.sectionHeading}>Terms and Conditions</Text>
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
          {/* Add checkbox for terms acceptance */}
          <Text style={{ marginRight: 10 }}>I agree to the terms and conditions</Text>
          <Text>{termsAccepted ? '✓' : ''}</Text>
        </TouchableOpacity>
        {/* Add text for terms and conditions */}
      </View>

      {/* Captcha Section */}
      <Text style={styles.sectionHeading}>Captcha</Text>
      <TextInput
        style={styles.input}
        value={captcha}
        onChangeText={setCaptcha}
        placeholder="Enter Captcha"
      />

      {/* Submit Button Section */}
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: termsAccepted ? 'blue' : 'gray' }]}
        onPress={handleSubmit}
        disabled={!termsAccepted}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>Your Company Name © {new Date().getFullYear()}</Text>
    </ScrollView>
  );
};

export default OrganizationRegistrationScreen;
