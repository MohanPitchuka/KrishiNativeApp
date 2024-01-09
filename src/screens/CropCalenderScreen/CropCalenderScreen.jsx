import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CropCalenderCard from '../../components/Cards/CropCalenderCard';
import {getStageDetails} from '../../utils/getStageDetails';
import TimeLine from '../../components/TimeLine/TimeLine';
import { CROP_DATA, CROP_STAGES } from '../../utils/dummyData/cropCalenderData';

const CropCalenderScreen = () => {
  const [calendarStage, setCalendarStage] = useState([]);
  const [baseDateForCropStageDuration, setBaseDateForCropStageDuration] =
    useState(null);

  useEffect(() => {
    setCalendarStage(getStageDetails(CROP_DATA, CROP_STAGES, true));
  }, []);

  // const renderCropStageDuration = stageDetails => {
  //   let calculatedStageDuration = calculateStageDuration(
  //     baseDateForCropStageDuration,
  //     stageDetails?.crop_stage_data?.start_date,
  //     stageDetails?.crop_stage_data?.end_date,
  //   );
  //   return `${dayjs(calculatedStageDuration?.startDate).format(
  //     'DD MMM ',
  //   )} - ${dayjs(calculatedStageDuration?.endDate).format('DD MMM')}`;
  // };

  const timelineData = calendarStage.map((data, index) => {
    const cropCalendarData = {
      StageTitle: data?.crop_stage_translation?.language_label,
      StageDescription: data?.crop_stage_translation?.description,
      imageUrl: data?.crop_stage_images_serializer[0]?.image_assoc?.images,
    };
    const stageStatus = data?.cropStageStatus;
    let dotcolor, bordercolor;
    switch (stageStatus) {
      case 'completed':
        dotcolor = '#7e7e7e';
        bordercolor = '#7e7e7e';
        break;
      case 'ongoing':
        dotcolor = '#04743c';
        bordercolor = '#04743c';
        break;
      case 'upcoming':
        dotcolor = '#c06019';
        bordercolor = '#c06019';
        break;
      default:
        dotcolor = '#7e7e7e';
        bordercolor = '#7e7e7e';
    }

    return {
      content: (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 12,
            marginTop: 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 12,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 16,
              }}>
              Stage Duration
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: bordercolor,
                fontSize: 16,
              }}>
              {stageStatus}
            </Text>
          </View>
          <CropCalenderCard data={cropCalendarData} stageStatus={stageStatus} />
        </View>
      ),
      dotcolor,
      bordercolor,
    };
  });

  return (
    <ScrollView style={{backgroundColor: 'white', paddingVertical: 8}}>
      <TimeLine dataList={timelineData} />
    </ScrollView>
  );
};

export default CropCalenderScreen;
