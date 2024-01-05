import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async (key) => {
  try {
    const jwtToken = await AsyncStorage.getItem(key);
    console.log(jwtToken);
    return jwtToken;
  } catch (error) {
    console.error('Error retrieving token: ', error);
  }
};
