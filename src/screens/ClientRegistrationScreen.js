// ClientRegistrationScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './ClientRegistrationScreenStyles'; // Import styles

const ClientRegistrationScreen = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [facilityCode, setFacilityCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [homeCity, setHomeCity] = useState('');
  const [homeState, setHomeState] = useState('');
  const [cleanDate, setCleanDate] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captcha, setCaptcha] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Client Registration</Text>

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

      {/* Facility Code Section */}
      <TextInput
        style={styles.input}
        value={facilityCode}
        onChangeText={setFacilityCode}
        placeholder="Facility Code"
      />

      {/* Personal Information Section */}
      <Text style={styles.sectionHeading}>Personal Information</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="City"
      />
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={setState}
        placeholder="State"
      />
      <TextInput
        style={styles.input}
        value={zipCode}
        onChangeText={setZipCode}
        placeholder="Zip Code"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
      />
      <TextInput
        style={styles.input}
        value={birthdate}
        onChangeText={setBirthdate}
        placeholder="Birth Date"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={homeCity}
        onChangeText={setHomeCity}
        placeholder="Home City"
      />
      <TextInput
        style={styles.input}
        value={homeState}
        onChangeText={setHomeState}
        placeholder="Home State"
      />
      <TextInput
        style={styles.input}
        value={cleanDate}
        onChangeText={setCleanDate}
        placeholder="Clean Date"
      />
      <TextInput
        style={styles.input}
        value={emergencyContactName}
        onChangeText={setEmergencyContactName}
        placeholder="Emergency Contact Name"
      />
      <TextInput
        style={styles.input}
        value={emergencyContactNumber}
        onChangeText={setEmergencyContactNumber}
        placeholder="Emergency Contact Number"
      />

      {/* Terms and Conditions Section */}
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
          {/* Add checkbox for terms acceptance */}
          <Text style={{ marginRight: 10 }}>I agree to the terms and conditions</Text>
          <Text>{termsAccepted ? '✓' : ''}</Text>
        </TouchableOpacity>
        {/* Add text for terms and conditions */}
      </View>

      {/* Captcha Section */}
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
        <Text style={styles.submitButtonText}>Register Now</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>Your Company Name © {new Date().getFullYear()}</Text>
    </ScrollView>
  );
};

export default ClientRegistrationScreen;
