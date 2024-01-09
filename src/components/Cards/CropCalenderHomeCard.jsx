import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CropCalenderHomeCard = ({data}) => {
  const navigation = useNavigation();
  const stageStatus = data['cropStageStatus'];
  const regex = /<[^>]*>/g;

  let stageColor, stageNameColor;
  switch (stageStatus) {
    case 'completed':
      stageColor = 'gray';
      stageNameColor = 'gray';
      break;
    case 'ongoing':
      stageColor = '#327242';
      stageNameColor = 'black';
      break;
    case 'upcoming':
      stageColor = 'black';
      stageNameColor = 'gray';
      break;
    default:
      stageColor = 'black';
      stageNameColor = 'black';
  }

  return (
    <Card style={styles.cardStyle}>
      <View style={styles.cardContentContainer}>
        <View style={styles.statusContainer}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: stageColor}}>
            {stageStatus.toUpperCase()}
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
            30 DEC - 11 JAN
          </Text>
        </View>
        <View style={styles.stageContainer}>
          <View
            style={{
              flexDirection: 'column',
              flex: 2,
              gap: 6,
              alignItems: 'flex-start',
            }}>
            <Text
              style={{fontSize: 16, fontWeight: '500', color: stageNameColor}}>
              {data.crop_stage_translation.language_label}
            </Text>
            <Text
              style={{fontSize: 14, fontWeight: '400', color: 'black'}}
              numberOfLines={2}>
              {data.crop_stage_translation.description.replace(regex, '')}
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StageDetailsScreen', {
                  stageData: {
                    StageTitle: data?.crop_stage_translation?.language_label,
                    StageDescription: data?.crop_stage_translation?.description,
                    imageUrl:
                      data?.crop_stage_images_serializer[0]?.image_assoc
                        ?.images,
                  },
                })
              }>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#327242'}}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              padding: 8,
            }}>
            <Image
              source={{
                uri: data?.crop_stage_images_serializer[0]?.image_assoc?.images,
              }}
              style={{width: '100%', height: '90%'}}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: 'white',
    width: 350,
    height: 170,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  cardContentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  statusContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stageContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CropCalenderHomeCard;
