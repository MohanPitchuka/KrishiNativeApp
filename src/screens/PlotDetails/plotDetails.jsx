import React, {useState} from 'react';

import {useQuery, useQueries} from '@tanstack/react-query';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosRequest from '../../api/axiosRequest';
import PlotCropInfo from './plotCropInfo';
import WeatherDetails from '../WeatherUpdates/weather';

const loggedInAccountNo = AsyncStorage.getItem('accountNumber');

const PlotDetails = ({route}) => {
  const {tabId, plotId} = route.params;
  const [activeTab, setActiveTab] = useState(tabId ? tabId : 0);
  const [plotList, setPlotList] = useState([]);
  const [newPlotList, setNewPlotList] = useState([]);

  const handleTabPress = index => {
    setActiveTab(index);
  };

  // const tabsData = ['Plot & Crop Info', 'Weather', 'Nutrition Data'];
  const tabsData = [
    {
      label: 'Plot & Crop Info',
      content: <PlotCropInfo plotId={plotId} plotList={newPlotList} />,
    },
    {
      label: 'Weather',
      content: <WeatherDetails plotId={plotId} />,
    },
  ];

  const plotQueryData = useQuery({
    queryKey: ['home', 'plotDetails', 'getPlotsQuery', plotId],
    queryFn: () =>
      axiosRequest({
        apiName: 'getPlot',
        resourceType: 'jams',
      }),
    onSuccess: data => {
      setPlotList(data?.data);
    },
    onError: error => {
      console.log(error);
    },
    enabled: !!plotId,
  });

  const getCropsQuery = useQuery({
    queryKey: ['home', 'plotDetails', 'getCrops', plotList],
    queryFn: () =>
      axiosRequest({
        apiName: 'getCrop',
        resourceType: 'jams',
      }),
    onSuccess: data => {
      const cropInfo = data?.data?.crop;
      const cropIconData = plotList?.map((item, index) => {
        var foundCrop;
        var cropDetails;
        if (item?.crop?.length > 0) {
          foundCrop = cropInfo?.find(
            obj =>
              obj?.static_identifier ===
              item?.crop[0]?.crop_name_static_identifier,
          );
          if (foundCrop) {
            cropDetails = item?.crop[0];
          }
        } else if (item?.harvested_crop?.length > 0) {
          const harvestedCropListLength = item?.harvested_crop?.length;
          foundCrop = cropInfo?.find(
            obj =>
              obj?.static_identifier ===
              item?.harvested_crop[harvestedCropListLength - 1]
                ?.crop_name_static_identifier,
          );
          if (foundCrop) {
            cropDetails = item?.harvested_crop[harvestedCropListLength - 1];
          }
        }
        return {...foundCrop, ...cropDetails};
      });
      const finalPlotListArr = plotList?.map(
        function (plot, i) {
          return {...plot, cropIcon: cropIconData[i]};
        }.bind(this),
      );
      setPlotList(finalPlotListArr);
      setNewPlotList(finalPlotListArr);
    },
    onError: error => {
      console.log(error);
    },
    enabled: !!plotList,
  });

  return (
    <ScrollView style={{backgroundColor: 'white'}} stickyHeaderIndices={[0]}>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => handleTabPress(index)}
              style={{
                marginHorizontal: 10,
                paddingBottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: 'lightgreen',
                borderBottomWidth: activeTab === index ? 4 : 0,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: '500',
                }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{
            backgroundColor: '#044d2c',
            height: 50,
            width: '100%',
          }}
        />
      </View>
      {newPlotList.length > 0 && tabsData[activeTab].content}
    </ScrollView>
  );
};

export default PlotDetails;
