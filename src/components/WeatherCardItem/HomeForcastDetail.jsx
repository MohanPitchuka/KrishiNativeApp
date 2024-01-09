import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HumidityIcon, RainfallIcon, TemperatureIcon} from '../../assets/icons';
import {formatedDate} from '../../utils/dateHelper/dateHelper';

export const HomeForcastDetail = ({data, day = undefined}) => {
  const cardTitle = formatedDate(day);
  const details = [
    `${data.temperatureMin}°/${data.temperatureMax}°`,
    `${data.humidityPer}%`,
    `${
      day === 'today' ? data.precipProbabilitytoday : data.precipProbability
    }%`,
    `${day === 'today' ? data.precipitationtoday : data.precipitation} mm`,
  ];

  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 12,
      }}>
      <Text numberOfLines={2} style={styles.headingContainer}>
        {cardTitle}
      </Text>
      {details.map((txt, index) => (
        <View style={styles.titleContainer} key={index}>
          <Text numberOfLines={2} style={styles.title}>
            {txt}
          </Text>
        </View>
      ))}
    </View>
  );
};

export const IconColumn = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 12,
      }}>
      <Text style={styles.headingContainer}></Text>
      <View style={styles.iconContainer}>
        <TemperatureIcon />
      </View>
      <View style={styles.iconContainer}>
        <HumidityIcon />
      </View>
      <View style={styles.iconContainer}>
        <RainfallIcon />
      </View>
      <View style={styles.iconContainer}>
        <RainfallIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    height: 40,
    width: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    width: '100%',
  },
  iconContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
