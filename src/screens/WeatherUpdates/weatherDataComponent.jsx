import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {WEATHER_fORCAST} from '../../utils/dummyData/weatherDataJson';
import CurrentWeatherCardItem from '../../components/WeatherCardItem/CureentWeatherCardItem';
import WeatherForcastCard from '../../components/WeatherCardItem/WeatherForcastCard';
import {
  HomeForcastDetail,
  IconColumn,
} from '../../components/WeatherCardItem/HomeForcastDetail';
import {HumidityIcon, RainfallIcon, TemperatureIcon} from '../../assets/icons';

const forcastData = WEATHER_fORCAST[0].forecast;
const todaysWeather = forcastData.today;

export function currentWeatherData({forcastData}) {
  const todaysWeatherData = forcastData.today;
  return (
    <>
      <CurrentWeatherCardItem
        title="Temperature"
        caption={`${todaysWeatherData.temp}°C`}
        icon={<TemperatureIcon fill={true} />}
      />
      <CurrentWeatherCardItem
        title="Humidity"
        caption={`${todaysWeatherData.humidityPer}%`}
        icon={<HumidityIcon fill={true} />}
      />
      <CurrentWeatherCardItem
        title="Rainfall Probability"
        caption={`${todaysWeatherData.precipProbabilitytoday}%`}
        icon={<RainfallIcon fill={true} />}
      />
      <CurrentWeatherCardItem
        title="Rainfall"
        caption={`${todaysWeatherData.precipitationtoday} mm`}
        icon={<RainfallIcon fill={true} />}
      />
    </>
  );
}

export function weatherForcastData({forcastData}) {
  const todaysWeather = forcastData.today;
  return (
    <View style={{flexDirection: 'column', gap: 10}}>
      <WeatherForcastCard data={todaysWeather} day="today" />
      <WeatherForcastCard data={forcastData.tomorrow} day="tomorrow" />
      <WeatherForcastCard
        data={forcastData.day_after_that}
        day="day_after_tomorrow"
      />
      <WeatherForcastCard
        data={forcastData.day_after_that}
        day="day_after_that"
      />
      <WeatherForcastCard data={forcastData.fourth_day} day="fourth_day" />
      <WeatherForcastCard data={forcastData.fifth_day} day="fifth_day" />
      <WeatherForcastCard data={forcastData.sixth_day} day="sixth_day" />
      <WeatherForcastCard data={forcastData.sevent_day} day="sevent_day" />
    </View>
  );
}

export function weatherForcastThreeDaysData({forcastData}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }}>
      <IconColumn />
      <HomeForcastDetail data={forcastData.today} day={'today'} />
      <HomeForcastDetail data={forcastData.tomorrow} day={'tomorrow'} />
      <HomeForcastDetail
        data={forcastData.day_after_that}
        day={'day_after_tomorrow'}
      />
    </View>
  );
}

export const weatherDataComponent = [
  {
    label: 'Current Weather',
    content: (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 10,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 12,
          borderColor: '#327242',
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 2},
          elevation: 2,
          paddingVertical: 18,
          paddingHorizontal: 12,
        }}>
        {currentWeatherData}
      </View>
    ),
  },
  {
    label: 'Weather Forcast',
    content: weatherForcastData,
  },
];

const styles = StyleSheet.create({
  currentWeatherCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#327242',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
});
