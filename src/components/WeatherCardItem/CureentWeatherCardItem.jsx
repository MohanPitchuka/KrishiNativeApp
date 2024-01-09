import React from 'react';
import {Text, View} from 'react-native';

const CurrentWeatherCardItem = ({caption, icon, title}) => {
  return (
    <View
      style={{
        width: '48%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContents: 'center',
      }}>
      {icon}
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: 'grey',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '900',
          }}>
          {caption}
        </Text>
      </View>
    </View>
  );
};

export default CurrentWeatherCardItem;
