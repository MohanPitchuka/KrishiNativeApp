import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomDrawerNavigator = ({navigation}) => {
  const handleMainHeadingPress = () => {
    // Handle main heading click (if needed)
  };

  const handleSubHeadingPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text>profile icon</Text>
        <Text>Hello , name</Text>
        <Text>x</Text>
      </View>

      {/* Main Heading */}
      <TouchableOpacity onPress={handleMainHeadingPress}>
        <Text style={styles.mainHeading}>My Krishi</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSubHeadingPress('Activity')}>
        <Text style={styles.subHeading}>My Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSubHeadingPress('Paramarsh')}>
        <Text style={styles.subHeading}>My Queries</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSubHeadingPress('Webinar')}>
        <Text style={styles.subHeading}>My Webinar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    color: 'red',
    fontSize: 24,
  },
  subHeading: {
    color: 'green',
    fontSize: 16,
  },
});

export default CustomDrawerNavigator;
