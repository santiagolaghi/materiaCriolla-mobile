import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const NotAllow = ({navigation}) => {

  return (
    <ImageBackground
      source={require('../public/src/madera.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          You are not registered, log in to continue browsing.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')} // Reemplaza 'SignIn' con la ruta adecuada
        >
          <Text style={styles.buttonText}>Sign In!</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          You do not have an account?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')} // Reemplaza 'Register' con la ruta adecuada
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cambia el color de fondo y la opacidad según tus preferencias
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue', // Cambia el color de fondo según tus preferencias
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NotAllow;
