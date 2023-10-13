import Index from './pages/Index';
import Register from './pages/Register';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './pages/Login';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Index}/>
        <Drawer.Screen name="Register" component={Register}/>
        <Drawer.Screen name="Log In" component={Login}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

