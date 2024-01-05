import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import ProtectedRoute from '../../utils/protectedRoute/ProtectedRoute';
import AuthChecker from '../../utils/authChecker/AuthChecker';

const Home = ({navigation}) => {

  const handleClick = () =>{
    navigation.navigate('cropCalender');
  }
  // useEffect(() =>{
  //   Alert.alert('this is alert' , 'this is body');
  // } , []);
  return (
    <View>
    <Text>Home section</Text>
    <TouchableOpacity onPress={handleClick}><Text>Click me</Text></TouchableOpacity>
    </View>
  );
};

export default  AuthChecker(Home);
