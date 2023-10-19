import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import mate1 from '../public/src/mate1.png';

const Register = () => {
  return (
    <ImageBackground style={styles.container} source={mate1}>
      <ScrollView overScrollMode="never" contentContainerStyle={styles.scrollContent}>
        <View style={styles.loginBackground}>
          <Text style={styles.loginTitle}>Join Us</Text>
          <View>
          <Text style={styles.loginTexts}>Name:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>Surname:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>Email:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>Password:</Text>
          <TextInput style={styles.textInput} secureTextEntry={true} />
          <Text style={styles.loginTexts}>Birthdate:</Text>
          <TextInput style={styles.textInput} />
          </View>
          <TouchableOpacity style={styles.touchableLogin}>
            <ImageBackground
              borderRadius={10}
              source={require('../public/src/madera.png')}
              style={styles.buttonBackground}>
              <Text style={styles.loginButtonText}>Register</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style='auto' translucent={false} backgroundColor='white' />
    </ImageBackground>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textInput: {
    width: 190,
    height: 40,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
    fontSize: 20,
    margin: 8,
  },
  loginTexts: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:10
  },
  loginBackground: {
    justifyContent: 'center',
    alignItems:'center',
    width: '80%',
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal:50
  },
  touchableLogin: {
    marginTop: 20,
    marginBottom:20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Establece el fondo del botón como transparente
    width: '100%',
    height: 40,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
