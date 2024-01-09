import React from 'react';
import {Image, Text, View} from 'react-native';
import {Card, Button} from 'react-native-paper';
import AgronomistHelpImage from '../../assets/agronomistImage.png';

const AskExpertCard = () => {
  return (
    <Card style={{margin: 14, backgroundColor: 'white'}}>
      <Card.Content>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}>
          <View
            style={{flex: 1, flexDirection: 'column', padding: 12, gap: 10}}>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              Do you need help with your crop
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              Get Help from agri exoerts
            </Text>
            <Button
              mode="contained"
              elevation={1}
              style={{flex: 1}}
              buttonColor="#327242"
              labelStyle={{fontSize: 16, fontWeight: 'bold'}}
              textColor="white">
              Ask Expert
            </Button>
          </View>
          <Image source={AgronomistHelpImage} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default AskExpertCard;
