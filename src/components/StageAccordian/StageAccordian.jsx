import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'; // Import necessary components from React Native
import {List, Card} from 'react-native-paper';
import {Svg, Path} from 'react-native-svg';
import {WebView} from 'react-native-webview';
import {StyleSheet} from 'react-native';
import CustomWebView from './webview';

import {useNavigation} from '@react-navigation/native';

const StageAccordion = ({data, title, image, setSymptom, setSymptomData}) => {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();

  if (!data) {
    return null;
  }

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <List.Accordion
      titleNumberOfLines={2}
      title={title}
      titleStyle={{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      }}
      expanded={expanded}
      theme={{colors: {background: !expanded ? 'white' : '#e7e7e7'}}}
      onPress={handlePress}
      style
      left={props => (
        <View style={styles.AgronomicalImage}>
          <Image source={image} style={styles.AgronomicalImageImage} />
        </View>
      )}
      right={props => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {!expanded ? (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={20}
              height={20}
              color="#327242"
              viewBox="0 0 24 24">
              <Path
                fill-rule="evenodd"
                d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></Path>
            </Svg>
          ) : (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={20}
              height={20}
              color="#327242"
              viewBox="0 0 24 24">
              <Path
                fillRule="evenodd"
                d="M 2 11 L 22 11 L 22 13 L 2 13 Z"></Path>
            </Svg>
          )}
        </View>
      )}
      id={'1'}>
      <>
        {data.map((item, index) => {
          if ('images' in item) {
            return null;
          } else {
            return (
              <Card
                key={index}
                style={{
                  backgroundColor: 'white',
                  marginHorizontal: 16,
                  marginVertical: 10,
                  paddingVertical: 15,
                }}
                mode="elevated">
                <Card.Content style={{paddingVertical: -5}}>
                  <CustomWebView
                    key={index}
                    htmlContent={item.language_label}
                  />
                </Card.Content>
              </Card>
            );
          }
        })}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 10,
            padding: 12,
          }}>
          {data.map((item, index) => {
            const originalData = title;
            let imageName = '';
            let dataObj = null;

            if ('images' in item) {
              if (title.includes('Deficiency')) {
                return (
                  <Card
                    key={index}
                    style={{width: '48%', backgroundColor: '#fff'}}
                    onPress={() => {
                      navigation.navigate('DeficiencyDetailsScreen', {
                        data: item,
                        deficiencyLogo: image,
                        deficiencyName:
                          item.nutrient_management_data
                            .specific_nutrient_deficiency,
                        htmlData: [
                          item.nutrient_management_data.symptom,
                          item.nutrient_management_data.corrective_measures,
                        ],
                      });
                    }}
                    mode="elevated">
                    <Card.Cover
                      source={{uri: item.images[0]}}
                      style={{
                        height: 150,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    />
                    <Card.Title
                      titleStyle={{fontWeight: 'bold'}}
                      title={
                        item?.nutrient_management_data
                          ?.specific_nutrient_deficiency.length > 51
                          ? item?.nutrient_management_data?.specific_nutrient_deficiency?.substring(
                              0,
                              51,
                            ) + '...'
                          : item?.nutrient_management_data
                              ?.specific_nutrient_deficiency
                      }
                    />
                  </Card>
                );
              } else {
                imageName = originalData.toLowerCase().split(' ').join('_') + '_data';
              }
              return (
                <Card
                  style={{width: '48%', backgroundColor: '#fff'}}
                  onPress={() => {
                    navigation.navigate('DeficiencyDetailsScreen', {
                      data: item,
                      deficiencyLogo: image,
                      deficiencyName: item[imageName].name,
                      htmlData: [
                        item[imageName].stage_of_occurence,
                        item[imageName].symptom_for_identification,
                        item[imageName].preventive_measures,
                        item[imageName].control_measures,
                      ],
                    });
                  }}
                  key={index}>
                  <Card.Cover
                    source={{uri: item.images[0]}}
                    style={{
                      height: 150,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Card.Title
                    titleStyle={{fontWeight: 'bold'}}
                    title={item[imageName]?.name}
                  />
                </Card>
              );
            } else {
              return null;
            }
          })}
        </View>
      </>
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  POPAccordion: isOpen => ({
    paddingVertical: -10,
    backgroundColor: 'white',
  }),
  AccordionContent: {
    margin: 5, // Adjust as needed
    borderRadius: 10, // Adjust as needed
    backgroundColor: 'gray',
  },
  AgronomicalImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    padding: 0,
    maxWidth: 450,
    height: '100%',
    marginHorizontal: 10,
  },
  AgronomicalImageImage: {
    borderRadius: 20,
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    overflow: 'scroll',
  },
  TextBodyMBold: {
    padding: 16, // Adjust as needed
  },

  DeficiencyName: {
    flexDirection: 'row',
  },
});

export default StageAccordion;
