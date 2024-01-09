import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeLine = ({
  dataList = [
    {
      content: (
        <View style={styles.timeContent}>
          <Text>{date}</Text>
          <Text>{process}</Text>
        </View>
      ),
      dotcolor: "#000",
      bordercolor: "#000",
    },
    {
      content: (
        <View style={styles.timeContent}>
          <Text>{date}</Text>
          <Text>{process}</Text>
        </View>
      ),
      dotcolor: "red",
      bordercolor: "red",
    },
  ],
}) => {
  return (
    <>
      {dataList?.map((x, index) => (
        <View key={index} style={[styles.lineItem, { borderColor: x.bordercolor }]}>
          <View style={[styles.dot, { backgroundColor: x.dotcolor }]} />
          {x.content}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  timeContent: {
    // Your styles for time content here
  },
  lineItem: {
    position: 'relative',
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    paddingLeft: 10,
    marginLeft: 16,
  },
  dot: {
    position: 'absolute',
    left: -8,
    top: 9,
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});

export default TimeLine;
