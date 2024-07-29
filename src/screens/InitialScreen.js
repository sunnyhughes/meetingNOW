import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const InitialScreen = () => {
  return (
    <View style={[styles.container, styles.whiteBackground]}>
      {/* Logo Image */}
      <Image
        source={require('./assests/logo.png')}
        style={styles.logo}
      />
      {/* App Name */}
      <Text style={styles.appName}>Meeting NOW</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Registration Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Company Name and Copyright */}
      <Text style={styles.companyInfo}>Your Company Name © 2024</Text>
    </View>
  );
};

export default InitialScreen;
