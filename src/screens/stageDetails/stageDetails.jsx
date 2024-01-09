import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {List} from 'react-native-paper';

//assets
import IntercultureImage from '../../assets/pngs/IntercultureManagement.png';
import NutrientdeficiencyImage from '../../assets/pngs/NutrientDeficiencyIdentificationGuide.png';
import PGRImage from '../../assets/pngs/PGRManagement.png';
import NutrientmanagementImage from '../../assets/pngs/NutrientManagement.png';
import WaterImage from '../../assets/pngs/WaterManagement.png';
import WeedImage from '../../assets/pngs/WeedManagement.png';
import PestImage from '../../assets/pngs/PestManagement.png';
import DiseaseImage from '../../assets/pngs/DiseaseManagement.png';

import StageAccordion from '../../components/StageAccordian/StageAccordian';
import DeficiencyScreen from '../DeficiencyScreen/DeficiencyScreen';

// styles
import {StageDetailsStyles as styles} from './StageDetails-styles';
import {
  Disease,
  Intercultural,
  Nutrient,
  NutrientDeficiency,
  Water,
  pestManagmentData,
} from '../../utils/dummyData/detailsData';

const StageDetails = ({navigation, route}) => {
  const [symptom, setSymptom] = useState(false);
  const [symptomData, setSymptomData] = useState([]);
  const regex = /<[^>]*>/g;

  const {stageData} = route.params;

  const accordionData = [
    {
      Stagetitle: 'Interculture Management',
      image: IntercultureImage,
      popData: Intercultural,
    },
    {
      Stagetitle: 'Nutrient Management',
      image: NutrientmanagementImage,
      popData: Nutrient,
    },
    {
      Stagetitle: 'Water Management',
      image: WaterImage,
      popData: Water,
    },
    {
      Stagetitle: 'Pest Management',
      image: PestImage,
      popData: pestManagmentData,
    },
    {
      Stagetitle: 'Nutrient Deficiency Management',
      image: NutrientdeficiencyImage,
      popData: NutrientDeficiency,
    },
    {
      Stagetitle: 'Disease Management',
      image: DiseaseImage,
      popData: Disease,
    },
  ];

  return (
    <ScrollView style={styles.pageView}>
      {!symptom ? (
        <>
          <View style={styles.dateContainer}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
              06 Feb-06 Mar
            </Text>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 14,
                color: 'coral',
              }}>
              Upcoming
            </Text>
          </View>
          <Image
            source={{
              uri: stageData.imageUrl,
            }}
            style={styles.stageImage}
          />
          <View style={styles.stageDetails}>
            <Text style={styles.stageTitle}>{stageData.StageTitle}</Text>
            <Text style={styles.stageDescription}>
              {stageData.StageDescription.replace(regex, '')}
            </Text>
          </View>
          <View style={styles.AgronomicalSection}>
            <Text style={styles.AgronomicalTitle}>Agronomical Section</Text>
            <View style={{backgroundColor: '#e7e7e7'}}>
              {accordionData.map((item, index) => {
                return (
                  <StageAccordion
                    key={index}
                    data={item.popData}
                    title={item.Stagetitle}
                    image={item.image}
                    setSymptom={setSymptom}
                    setSymptomData={setSymptomData}
                  />
                );
              })}
            </View>
          </View>
        </>
      ) : (
        <DeficiencyScreen data={symptomData} />
      )}
    </ScrollView>
  );
};

export default StageDetails;
