import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const BasicButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: '5%',
    width: '81%',
    backgroundColor: '#5782F1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    marginVertical: '5%'
  },
  buttonText: {
    fontFamily: 'Pretendard-Bold',
    color: '#ffffff',
    fontSize: 18,
  },
});

export default BasicButton;