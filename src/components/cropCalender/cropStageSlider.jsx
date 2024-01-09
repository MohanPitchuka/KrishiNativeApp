import React, {useEffect, useState} from 'react';
import {getStageDetails} from '../../utils/getStageDetails';
import {CROP_DATA, CROP_STAGES} from '../../utils/dummyData/cropCalenderData';
import CropCalenderHomeCard from '../Cards/CropCalenderHomeCard';
import TextButton from '../TextButton';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RightArrowIcon} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

import {useQuery, useQueries, useMutation} from '@tanstack/react-query';

const CropStageSlider = () => {
  const navigation = useNavigation();
  const [calendarStage, setCalendarStage] = useState([]);
  const [baseDateForCropStageDuration, setBaseDateForCropStageDuration] =
    useState(null);

  useEffect(() => {
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

  return (
    <>
      <Text style={styles.heading}>Crop Calendar</Text>
      {calendarStage.length > 0 && (
        <FlatList
          horizontal={true}
          style={{padding: 4, paddingBottom: 0}}
          data={calendarStage}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          initialNumToRender={1}
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
