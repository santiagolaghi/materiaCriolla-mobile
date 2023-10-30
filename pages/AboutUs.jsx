import React from 'react';
import { View, Text, ImageBackground, StyleSheet,ScrollView } from 'react-native';

const MissionVisionValues = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.missionVisionValuesContainer}>
        <Text style={styles.sectionHeading}>Our Mission</Text>
        <Text style={styles.missionVisionValuesText}>
          At Materia Criolla, we're dedicated to sharing the tradition of mate with the world through high-quality products, fostering community, and promoting well-being.
        </Text>
        <Text style={styles.sectionHeading}>Our Vision</Text>
        <Text style={styles.missionVisionValuesText}>
          Our vision at Materia Criolla is to be the global symbol of quality mate experiences, uniting people in camaraderie and wellness worldwide.
        </Text>
        <Text style={styles.sectionHeading}>Our Values</Text>
        <View>
        <Text style={styles.missionVisionValuesText}>-Integrity</Text>
          <Text style={styles.missionVisionValuesText}>-Innovation</Text>
          <Text style={styles.missionVisionValuesText}>-Teamwork</Text>
          <Text style={styles.missionVisionValuesText}>-Passion</Text>
        </View>
        
      </View>
    </ImageBackground>
  );
};

const backgroundImage = require('../public/src/mate3.jpg');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  sectionHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
    textAlign: 'center', 
  },
  missionVisionValuesContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
  },
  missionVisionValuesText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',    
  },
});

export default MissionVisionValues;
