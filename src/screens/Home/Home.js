import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-paper';
import React from 'react';
import {useState, useEffect} from 'react';

// import ProtectedRoute from '../../utils/protectedRoute/ProtectedRoute';
// import AuthChecker from '../../utils/authChecker/AuthChecker';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Chip from '../../components/Chip/Chip';
import {useQuery, useQueries, useMutation} from '@tanstack/react-query';
import axiosRequest from '../../api/axiosRequest';
import {
  currentWeatherData,
  weatherForcastThreeDaysData,
} from '../WeatherUpdates/weatherDataComponent';
import axios from 'axios';
import CropStageSlider from '../../components/cropCalender/cropStageSlider';


const Home = ({navigation}) => {
  const [plotList, setPlotList] = useState([]);
  const [weatherForecast, setweatherForecast] = useState(null);
  const [weatherActiveChip, setWeatherActiveChip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [plotId, setPlotId] = useState('');
  const [cropName, setCropName] = useState('');
  const [cropVariety, setCropVariety] = useState('');
  const [allCropStages, setAllCropStages] = useState([]);

  const queryData = useQueries({
    queries: [
      {
        queryKey: ['home', 'getPlot'],
        queryFn: () =>
          axiosRequest({
            apiName: 'getPlot',
            resourceType: 'jams',
          }),
        onSuccess: data => {
          setPlotList(data?.data);
          setPlotId(data?.data[0].plot.plot_id);
          setCropName(data?.data[0].crop[0].crop_name_static_identifier);
          setCropVariety(data?.data[0].crop[0].crop_variety);
        },
        onError: error => {
          console.log(error);
        },
      },
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

  // console.log('Crop Data: ', plotList[1]);

  return (
    <ScrollView>
      <Text style={styles.heading}>Weather Update</Text>
      <Card
        style={{
          margin: 16,
          backgroundColor: 'white',
        }}>
        <View>
          {weatherForecast ? (
            <Chip
              plotId={plotId}
              activeChip={weatherActiveChip}
              setActiveChip={setWeatherActiveChip}
              chipType="HomeWeatherChip"
              dataList={[
                {
                  label: 'Current Weather',
                  content: (
                    <View style={styles.currentWeatherCard}>
                      {currentWeatherData({
                        forcastData: weatherForecast.forecast,
                      })}
                    </View>
                  ),
                },
                {
                  label: '3 Days Forecast',
                  content: weatherForcastThreeDaysData({
                    forcastData: weatherForecast.forecast,
                  }),
                },
              ]}
            />
          ) : (
            <View style={styles.loderStyle}>
              <ActivityIndicator size="large" color="#03753C" />
            </View>
          )}
        </View>
      </Card>
      <CropStageSlider />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginHorizontal: 16,
    marginTop: 20,
  },
  txtButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btnText: {
    color: '#327242',
    fontSize: 16,
    margin: 10,
    fontWeight: '500',
  },
  iconContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  currentWeatherCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
  },
  loderStyle: {
    flex: 1,
    height: 100,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;