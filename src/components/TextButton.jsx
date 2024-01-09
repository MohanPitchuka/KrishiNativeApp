import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TextButton = ({btnText, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.textButtonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{btnText}</Text>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
    marginRight: 20,
    gap: 10,
  },
  buttonText: {color: '#327242', fontWeight: '500', fontSize: 16},
});

export default TextButton;
