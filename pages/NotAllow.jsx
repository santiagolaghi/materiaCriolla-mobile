import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const NotAllow = ({navigation}) => {

  return (
    <ImageBackground
      source={require('../public/src/mate3.jpg')}
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
          <ImageBackground
            source={require('../public/src/madera.png')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign In!</Text>
          </ImageBackground>
        </TouchableOpacity>

        <Text style={styles.text}>
          You do not have an account?
        </Text>
        

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')} 
        >
          <ImageBackground
            source={require('../public/src/madera.png')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </ImageBackground>
          
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
