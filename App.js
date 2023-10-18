import Index from './pages/Index';
import Register from './pages/Register';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './pages/Login';
import Profile from './pages/Profile'
import { Provider } from 'react-redux';
import store from './redux/store.js'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Index}/>
        <Drawer.Screen name="Register" component={Register}/>
        <Drawer.Screen name="Log In" component={Login}/>
        <Drawer.Screen name="Profile" component={Profile}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

