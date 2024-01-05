import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
// import LoginScreen from './screens/LoginScreen';
import Login from '../../screens/Login/Login';
import { View, Text } from 'react-native';

const AuthChecker = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const isAuthenticatedString = await AsyncStorage.getItem('isAuthenticated');
          const isAuthenticated = isAuthenticatedString === 'true';

          setLoading(false);

          if (!isAuthenticated) {
            // Redirect to LoginScreen if not authenticated
            navigation.navigate('Login');
          }
        } catch (error) {
          console.error('Error checking authentication status:', error);
          setLoading(false);
        }
      };

      checkAuthentication();
    }, [navigation]);

    if (loading) {
      // Show loading indicator or splash screen while checking authentication
    //   return <LoadingIndicator />;
    return <View><Text>Loading ...</Text></View>
    }

    // Render the wrapped component if the user is authenticated
    return <WrappedComponent {...props} />;
  };
};

export default AuthChecker;