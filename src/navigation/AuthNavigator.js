import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
// import ProtectedRoute from '../utils/protectedRoute/ProtectedRoute';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import WeatherDetails from '../screens/WeatherUpdates/weather';
import CropCalenderScreen from '../screens/CropCalenderScreen/CropCalenderScreen';
import StageDetails from '../screens/stageDetails/stageDetails';
import DeficiencyScreen from '../screens/DeficiencyScreen/DeficiencyScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='HomeScreen' component={BottomTabNavigator}  options={{headerShown:false}}/>
        <Stack.Screen name='Weather Details' component={WeatherDetails}  options={{headerShown:true, headerTitle: 'Weather Details', headerStyle:{backgroundColor:'#03753C'}, headerTintColor:'white', headerTitleStyle:{color:'white'}}}/>
        <Stack.Screen name='CropCalenderScreen' component={CropCalenderScreen}  options={{headerShown:true, headerTitle: 'Crop Calender', headerStyle:{backgroundColor:'#03753C'}, headerTintColor:'white', headerTitleStyle:{color:'white'}}}/>
        <Stack.Screen name='StageDetailsScreen' component={StageDetails} options={{headerShown:true, headerTitle: 'Stage Details', headerStyle:{backgroundColor:'#03753C'}, headerTintColor:'white', headerTitleStyle:{color:'white'}}}/>
        <Stack.Screen name='DeficiencyDetailsScreen' component={DeficiencyScreen} options={{headerShown:true, headerTitle: 'Deficiency Details', headerStyle:{backgroundColor:'#03753C'}, headerTintColor:'white', headerTitleStyle:{color:'white'}}}/>
        {/* <Stack.Screen name='HomeDrawer' component={DrawerNavigator}/> */}
    </Stack.Navigator>
  )
}

export default AuthNavigator;