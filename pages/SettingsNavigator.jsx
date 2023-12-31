import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Settings from './Settings';
import EditUserInfo from './EditUserInfo'
import EditAddress from './EditAddress';
import NotAllow from './NotAllow';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs'

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
        <Stack.Screen name='EditUserInfo' component={EditUserInfo} />
        <Stack.Screen name='EditAddress' component={EditAddress}/>
        <Stack.Screen name='ContactUs' component={ContactUs} />
        <Stack.Screen name='AboutUs' component={AboutUs}/>
    </Stack.Navigator>
  )
}

export default SettingsNavigator