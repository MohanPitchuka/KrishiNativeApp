import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';

// queries
import {useQuery, useQueries, useMutation} from '@tanstack/react-query';
import axiosRequest from '../../api/axiosRequest';

// custom components
import Chip from '../../components/Chip/Chip';
import {
  currentWeatherData,
  weatherDataComponent,
  weatherForcastData,
  weatherForcastThreeDaysData,
} from './weatherDataComponent';

const WeatherDetails = ({route}) => {
  const [weatherActiveChip, setWeatherActiveChip] = useState(0);
  const [weatherForecast, setweatherForecast] = useState(null);
  const {plotId} = route.params;

  const queryData = useQueries({
    queries: [
      {
        queryKey: ['home', 'getPlotWeatherForecast', plotId],
        queryFn: () =>
          axiosRequest({
            apiName: 'getPlotWeatherForecast',
            resourceType: 'jams',
            additionalParams: {
              plot_id: plotId,
            },
          }),
        onSuccess: data => {
          setweatherForecast(data?.data[0]);
        },
        onError: error => {
          console.log(error);
        },
        enabled: !!plotId,
      },
    ],
  });

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={styles.screenView}>
          {weatherForecast && (
            <Chip
              activeChip={weatherActiveChip}
              setActiveChip={setWeatherActiveChip}
              chipType="WeatherChip"
              dataList={[
                {
                  label: 'Current Weather',
                  content: (
                    <Card
                      style={{
                        backgroundColor: 'white',
                      }}>
                      <Card.Content>
                        <View style={styles.currentWeatherCard}>
                          {currentWeatherData({
                            forcastData: weatherForecast.forecast,
                          })}
                        </View>
                      </Card.Content>
                    </Card>
                  ),
                },
                {
                  label: 'Weather Forecast',
                  content: weatherForcastData({
                    forcastData: weatherForecast.forecast,
                  }),
                },
              ]}
            />
          )}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  currentWeatherCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
  },
});

export default WeatherDetails;
