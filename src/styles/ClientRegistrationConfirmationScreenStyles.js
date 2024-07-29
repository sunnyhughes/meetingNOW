// ClientRegistrationConfirmationScreenStyles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow', // Yellow notebook page background
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  clientId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  footerText: {
    position: 'absolute',
    bottom: 10,
    color: '#888',
  },
});
