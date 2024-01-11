import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RightArrowIcon} from '../../assets/icons';
import TextButton from '../TextButton';

const Chip = ({
  dataList = [],
  activeChip,
  setActiveChip,
  plotId,
  chipType = 'default',
}) => {
  const navigation = useNavigation();
  let chipBackgroundStyle;
  switch (chipType) {
    case 'WeatherChip':
      chipBackgroundStyle = {
        ...styles.CustomTabWrapper,
        flexDirection: 'row',
        alignItems: 'center',
      };
      break;
    case 'HomeWeatherChip':
      chipBackgroundStyle = {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 14,
      };
      break;
  }

  return (
    <ScrollView
      style={{
        width: '100%',
      }}>
      <View style={chipBackgroundStyle}>
        {dataList.map((item, index) => {
          const labelBorderColor =
            chipType === 'HomeWeatherChip'
              ? '#327242'
              : activeChip === index
              ? '#327242'
              : '#fff';
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveChip(index)}
              style={styles.customTab(activeChip, index, labelBorderColor)}
              activeOpacity={0.8}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 15,
                  width: '100%',
                  textAlign: 'center',
                  color: activeChip === index ? '#fff' : 'black',
                  fontWeight: 'bold',
                }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{padding: 16, width: '100%'}}>
        {dataList[activeChip].content}
      </View>
      {chipType === 'HomeWeatherChip' && (
        <TextButton
          btnText="View More Weather Updates"
          icon={<RightArrowIcon />}
          onPress={() =>
            navigation.navigate('PlotDetailsScreen', {
              plotId: plotId,
              tabId: 1,
            })
          }
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  CustomTabWrapper: {
    backgroundColor: 'white',
    borderRadius: 32,
    borderColor: '#327242',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    padding: 4,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  customTab: (activeChip, index, borderColor) => ({
    height: '100%',
    flex: 1,
    borderColor: borderColor,
    backgroundColor: activeChip === index ? '#327242' : '#fff',
    borderRadius: 32,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
  }),
});

export default Chip;
