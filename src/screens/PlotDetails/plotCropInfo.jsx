import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';

const PlotCropInfo = ({plotId, plotList}) => {
  const plot = plotList.find(item => item.plot.plot_id === plotId);

  return (
    <ScrollView>
      <Card mode="elevated" style={{margin: 10, backgroundColor: 'white'}}>
        <View style={styles.cropPlotCard}>
          <View style={styles.cropCardTitleWrapper}>
            <Image
              source={{
                uri: `https://cdn.jiokrishi.com${plot.cropIcon.image_url}`,
              }}
              style={styles.cropImageWrapper}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.cropTitle}>{plot.cropIcon.crop_name}</Text>
              <Text style={{fontSize: 14}}>
                Date of Plantation{' '}
                {
                  <Text style={{fontWeight: '500', color: 'black'}}>
                    {plot.cropIcon.date_of_plantation
                      ? plot.cropIcon.date_of_plantation
                      : '-'}
                  </Text>
                }
              </Text>
            </View>
          </View>
          <View style={styles.plotDetailsBody}>
            <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
              <Text style={{fontWeight: '500', fontSize: 15}}>
                Plot Name/No.
              </Text>
              <Text style={{fontWeight: '500', fontSize: 17, color: 'black'}}>
                {plot.cropIcon.name}
              </Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
              <Text style={{fontWeight: '500', fontSize: 15}}>
                Crop Variety
              </Text>
              <Text style={{fontWeight: '500', fontSize: 17, color: 'black'}}>
                {plot.cropIcon.crop_variety_user_input
                  ? plot.cropIcon.crop_variety_user_input
                  : `--`}
              </Text>
            </View>
          </View>
        </View>
      </Card>
      <Card
        style={{
          margin: 10,
          height: 200,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
        mode="elevated">
        <Text style={{color: 'black', fontSize: 16}}>MAP CONTAINER</Text>
      </Card>
      <View style={styles.infoCardsContainer}>
        <Card style={styles.plotInfoCardBody}>
          <Text style={styles.infoCardTitle}>Plot Info</Text>
          <View style={{marginTop: 12}}>
            <Text style={{fontSize: 15}}>Area Sown</Text>
            <Text style={styles.infoCardDetail}>{`${parseInt(plot.plot.size)} ${
              plot.plot.area_unit
            }`}</Text>
          </View>
          <View style={{marginTop: 12}}>
            <Text style={{fontSize: 15}}>Ownership Type</Text>
            <Text style={styles.infoCardDetail}>-</Text>
          </View>
          <View style={{marginTop: 12}}>
            <Text style={{fontSize: 15}}>Soil texture</Text>
            <Text style={styles.infoCardDetail}>{`${plot.plot.soil}`}</Text>
          </View>
        </Card>
        <Card style={styles.cropInfoCard}>
          <Text style={styles.infoCardTitle}>Crop Info</Text>
          <View style={{marginTop: 12}}>
            <Text style={{fontSize: 15}}>Season</Text>
            <Text style={styles.infoCardDetail}>
              {plot.cropIcon.season_user_input
                ? plot.cropIcon.season_user_input
                : '-'}
            </Text>
          </View>
          <View style={{marginTop: 12}}>
            <Text style={{fontSize: 15}}>Crop Stage</Text>
            <Text style={styles.infoCardDetail}>
              {plot.cropIcon.crop_stage ? plot.cropIcon.crop_stage : '-'}
            </Text>
          </View>
          {plot.cropIcon.crop_variety_type && (
            <View style={{marginTop: 12}}>
              <Text style={{fontSize: 15}}>
                {plot.cropIcon.crop_variety_type}
              </Text>
              <Text style={styles.infoCardDetail}>{`${plot.plot.soil}`}</Text>
            </View>
          )}
        </Card>
      </View>
      {/* <Card
        style={{
          margin: 10,
          backgroundColor: '#fff9c0',
          padding: 16,
        }}>
        <View style={{flexDirection: 'column', gap: 10}}>
          <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>
            Soil Health Info
          </Text>
          <Text style={{fontSize: 16, color: 'gray'}}>{`To schedule soil test tap on "Request test".You can also upload previous soil test report`}</Text>
          <View>

          </View>
        </View>
      </Card> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cropPlotCard: {
    flexDirection: 'column',
    padding: 16,
    gap: 12,
  },
  cropCardTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
  },
  cropImageWrapper: {
    height: 70,
    width: 70,
    backgroundColor: '#f1f4f4',
    borderRadius: 100,
    objectFit: 'cover',
  },
  cropTitle: {fontSize: 20, fontWeight: '500', color: 'black'},
  plotDetailsBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  infoCardsContainer: {
    height: 230,
    margin: 10,
    flexDirection: 'row',
    gap: 10,
    padding: 4,
  },
  plotInfoCardBody: {
    height: 'auto',
    flex: 1,
    flexDirection: 'column',
    gap: 12,
    padding: 12,
    backgroundColor: 'white',
  },
  infoCardTitle: {fontSize: 18, color: 'black', fontWeight: '500'},
  infoCardDetail: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  cropInfoCard: {
    height: 'auto',
    flex: 1,
    flexDirection: 'column',
    gap: 12,
    padding: 12,
    backgroundColor: '#e1ffe1',
  },
});

export default PlotCropInfo;
