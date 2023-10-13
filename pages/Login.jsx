import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../public/src/mate2.png'; 

const LoginForm = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container} source={backgroundImage}>
      <View style={styles.loginBackground}>
        <Text style={styles.loginTitle}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.loginTexts}>Email:</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.loginTexts}>Password:</Text>
          <TextInput secureTextEntry={true} style={styles.textInput} />
        </View>
        <TouchableOpacity style={styles.touchableLogin}>
          <ImageBackground
            source={require('../public/src/madera.png')}
            style={styles.buttonBackground}>
            <Text style={styles.loginButtonText}>Login</Text>
          </ImageBackground>
        </TouchableOpacity>
        <Text style={styles.questionText}>Don't have an account yet?</Text>
        <TouchableOpacity style={styles.touchableRegister} onPress={() => navigation.navigate('Register')}>
          <ImageBackground
            source={require('../public/src/madera.png')}
            style={styles.buttonBackground}>
            <Text style={styles.registerButtonText}>Register</Text>
          </ImageBackground>
        </TouchableOpacity>
        <StatusBar style='auto' translucent={false} backgroundColor='white' />
      </View>
    </ImageBackground>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 35,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
    fontSize: 20,
  },
  loginTexts: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  loginBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 3,
    borderRadius: 10,
    padding: 30,
  },
  touchableLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Establece el fondo del botón como transparente
    width: '100%',
    height: 70,
    marginTop: 20,
  },
  touchableRegister: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Establece el fondo del botón como transparente
    width: '100%',
    height: 70,
    borderRadius: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // Puedes ajustar otras propiedades como borderRadius, borderColor, etc.
  }
});
