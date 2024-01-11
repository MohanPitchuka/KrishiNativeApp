import React, {useEffect, useState} from 'react';
import {getStageDetails} from '../../utils/getStageDetails';
import {CROP_DATA, CROP_STAGES} from '../../utils/dummyData/cropCalenderData';
import CropCalenderHomeCard from '../Cards/CropCalenderHomeCard';
import TextButton from '../TextButton';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RightArrowIcon} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

import {useQuery, useQueries, useMutation} from '@tanstack/react-query';
import axios from 'axios';

const CropStageSlider = () => {
  const navigation = useNavigation();
  const [calendarStage, setCalendarStage] = useState([]);
  const [baseDateForCropStageDuration, setBaseDateForCropStageDuration] =
    useState(null);

  useEffect(() => {
    getData();
    const stageDetails = getStageDetails(CROP_DATA, CROP_STAGES, false);
    setCalendarStage(stageDetails);
  }, []);

  // const queryStageData = useQuery({
  //   queryKey: ['stageDetails', 'getCropsStages', cropName],
  //   queryFn: () =>
  //     axiosRequest({
  //       apiName: 'getCropStagesData',
  //       additionalParams: {
  //         crop_assoc: 'CR_POTATO',
  //         variation: '', //cropVariety ? cropVariety : '',
  //       },
  //     }),
  //   onSuccess: data => {
  //     console.log('Stage Data: ', data);
  //     // setCropStages(
  //     //   !harvestedCrop
  //     //     ? getStageDetails(cropData, data?.data)
  //     //     : getStageDetails(cropData, data?.data, false, true),
  //     // );
  //     // setAllCropStages(data?.data);
  //   },
  //   onError: error => {
  //     console.log(error);
  //   },
  //   enabled: !!cropName,
  // });

  const getData = async () => {
    console.log('Inside get data');
    try {
      const req = axios.get('https://kms.sit.cats.jvts.net/api/v1/business/get-crop-stages/', {
        headers: {
          Authorization: `JAMS eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNzQ3YTI4ZDItODFhOS00NjdhLThhZWYtM2I3M2MwN2E3NzQxIiwicGhvbmVfbnVtYmVyIjoiODIwODM2NjI4MiIsImV4cCI6MTcwNzM4OTg4Mi4xMzExODgsInNlc3Npb25faWQiOiJhNzc4YjY3MDdiMGZiNmFhZmI4OWU0Njk2Mjk5NDg0OCIsInBsYXRmb3JtIjoibW9iaWxlIiwidXNlcm5hbWUiOiIyMzIyNzQiLCJmaXJzdF9uYW1lIjoiVmlzaGFsIiwidXVpZCI6IjQ4YjA1NTY3LTk2NjgtNDRlNi1hMTlkLWRkM2VlMjEyNzkzMyIsImVtYWlsIjoiTm9uZSIsIm1lbWJlcl9zaW5jZSI6IjIwMjMtMTItMjcgMDk6NTE6MjQuNzQ0MTkwIiwicGxhdGZvcm1fZGV2aWNlX2lkIjpudWxsfQ.YKRkjO3pCL_UNwVs71DdnORFE1QIbJqHknfL-MxdhiI-U6nm4GOOu9YY4v7e02T-H4GwdVH_xG3w4AThMUf6k-YrVtJZRXOEvV07c3EHiU8Z33BcJhRSXscbgTTW8dBImKBgekynI5q3GRzz024EwdmFE-bSEdCZ2qoI1wS8JR79abqW_XhzkUCkw1lBZIRsSt-fheiHt6d9tIWNlnE8jjHhYXMjT_DfTj4usCiSAqszPjM6Ksv2_iaUGVohMEdftduQHn34Yuo-qVk85WrQM2XSJpkGQMIcbmwHz5d6zvtvz9yDaMrVrdEenNUrk5Rd3pv4Y_x3RpZATEvp451rIIapOBcZZrBM9bf3ULpKEXjOmQBabZJV6fCUj0MOAFMij6af-xPz-nL_2DlB29ymyOcqNmc8jPWj0wg0qI4bYs1AirQk0x6JuHQ58HMLBDBey_Yi1lhvQycSCdHInOTfRAJI50q2ikUM1-Z-cToQp6xYYKYuBU1ewH89Kp-baqsuH361esZfmpoPzqeWt_jc_8AaIJ4HLnqrCT5PO9xazip7gQB8Ja6F5vNlNFOcTHw1nmDFbBvk1cMktduA30ffAm8tg1k4vgq07YtuAi1OPDh8AXCXCbwwgENRqeWaJZ_eoqlTyT23VkO5cOQJ7bNycPlPrilcuPhLIhQxuhb_GEk`,
        },
        params: {
          crop_assoc: 'CR_POTATO',
          language_code: 'en',
          variation: '', //cropVariety ? cropVariety : '',
        },
        withCredentials: false,
      });
      const res = await req;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Text style={styles.heading}>Crop Calendar</Text>
      {calendarStage.length > 0 && (
        <FlatList
          horizontal={true}
          // style={{padding: 4, paddingBottom: 0}}
          data={calendarStage}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          initialNumToRender={3}
          // initialScrollIndex={1}
          renderItem={({item}) => <CropCalenderHomeCard data={item} />}
        />
      )}
      <View style={styles.txtButtonContainer}>
        <TextButton
          btnText="View full calendar"
          icon={<RightArrowIcon />}
          onPress={() => navigation.navigate('CropCalenderScreen')}
        />
      </View>
    </>
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
});

export default CropStageSlider;
