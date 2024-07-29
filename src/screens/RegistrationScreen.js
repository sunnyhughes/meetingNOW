import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { registrationStyles } from './RegistrationStyles';

const RegistrationScreen = () => {
  const [registrationType, setRegistrationType] = useState(null);

  const handleClientRegistration = () => {
    setRegistrationType('client');
  };

  const handleOrganizationRegistration = () => {
    setRegistrationType('organization');
  };

  return (
    <ImageBackground source={require('./assets/notebook_bg.jpg')} style={registrationStyles.backgroundImage}>
      <View style={registrationStyles.overlay}>
        <Text style={registrationStyles.logoText}>Meeting NOW. The one-stop meeting attendance app.</Text>
        <Text style={registrationStyles.welcomeText}>Welcome!</Text>
      </View>
      <View style={registrationStyles.buttonContainer}>
        <TouchableOpacity style={registrationStyles.button} onPress={handleClientRegistration}>
          <Text style={registrationStyles.buttonText}>Client Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={registrationStyles.button} onPress={handleOrganizationRegistration}>
          <Text style={registrationStyles.buttonText}>Organization Registration</Text>
        </TouchableOpacity>
      </View>
      <View style={registrationStyles.footer}>
        <Text style={registrationStyles.companyInfo}>Your Company Name © 2024</Text>
      </View>
      {registrationType && (
        <View style={registrationStyles.selectedType}>
          <Text style={registrationStyles.selectedTypeText}>
            You selected: {registrationType === 'client' ? 'Client' : 'Organization'}
          </Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default RegistrationScreen;
