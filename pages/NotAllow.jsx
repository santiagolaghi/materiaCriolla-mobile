import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const NotAllow = () => {
  const navigation = useNavigation();

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
          onPress={() => navigation.navigate('SignIn')} 
        >
          <Text style={styles.buttonText}>Sign In!</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          You do not have an account?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')} 
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue', 
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
