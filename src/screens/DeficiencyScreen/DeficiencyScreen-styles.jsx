import { StyleSheet } from "react-native";

export const DeficiencyScreenStyles = StyleSheet.create({
    stageImage: {
      height: 250,
      borderRadius: 10,
      backgroundColor: 'black', //'#3cd93c2e',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.16,
      shadowRadius: 4,
      // elevation: 2,
      paddingVertical: 4,
      marginHorizontal: 12,
      marginVertical: 16,
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
    detailCard: {padding: 16, borderRadius: 0, backgroundColor: 'white'},
  });