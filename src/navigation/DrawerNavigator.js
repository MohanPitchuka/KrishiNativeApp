import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerNavigator from "./CustomDrawerNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import MyWebinar from "../screens/DrawerScreens/MyWebinar/MyWebinar";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawerNavigator {...props} />}
    screenOptions={{headerShown: false}}
    >
      <Drawer.Screen name="HomeBottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="Webinar" component={MyWebinar} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;