import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Paramarsh from '../screens/Paramarsh/Paramarsh';
import Gyan from '../screens/Gyan/Gyan';
import Activity from '../screens/Activity/Activity';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 16}}>
            <Icon name="menu" size={27} color="white" />
          </TouchableOpacity>
        ),
        headerShown: true,
        headerStyle: {
          backgroundColor: '#03753C', // Set your desired background color
        },
        headerTintColor: '#fff', // Set your desired text color
        headerTitleAlign: 'center',
        tabBarStyle: {backgroundColor: '#03753C', height: 60},
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.60)',
        tabBarLabelStyle: {fontSize: 12, fontWeight: 500},
        tabBarItemStyle: {paddingVertical: 5},
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          let iconColor = focused ? '#ffffff' : 'rgba(255, 255, 255, 0.60)';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Paramarsh') {
            iconName = 'comment-question';
          } else if (route.name === 'Gyan') {
            iconName = 'play-circle';
          } else if (route.name === 'Activity') {
            iconName = 'shovel';
          }
          return <Icon name={iconName} size={30} color={iconColor} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Paramarsh" component={Paramarsh} />
      <Tab.Screen name="Gyan" component={Gyan} />
      <Tab.Screen name="Activity" component={Activity} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
