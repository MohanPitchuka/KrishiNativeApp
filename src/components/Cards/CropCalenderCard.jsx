import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Button} from 'react-native-paper';

const CropCalenderCard = ({data, borderColor, stageStatus}) => {
  const navigation = useNavigation();
  const regex = /<[^>]*>/g;
  let mode, cardBorderColor, cardBackgoundColor;

  switch (stageStatus) {
    case 'completed':
      mode = 'contained';
      cardBorderColor = '#fafafa';
      cardBackgoundColor = '#fafafa';
      break;
    case 'ongoing':
      mode = 'outlined';
      cardBorderColor = 'green';
      cardBackgoundColor = 'white';
      break;
    case 'upcoming':
      mode = 'elevated';
      cardBorderColor = 'green';
      cardBackgoundColor = 'white';
      break;
    default:
      mode = 'elevated';
      cardBackgoundColor = 'white';
  }

  return (
    <View style={{margin: 12}}>
      <Card
        mode={mode}
        style={
          stageStatus === 'ongoing'
            ? {
                borderColor: 'green',
                backgroundColor: cardBackgoundColor,
                borderWidth: 2,
              }
            : {
                backgroundColor: cardBackgoundColor,
                elevation: 0,
              }
        }>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              paddingHorizontal: 0,
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: data.imageUrl,
              }}
              style={{height: 100, width: '100%', flex: 1}}
            />
            <View style={{flex: 1.5, flexDirection: 'column', gap: 10}}>
              <Text style={{fontWeight: '500', color: 'black', fontSize: 20}}>
                {data.StageTitle}
              </Text>
              <Text style={{color: 'black'}} numberOfLines={2}>
                {data.StageDescription.replace(regex, '')}
              </Text>
              <Button
                buttonColor="white"
                mode="outlined"
                textColor="orange"
                style={{
                  borderColor: 'orange',
                  borderWidth: 2,
                }}
                labelStyle={{fontWeight: 'bold', fontSize: 16}}
                onPress={() => navigation.navigate('StageDetailsScreen', {
                  stageData: data
                })}>
                Read More
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  ongoingStyle: {
    borderColor: 'green',
    backgroundColor: 'white',
    borderWidth: 2,
  },
});

export default CropCalenderCard;
