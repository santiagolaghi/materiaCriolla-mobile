import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import logoutUser from '../redux/actions/signOutAction';

const Logout = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // Despacha la acción de logoutUser para actualizar el estado de Redux
    dispatch(logoutUser())
    .then(()=>{
      navigation.navigate('Home')
    })
    // Redirige al usuario a la pantalla de inicio (reemplaza 'Home' por el nombre de tu pantalla de inicio)
  
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.logoutButtonText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: '#FF5733',
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Logout;
