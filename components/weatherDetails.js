import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
const weatherDetails = (props) => {
  const {
    main: { feels_like, humidity },
  } = props.currentWeather;
  return (
    <View style={style.details}>
      <View style={style.detailsRow}>
        <View style={style.detailsItem}>
          <FontAwesome5 name='temperature-low' size={40} color='white' />
          <View style={style.detailItemDetail}>
          <Text style={style.textSecondary}>{feels_like}</Text>
          <Text style={style.text}>Feels Like</Text>
          </View>    
        </View>
        <View style={style.detailItemNext}>
        <MaterialCommunityIcons name="water" size={40} color="white" />
          <View style={style.detailItemDetail}>
          <Text style={style.textSecondary}>{humidity}</Text>
          <Text style={style.text}>humidity</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  textPrimary: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  textSecondary: {
    color: 'white',
    fontSize: 30,
    margin: 5,
    textAlign: 'center',
  },
  text: {
    color: '#d8e2dc',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  details: {
    position: 'absolute',
    bottom: 10,
    padding: 3,
    width: Dimensions.get('window').width,
    borderWidth: 1,
    borderColor: '#a5a58d',
    borderRadius: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2,
  },
  detailItemNext: {
    borderLeftWidth: 1,
    borderColor: '#a5a58d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2,
  },
  detailItemDetail : {
      flexDirection : "column",
      alignItems : 'center',
      justifyContent : 'center'
  }
});

export default weatherDetails;
