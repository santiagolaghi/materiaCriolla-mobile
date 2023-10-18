import React from 'react';
import Home from '../pages/Index';
import Register from '../pages/Register';
import Logout from '../pages/LogOut';
import Login from '../pages/Login';
import NotAllow from '../pages/NotAllow';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigator = () => {
  
    const { user, token } = useSelector((state) => state.profile);
    const isAuthenticated = !!token; 

    return (
        <Drawer.Navigator>
            {!isAuthenticated ? (
            <>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Register" component={Register} />
                <Drawer.Screen name="Login" component={Login} />  
                <Drawer.Screen name="NotAllow" component={NotAllow} />  
                                            
            </>
            ) : (
            <>
                <Drawer.Screen name="Logout" component={Logout} />
            </>)}
        </Drawer.Navigator>
    )
}

export default Navigator
