import React from 'react';
import Home from '../pages/Index';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Checkout from '../pages/Checkout';
import SettingsNavigator from '../pages/SettingsNavigator';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigator = () => {
  
    const { user, token } = useSelector((store) => store.profile);
    const isAuthenticated = !!token; 

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Checkout" component={Checkout}/> 
            <Drawer.Screen name="Setting" component={SettingsNavigator}/>
            {!token&&
            <>
                <Drawer.Screen name="SignIn" component={SignIn} /> 
                <Drawer.Screen name="Register" component={Register} />
            </> 
        }
                 
                                          
        </Drawer.Navigator>
    )
}

export default Navigator
