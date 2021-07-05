import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const refreshIcon = (props) => {
    const {load} = props
  return (
    <View>
      <Foundation
        name='refresh'
        size={40}
        color='white'
        style={style.refresh}
        onPress={() => load()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  refresh: {
    position: 'absolute',
    bottom: 110,
    right: 20,
  },
});

export default refreshIcon;
