import {StyleSheet} from 'react-native';

export const StageDetailsStyles = StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: 'white',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  stageImage: {
    height: 140,
    borderRadius: 10,
    objectFit: 'contain',
    backgroundColor: '#3cd93c2e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  stageDetails: {
    flexDirection: 'column',
    gap: 8,
  },
  stageTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginHorizontal: 12,
  },
  stageDescription: {
    fontSize: 16,
    color: 'gray',
    marginHorizontal: 12,
  },
  AgronomicalSection: {
    flexDirection: 'column',
    gap: 8,
    marginVertical: 16,
  },
  AgronomicalTitle: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
    marginHorizontal: 12,
  },
});
