import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { signInStyles } from './SignInScreenStyles';

const SignInScreen = () => {
  return (
    <View style={signInStyles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeMessage}>Welcome to Meeting NOW!</Text>

      {/* Logo */}
      <Image
        source={require('./assests/logo_smaller.png')}
        style={styles.logoSmall}
      />

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />

      {/* Remember Me Toggle */}
      {/* You can use a library for toggle switch or create your own */}
      {/* Submit Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Other Organization Logos */}
      <View style={styles.otherLogosContainer}>
        <Image
          source={require('./assests/logo1.png')}
          style={styles.otherLogo}
        />
        <Image
          source={require('./assests/logo2.png')}
          style={styles.otherLogo}
        />
        <Image
          source={require('./assests/logo3.png')}
          style={styles.otherLogo}
        />
      </View>

      {/* Company Name and Copyright */}
      <Text style={styles.companyInfo}>Your Company Name © 2024</Text>
    </View>
  );
};

export default SignInScreen;
