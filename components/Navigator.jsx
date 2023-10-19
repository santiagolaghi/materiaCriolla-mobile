import React from 'react';
import Home from '../pages/Index';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Checkout from '../pages/Checkout';
import Products from '../pages/Products'; 
import SettingsNavigator from '../pages/SettingsNavigator';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux';
import { Image } from 'react-native';


const tab = createBottomTabNavigator();


const Navigator = () => {
  
    const { user, token } = useSelector((store) => store.profile);

    return (
        <tab.Navigator>
            <tab.Screen options={{tabBarIcon:()=><Image style={{width:20,height:20}} source={require('../assets/home.png')}/>}} name="Home" component={Home} />
            <tab.Screen options={{headerShown:false,tabBarIcon:()=><Image style={{width:20,height:20}} source={require('../assets/mate.png')}/>}} name="Products" component={Products}/>
            <tab.Screen options={{tabBarIcon:()=><Image style={{width:20,height:20}} source={require('../assets/checkout.png')}/>}} name="Checkout" component={Checkout}/> 
            <tab.Screen options={{tabBarIcon:()=><Image style={{width:20,height:20}} source={require('../assets/settings.png')}/>}} name="Setting" component={SettingsNavigator}/>
            {!token&&
            <>
                <tab.Screen options={{tabBarIcon:()=><Image style={{width:20,height:20}} source={require('../assets/signIn.png')}/>}} name="SignIn" component={SignIn} /> 
                <tab.Screen options={{tabBarIcon:()=><Image style={{width:20,height:20}} source={require('../assets/register.png')}/>}} name="Register" component={Register} />
            </> 
        }
                 
                                          
        </tab.Navigator>
    )
}

export default Navigator
