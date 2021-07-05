import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Units from './unitPicker'

const weatherInfo = (props) => {
  let {
    currentWeather: {
      main: { temp },
      weather: [details],
      name,
    },
    unit,
    setSystem,
    unitSystem
  } = props;

  let { icon, main, description } = details;
  let iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View>
      <View  style={style.temperature}>
        <Text style={style.textPrimary}>
          {temp}°  {unit}
        </Text >
        <Units setSystem={setSystem} unitSystem={unitSystem}/>
      </View>
      <View style={style.info}>
        <Text style={style.text}>In {name}</Text>
        <Image style={style.icon} source={{ uri: iconUrl }} />
        <Text style={style.textSecondary}>{main}</Text>
        <Text style={style.text}>{description}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  info: {
    alignItems: 'center',
  },
  temperature : {
      flexDirection : 'row',
      justifyContent: 'center'
  },
  icon: {
    width: 120,
    height: 120,
  },
  textPrimary: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  textSecondary: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    color: '#d8e2dc',
    fontSize: 20,
    textAlign: 'center',
    textTransform : 'capitalize'
  },
});

export default weatherInfo;
