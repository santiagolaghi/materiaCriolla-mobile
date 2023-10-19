import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const NotAllow = ({ navigation }) => {

  return (
    <ImageBackground source={require('../public/src/fondoNotAllow.jpg')} style={{alignItems:'center',justifyContent:'center',flex:1,width:'100%',height:'100%'}}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Sign In to continue browsing!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')} // Reemplaza 'SignIn' con la ruta adecuada
        ><ImageBackground borderRadius={10} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} source={require('../public/src/madera.png')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </ImageBackground>

        </TouchableOpacity>

        <Text style={styles.text}>
          You do not have an account yet?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')} 
        >
          <ImageBackground borderRadius={10} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} source={require('../public/src/madera.png')}>
            <Text style={styles.buttonText}>Register</Text>
          </ImageBackground>
        </TouchableOpacity>
        <Image />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'90%',
    height:'30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    borderRadius:20
    // Cambia el color de fondo y la opacidad según tus preferencias
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'blue', // Cambia el color de fondo según tus preferencias
    width: '50%',
    height: 40,
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
