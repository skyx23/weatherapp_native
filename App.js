import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import Info from './components/weatherInfo'
import Refresh from './components/refreshIcon'
import Details from './components/weatherDetails'

const API_KEY = 'e1d584bcb3d77c9fcad6305705d5d851';
const base_api_url = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setweather] = useState(null);
  const [unitSystem, setSystem] = useState('metric');
  const [unit,setUnit] = useState('C')
  const load = async () => {
    setweather(null)
    setErrorMessage(null)
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Location access denied by user');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync();
      let { longitude, latitude, speed } = currentLocation.coords;
      let response = await fetch(
        `${base_api_url}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unitSystem}`
      );
      let weather = await response.json();

      if (response.ok) {
        setweather(weather);
      } else {
        setErrorMessage(response.message);
      }
      if (unitSystem === 'metric') setUnit('C')
      else if (unitSystem === 'imperial') setUnit('F')
      else if (unitSystem === 'standard') setUnit('K')
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  useEffect(() => {
    load();
  }, [unitSystem]);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar animated={true}  />
        <View style={styles.title}>
          <Text style={styles.textSecondary}>Today's Weather</Text>
        </View>
        <Refresh load={load}/>
        <Info currentWeather={currentWeather} unit={unit} setSystem={setSystem} unitSystem={unitSystem} />
        <Details currentWeather={currentWeather}/>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <StatusBar style='light-content' />
        <View style={styles.title}>
          <Text style={styles.textSecondary}>Error</Text>
        </View>
        <Text style={styles.textPrimary}>{errorMessage}</Text>
        <Refresh load={load}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='light-content' />
        <ActivityIndicator size='large' color='white'></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b705c', 
    justifyContent: 'center',
  },
  textPrimary: {
    color: 'white',
    fontWeight: 'bold',
    margin : 10,
    fontSize: 50,
    textAlign: 'center',
  },
  textSecondary: {
    color: 'white',
    fontSize: 30,
  },
  text: {
    color: '#d8e2dc',
    fontSize: 20,
    textAlign: 'center',
  },
  title : {
    position: 'absolute',
    top : 80,
    left : 15
  }
});
