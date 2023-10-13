import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import mate1 from '../public/src/mate1.png';

const Register = () => {
  return (
    <ImageBackground style={styles.container} source={mate1}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.loginBackground}>
          <Text style={styles.loginTitle}>Join Us</Text>
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
          <Text style={styles.loginTexts}>Country:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>Province:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>City:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>Street:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>Street Number:</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.loginTexts}>Postal Code:</Text>
          <TextInput style={styles.textInput} />
          <TouchableOpacity style={styles.touchableLogin}>
            <ImageBackground
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
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
    marginTop: 10,
    marginLeft: 20,
  },
  loginBackground: {
    display: 'flex',
    alignItems: 'center',
    width: '95%',
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 3,
    borderRadius: 10,
    padding: 80,
  },
  touchableLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: 70,
    borderRadius: 15,
    marginTop: 20,
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
    // Puedes ajustar otras propiedades como borderRadius, borderColor, etc.
  }
});
