import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
        console.log(isAuthenticated);
        navigation.reset({
          index: 0,
          routes: [{name: isAuthenticated === 'true' ? 'Drawer' : 'Login'}],
        });
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, [navigation]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>LoadingScreen</Text>
    </View>
  );
};

export default LoadingScreen;
