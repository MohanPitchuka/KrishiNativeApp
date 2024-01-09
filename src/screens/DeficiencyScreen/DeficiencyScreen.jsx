import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {List, Card} from 'react-native-paper';
import CustomWebView from '../../components/StageAccordian/webview';
import AskExpertCard from '../../components/Cards/AskExpertCard';

import {DeficiencyScreenStyles as styles} from './DeficiencyScreen-styles';

const DeficiencyScreen = props => {
  const navigation = useNavigation();
  const {data, deficiencyLogo, htmlData, deficiencyName} = props.route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      return true;
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
      <Image
        source={{
          uri: data['images'][0],
        }}
        style={styles.stageImage}
      />
      <Card style={styles.detailCard} mode="contained">
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}>
          <Image source={deficiencyLogo} style={{height: 50, width: 50}} />
          <Text
            style={{color: 'black', fontWeight: 'bold', fontSize: 20}}
            numberOfLines={2}>
            {deficiencyName}
          </Text>
        </View>
      </Card>
      <View style={{flex: 1, flexDirection: 'column', gap: 10}}>
        {htmlData.map((item, index) => {
          return (
            <Card style={styles.detailCard} key={index}>
              <CustomWebView htmlContent={item} />
            </Card>
          );
        })}
      </View>
      <AskExpertCard />
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   stageImage: {
//     height: 250,
//     borderRadius: 10,
//     backgroundColor: 'black', //'#3cd93c2e',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.16,
//     shadowRadius: 4,
//     // elevation: 2,
//     paddingVertical: 4,
//     marginHorizontal: 12,
//     marginVertical: 16,
//   },
//   AgronomicalImage: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 16,
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.16,
//     shadowRadius: 4,
//     padding: 0,
//     maxWidth: 450,
//     height: '100%',
//     marginHorizontal: 10,
//   },
//   AgronomicalImageImage: {
//     borderRadius: 20,
//   },
//   detailCard: {padding: 16, borderRadius: 0, backgroundColor: 'white'},
// });

export default DeficiencyScreen;
