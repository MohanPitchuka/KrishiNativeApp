import React from 'react';
import {Card} from 'react-native-paper';
import HTMLView from 'react-native-htmlview';
import {StyleSheet} from 'react-native';

const CustomWebView = ({htmlContent}) => {
  return <HTMLView value={htmlContent} stylesheet={webViewStyle} />;
};

const webViewStyle = StyleSheet.create({
  strong: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  p: {
    color: 'black',
    fontSize: 16,
  },
  ul: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 8,
    marginVertical: 0,
  },
  h4: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: -10,
  },
});

export default CustomWebView;
