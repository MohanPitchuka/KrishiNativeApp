import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import ProtectedRoute from '../utils/protectedRoute/ProtectedRoute';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='HomeScreen' component={BottomTabNavigator}  options={{headerShown:false}}/>
        {/* <Stack.Screen name='HomeDrawer' component={DrawerNavigator}/> */}
    </Stack.Navigator>
  )
}

export default AuthNavigator;