import React, {useEffect, useState} from 'react';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {Svg, Path} from 'react-native-svg';
import {formatedDate} from '../../utils/dateHelper/dateHelper';
import {
  CloudCoverIcon,
  HumidityIcon,
  RainfallIcon,
  SunIcon,
  WindSpeedIcon,
} from '../../assets/icons';

const WeatherForcastCard = ({data, day = undefined}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const cardTitle = formatedDate(day);

  useEffect(() => {
    if (day === 'today') {
      setIsCardOpen(true);
    }
  }, []);

  const dataComponents = [
    {
      title: 'Humidity',
      caption: `${data.humidityPer}%`,
      icon: <HumidityIcon fill={false} />,
    },
    {
      title: 'Rainfall Probability',
      caption: `${
        day === 'today' ? data.precipProbabilitytoday : data.precipProbability
      }%`,
      icon: <RainfallIcon />,
    },
    {
      title: 'Rainfall',
      caption: `${
        day === 'today' ? data.precipitationtoday : data.precipitation
      } mm`,
      icon: <RainfallIcon />,
    },
    {
      title: 'Wind Speed',
      caption: `${data.wind} km/h`,
      icon: <WindSpeedIcon />,
    },
    {
      title: 'Cloud Cover',
      caption: `${data.cloudCover}%`,
      icon: <CloudCoverIcon />,
    },
    {
      title: 'Sunrise/Sunset',
      caption: `${data.sunriseTime}/${data.sunsetTime}`,
      icon: <SunIcon />,
    },
  ];

  const handelCardOpen = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <Card style={{backgroundColor: 'white'}}>
      <Card.Content>
        <List.Accordion
          style={styles.Accordion}
          left={() => (
            <View style={styles.accordionAction}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                {cardTitle}
              </Text>
            </View>
          )}
          right={props => (
            <View style={styles.accordionAction}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                {`${data.temperatureMin}°/${data.temperatureMax}°`}
              </Text>
              <Text style={{color: 'black', marginLeft: 8}}>
                {!isCardOpen ? (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={18}
                    height={18}
                    color="#327242"
                    viewBox="0 0 24 24">
                    <Path
                      fill-rule="evenodd"
                      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></Path>
                  </Svg>
                ) : (
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={18}
                    height={18}
                    color="#327242"
                    viewBox="0 0 24 24">
                    <Path
                      fillRule="evenodd"
                      d="M 2 11 L 22 11 L 22 13 L 2 13 Z"></Path>
                  </Svg>
                )}
              </Text>
            </View>
          )}
          expanded={isCardOpen}
          onPress={handelCardOpen}>
          {dataComponents.map((item, idx) => (
            <List.Item
              key={idx}
              style={[
                styles.listItem,
                idx === dataComponents.length - 1
                  ? {borderBottomWidth: 0}
                  : null,
              ]}
              borderless={idx === dataComponents.length - 1 ? true : false}
              left={() => (
                <View style={styles.leftContent}>
                  {item.icon}
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
              )}
              right={() => (
                <View style={styles.rightContent}>
                  <Text style={styles.itmeCaption} numberOfLines={2}>
                    {item.caption}
                  </Text>
                </View>
              )}
            />
          ))}
        </List.Accordion>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  Accordion: {
    backgroundColor: 'white',
    paddingVertical: 0,
    marginVertical: -5,
    paddingHorizontal: -10,
    // marginHorizontal: -10,
  },
  accordionAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  listItem: {
    paddingVertical: -5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itmeCaption: {color: 'black', fontWeight: 'bold', fontSize: 15},
  itemTitle: {color: 'gray'},
});

export default WeatherForcastCard;
