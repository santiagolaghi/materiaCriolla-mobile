import React from 'react'
import { StyleSheet, Text, ImageBackground } from 'react-native';

const Index = (props) => {
  return (
    <ImageBackground style={styles.container} >
      <Text style={styles.Icon}>materia criolla</Text>
    </ImageBackground>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    width: 300,
    marginVertical: 20
  }
});